"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LifeAtHunehar() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop', alt: 'Team collaborating on laptops' },
    { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop', alt: 'A planning session at a whiteboard' },
    { id: 3, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop', alt: 'Group discussion in a bright office' },
    { id: 4, src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop', alt: 'Formal meeting in a conference room' },
    { id: 5, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop', alt: 'Two colleagues working together' },
    { id: 6, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop', alt: 'Creative team celebrating a success' },
    { id: 7, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop', alt: 'A relaxed team working outdoors' },
    { id: 8, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop', alt: 'Professionals walking and talking in an office hallway' },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Life at Hunehar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image) => (
              <motion.div
                key={image.id}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openModal(image)}
                layoutId={`card-${image.id}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
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
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative"
              onClick={(e) => e.stopPropagation()}
              layoutId={`card-${selectedImage.id}`}
            >
              <img
                src={selectedImage.src}
                alt="Enlarged view"
                className="rounded-lg object-contain shadow-2xl"
                style={{ maxHeight: '90vh', maxWidth: '90vw' }}
              />
            </motion.div>
            <motion.button
              onClick={closeModal}
              className="absolute top-5 right-5 bg-white/20 text-white rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold"
              aria-label="Close"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { delay: 0.3 } }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
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