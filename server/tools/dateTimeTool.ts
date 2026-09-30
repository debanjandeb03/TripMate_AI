import { ToolExecutionResult } from '../../src/types/travel.js';

export function executeDateTimeTool(): ToolExecutionResult {
  const startTime = Date.now();
  const now = new Date();

  // Format in Indian Standard Time (IST, UTC+5:30)
  const istFormatter = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const parts = istFormatter.formatToParts(now);
  const formattedIST = istFormatter.format(now);
  const month = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', month: 'long' });
  const year = now.getFullYear();

  // Determine Indian meteorological season
  const monthNum = now.getMonth() + 1; // 1-12
  let season = 'Winter';
  if (monthNum >= 3 && monthNum <= 5) season = 'Summer / Pre-Monsoon';
  else if (monthNum >= 6 && monthNum <= 9) season = 'Southwest Monsoon (Rainy)';
  else if (monthNum >= 10 && monthNum <= 11) season = 'Post-Monsoon / Autumn';
  else season = 'Winter';

  const executionTimeMs = Date.now() - startTime;

  return {
    toolName: 'datetime',
    status: 'success',
    inputs: { timeZone: 'Asia/Kolkata' },
    data: {
      currentIST: formattedIST,
      month,
      year,
      season,
      iso: now.toISOString()
    },
    summary: `Current Local Time in India: ${formattedIST} (${season} season).`,
    executionTimeMs
  };
}
