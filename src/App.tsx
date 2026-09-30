import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.js';
import { ChatView } from './components/ChatView.js';
import { DestinationsView } from './components/DestinationsView.js';
import { ArchitectureView } from './components/ArchitectureView.js';
import { BenchmarkView } from './components/BenchmarkView.js';
import { ChatMessage, DestinationGuide, TestCase, TripMateResponse } from './types/travel.js';

export default function App() {
  const [activeTab, setActiveTab] = useState<'chat' | 'destinations' | 'architecture' | 'benchmarks'>('chat');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeDestination, setActiveDestination] = useState<string | null>(null);
  const [evaluationThreshold, setEvaluationThreshold] = useState<number>(0.70);
  const [destinations, setDestinations] = useState<DestinationGuide[]>([]);
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [conversationId, setConversationId] = useState<string>(() => `session-${Date.now()}`);

  // Fetch initial knowledge base destinations and test cases
  useEffect(() => {
    async function loadInitialData() {
      try {
        const [destRes, testRes] = await Promise.all([
          fetch('/api/destinations'),
          fetch('/api/test/cases')
        ]);
        if (destRes.ok) {
          const destData = await destRes.json();
          setDestinations(destData.destinations || []);
        }
        if (testRes.ok) {
          const testData = await testRes.json();
          setTestCases(testData.testCases || []);
        }
      } catch (err) {
        console.warn('Initial data load error:', err);
      }
    }
    loadInitialData();
  }, []);

  const handleSendMessage = async (prompt: string) => {
    if (!prompt.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: prompt,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          conversationId,
          evaluationThreshold
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data: TripMateResponse = await response.json();

      const assistantMessage: ChatMessage = {
        id: data.messageId,
        role: 'assistant',
        content: data.answer,
        timestamp: data.timestamp,
        responseMetadata: data
      };

      setMessages(prev => [...prev, assistantMessage]);

      if (data.activeDestination) {
        setActiveDestination(data.activeDestination);
      }
    } catch (err: any) {
      console.error('Chat submission error:', err);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: `Error: Unable to process request (${err.message}). Please check backend status and retry.`,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearSession = async () => {
    try {
      await fetch('/api/chat/clear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversationId })
      });
    } catch (e) {
      // ignore
    }
    setMessages([]);
    setActiveDestination(null);
    setConversationId(`session-${Date.now()}`);
  };

  const handleSelectDestinationForPlanning = (destName: string) => {
    setActiveTab('chat');
    setActiveDestination(destName);
    handleSendMessage(`Plan a 3-day trip to ${destName} with day-by-day activities and local food.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        destinationsCount={destinations.length}
      />

      <div className="flex-1">
        {activeTab === 'chat' && (
          <ChatView
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            activeDestination={activeDestination}
            onClearSession={handleClearSession}
            evaluationThreshold={evaluationThreshold}
            setEvaluationThreshold={setEvaluationThreshold}
            destinations={destinations}
            onSelectDestination={destName => {
              setActiveDestination(destName);
              handleSendMessage(`Tell me about ${destName}: best time to visit, major attractions, and typical daily budget.`);
            }}
          />
        )}

        {activeTab === 'destinations' && (
          <DestinationsView
            destinations={destinations}
            onSelectForPlanning={handleSelectDestinationForPlanning}
          />
        )}

        {activeTab === 'architecture' && (
          <ArchitectureView />
        )}

        {activeTab === 'benchmarks' && (
          <BenchmarkView
            testCases={testCases}
          />
        )}
      </div>

      {/* Academic Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-800">TripMate</span>
            <span>• An Agentic AI Travel Planner Capstone</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Grounding: Local RAG (12 Destinations)</span>
            <span>Tools: Open-Meteo & Frankfurter APIs</span>
            <span>Model: Gemini 3.8 Flash</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
