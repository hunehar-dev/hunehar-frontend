"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LifeAtHunehar() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "/images/Hunehar-children-playing.webp",
      alt: "Children playing",
    },
    { id: 2, src: "/images/Hunehar-computer-lab.webp", alt: "Computer lab" },
    {
      id: 3,
      src: "/images/Smiling-Hunehar-Children.webp",
      alt: "Smiling children",
    },
    { id: 4, src: "/images/Hunehar-children3.webp", alt: "Classroom moment" },
    {
      id: 5,
      src: "/images/Smiling-Hunehar-Children2.webp",
      alt: "Happy students",
    },
    { id: 6, src: "/images/Hunehar-Children-Poster.webp", alt: "Poster" },
    { id: 7, src: "/images/Hunehar-Sports-Day1.webp", alt: "Sports day" },
    { id: 8, src: "/images/Hunehar-Cricket.webp", alt: "Cricket match" },
    {
      id: 9,
      src: "/images/Hunehar-student-studying.webp",
      alt: "Student studying",
    },
    {
      id: 10,
      src: "/images/Hunehar-students-studying2.webp",
      alt: "Group study",
    },
    { id: 11, src: "/images/Hunehar-classroom.webp", alt: "Classroom" },
    {
      id: 12,
      src: "/images/Hunehar-student-reading.webp",
      alt: "Reading student",
    },
  ];

  return (
    <>
      <section className="bg-brand-bg py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-[clamp(1.7rem,6vw,2.2rem)] lg:text-[clamp(2.1rem,3.2vw,2.9rem)] font-bold leading-[1.1] tracking-tight text-brand-navy text-center mb-12 sm:mb-16">
            Life at Hunehar
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {images.map((image) => (
              <motion.div
                key={image.id}
                className="aspect-square overflow-hidden rounded-2xl cursor-pointer bg-white"
                onClick={() => setSelectedImage(image)}
                layoutId={`card-${image.id}`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative"
              layoutId={`card-${selectedImage.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt="Enlarged view"
                className="rounded-lg object-contain shadow-2xl"
                style={{ maxHeight: "85vh", maxWidth: "85vw" }}
              />
            </motion.div>

            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 bg-white/20 text-white rounded-full h-9 w-9 flex items-center justify-center text-xl font-bold"
              aria-label="Close"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
              exit={{ scale: 0, opacity: 0 }}
            >
              &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default LifeAtHunehar;
