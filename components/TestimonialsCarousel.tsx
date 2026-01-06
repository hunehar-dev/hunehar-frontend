"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content:
        "This organization has completely transformed my daughter's life. The educational support and mentorship she received opened doors we never thought possible.",
      rating: 5,
      avatar: "/placeholder.svg",
    },
    {
      name: "David Chen",
      role: "Teacher",
      content:
        "Working with Hunehar has been the most rewarding experience of my career. Their commitment to education is truly inspiring.",
      rating: 5,
      avatar: "/placeholder.svg",
    },
    {
      name: "Maria Rodriguez",
      role: "Community Leader",
      content:
        "Children are not just learning — they’re thriving. Hope has returned to our community in ways we never imagined.",
      rating: 5,
      avatar: "/placeholder.svg",
    },
    {
      name: "James Wilson",
      role: "Volunteer",
      content:
        "Seeing the direct impact of our work motivates me every single day to give more and do better.",
      rating: 5,
      avatar: "/placeholder.svg",
    },
    {
      name: "Lisa Thompson",
      role: "Donor",
      content:
        "Every dollar truly makes a difference. The transparency and impact are remarkable.",
      rating: 5,
      avatar: "/placeholder.svg",
    },
    {
      name: "Ahmed Hassan",
      role: "Program Graduate",
      content:
        "This program gave me the confidence and tools to pursue my dreams when everything felt impossible.",
      rating: 5,
      avatar: "/placeholder.svg",
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
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < t.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 text-[0.95rem] leading-relaxed italic mb-6">
                    “{t.content}”
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {t.name}
                      </div>
                      <div className="text-gray-500 text-sm">{t.role}</div>
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
