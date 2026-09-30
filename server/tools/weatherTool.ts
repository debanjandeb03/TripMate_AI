import { ToolExecutionResult } from '../../src/types/travel.js';

interface WeatherParams {
  destinationName: string;
  latitude: number;
  longitude: number;
}

const WMO_CODE_MAP: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Slight snowfall',
  73: 'Moderate snowfall',
  75: 'Heavy snowfall',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail'
};

export async function executeWeatherTool(params: WeatherParams): Promise<ToolExecutionResult> {
  const startTime = Date.now();
  const { destinationName, latitude, longitude } = params;

  try {
    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.searchParams.set('latitude', latitude.toFixed(4));
    url.searchParams.set('longitude', longitude.toFixed(4));
    url.searchParams.set('current', 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m');
    url.searchParams.set('daily', 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max');
    url.searchParams.set('timezone', 'auto');
    url.searchParams.set('forecast_days', '3');

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'TripMate-Agent/1.0 (University Capstone)'
      }
    });

    if (!response.ok) {
      throw new Error(`Open-Meteo HTTP error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const current = data.current;
    const daily = data.daily;

    const weatherCondition = WMO_CODE_MAP[current.weather_code] || `Weather code ${current.weather_code}`;
    const tempCurrent = current.temperature_2m;
    const tempFeelsLike = current.apparent_temperature;
    const humidity = current.relative_humidity_2m;
    const windSpeed = current.wind_speed_10m;
    const precipitation = current.precipitation;

    const maxToday = daily?.temperature_2m_max?.[0];
    const minToday = daily?.temperature_2m_min?.[0];
    const precipProb = daily?.precipitation_probability_max?.[0] ?? 0;

    const summary = `Live Weather for ${destinationName}: ${weatherCondition}, Current Temp: ${tempCurrent}°C (Feels like: ${tempFeelsLike}°C). Today's High/Low: ${maxToday}°C / ${minToday}°C. Humidity: ${humidity}%, Wind: ${windSpeed} km/h, Precip chance: ${precipProb}%. Source: Open-Meteo Live API.`;

    const executionTimeMs = Date.now() - startTime;

    return {
      toolName: 'weather',
      status: 'success',
      inputs: { destinationName, latitude, longitude },
      data: {
        provider: 'Open-Meteo API (Live)',
        destination: destinationName,
        condition: weatherCondition,
        currentTempC: tempCurrent,
        feelsLikeC: tempFeelsLike,
        humidityPercent: humidity,
        windSpeedKmH: windSpeed,
        precipitationMm: precipitation,
        precipitationProbMax: precipProb,
        todayMaxTempC: maxToday,
        todayMinTempC: minToday,
        dailyForecast: daily?.time?.map((date: string, idx: number) => ({
          date,
          condition: WMO_CODE_MAP[daily.weather_code[idx]] || 'Varied',
          maxTempC: daily.temperature_2m_max[idx],
          minTempC: daily.temperature_2m_min[idx],
          precipProbMax: daily.precipitation_probability_max[idx]
        }))
      },
      summary,
      executionTimeMs
    };
  } catch (err: any) {
    const executionTimeMs = Date.now() - startTime;
    return {
      toolName: 'weather',
      status: 'error',
      inputs: { destinationName, latitude, longitude },
      data: { error: err.message },
      summary: `Failed to fetch live weather for ${destinationName}: ${err.message}. Open-Meteo service may be temporarily unreachable.`,
      executionTimeMs
    };
  }
}
