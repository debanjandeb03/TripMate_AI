import { AgentRoute, RoutingDecision } from '../../src/types/travel.js';
import { checkGuardrails } from './guardrails.js';
import { ragService } from '../services/ragService.js';
import { DESTINATIONS_DATA } from '../data/destinations.js';

export function routeRequest(
  prompt: string,
  activeDestination?: string | null,
  conversationHistoryLength: number = 0
): RoutingDecision {
  const trimmed = prompt.trim();
  const lower = trimmed.toLowerCase();

  // 1. Guardrail Check
  const guardrail = checkGuardrails(trimmed, activeDestination);
  if (guardrail.triggered) {
    if (guardrail.type === 'INJECTION') {
      return {
        route: 'GUARDRAIL_TRIGGER',
        reasoning: guardrail.reason || 'Prompt injection / security policy violation detected.',
        detectedDestination: null,
        detectedIntent: 'SECURITY_VIOLATION',
        toolsRequired: [],
        budgetConstraint: null,
        durationDays: null
      };
    }
    if (guardrail.type === 'UNSUPPORTED_DESTINATION' || guardrail.type === 'OUT_OF_SCOPE' || guardrail.type === 'BOOKING_ATTEMPT') {
      return {
        route: 'OUT_OF_SCOPE',
        reasoning: guardrail.reason || 'Request is outside supported travel planning domain or destination list.',
        detectedDestination: null,
        detectedIntent: 'OUT_OF_SCOPE_REQUEST',
        toolsRequired: [],
        budgetConstraint: null,
        durationDays: null
      };
    }
  }

  // 2. Currency Conversion Intent
  const currencyMatch = lower.match(/(convert|exchange|rate|how much is)\s+([₹$€£]?\s*[\d,]+(?:\.\d+)?)\s*([a-zA-Z₹$€£]{1,4})?\s*(?:to|in|into)\s*([a-zA-Z₹$€£]{1,4})/i)
    || lower.match(/([₹$€£]?\s*[\d,]+(?:\.\d+)?)\s*(inr|usd|eur|gbp|aud|cad|jpy|sgd|rupees?|dollars?)\s*(?:to|in|into)\s*(inr|usd|eur|gbp|aud|cad|jpy|sgd|rupees?|dollars?)/i);

  if (currencyMatch || /currency|exchange rate|convert.*to (usd|eur|inr|gbp)/i.test(lower)) {
    return {
      route: 'CURRENCY',
      reasoning: 'User requested live currency exchange calculation between financial denominations.',
      detectedDestination: activeDestination || null,
      detectedIntent: 'CURRENCY_CONVERSION',
      toolsRequired: ['currency'],
      budgetConstraint: null,
      durationDays: null
    };
  }

  // 3. Resolve Destination Mentioned in Prompt vs Memory
  let detectedDest = ragService.detectDestination(trimmed);
  let isMemoryFollowUp = false;

  // Check for coreferences like "there", "the place", "that destination", "that city"
  const hasCoreference = /\b(there|that place|that city|this destination|the trip|same place|here)\b/i.test(lower);
  const isImplicitFollowUp = /^(how many days|what should i pack|what to pack|is it safe|what about the food|when should i go|how to reach)\b/i.test(lower);

  if (!detectedDest && activeDestination && (hasCoreference || isImplicitFollowUp || conversationHistoryLength > 0)) {
    const memoryDest = DESTINATIONS_DATA.find(d => d.id === activeDestination || d.name.toLowerCase() === activeDestination.toLowerCase());
    if (memoryDest) {
      detectedDest = memoryDest;
      isMemoryFollowUp = true;
    }
  }

  // 4. Weather Intent
  const weatherKeywords = /\b(weather|temperature|forecast|rain|raining|climate right now|how cold|how hot)\b/i;
  if (weatherKeywords.test(lower)) {
    return {
      route: 'WEATHER',
      reasoning: `User requested real-time meteorological conditions for ${detectedDest ? detectedDest.name : (activeDestination || 'the target location')}.`,
      detectedDestination: detectedDest ? detectedDest.name : (activeDestination || null),
      detectedIntent: 'WEATHER_QUERY',
      toolsRequired: ['weather'],
      budgetConstraint: null,
      durationDays: null
    };
  }

  // 5. Itinerary & Planner Intent
  // e.g. "Plan a 3-day trip to Goa under ₹15,000", "Itinerary for Manali", "3 days in Jaipur"
  const isPlannerIntent = /\b(plan|itinerary|day-by-day|schedule|trip plan|tour plan|days in|day trip)\b/i.test(lower);
  
  // Extract duration days
  let durationDays: number | null = null;
  const daysMatch = lower.match(/(\d+)\s*(?:-| )?days?/i);
  if (daysMatch) {
    durationDays = parseInt(daysMatch[1], 10);
  }

  // Extract budget constraint
  let budgetConstraint: { amount: number; currency: string } | null = null;
  const budgetMatch = lower.match(/(?:under|budget|within|max|costing|for)\s*(?:of\s*)?([₹$€£])?\s*([\d,]+(?:\.\d+)?)\s*(k|thousand|inr|rs|rupees)?/i);
  if (budgetMatch) {
    let rawNum = parseFloat(budgetMatch[2].replace(/,/g, ''));
    if (budgetMatch[3] && (budgetMatch[3].toLowerCase() === 'k' || budgetMatch[3].toLowerCase() === 'thousand')) {
      rawNum *= 1000;
    }
    budgetConstraint = {
      amount: rawNum,
      currency: 'INR'
    };
  }

  if (isPlannerIntent || (detectedDest && durationDays !== null) || (budgetConstraint !== null && detectedDest)) {
    return {
      route: 'PLANNER',
      reasoning: `User requested a structured travel plan for ${detectedDest ? detectedDest.name : 'the destination'} with duration (${durationDays ?? '3'} days) and budget parameters.`,
      detectedDestination: detectedDest ? detectedDest.name : (activeDestination || null),
      detectedIntent: 'ITINERARY_PLANNING',
      toolsRequired: ['rag_knowledge_base', 'datetime'],
      budgetConstraint,
      durationDays: durationDays || 3
    };
  }

  // 6. Memory Follow-up (e.g. "How many days should I stay there?", "What about local transport?")
  if (isMemoryFollowUp && detectedDest) {
    return {
      route: 'MEMORY_FOLLOWUP',
      reasoning: `Follow-up question referring to previous session destination (${detectedDest.name}). Context successfully resolved.`,
      detectedDestination: detectedDest.name,
      detectedIntent: 'MEMORY_FOLLOWUP_QUERY',
      toolsRequired: ['rag_knowledge_base'],
      budgetConstraint: null,
      durationDays: null
    };
  }

  // 7. Destination Knowledge Base Query
  if (detectedDest) {
    return {
      route: 'KNOWLEDGE_BASE',
      reasoning: `User inquired about ${detectedDest.name} (attractions, season, food, budget or guidelines). Routing to RAG engine.`,
      detectedDestination: detectedDest.name,
      detectedIntent: 'DESTINATION_KNOWLEDGE_QUERY',
      toolsRequired: ['rag_knowledge_base'],
      budgetConstraint,
      durationDays
    };
  }

  // 8. General Travel Greeting / Direct Response
  const greetingMatch = /^(hi|hello|hey|namaste|greetings|help|who are you|what can you do|what destinations)\b/i.test(lower);
  if (greetingMatch || lower.length < 15) {
    return {
      route: 'DIRECT_RESPONSE',
      reasoning: 'General greeting or orientation request within system domain.',
      detectedDestination: null,
      detectedIntent: 'GENERAL_GREETING',
      toolsRequired: [],
      budgetConstraint: null,
      durationDays: null
    };
  }

  // Fallback: If no destination recognized and not a standard question, check if it seems like an unsupported destination inquiry
  return {
    route: 'OUT_OF_SCOPE',
    reasoning: 'No supported Indian destination recognized in the query or session memory.',
    detectedDestination: null,
    detectedIntent: 'UNSUPPORTED_OR_AMBIGUOUS_DESTINATION',
    toolsRequired: [],
    budgetConstraint: null,
    durationDays: null
  };
}
