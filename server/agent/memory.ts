export interface ConversationSession {
  id: string;
  activeDestination: string | null;
  history: Array<{ role: 'user' | 'assistant'; content: string; timestamp: string }>;
  lastIntent: string | null;
  budgetConstraint: { amount: number; currency: string } | null;
  createdAt: number;
  updatedAt: number;
}

class MemoryStore {
  private sessions: Map<string, ConversationSession> = new Map();

  public getSession(id: string): ConversationSession {
    let session = this.sessions.get(id);
    if (!session) {
      session = {
        id,
        activeDestination: null,
        history: [],
        lastIntent: null,
        budgetConstraint: null,
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      this.sessions.set(id, session);
    }
    return session;
  }

  public addTurn(
    sessionId: string,
    userText: string,
    assistantText: string,
    detectedDestination?: string | null,
    intent?: string | null,
    budget?: { amount: number; currency: string } | null
  ): ConversationSession {
    const session = this.getSession(sessionId);

    session.history.push({
      role: 'user',
      content: userText,
      timestamp: new Date().toISOString()
    });

    session.history.push({
      role: 'assistant',
      content: assistantText,
      timestamp: new Date().toISOString()
    });

    // Keep history manageable (last 10 turns)
    if (session.history.length > 20) {
      session.history = session.history.slice(-20);
    }

    if (detectedDestination) {
      session.activeDestination = detectedDestination;
    }

    if (intent) {
      session.lastIntent = intent;
    }

    if (budget) {
      session.budgetConstraint = budget;
    }

    session.updatedAt = Date.now();
    return session;
  }

  public clearSession(id: string): void {
    this.sessions.delete(id);
  }
}

export const memoryStore = new MemoryStore();
