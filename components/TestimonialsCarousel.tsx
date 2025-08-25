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
        "This organization has completely transformed my daughter's life. The educational support and mentorship she received opened doors we never thought possible. She's now thriving in university and has a bright future ahead.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Chen",
      role: "Teacher",
      content:
        "Working with Hunehar has been the most rewarding experience of my career. Their commitment to educational excellence and community development is truly inspiring and makes a real, lasting difference in children's lives.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Maria Rodriguez",
      role: "Community Leader",
      content:
        "The impact in our community has been remarkable. Children are not just learning, they're thriving and dreaming big. Families are building better futures, and hope has returned to our neighborhood in ways we never imagined.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "James Wilson",
      role: "Volunteer",
      content:
        "Being part of this mission has been life-changing for me too. Seeing the direct impact of our work, watching children grow and succeed, motivates me every single day to do more and give back to these amazing communities.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Lisa Thompson",
      role: "Donor",
      content:
        "I'm constantly amazed by the transparency and effectiveness of this organization. Every dollar I donate truly makes a difference, and I can see the real impact in the regular updates and stories I receive from the field.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Ahmed Hassan",
      role: "Program Graduate",
      content:
        "This program gave me the tools, confidence, and support to pursue my dreams when everything seemed impossible. I'm now studying engineering at university and working to give back to my community. Forever grateful for this opportunity.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3)
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#206FAC] mb-6 leading-tighter">
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
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#206FAC]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
