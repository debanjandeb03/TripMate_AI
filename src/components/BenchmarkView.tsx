import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  Cpu,
  Download,
  Copy,
  ChevronDown,
  ChevronRight,
  Database,
  CloudSun,
  Coins,
  AlertCircle
} from 'lucide-react';
import { TestCase, TestRunResult } from '../types/travel.js';

interface BenchmarkViewProps {
  testCases: TestCase[];
}

export const BenchmarkView: React.FC<BenchmarkViewProps> = ({ testCases }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [runningTestId, setRunningTestId] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<Record<string, TestRunResult>>({});
  const [expandedTestId, setExpandedTestId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const runSingleTest = async (testCaseId: string) => {
    setIsRunning(true);
    setRunningTestId(testCaseId);
    try {
      const res = await fetch('/api/test/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testCaseId })
      });
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const result: TestRunResult = data.results[0];
        setTestResults(prev => ({
          ...prev,
          [testCaseId]: result
        }));
      }
    } catch (err) {
      console.error('Test run failed:', err);
    } finally {
      setIsRunning(false);
      setRunningTestId(null);
    }
  };

  const runAllTests = async () => {
    setIsRunning(true);
    setRunningTestId('all');
    try {
      const res = await fetch('/api/test/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ all: true })
      });
      const data = await res.json();
      if (data.results && Array.isArray(data.results)) {
        const newMap: Record<string, TestRunResult> = {};
        for (const r of data.results) {
          newMap[r.testCaseId] = r;
        }
        setTestResults(newMap);
      }
    } catch (err) {
      console.error('All tests run failed:', err);
    } finally {
      setIsRunning(false);
      setRunningTestId(null);
    }
  };

  const completedCount = Object.keys(testResults).length;
  const passedCount = Object.values(testResults).filter(r => r.status === 'passed').length;
  const failedCount = Object.values(testResults).filter(r => r.status === 'failed').length;
  const avgLatency = completedCount > 0
    ? Math.round(Object.values(testResults).reduce((acc, r) => acc + r.latencyMs, 0) / completedCount)
    : 0;
  const avgFaithfulness = completedCount > 0
    ? (Object.values(testResults).reduce((acc, r) => acc + r.faithfulnessScore, 0) / completedCount)
    : 0;

  const exportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(testResults, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `tripmate-benchmark-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const copyMarkdownSummary = () => {
    let md = `# TripMate GenAI Capstone Benchmark Report\n`;
    md += `**Date:** ${new Date().toLocaleString()}\n`;
    md += `**Tests Completed:** ${completedCount}/${testCases.length}\n`;
    md += `**Passed:** ${passedCount} | **Failed:** ${failedCount}\n`;
    md += `**Average Latency:** ${avgLatency} ms\n`;
    md += `**Average Faithfulness:** ${(avgFaithfulness * 100).toFixed(1)}%\n\n`;
    md += `| Test ID | Title | Expected Route | Actual Route | Tools | Latency (ms) | Faithfulness | Status |\n`;
    md += `|---|---|---|---|---|---|---|---|\n`;

    testCases.forEach(tc => {
      const r = testResults[tc.id];
      if (r) {
        md += `| ${tc.id} | ${tc.title} | ${r.expectedRoute} | ${r.actualRoute} | ${r.toolsUsed.join(', ') || 'None'} | ${r.latencyMs} | ${(r.faithfulnessScore * 100).toFixed(0)}% | ${r.status.toUpperCase()} |\n`;
      } else {
        md += `| ${tc.id} | ${tc.title} | ${tc.expectedRoute} | Not Run | - | - | - | PENDING |\n`;
      }
    });

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Evaluation & Verification Suite
            </span>
            <span className="text-xs text-slate-500 font-medium">10 Capstone Benchmark Cases</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Capstone Test Suite Runner
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Execute real benchmark tests against live endpoints. Every metric below reflects actual measured latency, actual router classification, real tool results, and live evaluator faithfulness scoring. No pre-fabricated numbers.
          </p>
        </div>

        {/* Global Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={runAllTests}
            disabled={isRunning}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm shrink-0"
          >
            <Play className={`w-3.5 h-3.5 ${isRunning && runningTestId === 'all' ? 'animate-spin' : ''}`} />
            <span>{isRunning && runningTestId === 'all' ? 'Running All 10 Tests...' : 'Run Full Benchmark (10 Tests)'}</span>
          </button>

          {completedCount > 0 && (
            <>
              <button
                onClick={copyMarkdownSummary}
                className="px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                title="Copy Markdown summary for project report"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied!' : 'Copy Markdown'}</span>
              </button>
              <button
                onClick={exportJSON}
                className="px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                title="Export test results as JSON"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Metrics Summary Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <span className="text-xs font-bold text-slate-400 block mb-1">TESTS EXECUTED</span>
          <span className="text-2xl font-extrabold text-slate-900">
            {completedCount} <span className="text-xs text-slate-400 font-normal">/ {testCases.length}</span>
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <span className="text-xs font-bold text-emerald-600 block mb-1">TESTS PASSED</span>
          <span className="text-2xl font-extrabold text-emerald-700">
            {passedCount}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <span className="text-xs font-bold text-rose-600 block mb-1">TESTS FAILED</span>
          <span className="text-2xl font-extrabold text-rose-700">
            {failedCount}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <span className="text-xs font-bold text-slate-400 block mb-1">AVG RESPONSE TIME</span>
          <span className="text-2xl font-extrabold text-slate-900">
            {avgLatency} <span className="text-xs text-slate-400 font-normal">ms</span>
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm col-span-2 sm:col-span-1">
          <span className="text-xs font-bold text-indigo-600 block mb-1">AVG FAITHFULNESS</span>
          <span className="text-2xl font-extrabold text-indigo-700">
            {(avgFaithfulness * 100).toFixed(0)}%
          </span>
        </div>
      </div>

      {/* Test Cases Table / List */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Benchmark Test Cases & Execution Status
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Click &quot;Run Test&quot; on any row to verify individually
          </span>
        </div>

        <div className="divide-y divide-slate-200">
          {testCases.map((tc, index) => {
            const result = testResults[tc.id];
            const isSingleRunning = isRunning && runningTestId === tc.id;
            const isExpanded = expandedTestId === tc.id;

            return (
              <div key={tc.id} className="p-4 sm:p-5 hover:bg-slate-50/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left: Test Info */}
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        #{index + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {tc.title}
                      </span>
                      <span className="px-2 py-0.2 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                        {tc.category}
                      </span>
                      <span className="px-2 py-0.2 rounded text-[10px] font-mono text-indigo-700 bg-indigo-50 border border-indigo-200">
                        Expected: {tc.expectedRoute}
                      </span>
                    </div>

                    <p className="text-xs text-slate-800 font-medium italic">
                      &quot;{tc.prompt}&quot;
                    </p>

                    <p className="text-[11px] text-slate-500 leading-snug">
                      {tc.description}
                    </p>
                  </div>

                  {/* Right: Results & Trigger */}
                  <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                    {/* Status Indicator */}
                    {result ? (
                      <div className="flex items-center gap-2">
                        {result.status === 'passed' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Passed ({(result.faithfulnessScore * 100).toFixed(0)}%)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                            <XCircle className="w-3.5 h-3.5" />
                            Failed
                          </span>
                        )}

                        <span className="text-[11px] font-mono text-slate-500 hidden md:inline">
                          {result.latencyMs} ms
                        </span>

                        <button
                          onClick={() => setExpandedTestId(isExpanded ? null : tc.id)}
                          className="p-1 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors"
                          title="Inspect test execution details"
                        >
                          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400 font-medium italic">
                        Not evaluated yet
                      </span>
                    )}

                    {/* Run Single Button */}
                    <button
                      onClick={() => runSingleTest(tc.id)}
                      disabled={isRunning}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors disabled:opacity-50"
                    >
                      <Play className={`w-3 h-3 ${isSingleRunning ? 'animate-spin' : ''}`} />
                      <span>{isSingleRunning ? 'Evaluating...' : 'Run Test'}</span>
                    </button>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && result && (
                  <div className="mt-4 pt-3 border-t border-slate-200 bg-slate-50 rounded-xl p-4 text-xs space-y-3">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-400 font-mono block">ACTUAL ROUTE</span>
                        <span className={`font-bold ${result.routeMatches ? 'text-emerald-700' : 'text-rose-700'}`}>
                          {result.actualRoute} {result.routeMatches ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-400 font-mono block">TOOLS USED</span>
                        <span className="font-bold text-slate-800">
                          {result.toolsUsed.length > 0 ? result.toolsUsed.join(', ') : 'None (RAG/Direct)'}
                        </span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-400 font-mono block">LATENCY</span>
                        <span className="font-bold text-slate-800">{result.latencyMs} ms</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-400 font-mono block">FAITHFULNESS SCORE</span>
                        <span className="font-bold text-indigo-700">{(result.faithfulnessScore * 100).toFixed(0)}%</span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-800 block mb-1">Evaluator Notes & Validation Check</span>
                      <p className="text-slate-600 text-[11px] leading-relaxed mb-2">{result.notes}</p>
                      <span className="font-bold text-slate-800 block mb-1">Generated Output Snippet</span>
                      <p className="text-slate-700 text-[11px] font-mono bg-slate-50 p-2 rounded border border-slate-200 whitespace-pre-line max-h-40 overflow-y-auto">
                        {result.response.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
