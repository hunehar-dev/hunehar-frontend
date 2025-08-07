'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mb-6">
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Hope realized</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Only by help each other we can make world better
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Together we can create lasting change and build a brighter future for communities around the world through
              education, support, and unwavering hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-md transition-colors">
                Start Donating
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent px-8 py-4 text-lg font-semibold rounded-md transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
              <h3 className="text-gray-900 text-lg font-semibold leading-tight mb-6">
                Help children get out of poverty & build their future
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Donation Amount</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <button className="text-gray-900 bg-gray-50 hover:bg-blue-50 hover:border-blue-300 font-semibold py-3 border border-gray-300 rounded-md transition-colors">
                      $25
                    </button>
                    <button className="text-gray-900 bg-gray-50 hover:bg-blue-50 hover:border-blue-300 font-semibold py-3 border border-gray-300 rounded-md transition-colors">
                      $50
                    </button>
                    <button className="text-gray-900 bg-gray-50 hover:bg-blue-50 hover:border-blue-300 font-semibold py-3 border border-gray-300 rounded-md transition-colors">
                      $100
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Custom amount"
                    className="w-full border border-gray-300 focus:border-blue-500 py-3 px-4 rounded-md outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full border border-gray-300 focus:border-blue-500 py-3 px-4 rounded-md outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full border border-gray-300 focus:border-blue-500 py-3 px-4 rounded-md outline-none transition-colors"
                    />
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold text-lg rounded-md transition-colors">
                  Donate Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
