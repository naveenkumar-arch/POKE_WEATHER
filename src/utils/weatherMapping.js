// Maps OpenWeatherMap condition IDs / main strings to Pokémon
export const WEATHER_POKEMON_MAP = {
  Clear:        'charizard',
  Rain:         'squirtle',
  Thunderstorm: 'pikachu',
  Snow:         'glaceon',
  Clouds:       'dragonite',
  Mist:         'gengar',
  Fog:          'gengar',
  Haze:         'gengar',
  Drizzle:      'psyduck',
  Default:      'eevee',
}

export const WEATHER_GRADIENTS = {
  Clear:        'from-orange-900 via-yellow-800 to-orange-950',
  Rain:         'from-blue-950 via-blue-900 to-slate-950',
  Thunderstorm: 'from-purple-950 via-indigo-900 to-gray-950',
  Snow:         'from-slate-800 via-blue-900 to-slate-950',
  Clouds:       'from-gray-800 via-slate-700 to-gray-950',
  Mist:         'from-gray-700 via-slate-600 to-gray-900',
  Fog:          'from-gray-700 via-slate-600 to-gray-900',
  Haze:         'from-gray-700 via-slate-600 to-gray-900',
  Drizzle:      'from-cyan-950 via-blue-900 to-slate-950',
  Default:      'from-violet-950 via-purple-900 to-slate-950',
}

export const WEATHER_NEON_COLORS = {
  Clear:        '#fbbf24',
  Rain:         '#60a5fa',
  Thunderstorm: '#a78bfa',
  Snow:         '#e0f2fe',
  Clouds:       '#94a3b8',
  Mist:         '#6b7280',
  Fog:          '#6b7280',
  Haze:         '#6b7280',
  Drizzle:      '#38bdf8',
  Default:      '#c084fc',
}

export const WEATHER_ICONS = {
  Clear:        '☀️',
  Rain:         '🌧️',
  Thunderstorm: '⛈️',
  Snow:         '❄️',
  Clouds:       '☁️',
  Mist:         '🌫️',
  Fog:          '🌫️',
  Haze:         '🌫️',
  Drizzle:      '🌦️',
  Default:      '🌈',
}

export function getPokemonForWeather(condition) {
  return WEATHER_POKEMON_MAP[condition] || WEATHER_POKEMON_MAP.Default
}

export function getGradient(condition) {
  return WEATHER_GRADIENTS[condition] || WEATHER_GRADIENTS.Default
}

export function getNeonColor(condition) {
  return WEATHER_NEON_COLORS[condition] || WEATHER_NEON_COLORS.Default
}

export function getWeatherIcon(condition) {
  return WEATHER_ICONS[condition] || WEATHER_ICONS.Default
}
