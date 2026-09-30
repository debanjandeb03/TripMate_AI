import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Sparkles,
  RotateCcw,
  Compass,
  Sliders,
  CloudSun,
  Coins,
  ShieldCheck,
  Bot,
  MapPin,
  CheckCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { ChatMessage, DestinationGuide } from '../types/travel.js';
import { MessageItem } from './MessageItem.js';

interface ChatViewProps {
  messages: ChatMessage[];
  onSendMessage: (prompt: string) => Promise<void>;
  isLoading: boolean;
  activeDestination: string | null;
  onClearSession: () => void;
  evaluationThreshold: number;
  setEvaluationThreshold: (val: number) => void;
  destinations: DestinationGuide[];
  onSelectDestination: (destName: string) => void;
}

const EXAMPLE_PROMPTS = [
  {
    title: 'Budget Itinerary',
    prompt: 'Plan a 3-day trip to Goa under ₹15,000',
    icon: Compass,
    badge: 'Planner + RAG'
  },
  {
    title: 'Best Season & Climate',
    prompt: 'Best time to visit Manali and what are the major attractions?',
    icon: CloudSun,
    badge: 'Knowledge Base'
  },
  {
    title: 'Travel Packing & Tips',
    prompt: 'What should I pack for Darjeeling and what are key safety tips?',
    icon: HelpCircle,
    badge: 'Safety Guide'
  },
  {
    title: 'Live Real-time Weather',
    prompt: 'What is the current weather in Kerala Backwaters?',
    icon: CloudSun,
    badge: 'Open-Meteo API'
  },
  {
    title: 'Live Currency Conversion',
    prompt: 'Convert ₹20,000 to USD',
    icon: Coins,
    badge: 'Frankfurter API'
  },
  {
    title: 'Contextual Follow-up',
    prompt: 'How many days should I stay there?',
    icon: RotateCcw,
    badge: 'Session Memory'
  }
];

export const ChatView: React.FC<ChatViewProps> = ({
  messages,
  onSendMessage,
  isLoading,
  activeDestination,
  onClearSession,
  evaluationThreshold,
  setEvaluationThreshold,
  destinations,
  onSelectDestination
}) => {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;
    const text = inputText.trim();
    setInputText('');
    onSendMessage(text);
  };

  const handlePromptClick = (prompt: string) => {
    if (isLoading) return;
    onSendMessage(prompt);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Sidebar: Controls & Quick Shortcuts */}
        <aside className="lg:col-span-1 space-y-5">
          {/* Active Memory Context Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Session Context
              </span>
              <button
                onClick={onClearSession}
                className="text-xs font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1 transition-colors"
                title="Reset conversation memory"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
                <div className="truncate">
                  <span className="text-[10px] text-slate-400 block font-medium">ACTIVE DESTINATION</span>
                  <span className="text-sm font-bold text-slate-800">
                    {activeDestination || 'No destination set yet'}
                  </span>
                </div>
              </div>
              {activeDestination && (
                <p className="text-[11px] text-slate-500 mt-1.5 leading-snug">
                  Follow-ups like &quot;How many days should I stay there?&quot; will automatically resolve to {activeDestination}.
                </p>
              )}
            </div>

            {/* Threshold Slider */}
            <div className="mt-4 pt-3 border-t border-slate-200">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-indigo-600" />
                  Self-Eval Threshold
                </span>
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                  {(evaluationThreshold * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="0.50"
                max="0.90"
                step="0.05"
                value={evaluationThreshold}
                onChange={e => setEvaluationThreshold(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <p className="text-[10px] text-slate-400 mt-1 leading-normal">
                Answers with faithfulness score below this threshold trigger an automatic corrective retry (up to 2 retries).
              </p>
            </div>
          </div>

          {/* Supported Destinations Quick Select */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
              12 Supported Destinations
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
              {destinations.map(d => (
                <button
                  key={d.id}
                  onClick={() => onSelectDestination(d.name)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    activeDestination?.toLowerCase() === d.name.toLowerCase()
                      ? 'bg-indigo-600 text-white font-bold shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700'
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          {/* Example Prompts Panel */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
              Example Research Queries
            </span>
            <div className="space-y-2">
              {EXAMPLE_PROMPTS.map((ex, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePromptClick(ex.prompt)}
                  disabled={isLoading}
                  className="w-full text-left p-2.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all text-xs group"
                >
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
                    <span className="group-hover:text-indigo-600 transition-colors">{ex.title}</span>
                    <span className="bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-mono text-[9px]">
                      {ex.badge}
                    </span>
                  </div>
                  <p className="text-slate-700 font-medium line-clamp-2 leading-snug">
                    &quot;{ex.prompt}&quot;
                  </p>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Chat Interface */}
        <main className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col h-[750px]">
          {/* Chat Header */}
          <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50/70 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800">TripMate Agent Active</span>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">• Local RAG + Open-Meteo + Frankfurter</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                {messages.length} {messages.length === 1 ? 'Turn' : 'Turns'}
              </span>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-4 max-w-lg mx-auto py-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-indigo-100 mb-4">
                  <Compass className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                  Welcome to TripMate
                </h2>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  A genuinely grounded Agentic AI Travel Planner designed for first-time travellers, students, and families exploring India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full text-left">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <span className="font-bold text-indigo-700 block mb-0.5">📚 Verified Local RAG</span>
                    <span className="text-slate-600">Controlled knowledge base covering 12 Indian destinations.</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <span className="font-bold text-sky-700 block mb-0.5">🌦️ Live Tools</span>
                    <span className="text-slate-600">Live weather from Open-Meteo and exchange rates from Frankfurter.</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <span className="font-bold text-emerald-700 block mb-0.5">🛡️ Anti-Hallucination</span>
                    <span className="text-slate-600">Automated self-evaluation audit with corrective retry loop.</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <span className="font-bold text-purple-700 block mb-0.5">🧠 Session Memory</span>
                    <span className="text-slate-600">Coreference resolution for context-aware follow-ups.</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-6 font-medium">
                  Try asking one of the example queries from the sidebar or type a custom itinerary request below!
                </p>
              </div>
            ) : (
              messages.map(msg => <MessageItem key={msg.id} message={msg} />)
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-3 my-4 animate-pulse">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md text-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    Agent Reasoning & Pipeline Execution...
                  </div>
                  <p className="text-slate-500 leading-relaxed">
                    Classifying intent, querying local RAG chunks, calling live tool APIs, and checking answer faithfulness...
                  </p>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full w-2/3 animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <div className="p-4 border-t border-slate-200 bg-white rounded-b-2xl">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Ask TripMate (e.g., 'Plan a 3-day trip to Jaipur under ₹15,000' or 'Weather in Goa')..."
                disabled={isLoading}
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-sm shrink-0"
              >
                <span>Send</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
              <span>TripMate v1.0 • Capstone Evaluator</span>
              <span>All metrics & tool results verified in real-time</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
