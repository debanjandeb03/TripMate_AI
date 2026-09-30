import { DestinationGuide, KnowledgeBaseChunk, RetrievedChunk } from '../../src/types/travel.js';
import { DESTINATIONS_DATA } from '../data/destinations.js';

class RAGService {
  private chunks: KnowledgeBaseChunk[] = [];
  private destinations: Map<string, DestinationGuide> = new Map();

  constructor() {
    this.initializeKnowledgeBase();
  }

  private initializeKnowledgeBase(): void {
    this.chunks = [];
    this.destinations.clear();

    for (const dest of DESTINATIONS_DATA) {
      this.destinations.set(dest.id, dest);

      // 1. Overview Chunk
      this.chunks.push({
        id: `${dest.id}-overview`,
        destinationId: dest.id,
        destinationName: dest.name,
        section: 'overview',
        content: `Destination: ${dest.name}, ${dest.state}.
Tagline: ${dest.tagline}
Ideal Trip Duration: ${dest.idealTripDuration}.
How to Reach:
- By Air: ${dest.howToReach.byAir}
- By Train: ${dest.howToReach.byTrain}
- By Road: ${dest.howToReach.byRoad}`,
        keywords: [dest.name.toLowerCase(), dest.state.toLowerCase(), 'overview', 'reach', 'airport', 'train', 'flight', 'duration', ...dest.aliases]
      });

      // 2. Best Season Chunk
      this.chunks.push({
        id: `${dest.id}-season`,
        destinationId: dest.id,
        destinationName: dest.name,
        section: 'bestSeason',
        content: `Destination: ${dest.name} - Best Season & Climate:
Ideal Months: ${dest.bestSeason.months}.
Weather Overview: ${dest.bestSeason.description}
Peak Season: ${dest.bestSeason.peakSeason}
Monsoon Season: ${dest.bestSeason.monsoonSeason}
Summer Season: ${dest.bestSeason.summerSeason}`,
        keywords: [dest.name.toLowerCase(), 'season', 'weather', 'climate', 'best time', 'months', 'temperature', 'visit', 'when', 'monsoon', 'winter', 'summer']
      });

      // 3. Attractions Chunk
      const attractionsText = dest.majorAttractions.map(a => 
        `• ${a.name} (${a.category}): ${a.description}
  Timings: ${a.timings} | Entry Fee: ${a.entryFee} | Tips: ${a.tips}`
      ).join('\n\n');

      this.chunks.push({
        id: `${dest.id}-attractions`,
        destinationId: dest.id,
        destinationName: dest.name,
        section: 'attractions',
        content: `Destination: ${dest.name} - Major Attractions & Sightseeing:
${attractionsText}`,
        keywords: [
          dest.name.toLowerCase(), 'attractions', 'places to see', 'sightseeing', 'fort', 'temple', 'monument', 'beach', 'lake',
          ...dest.majorAttractions.map(a => a.name.toLowerCase())
        ]
      });

      // 4. Local Food Chunk
      const foodText = dest.localFood.map(f =>
        `• ${f.dish} (${f.type.toUpperCase()}): ${f.description} (Must try at: ${f.mustTrySpot})`
      ).join('\n');

      this.chunks.push({
        id: `${dest.id}-food`,
        destinationId: dest.id,
        destinationName: dest.name,
        section: 'food',
        content: `Destination: ${dest.name} - Local Food & Culinary Specialties:
${foodText}`,
        keywords: [dest.name.toLowerCase(), 'food', 'dishes', 'eat', 'cuisine', 'restaurants', 'thali', 'specialty', 'must try', 'veg', 'non-veg']
      });

      // 5. Itinerary Chunk
      this.chunks.push({
        id: `${dest.id}-itinerary`,
        destinationId: dest.id,
        destinationName: dest.name,
        section: 'itinerary',
        content: `Destination: ${dest.name} - Verified Sample 3-Day Itinerary:
Day 1: ${dest.sample3DayItinerary.day1.title}
- Morning: ${dest.sample3DayItinerary.day1.morning}
- Afternoon: ${dest.sample3DayItinerary.day1.afternoon}
- Evening: ${dest.sample3DayItinerary.day1.evening}
- Estimated Day 1 Cost: ${dest.sample3DayItinerary.day1.estimatedDayCost}

Day 2: ${dest.sample3DayItinerary.day2.title}
- Morning: ${dest.sample3DayItinerary.day2.morning}
- Afternoon: ${dest.sample3DayItinerary.day2.afternoon}
- Evening: ${dest.sample3DayItinerary.day2.evening}
- Estimated Day 2 Cost: ${dest.sample3DayItinerary.day2.estimatedDayCost}

Day 3: ${dest.sample3DayItinerary.day3.title}
- Morning: ${dest.sample3DayItinerary.day3.morning}
- Afternoon: ${dest.sample3DayItinerary.day3.afternoon}
- Evening: ${dest.sample3DayItinerary.day3.evening}
- Estimated Day 3 Cost: ${dest.sample3DayItinerary.day3.estimatedDayCost}`,
        keywords: [dest.name.toLowerCase(), 'itinerary', 'plan', 'day 1', 'day 2', 'day 3', '3-day', 'schedule', 'days', 'trip']
      });

      // 6. Budget Chunk
      this.chunks.push({
        id: `${dest.id}-budget`,
        destinationId: dest.id,
        destinationName: dest.name,
        section: 'budget',
        content: `Destination: ${dest.name} - Daily Budget Estimates:
1. Low / Backpacker Tier: ${dest.dailyBudgets.low.totalPerDay}
   - Stay: ${dest.dailyBudgets.low.stay}
   - Food: ${dest.dailyBudgets.low.food}
   - Transport: ${dest.dailyBudgets.low.localTransport}
   - Activities: ${dest.dailyBudgets.low.activities}

2. Medium / Comfort Tier: ${dest.dailyBudgets.medium.totalPerDay}
   - Stay: ${dest.dailyBudgets.medium.stay}
   - Food: ${dest.dailyBudgets.medium.food}
   - Transport: ${dest.dailyBudgets.medium.localTransport}
   - Activities: ${dest.dailyBudgets.medium.activities}

3. High / Luxury Tier: ${dest.dailyBudgets.high.totalPerDay}
   - Stay: ${dest.dailyBudgets.high.stay}
   - Food: ${dest.dailyBudgets.high.food}
   - Transport: ${dest.dailyBudgets.high.localTransport}
   - Activities: ${dest.dailyBudgets.high.activities}`,
        keywords: [dest.name.toLowerCase(), 'budget', 'cost', 'price', 'inr', 'rupees', '₹', 'expense', 'cheap', 'luxury', 'stay', 'hotel', 'per day']
      });

      // 7. Safety & Travel Tips Chunk
      this.chunks.push({
        id: `${dest.id}-safety`,
        destinationId: dest.id,
        destinationName: dest.name,
        section: 'safetyAndTips',
        content: `Destination: ${dest.name} - Safety Guidelines & Practical Travel Tips:
${dest.safetyAndTravelTips.map((tip, idx) => `${idx + 1}. ${tip}`).join('\n')}`,
        keywords: [dest.name.toLowerCase(), 'safety', 'tips', 'advice', 'precautions', 'guidelines', 'warning', 'pack', 'permit']
      });
    }
  }

  public detectDestination(text: string): DestinationGuide | null {
    const lower = text.toLowerCase();
    
    for (const dest of DESTINATIONS_DATA) {
      if (lower.includes(dest.name.toLowerCase())) {
        return dest;
      }
      for (const alias of dest.aliases) {
        // match word boundaries or simple substring for aliases >= 3 chars
        const regex = new RegExp(`\\b${alias}\\b`, 'i');
        if (regex.test(lower)) {
          return dest;
        }
      }
    }
    return null;
  }

  public getAllDestinations(): DestinationGuide[] {
    return DESTINATIONS_DATA;
  }

  public getDestinationById(id: string): DestinationGuide | null {
    return this.destinations.get(id) || null;
  }

  public retrieveRelevantChunks(
    query: string,
    forcedDestinationId?: string | null,
    limit: number = 4
  ): RetrievedChunk[] {
    const queryLower = query.toLowerCase();
    const queryTokens = queryLower
      .replace(/[^\w\s₹]/gi, ' ')
      .split(/\s+/)
      .filter(t => t.length > 2);

    let targetDest = forcedDestinationId 
      ? this.destinations.get(forcedDestinationId)
      : this.detectDestination(query);

    // Section relevance intent scoring
    const isBudgetQuery = /(budget|cost|price|rupee|inr|₹|cheap|afford|per day|allocation)/i.test(queryLower);
    const isItineraryQuery = /(plan|itinerary|day 1|day 2|day 3|days|trip|schedule)/i.test(queryLower);
    const isFoodQuery = /(food|eat|dish|cuisine|restaurant|thali|breakfast|lunch|dinner|taste)/i.test(queryLower);
    const isSeasonQuery = /(season|weather|when|best time|month|climate|monsoon|winter|summer)/i.test(queryLower);
    const isAttractionQuery = /(attraction|place|visit|see|monument|fort|temple|sightseeing)/i.test(queryLower);
    const isSafetyQuery = /(safety|tip|pack|scam|advice|warning|permit|clothing)/i.test(queryLower);

    const scoredChunks = this.chunks.map(chunk => {
      let score = 0;

      // Heavy boost if chunk matches detected destination
      if (targetDest && chunk.destinationId === targetDest.id) {
        score += 5.0;
      } else if (targetDest && chunk.destinationId !== targetDest.id) {
        // If query was clearly about a specific destination, downweight others
        score -= 10.0;
      }

      // Keyword & token matching
      for (const token of queryTokens) {
        if (chunk.keywords.some(k => k.includes(token))) {
          score += 1.5;
        }
        if (chunk.content.toLowerCase().includes(token)) {
          score += 0.8;
        }
      }

      // Intent-specific boost
      if (isBudgetQuery && chunk.section === 'budget') score += 4.0;
      if (isItineraryQuery && (chunk.section === 'itinerary' || chunk.section === 'attractions')) score += 3.5;
      if (isFoodQuery && chunk.section === 'food') score += 4.0;
      if (isSeasonQuery && chunk.section === 'bestSeason') score += 4.0;
      if (isAttractionQuery && chunk.section === 'attractions') score += 3.5;
      if (isSafetyQuery && chunk.section === 'safetyAndTips') score += 3.5;

      return {
        id: chunk.id,
        destination: chunk.destinationName,
        section: chunk.section,
        content: chunk.content,
        score: Math.max(0, parseFloat(score.toFixed(2)))
      };
    });

    // Filter positive scores and sort descending
    return scoredChunks
      .filter(c => c.score > 1.0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  public formatChunksForPrompt(chunks: RetrievedChunk[]): string {
    if (chunks.length === 0) {
      return 'NO_MATCHING_LOCAL_KNOWLEDGE_FOUND';
    }
    return chunks.map((c, i) => 
      `--- [SOURCE ${i + 1}: ${c.destination} - ${c.section.toUpperCase()}] --- (Relevance Score: ${c.score})\n${c.content}`
    ).join('\n\n');
  }
}

export const ragService = new RAGService();
