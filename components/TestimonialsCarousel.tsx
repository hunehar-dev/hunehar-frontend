"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsCarousel() {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [perSlide, setPerSlide] = useState(3);

  // dynamically set number of testimonials per slide based on screen width
  useEffect(() => {
    const updatePerSlide = () => {
      const w = window.innerWidth;
      if (w < 768) setPerSlide(1); // mobile
      else if (w < 1024) setPerSlide(2); // tablet
      else setPerSlide(3); // desktop
    };

    updatePerSlide();
    window.addEventListener("resize", updatePerSlide);
    return () => window.removeEventListener("resize", updatePerSlide);
  }, []);

  // automatic rotation
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prev) => (prev + 1) % Math.ceil(testimonials.length / perSlide)
        );
      }, 4500);
      return () => clearInterval(interval);
    }
  }, [isHovered, perSlide]);

  const visible = testimonials.slice(
    currentIndex * perSlide,
    currentIndex * perSlide + perSlide
  );

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[clamp(1.7rem,6vw,2.2rem)] lg:text-[clamp(2.1rem,3.2vw,2.9rem)] font-bold leading-[1.1] tracking-tight text-[#152A38]">
            What people say
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentIndex}-${perSlide}`} // important for responsive changes
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7`}
            >
              {visible.map((t, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="bg-[#F4F7F9] rounded-2xl p-6 sm:p-7"
                >
                  <p className="text-[#3F5563] text-[0.9375rem] leading-[1.7] mb-6">
                    “{t.content}”
                  </p>
                  <div className="flex items-center">
                    <div className="font-semibold text-[#152A38] text-sm">
                      {t.name}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: Math.ceil(testimonials.length / perSlide),
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === currentIndex ? "bg-[#206FAC]" : "bg-[#E7EDF1]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
