const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

// Demo data used while the API key is still activating
const DEMO_CITIES = {
  london:    { temp: 14, feelsLike: 12, humidity: 78, windSpeed: 5.2, condition: 'Clouds',       description: 'overcast clouds',      cityName: 'London',    country: 'GB' },
  tokyo:     { temp: 22, feelsLike: 21, humidity: 60, windSpeed: 3.1, condition: 'Clear',        description: 'clear sky',            cityName: 'Tokyo',     country: 'JP' },
  seattle:   { temp: 11, feelsLike: 9,  humidity: 85, windSpeed: 4.5, condition: 'Rain',         description: 'moderate rain',        cityName: 'Seattle',   country: 'US' },
  miami:     { temp: 31, feelsLike: 34, humidity: 72, windSpeed: 6.0, condition: 'Thunderstorm', description: 'thunderstorm with rain',cityName: 'Miami',     country: 'US' },
  alaska:    { temp: -5, feelsLike: -9, humidity: 55, windSpeed: 7.3, condition: 'Snow',         description: 'light snow',           cityName: 'Alaska',    country: 'US' },
  paris:     { temp: 16, feelsLike: 15, humidity: 70, windSpeed: 3.8, condition: 'Drizzle',      description: 'light drizzle',        cityName: 'Paris',     country: 'FR' },
  beijing:   { temp: 18, feelsLike: 17, humidity: 90, windSpeed: 2.1, condition: 'Mist',         description: 'mist',                 cityName: 'Beijing',   country: 'CN' },
  dubai:     { temp: 38, feelsLike: 41, humidity: 40, windSpeed: 4.0, condition: 'Clear',        description: 'sunny',                cityName: 'Dubai',     country: 'AE' },
  mumbai:    { temp: 29, feelsLike: 33, humidity: 80, windSpeed: 5.5, condition: 'Rain',         description: 'heavy rain',           cityName: 'Mumbai',    country: 'IN' },
  new_york:  { temp: 20, feelsLike: 19, humidity: 65, windSpeed: 4.2, condition: 'Clouds',       description: 'scattered clouds',     cityName: 'New York',  country: 'US' },
}

/**
 * Fetch current weather for a city.
 * Falls back to demo data if the API key is not yet active.
 */
export async function fetchWeather(city) {
  const key = city.toLowerCase().replace(/\s+/g, '_')

  // Try live API first
  if (API_KEY && API_KEY !== 'your_openweathermap_api_key_here') {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    const res  = await fetch(url)

    // Key not yet activated → fall through to demo
    if (res.status === 401) {
      return getDemoData(key, city)
    }
    if (res.status === 404) throw new Error('CITY_NOT_FOUND')
    if (!res.ok)            throw new Error('WEATHER_FETCH_FAILED')

    const data = await res.json()
    return {
      temp:        Math.round(data.main.temp),
      feelsLike:   Math.round(data.main.feels_like),
      humidity:    data.main.humidity,
      windSpeed:   data.wind.speed,
      condition:   data.weather[0].main,
      description: data.weather[0].description,
      cityName:    data.name,
      country:     data.sys.country,
      isDemo:      false,
    }
  }

  // No key at all → demo mode
  return getDemoData(key, city)
}

function getDemoData(key, originalCity) {
  const data = DEMO_CITIES[key]
  if (!data) {
    // Unknown city in demo mode → return a random demo entry
    const entries = Object.values(DEMO_CITIES)
    const random  = entries[Math.floor(Math.random() * entries.length)]
    return { ...random, cityName: originalCity, isDemo: true }
  }
  return { ...data, isDemo: true }
}
