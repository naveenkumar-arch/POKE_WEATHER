import { motion } from 'framer-motion'
import StatBar from './StatBar'

const TYPE_COLORS = {
  fire:'#f97316', water:'#3b82f6', electric:'#eab308', ice:'#67e8f9',
  dragon:'#7c3aed', ghost:'#6d28d9', normal:'#9ca3af', flying:'#93c5fd',
  psychic:'#ec4899', poison:'#a855f7', ground:'#d97706', rock:'#78716c',
  bug:'#84cc16', steel:'#94a3b8', grass:'#22c55e', fighting:'#ef4444',
  fairy:'#f9a8d4', dark:'#374151',
}

export default function PokemonCard({ pokemon, weather, neonColor, fact }) {
  const playCry = () => {
    if (pokemon.cry) {
      new Audio(pokemon.cry).play().catch(() => {})
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass rounded-2xl p-5 flex flex-col gap-4"
      style={{ borderColor: `${neonColor}44` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-xs">#{String(pokemon.id).padStart(3, '0')}</p>
          <h2
            className="text-2xl font-black capitalize neon-text"
            style={{ color: neonColor }}
          >
            {pokemon.name}
          </h2>
          <p className="text-gray-400 text-xs mt-1">
            Matched to: <span className="text-white capitalize">{weather.condition}</span>
          </p>
        </div>

        {/* Cry button */}
        <motion.button
          onClick={playCry}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Play Pokémon cry"
          className="text-2xl glass rounded-xl p-2 transition-all"
          style={{ borderColor: `${neonColor}44` }}
        >
          🔊
        </motion.button>
      </div>

      {/* Image */}
      <motion.div
        className="flex justify-center"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-36 h-36 object-contain drop-shadow-2xl"
          style={{ filter: `drop-shadow(0 0 20px ${neonColor}88)` }}
        />
      </motion.div>

      {/* Types */}
      <div className="flex gap-2 flex-wrap">
        {pokemon.types.map(type => (
          <span
            key={type}
            className="px-3 py-1 rounded-full text-xs font-bold capitalize text-white"
            style={{ background: TYPE_COLORS[type] || '#6b7280' }}
          >
            {type}
          </span>
        ))}
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="glass rounded-xl p-3">
          <div className="text-gray-400">Height</div>
          <div className="font-bold text-white">{pokemon.height} m</div>
        </div>
        <div className="glass rounded-xl p-3">
          <div className="text-gray-400">Weight</div>
          <div className="font-bold text-white">{pokemon.weight} kg</div>
        </div>
        <div className="glass rounded-xl p-3 col-span-2">
          <div className="text-gray-400 mb-1">Abilities</div>
          <div className="flex gap-2 flex-wrap">
            {pokemon.abilities.map(a => (
              <span key={a} className="capitalize font-bold text-white">{a}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-2">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Base Stats</p>
        {pokemon.stats.map(s => (
          <StatBar key={s.name} stat={s} neonColor={neonColor} />
        ))}
      </div>

      {/* Random fact */}
      {fact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="glass rounded-xl p-3 text-xs text-gray-300 italic"
          style={{ borderColor: `${neonColor}33` }}
        >
          💡 {fact}
        </motion.div>
      )}
    </motion.div>
  )
}
