'use client'

import { motion } from 'framer-motion'

export default function ImpactStats() {
  const stats = [
    { value: '85%', label: 'Graduation Rate', description: 'Students completing our programs successfully' },
    { value: '1000+', label: 'Lives Changed', description: 'Children and families supported annually' },
    { value: '95%', label: 'Community Satisfaction', description: 'Positive feedback from local communities' },
    { value: '200+', label: 'Partner Organizations', description: 'Global network of collaborative partners' }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Impact</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4">{stat.value}</div>
              <div className="text-xl font-bold text-gray-900 mb-3">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-md transition-colors">
            View Full Report
          </button>
        </motion.div>
      </div>
    </section>
  )
}
