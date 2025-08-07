'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MapImpact() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Children learning in classroom"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-2xl">
              <div className="text-4xl font-bold">50%</div>
              <div className="text-sm font-medium">Success Rate</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Donation for the better of our future world
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We believe every child deserves access to quality education and opportunities to build a better future.
              Through our comprehensive programs, we provide educational resources, mentorship, and support to children
              in underserved communities around the world.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Our mission is to break the cycle of poverty through education, empowering the next generation to create
              positive change in their communities and beyond. Every donation makes a direct, measurable impact on a
              child's life and future.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-md transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
