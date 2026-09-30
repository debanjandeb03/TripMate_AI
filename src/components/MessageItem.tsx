import React, { useState } from 'react';
import {
  Compass,
  User,
  Clock,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Database,
  CloudSun,
  Coins,
  Cpu,
  AlertTriangle,
  Sparkles,
  Layers,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { ChatMessage, AgentRoute } from '../types/travel.js';

interface MessageItemProps {
  message: ChatMessage;
}

const ROUTE_BADGE_CONFIG: Record<AgentRoute, { label: string; color: string; bg: string; border: string }> = {
  KNOWLEDGE_BASE: {
    label: 'RAG Knowledge Base',
    color: 'text-indigo-700',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200'
  },
  PLANNER: {
    label: 'Planner + RAG Engine',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200'
  },
  WEATHER: {
    label: 'Open-Meteo Live Tool',
    color: 'text-sky-700',
    bg: 'bg-sky-50',
    border: 'border-sky-200'
  },
  CURRENCY: {
    label: 'Frankfurter Live Tool',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200'
  },
  MEMORY_FOLLOWUP: {
    label: 'Conversation Memory Follow-up',
    color: 'text-purple-700',
    bg: 'bg-purple-50',
    border: 'border-purple-200'
  },
  DIRECT_RESPONSE: {
    label: 'Direct Orientation',
    color: 'text-slate-700',
    bg: 'bg-slate-100',
    border: 'border-slate-300'
  },
  OUT_OF_SCOPE: {
    label: 'Scope Boundary Refusal',
    color: 'text-orange-700',
    bg: 'bg-orange-50',
    border: 'border-orange-200'
  },
  GUARDRAIL_TRIGGER: {
    label: 'Security Guardrail Refusal',
    color: 'text-rose-700',
    bg: 'bg-rose-50',
    border: 'border-rose-200'
  }
};

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const [activeInspectorTab, setActiveInspectorTab] = useState<'routing' | 'rag' | 'tools' | 'eval' | null>(null);

  if (message.role === 'user') {
    return (
      <div className="flex items-start justify-end gap-3 my-4">
        <div className="max-w-2xl bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm">
          <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">{message.content}</p>
          <span className="text-[10px] text-indigo-200 mt-1 block text-right">
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 shrink-0">
          <User className="w-4 h-4" />
        </div>
      </div>
    );
  }

  const meta = message.responseMetadata;
  const route = meta?.routing.route || 'DIRECT_RESPONSE';
  const badge = ROUTE_BADGE_CONFIG[route] || ROUTE_BADGE_CONFIG.DIRECT_RESPONSE;
  const faithScore = meta?.evaluation.faithfulnessScore ?? 1.0;
  const faithPassed = meta?.evaluation.passesThreshold ?? true;

  const toggleInspector = (tab: 'routing' | 'rag' | 'tools' | 'eval') => {
    setActiveInspectorTab(prev => (prev === tab ? null : tab));
  };

  return (
    <div className="flex items-start gap-3 my-5">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
        <Compass className="w-4 h-4" />
      </div>

      <div className="flex-1 max-w-3xl">
        {/* Assistant Header Badges */}
        {meta && (
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {/* Route Badge */}
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold border ${badge.bg} ${badge.color} ${badge.border}`}>
              <Cpu className="w-3.5 h-3.5" />
              {badge.label}
            </span>

            {/* Destination Tag */}
            {meta.routing.detectedDestination && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                <Compass className="w-3 h-3 text-slate-500" />
                {meta.routing.detectedDestination}
              </span>
            )}

            {/* Latency */}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200">
              <Clock className="w-3 h-3 text-slate-400" />
              {meta.latencyMs} ms
            </span>

            {/* Faithfulness Score Badge */}
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold border ${
                faithPassed
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-rose-50 text-rose-700 border-rose-200'
              }`}
              title={`Evaluator Faithfulness: ${(faithScore * 100).toFixed(0)}% (Threshold: ${((meta.evaluation.threshold || 0.7) * 100).toFixed(0)}%)`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Faithfulness: {(faithScore * 100).toFixed(0)}%
              {meta.evaluation.attemptCount > 1 && (
                <span className="text-[10px] bg-emerald-200 text-emerald-800 px-1 rounded ml-1">
                  Retry #{meta.evaluation.attemptCount}
                </span>
              )}
            </span>
          </div>
        )}

        {/* Message Content Body */}
        <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-4 text-slate-800 shadow-sm leading-relaxed prose prose-slate max-w-none text-sm">
          {message.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-base font-bold text-slate-900 mt-3 mb-1">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('#### ')) {
              return (
                <h4 key={idx} className="text-sm font-bold text-slate-800 mt-2 mb-1">
                  {paragraph.replace('#### ', '')}
                </h4>
              );
            }
            if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
              const items = paragraph.split('\n').filter(line => line.trim().length > 0);
              return (
                <ul key={idx} className="list-disc pl-5 my-2 space-y-1 text-slate-700">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item.replace(/^[-*]\s+/, '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="my-2 whitespace-pre-line">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Capstone Inspection Bar */}
        {meta && (
          <div className="mt-2 bg-slate-50 border border-slate-200/80 rounded-xl p-2 text-xs">
            <div className="flex flex-wrap items-center gap-1.5 font-medium text-slate-600">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                Inspection Panels:
              </span>

              {/* Button: Routing */}
              <button
                onClick={() => toggleInspector('routing')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors ${
                  activeInspectorTab === 'routing'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Cpu className="w-3 h-3" />
                Router ({meta.routing.route})
                {activeInspectorTab === 'routing' ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              </button>

              {/* Button: RAG Chunks */}
              <button
                onClick={() => toggleInspector('rag')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors ${
                  activeInspectorTab === 'rag'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Database className="w-3 h-3" />
                RAG Sources ({meta.retrievedChunks.length})
                {activeInspectorTab === 'rag' ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              </button>

              {/* Button: Tools */}
              {meta.toolExecutions.length > 0 && (
                <button
                  onClick={() => toggleInspector('tools')}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors ${
                    activeInspectorTab === 'tools'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {meta.toolExecutions[0].toolName === 'weather' ? <CloudSun className="w-3 h-3 text-sky-600" /> : <Coins className="w-3 h-3 text-amber-600" />}
                  Live Tools ({meta.toolExecutions.length})
                  {activeInspectorTab === 'tools' ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                </button>
              )}

              {/* Button: Self-Evaluation */}
              <button
                onClick={() => toggleInspector('eval')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors ${
                  activeInspectorTab === 'eval'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                Faithfulness ({(faithScore * 100).toFixed(0)}%)
                {activeInspectorTab === 'eval' ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              </button>
            </div>

            {/* Inspector Panel Drawer */}
            {activeInspectorTab && (
              <div className="mt-2.5 pt-2.5 border-t border-slate-200 bg-white rounded-lg p-3 text-xs shadow-inner">
                {/* 1. ROUTING INSPECTION */}
                {activeInspectorTab === 'routing' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">Agent Routing Decision</span>
                      <span className="text-[10px] text-slate-400 font-mono">Intent: {meta.routing.detectedIntent}</span>
                    </div>
                    <p className="text-slate-600">{meta.routing.reasoning}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-slate-400 block text-[9px]">ROUTE</span>
                        <span className="font-bold text-indigo-700">{meta.routing.route}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-slate-400 block text-[9px]">DESTINATION</span>
                        <span className="font-bold text-slate-700">{meta.routing.detectedDestination || 'None'}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-slate-400 block text-[9px]">DURATION</span>
                        <span className="font-bold text-slate-700">{meta.routing.durationDays ? `${meta.routing.durationDays} Days` : 'N/A'}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-slate-400 block text-[9px]">BUDGET LIMIT</span>
                        <span className="font-bold text-slate-700">
                          {meta.routing.budgetConstraint ? `${meta.routing.budgetConstraint.currency} ${meta.routing.budgetConstraint.amount}` : 'None'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. RAG CHUNKS INSPECTION */}
                {activeInspectorTab === 'rag' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">Retrieved Local Knowledge Chunks</span>
                      <span className="text-[10px] text-slate-500 font-medium">Top {meta.retrievedChunks.length} ranked segments</span>
                    </div>
                    {meta.retrievedChunks.length === 0 ? (
                      <p className="text-slate-500 italic">No destination chunks were retrieved (direct tool or safety response).</p>
                    ) : (
                      <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                        {meta.retrievedChunks.map((chunk, i) => (
                          <div key={chunk.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-slate-700">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-indigo-700 text-[11px]">
                                Source {i + 1}: {chunk.destination} • {chunk.section.toUpperCase()}
                              </span>
                              <span className="text-[10px] font-mono bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded font-bold">
                                Score: {chunk.score}
                              </span>
                            </div>
                            <p className="text-[11px] leading-relaxed whitespace-pre-line text-slate-600">{chunk.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 3. TOOLS EXECUTION INSPECTION */}
                {activeInspectorTab === 'tools' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">Live External Tool Execution Results</span>
                      <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Real API Data
                      </span>
                    </div>
                    {meta.toolExecutions.map((t, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-slate-800 capitalize flex items-center gap-1.5">
                            {t.toolName === 'weather' ? <CloudSun className="w-3.5 h-3.5 text-sky-600" /> : <Coins className="w-3.5 h-3.5 text-amber-600" />}
                            {t.toolName} Tool ({t.data?.provider || 'API Provider'})
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">{t.executionTimeMs} ms</span>
                        </div>
                        <p className="text-slate-700 text-[11px] font-medium mb-1.5">{t.summary}</p>
                        <details className="mt-1">
                          <summary className="cursor-pointer text-[10px] text-indigo-600 font-semibold hover:underline">
                            View Raw API Response JSON
                          </summary>
                          <pre className="mt-1 p-2 bg-slate-900 text-emerald-400 rounded text-[10px] font-mono overflow-x-auto max-h-36">
                            {JSON.stringify(t.data, null, 2)}
                          </pre>
                        </details>
                      </div>
                    ))}
                  </div>
                )}

                {/* 4. SELF-EVALUATION INSPECTION */}
                {activeInspectorTab === 'eval' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800">Self-Evaluation & Faithfulness Audit</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            faithPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {faithPassed ? 'VERIFIED GROUNDED' : 'BELOW THRESHOLD'}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">
                        Score: {(faithScore * 100).toFixed(0)}% (Min: {((meta.evaluation.threshold || 0.7) * 100).toFixed(0)}%)
                      </span>
                    </div>

                    <p className="text-slate-600 text-[11px]">{meta.evaluation.reasoning}</p>

                    {meta.evaluation.groundedClaims.length > 0 && (
                      <div>
                        <span className="font-bold text-[10px] text-emerald-700 uppercase tracking-wider block mb-1">
                          Verified Grounded Claims:
                        </span>
                        <ul className="space-y-0.5">
                          {meta.evaluation.groundedClaims.map((claim, ci) => (
                            <li key={ci} className="flex items-start gap-1 text-[11px] text-slate-700">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{claim}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {meta.evaluation.hallucinatedClaims.length > 0 && (
                      <div className="mt-1 p-2 bg-rose-50 border border-rose-200 rounded-lg">
                        <span className="font-bold text-[10px] text-rose-800 uppercase tracking-wider block mb-1 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3 text-rose-600" />
                          Ungrounded / Corrected Claims:
                        </span>
                        <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-rose-700">
                          {meta.evaluation.hallucinatedClaims.map((hc, hi) => (
                            <li key={hi}>{hc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
