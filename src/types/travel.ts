export interface Attraction {
  name: string;
  category: string;
  description: string;
  timings: string;
  entryFee: string;
  tips: string;
}

export interface LocalFood {
  dish: string;
  type: 'veg' | 'non-veg' | 'both';
  description: string;
  mustTrySpot: string;
}

export interface DayPlan {
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  estimatedDayCost: string;
}

export interface Sample3DayItinerary {
  day1: DayPlan;
  day2: DayPlan;
  day3: DayPlan;
}

export interface BudgetTier {
  totalPerDay: string;
  stay: string;
  food: string;
  localTransport: string;
  activities: string;
}

export interface DailyBudgets {
  low: BudgetTier;
  medium: BudgetTier;
  high: BudgetTier;
}

export interface DestinationGuide {
  id: string;
  name: string;
  state: string;
  tagline: string;
  aliases: string[];
  coordinates: {
    lat: number;
    lon: number;
  };
  bestSeason: {
    months: string;
    description: string;
    peakSeason: string;
    monsoonSeason: string;
    summerSeason: string;
  };
  majorAttractions: Attraction[];
  localFood: LocalFood[];
  sample3DayItinerary: Sample3DayItinerary;
  dailyBudgets: DailyBudgets;
  safetyAndTravelTips: string[];
  howToReach: {
    byAir: string;
    byTrain: string;
    byRoad: string;
  };
  idealTripDuration: string;
}

export interface KnowledgeBaseChunk {
  id: string;
  destinationId: string;
  destinationName: string;
  section: 'overview' | 'attractions' | 'food' | 'itinerary' | 'budget' | 'bestSeason' | 'safetyAndTips' | 'transit';
  content: string;
  keywords: string[];
}

export type AgentRoute =
  | 'KNOWLEDGE_BASE'
  | 'PLANNER'
  | 'WEATHER'
  | 'CURRENCY'
  | 'MEMORY_FOLLOWUP'
  | 'DIRECT_RESPONSE'
  | 'OUT_OF_SCOPE'
  | 'GUARDRAIL_TRIGGER';

export interface RoutingDecision {
  route: AgentRoute;
  reasoning: string;
  detectedDestination: string | null;
  detectedIntent: string;
  toolsRequired: string[];
  budgetConstraint: {
    amount: number;
    currency: string;
  } | null;
  durationDays: number | null;
}

export interface ToolExecutionResult {
  toolName: 'weather' | 'currency' | 'datetime';
  status: 'success' | 'error' | 'skipped';
  inputs: Record<string, any>;
  data: any;
  summary: string;
  executionTimeMs: number;
}

export interface EvaluationResult {
  faithfulnessScore: number;
  hallucinatedClaims: string[];
  groundedClaims: string[];
  reasoning: string;
  passesThreshold: boolean;
  threshold: number;
  attemptCount: number;
}

export interface RetrievedChunk {
  id: string;
  destination: string;
  section: string;
  content: string;
  score: number;
}

export interface TripMateResponse {
  messageId: string;
  answer: string;
  routing: RoutingDecision;
  retrievedChunks: RetrievedChunk[];
  toolExecutions: ToolExecutionResult[];
  evaluation: EvaluationResult;
  conversationId: string;
  latencyMs: number;
  timestamp: string;
  activeDestination: string | null;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  responseMetadata?: TripMateResponse;
}

export interface TestCase {
  id: string;
  category: string;
  title: string;
  prompt: string;
  expectedRoute: AgentRoute;
  expectedTool: string | null;
  description: string;
  validationCheck: string;
}

export interface TestRunResult {
  testCaseId: string;
  prompt: string;
  expectedRoute: AgentRoute;
  actualRoute: AgentRoute;
  routeMatches: boolean;
  toolsUsed: string[];
  faithfulnessScore: number;
  passesEvaluation: boolean;
  latencyMs: number;
  status: 'passed' | 'failed';
  notes: string;
  response: TripMateResponse;
}
