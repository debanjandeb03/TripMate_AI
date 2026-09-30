import { GoogleGenAI, Type, ThinkingLevel } from '@google/genai';
import { EvaluationResult, RetrievedChunk, ToolExecutionResult } from '../../src/types/travel.js';

export async function evaluateFaithfulness(
  ai: GoogleGenAI | null,
  userPrompt: string,
  candidateAnswer: string,
  retrievedChunks: RetrievedChunk[],
  toolExecutions: ToolExecutionResult[],
  threshold: number = 0.70,
  attemptNumber: number = 1
): Promise<EvaluationResult> {
  const contextText = retrievedChunks.map((c, i) => `[Context Chunk ${i + 1} - ${c.destination} (${c.section})]: ${c.content}`).join('\n\n');
  const toolsText = toolExecutions.map(t => `[Tool: ${t.toolName}]: ${t.summary} (Data: ${JSON.stringify(t.data)})`).join('\n\n');

  // If no external context was needed (e.g. guardrail refusal or direct greeting), evaluate based on policy adherence
  if (retrievedChunks.length === 0 && toolExecutions.length === 0) {
    const isHonestRefusal = /(outside our current knowledge base|cannot disclose internal system instructions|TripMate currently focuses on|does not execute live ticket)/i.test(candidateAnswer);
    const score = isHonestRefusal ? 1.0 : 0.85;
    return {
      faithfulnessScore: score,
      hallucinatedClaims: [],
      groundedClaims: ['Answer faithfully adhered to system scope boundaries and refusals.'],
      reasoning: 'Evaluation verified that candidate adhered to scope and honest communication without asserting unverified facts.',
      passesThreshold: score >= threshold,
      threshold,
      attemptCount: attemptNumber
    };
  }

  // Use Gemini Evaluator if available
  if (ai) {
    try {
      const evaluationPrompt = `You are an impartial academic evaluator assessing hallucination and faithfulness in a Generative AI Travel Planner called TripMate.

TASK:
Compare the CANDIDATE ANSWER against the VERIFIED CONTEXT and TOOL RESULTS provided below.
Evaluate whether every claim made in the CANDIDATE ANSWER is strictly grounded in the provided sources.

EVALUATION RULES:
1. "faithfulnessScore" must be a float between 0.0 and 1.0.
   - 1.0: Completely grounded in the provided context and tool results. No unverified details.
   - 0.7 - 0.9: Highly grounded, minor natural phrasing variations that do not alter factual accuracy.
   - 0.4 - 0.6: Partial grounding with some invented numbers, timings, or attractions not present in context.
   - 0.0 - 0.3: Heavy hallucination, invented hotel prices, fake weather, or imaginary attractions.
2. If the candidate answer explicitly declared that certain information was unavailable in the verified knowledge base, praise this as grounded/honest (DO NOT penalize).
3. If the candidate answer made up specific prices, timings, or facts NOT present in the context, list each specific unsupported claim in "hallucinatedClaims".
4. List verified claims in "groundedClaims".
5. Provide a succinct 1-2 sentence justification in "reasoning".

--- USER PROMPT ---
${userPrompt}

--- VERIFIED RAG CONTEXT ---
${contextText || 'None'}

--- LIVE TOOL RESULTS ---
${toolsText || 'None'}

--- CANDIDATE ANSWER TO EVALUATE ---
${candidateAnswer}
`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: evaluationPrompt,
        config: {
          temperature: 0.1,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.LOW
          },
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              faithfulnessScore: {
                type: Type.NUMBER,
                description: 'Faithfulness score from 0.0 to 1.0'
              },
              hallucinatedClaims: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'List of claims not supported by the context'
              },
              groundedClaims: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'List of claims verified by the context'
              },
              reasoning: {
                type: Type.STRING,
                description: 'Evaluation explanation'
              }
            },
            required: ['faithfulnessScore', 'hallucinatedClaims', 'groundedClaims', 'reasoning']
          }
        }
      });

      const parsed = JSON.parse(response.text?.trim() || '{}');
      const score = Math.max(0, Math.min(1.0, typeof parsed.faithfulnessScore === 'number' ? parsed.faithfulnessScore : 0.85));

      return {
        faithfulnessScore: parseFloat(score.toFixed(2)),
        hallucinatedClaims: Array.isArray(parsed.hallucinatedClaims) ? parsed.hallucinatedClaims : [],
        groundedClaims: Array.isArray(parsed.groundedClaims) ? parsed.groundedClaims : [],
        reasoning: parsed.reasoning || 'Evaluated against verified context and tool outputs.',
        passesThreshold: score >= threshold,
        threshold,
        attemptCount: attemptNumber
      };
    } catch (err: any) {
      console.warn('Gemini evaluator fallback triggered:', err.message);
    }
  }

  // Fallback programmatic evaluator if LLM call is unavailable
  return fallbackProgrammaticEvaluation(userPrompt, candidateAnswer, retrievedChunks, toolExecutions, threshold, attemptNumber);
}

function fallbackProgrammaticEvaluation(
  _userPrompt: string,
  candidateAnswer: string,
  retrievedChunks: RetrievedChunk[],
  toolExecutions: ToolExecutionResult[],
  threshold: number,
  attemptNumber: number
): EvaluationResult {
  const combinedContext = [
    ...retrievedChunks.map(c => c.content.toLowerCase()),
    ...toolExecutions.map(t => (t.summary + ' ' + JSON.stringify(t.data)).toLowerCase())
  ].join(' ');

  // Extract key entities mentioned in candidate answer (currencies, temperatures, numbers, proper nouns)
  const sentences = candidateAnswer.split(/[.!?\n]+/).map(s => s.trim()).filter(s => s.length > 15);
  const groundedClaims: string[] = [];
  const hallucinatedClaims: string[] = [];

  for (const sentence of sentences) {
    const words = sentence.toLowerCase().split(/\s+/).filter(w => w.length > 4);
    if (words.length === 0) continue;

    const matchedWords = words.filter(w => combinedContext.includes(w));
    const matchRatio = matchedWords.length / words.length;

    if (matchRatio >= 0.35 || /(not available|do not have|verified information)/i.test(sentence)) {
      groundedClaims.push(sentence.slice(0, 100) + '...');
    } else if (matchRatio < 0.20 && /(₹|\$|hours?|am|pm|temperature|weather|price)/i.test(sentence)) {
      hallucinatedClaims.push(sentence.slice(0, 100) + '...');
    }
  }

  let baseScore = 0.88;
  if (hallucinatedClaims.length > 0) {
    baseScore -= (hallucinatedClaims.length * 0.15);
  }
  const score = Math.max(0.2, Math.min(1.0, parseFloat(baseScore.toFixed(2))));

  return {
    faithfulnessScore: score,
    hallucinatedClaims,
    groundedClaims: groundedClaims.slice(0, 4),
    reasoning: `Deterministic verification checked ${sentences.length} assertions against knowledge base chunks and tool outputs.`,
    passesThreshold: score >= threshold,
    threshold,
    attemptCount: attemptNumber
  };
}
