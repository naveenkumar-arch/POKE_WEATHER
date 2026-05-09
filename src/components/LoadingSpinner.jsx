import { motion } from 'framer-motion'

export default function LoadingSpinner({ neonColor }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center gap-4 py-16"
    >
      {/* Pokéball spinner */}
      <div className="relative w-16 h-16">
        <div
          className="w-16 h-16 rounded-full border-4 border-t-transparent spinner"
          style={{ borderColor: `${neonColor}88`, borderTopColor: 'transparent' }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center text-2xl"
        >
          ⚡
        </div>
      </div>
      <p className="text-gray-400 text-sm animate-pulse">
        Summoning your Pokémon...
      </p>
    </motion.div>
  )
}
