import { ToolExecutionResult } from '../../src/types/travel.js';

interface CurrencyParams {
  amount: number;
  from: string;
  to: string;
}

export async function executeCurrencyTool(params: CurrencyParams): Promise<ToolExecutionResult> {
  const startTime = Date.now();
  const { amount, from, to } = params;
  const upperFrom = from.toUpperCase().trim();
  const upperTo = to.toUpperCase().trim();

  // Guard against invalid inputs
  if (isNaN(amount) || amount <= 0) {
    return {
      toolName: 'currency',
      status: 'error',
      inputs: params,
      data: { error: 'Invalid conversion amount provided' },
      summary: `Invalid amount "${amount}". Amount must be a positive number.`,
      executionTimeMs: Date.now() - startTime
    };
  }

  if (upperFrom === upperTo) {
    return {
      toolName: 'currency',
      status: 'success',
      inputs: params,
      data: {
        provider: 'Direct Identity',
        amount,
        from: upperFrom,
        to: upperTo,
        rate: 1.0,
        convertedAmount: amount,
        date: new Date().toISOString().split('T')[0]
      },
      summary: `${amount} ${upperFrom} is equal to ${amount} ${upperTo} (identical currency).`,
      executionTimeMs: Date.now() - startTime
    };
  }

  // 1. Try Frankfurter API first
  try {
    const frankfurterUrl = `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${upperFrom}&to=${upperTo}`;
    const res = await fetch(frankfurterUrl, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      const data = await res.json();
      const converted = data.rates[upperTo];
      const rate = converted / amount;
      const executionTimeMs = Date.now() - startTime;

      return {
        toolName: 'currency',
        status: 'success',
        inputs: { amount, from: upperFrom, to: upperTo },
        data: {
          provider: 'Frankfurter API (European Central Bank data)',
          amount,
          from: upperFrom,
          to: upperTo,
          rate: parseFloat(rate.toFixed(4)),
          convertedAmount: parseFloat(converted.toFixed(2)),
          rateDate: data.date
        },
        summary: `Live Currency Exchange: ${amount} ${upperFrom} = ${converted.toFixed(2)} ${upperTo} (Exchange Rate: 1 ${upperFrom} = ${rate.toFixed(4)} ${upperTo}, as of ${data.date}). Source: Frankfurter / ECB API.`,
        executionTimeMs
      };
    }
  } catch (frankfurterErr) {
    // Fallback to Open Exchange Rates API
  }

  // 2. Fallback to Open.er-api.com
  try {
    const fallbackUrl = `https://open.er-api.com/v6/latest/${upperFrom}`;
    const res = await fetch(fallbackUrl, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    if (!res.ok) {
      throw new Error(`Open Exchange Rate API HTTP ${res.status}`);
    }

    const data = await res.json();
    if (!data.rates || !data.rates[upperTo]) {
      throw new Error(`Currency pair ${upperFrom} to ${upperTo} is not supported by exchange provider.`);
    }

    const rate = data.rates[upperTo];
    const converted = amount * rate;
    const executionTimeMs = Date.now() - startTime;

    return {
      toolName: 'currency',
      status: 'success',
      inputs: { amount, from: upperFrom, to: upperTo },
      data: {
        provider: 'Open Exchange Rates (Live Fallback)',
        amount,
        from: upperFrom,
        to: upperTo,
        rate: parseFloat(rate.toFixed(4)),
        convertedAmount: parseFloat(converted.toFixed(2)),
        rateDate: data.time_last_update_utc || new Date().toISOString()
      },
      summary: `Live Currency Exchange: ${amount} ${upperFrom} = ${converted.toFixed(2)} ${upperTo} (Exchange Rate: 1 ${upperFrom} = ${rate.toFixed(4)} ${upperTo}). Source: Open Exchange Rate API.`,
      executionTimeMs
    };
  } catch (fallbackErr: any) {
    const executionTimeMs = Date.now() - startTime;
    return {
      toolName: 'currency',
      status: 'error',
      inputs: { amount, from: upperFrom, to: upperTo },
      data: { error: fallbackErr.message },
      summary: `Failed to convert ${amount} ${upperFrom} to ${upperTo}: ${fallbackErr.message}. Currency API was unreachable.`,
      executionTimeMs
    };
  }
}
