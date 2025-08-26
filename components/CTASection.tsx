"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-28 bg-gradient-to-br from-[#1a2c44] via-[#4074AD] to-[#0d1b2a] text-white relative overflow-hidden">
      <div className="absolute top-10 right-10 w-24 h-24 border-2 border-white/20 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-orange-500/20 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/30 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
            Subscribe to our Newsletter!
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-blue-100 mb-8 sm:mb-12 leading-relaxed tracking-tight">
            Stay updated with our latest news, impact stories, and ways to get
            involved in our mission.
          </p>

          <div className="max-w-lg mx-auto mb-10 sm:mb-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-gray-900 border-0 flex-1 py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg rounded-md outline-none w-full"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md transition-colors whitespace-nowrap w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/donate">
              <p className="bg-white text-blue-900 hover:bg-green-300 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-md transition-colors">
                Make a Donation
              </p>
            </Link>
            <Link href="/get-involved/volunteer">
              <p className="border-2 border-white text-white hover:bg-pink-300 hover:text-blue-900 hover:border-blue-900 bg-transparent px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-md transition-colors">
                Become a Volunteer
              </p>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
