import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePokeWeather } from './hooks/usePokeWeather'
import { getGradient, getNeonColor } from './utils/weatherMapping'
import SearchBar       from './components/SearchBar'
import WeatherCard     from './components/WeatherCard'
import PokemonCard     from './components/PokemonCard'
import LoadingSpinner  from './components/LoadingSpinner'
import ErrorMessage    from './components/ErrorMessage'
import WeatherParticles from './components/WeatherParticles'
import ThemeToggle     from './components/ThemeToggle'

export default function App() {
  const { weather, pokemon, fact, loading, error, search } = usePokeWeather()
  const [darkMode, setDarkMode] = useState(true)

  const condition = weather?.condition || 'Default'
  const neonColor = getNeonColor(condition)
  const gradient  = getGradient(condition)

  return (
    <div
      className={`min-h-screen relative transition-all duration-700 ${
        darkMode ? `bg-gradient-to-br ${gradient}` : 'bg-gradient-to-br from-slate-100 to-blue-100'
      }`}
    >
      {/* Weather particles */}
      {weather && <WeatherParticles condition={condition} />}

      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: neonColor }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: neonColor }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1
              className="text-3xl md:text-4xl font-black neon-text"
              style={{ color: neonColor }}
            >
              ⚡ PokeWeather
            </h1>
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Real weather. Real Pokémon.
            </p>
          </div>
          <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(d => !d)} neonColor={neonColor} />
        </motion.div>

        {/* Search */}
        <div className="mb-8">
          <SearchBar onSearch={search} loading={loading} neonColor={neonColor} />
        </div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {loading && (
            <LoadingSpinner key="loading" neonColor={neonColor} />
          )}

          {error && !loading && (
            <ErrorMessage key="error" message={error} />
          )}

          {weather && pokemon && !loading && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <WeatherCard weather={weather} neonColor={neonColor} />
              <PokemonCard pokemon={pokemon} weather={weather} neonColor={neonColor} fact={fact} />
            </motion.div>
          )}

          {!weather && !loading && !error && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-7xl mb-4">🌍</div>
              <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Search a city to begin
              </h2>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Discover which Pokémon matches your local weather
              </p>
              <div className="flex justify-center gap-4 mt-6 text-3xl">
                {['☀️','🌧️','⛈️','❄️','☁️','🌫️'].map((e, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  >
                    {e}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
