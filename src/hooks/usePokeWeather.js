import { useState, useCallback } from 'react'
import { fetchWeather } from '../services/weatherService'
import { fetchPokemon } from '../services/pokemonService'
import { getPokemonForWeather } from '../utils/weatherMapping'
import { getRandomFact } from '../utils/pokemonFacts'

/**
 * Central hook — orchestrates weather + Pokémon fetching.
 */
export function usePokeWeather() {
  const [weather,  setWeather]  = useState(null)
  const [pokemon,  setPokemon]  = useState(null)
  const [fact,     setFact]     = useState('')
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState(null)

  const search = useCallback(async (city) => {
    if (!city.trim()) return
    setLoading(true)
    setError(null)
    setWeather(null)
    setPokemon(null)

    try {
      const weatherData  = await fetchWeather(city)
      const pokemonName  = getPokemonForWeather(weatherData.condition)
      const pokemonData  = await fetchPokemon(pokemonName)

      setWeather(weatherData)
      setPokemon(pokemonData)
      setFact(getRandomFact())
    } catch (err) {
      const messages = {
        CITY_NOT_FOUND:      '🌍 City not found. Check the spelling and try again.',
        WEATHER_FETCH_FAILED:'⚡ Failed to fetch weather. Please try again.',
        POKEMON_FETCH_FAILED:'🎮 Failed to fetch Pokémon data. Please try again.',
      }
      setError(messages[err.message] || '❌ Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  return { weather, pokemon, fact, loading, error, search }
}
