'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WhyExist() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Why We Exist?</h2>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 mb-8 rounded-r-xl shadow-lg">
              <p className="text-gray-800 leading-relaxed font-medium text-lg">
                "Millions of children around the world lack access to basic education and opportunities. We exist to
                bridge this gap and create pathways to success for every child, regardless of their circumstances."
              </p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Through innovative programs, community partnerships, and dedicated volunteers, we work tirelessly to
              ensure every child has the chance to learn, grow, and thrive. Our approach focuses on sustainable
              development and creating long-term positive impact in communities worldwide.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-semibold text-lg">Quality Education Access</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-semibold text-lg">Community Development</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-semibold text-lg">Sustainable Impact</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Global impact map showing our reach"
              width={500}
              height={400}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
