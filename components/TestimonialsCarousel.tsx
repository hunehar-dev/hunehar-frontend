"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "Ahmed Mustapha",
      content:
        "Hunehar is an excellent initiative considering how under-educated most Pakistani children are. We need more of such programs across all cities until the state takes up the responsibility. I also appreciate the fact that they try to engage the students in extra-curricular activities as well, such as the annual sports day event.",
    },
    {
      name: "Masooma Ambrin",
      content:
        "Hunehar is truly a beacon of hope for children who might never have the chance to learn and grow. It has empowered so many young minds to believe in themselves, overcome challenges, and dream bigger than they thought possible. I’m inspired by the dedication and heart behind this organization, and I hope its impact continues to expand, reaching more lives in the years ahead.",
    },
    {
      name: "Sadaf Farooq",
      content:
        "Hunehar is the perfect organization for spreading light of knowledge & awareness in those lives ,who can't even think of it. Hunehar has given these young soul's the power to rise above any situation or struggle & transform into the brightest future . And I wish, may the success that has come it's way today lead it to a bigger achievement in the year's to come.",
    },
    {
      name: "Zara Sheikh",
      content:
        "Becoming a part of Hunehar has been one of the most rewarding decisions of my life. Financing a child’s education is perhaps the greatest good you can ever do.",
    },
    {
      name: "Samrah Sajid",
      content:
        "I love that its so transparent and children are getting this level of education through you guys.",
    },
    {
      name: "Moiz Tahir",
      content:
        "The essence of charity/zakat. I love that it is a totally non profitable organization, helping people in need whether they are teachers or students.",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prev) => (prev + 1) % Math.ceil(testimonials.length / 3)
        );
      }, 4500);
      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);

  const visible = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[#206FAC]">
            What People Say
          </h2>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visible.map((t, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
                >
                  <p className="text-gray-600 text-[0.95rem] leading-relaxed italic mb-6">
                    “{t.content}”
                  </p>

                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {t.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === currentIndex ? "bg-[#206FAC]" : "bg-gray-300"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
