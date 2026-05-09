import { motion } from 'framer-motion'

export default function ThemeToggle({ darkMode, onToggle, neonColor }) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="glass rounded-xl px-3 py-2 text-sm font-bold transition-all"
      style={{ borderColor: `${neonColor}44`, color: neonColor }}
      title="Toggle dark/light mode"
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </motion.button>
  )
}
