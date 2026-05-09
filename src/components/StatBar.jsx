import { motion } from 'framer-motion'

const STAT_LABELS = {
  hp:              'HP',
  attack:          'ATK',
  defense:         'DEF',
  'special-attack': 'SP.ATK',
  'special-defense':'SP.DEF',
  speed:           'SPD',
}

export default function StatBar({ stat, neonColor }) {
  const label = STAT_LABELS[stat.name] || stat.name
  const pct   = Math.min((stat.value / 255) * 100, 100)

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-14 text-gray-400 text-right shrink-0">{label}</span>
      <span className="w-8 font-bold text-white shrink-0">{stat.value}</span>
      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ background: neonColor, boxShadow: `0 0 6px ${neonColor}` }}
        />
      </div>
    </div>
  )
}
