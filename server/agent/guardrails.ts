import { DESTINATIONS_DATA } from '../data/destinations.js';

export interface GuardrailCheckResult {
  triggered: boolean;
  type: 'INJECTION' | 'UNSUPPORTED_DESTINATION' | 'BOOKING_ATTEMPT' | 'OUT_OF_SCOPE' | 'EMPTY_INPUT' | null;
  safeResponse: string | null;
  reason: string | null;
}

const SUPPORTED_DESTINATION_NAMES = DESTINATIONS_DATA.map(d => d.name);

// Common foreign or unsupported domestic destinations to catch
const UNSUPPORTED_FAMOUS_DESTINATIONS = [
  'paris', 'london', 'new york', 'tokyo', 'dubai', 'singapore', 'bali', 'bangkok',
  'rome', 'switzerland', 'maldives', 'switzerland', 'sydney', 'barcelona', 'amsterdam',
  'mumbai', 'delhi', 'kolkata', 'chennai', 'hyderabad', 'bengaluru', 'bangalore', 'pune',
  'shimla', 'nainital', 'ooty', 'kodaikanal', 'munnar', 'coorg', 'mussoorie', 'shillong'
];

export function checkGuardrails(prompt: string, activeDestination?: string | null): GuardrailCheckResult {
  const trimmed = prompt.trim();
  if (!trimmed) {
    return {
      triggered: true,
      type: 'EMPTY_INPUT',
      safeResponse: 'Please provide a valid travel planning question or destination request.',
      reason: 'User input was empty or whitespace only.'
    };
  }

  const lower = trimmed.toLowerCase();

  // 1. Prompt Injection / Jailbreak / System Prompt Exfiltration Guardrail
  const injectionPatterns = [
    /ignore\s+(all\s+)?(previous|prior|above)\s+(instructions|prompts|rules)/i,
    /show\s+(me\s+)?(your\s+)?(system\s+prompt|developer\s+instructions|system\s+instructions|system\s+message)/i,
    /reveal\s+(your\s+)?(system\s+prompt|instructions|base\s+prompt)/i,
    /what\s+is\s+your\s+(system\s+prompt|hidden\s+instruction|system\s+message)/i,
    /print\s+(your\s+)?(system\s+prompt|system\s+instructions)/i,
    /disregard\s+(your\s+)?(rules|instructions)/i,
    /bypass\s+(all\s+)?(filters|guidelines|guardrails)/i,
    /you\s+are\s+now\s+(in\s+)?(dan\s+mode|developer\s+mode|unfiltered)/i,
    /repeat\s+(everything|the\s+words)\s+above/i
  ];

  for (const pattern of injectionPatterns) {
    if (pattern.test(lower)) {
      return {
        triggered: true,
        type: 'INJECTION',
        safeResponse: 'Security Guardrail Refusal: I cannot disclose internal system instructions or bypass travel-planning guidelines. I am TripMate, an AI Travel Planning Assistant designed solely to help plan trips across supported Indian destinations.',
        reason: 'Prompt injection or system prompt exfiltration attempt detected and neutralized.'
      };
    }
  }

  // 2. Direct Booking / Transaction Attempt Guardrail
  const bookingPatterns = [
    /book\s+(me\s+)?(a\s+)?(hotel|flight|room|tour|package|trip|train\s+ticket|cab|ticket)/i,
    /reserve\s+(a\s+)?(room|seat|flight|hotel|tour)/i,
    /buy\s+(me\s+)?(a\s+)?(flight|train\s+ticket|hotel\s+stay|ticket)/i,
    /purchase\s+(tickets?|hotel)/i,
    /charge\s+my\s+(card|credit\s+card)/i
  ];

  for (const pattern of bookingPatterns) {
    if (pattern.test(lower)) {
      return {
        triggered: true,
        type: 'BOOKING_ATTEMPT',
        safeResponse: `Scope Notice: TripMate is an informational travel planning assistant and does not execute live ticket or hotel bookings, payments, or reservations.

I can help you build the day-wise itinerary, calculate budget allocations, and suggest recommended stay areas for our 12 supported destinations (${SUPPORTED_DESTINATION_NAMES.join(', ')}). For bookings, please use official platforms such as IRCTC (rail), direct airline portals, MakeMyTrip, Booking.com, or official state tourism counters.`,
        reason: 'User requested commercial transaction/booking action which is intentionally outside system capabilities.'
      };
    }
  }

  // 3. Unsupported Destination Check
  // Check if an unsupported destination is explicitly requested while no supported destination is mentioned
  const supportedMatch = DESTINATIONS_DATA.some(d => 
    lower.includes(d.name.toLowerCase()) || d.aliases.some(a => lower.includes(a))
  );

  if (!supportedMatch) {
    for (const unsupported of UNSUPPORTED_FAMOUS_DESTINATIONS) {
      const regex = new RegExp(`\\b${unsupported}\\b`, 'i');
      if (regex.test(lower)) {
        return {
          triggered: true,
          type: 'UNSUPPORTED_DESTINATION',
          safeResponse: `Destination Scope Notice: TripMate currently focuses on our verified, curated knowledge base of 12 iconic Indian destinations. "${unsupported.charAt(0).toUpperCase() + unsupported.slice(1)}" is outside our current knowledge base.

Supported Destinations:
${SUPPORTED_DESTINATION_NAMES.map((name, i) => `${i + 1}. ${name}`).join('\n')}

Please select or ask about any of these 12 destinations for verified itineraries, local attractions, seasonal guides, and budget plans!`,
          reason: `Requested destination "${unsupported}" is outside the 12 verified destinations knowledge base.`
        };
      }
    }
  }

  // 4. Out-of-Scope Non-Travel Queries
  const nonTravelPatterns = [
    /write\s+(a\s+)?(python|javascript|typescript|c\+\+|java|rust|sql)\s+(code|program|script|function)/i,
    /solve\s+(this\s+)?(math|calculus|equation|physics\s+problem)/i,
    /write\s+(an\s+)?essay\s+on/i,
    /diagnose\s+(my\s+)?(symptom|illness|disease)/i
  ];

  for (const pattern of nonTravelPatterns) {
    if (pattern.test(lower)) {
      return {
        triggered: true,
        type: 'OUT_OF_SCOPE',
        safeResponse: 'Domain Notice: I am TripMate, an agentic AI travel planning assistant specialized in travel guidance, itineraries, local attractions, weather, and budget planning for our 12 Indian destinations. I cannot assist with non-travel topics like coding, homework, or general tasks.',
        reason: 'Query is entirely outside the travel planning domain.'
      };
    }
  }

  return {
    triggered: false,
    type: null,
    safeResponse: null,
    reason: null
  };
}
