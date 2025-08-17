'use client'

import { motion } from 'framer-motion'

export default function StatsSection() {
  const stats = [
    { value: '$1M+', label: 'Total Donations Raised' },
    { value: '500+', label: 'Children Supported' },
    { value: '100%', label: 'Transpar77ency Rate' }
  ]

  return (
    <section className="py-16 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 -mt-16 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-3">{stat.value}</div>
                <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


