"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#1a2c44] via-[#4074AD] to-[#0d1b2a] text-white relative overflow-hidden">
      {/* Decorative shapes (smaller + calmer) */}
      <div className="absolute top-8 right-8 w-16 h-16 border border-white/20 rounded-full" />
      <div className="absolute bottom-16 left-16 w-14 h-14 bg-orange-500/20 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold mb-4">
            Subscribe to our Newsletter
          </h2>

          <p className="text-[0.95rem] text-blue-100 mb-8 leading-relaxed">
            Stay updated with our latest news, impact stories, and ways to get
            involved in our mission.
          </p>

          {/* Email form */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 flex-1 h-11 px-4 text-[0.95rem] rounded-md outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white h-11 px-6 text-[0.95rem] font-semibold rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/donate">
              <span className="inline-block bg-white text-blue-900 hover:bg-green-300 px-6 py-2.5 text-[0.95rem] font-semibold rounded-md transition-colors">
                Make a Donation
              </span>
            </Link>
            <Link href="/get-involved/volunteer">
              <span className="inline-block border border-white text-white hover:bg-pink-300 hover:text-blue-900 px-6 py-2.5 text-[0.95rem] font-semibold rounded-md transition-colors">
                Become a Volunteer
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
