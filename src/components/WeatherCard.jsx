import { motion } from 'framer-motion'
import { getWeatherIcon } from '../utils/weatherMapping'

export default function WeatherCard({ weather, neonColor }) {
  const icon = getWeatherIcon(weather.condition)

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass rounded-2xl p-5 flex flex-col gap-3"
      style={{ borderColor: `${neonColor}44` }}
    >
      <div className="flex items-center gap-3">
        <span className="text-4xl">{icon}</span>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl font-bold" style={{ color: neonColor }}>
              {weather.cityName}, {weather.country}
            </h2>
            {weather.isDemo && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/40">
                demo
              </span>
            )}
          </div>
          <p className="text-gray-400 text-sm capitalize">{weather.description}</p>
          {weather.isDemo && (
            <p className="text-yellow-500/70 text-xs mt-0.5">
              ⏳ API key activating — showing demo data
            </p>
          )}
        </div>
      </div>

      <div className="text-5xl font-black" style={{ color: neonColor }}>
        {weather.temp}°C
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        {[
          { label: 'Feels Like', value: `${weather.feelsLike}°C` },
          { label: 'Humidity',   value: `${weather.humidity}%` },
          { label: 'Wind',       value: `${weather.windSpeed} m/s` },
        ].map(item => (
          <div key={item.label} className="glass rounded-xl p-2">
            <div className="text-gray-400">{item.label}</div>
            <div className="font-bold text-white">{item.value}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
