'use client'

import { motion } from 'framer-motion'
import { Heart, GraduationCap } from 'lucide-react'

export default function DonateCards() {
  const cards = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Sponsor a Child',
      description: 'Provide comprehensive support including education, healthcare, and mentorship to help a child reach their full potential and build a brighter future.',
      buttonText: 'Sponsor Now',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
      iconBg: 'bg-blue-100'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
      title: 'Support a Teacher',
      description: 'Help us train and support dedicated teachers who are making a difference in their communities every day, creating lasting educational impact for generations.',
      buttonText: 'Support Teacher',
      buttonStyle: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent',
      iconBg: 'bg-orange-100'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tighter tracking-tighter">Make a Difference Today</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-full mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl p-8"
            >
              <div className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                {card.icon}
              </div>
              <h3 className="text-2xl text-gray-900 font-semibold tracking-tight mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">{card.description}</p>
              <button className={`${card.buttonStyle} px-8 py-4 font-semibold rounded-md transition-colors`}>
                {card.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
