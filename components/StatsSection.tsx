"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: "Rs. 5M+", label: "Total Donations Raised" },
    { value: "300+", label: "Children Supported" },
    { value: "100%", label: "Transparency Rate" },
  ];

  return (
    <section className="py-10 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-xl p-6 sm:p-7 lg:p-8 -mt-4 sm:-mt-6 lg:-mt-8 border border-gray-100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-[clamp(1.5rem,6vw,2.5rem)] font-semibold text-[#206FAC] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-sm sm:text-base leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
