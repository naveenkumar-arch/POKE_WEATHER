import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SearchBar({ onSearch, loading, neonColor }) {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(city)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="flex gap-2">
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Search any city..."
          disabled={loading}
          className="flex-1 px-5 py-3 rounded-xl glass text-white placeholder-gray-400
                     outline-none focus:ring-2 transition-all duration-300 text-sm"
          style={{ focusRingColor: neonColor }}
        />
        <motion.button
          type="submit"
          disabled={loading || !city.trim()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300
                     disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: `linear-gradient(135deg, ${neonColor}33, ${neonColor}66)`,
            border: `1px solid ${neonColor}88`,
            color: neonColor,
            boxShadow: `0 0 15px ${neonColor}44`,
          }}
        >
          {loading ? '...' : '🔍 Search'}
        </motion.button>
      </div>
    </motion.form>
  )
}
