import { motion } from 'framer-motion'

export default function ErrorMessage({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass rounded-2xl p-6 text-center max-w-md mx-auto"
      style={{ borderColor: '#ef444466' }}
    >
      <div className="text-4xl mb-3">😵</div>
      <p className="text-red-400 font-medium">{message}</p>
    </motion.div>
  )
}
