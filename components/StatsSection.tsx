"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: "Rs. 5M+", label: "Total donations raised" },
    { value: "300+", label: "Children supported" },
    { value: "100%", label: "Transparency rate" },
  ];

  return (
    <section className="bg-white relative">
      <div className="container-brand relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl lg:rounded-[28px] shadow-[0_8px_40px_-8px_rgba(14,36,51,0.15)] p-6 sm:p-8 lg:p-10 -mt-14 sm:-mt-16 lg:-mt-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-[clamp(1.75rem,6vw,2.5rem)] font-bold tracking-tight text-brand-blue mb-1.5">
                  {stat.value}
                </div>
                <div className="text-brand-muted font-medium text-sm sm:text-base leading-snug">
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
