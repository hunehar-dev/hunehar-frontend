"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Reel {
  id: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
}

export default function StudentStories() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);

  useEffect(() => {
    async function fetchReels() {
      try {
        const res = await fetch("/api/student-stories");
        const data = await res.json();
        setReels(data);
      } catch (err) {
        console.error("Failed to load reels", err);
      }
    }
    fetchReels();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-[#206FAC] text-center mb-10">
        Student Stories
      </h2>

      <div className="flex gap-6 overflow-x-auto px-4 snap-x">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[250px] h-[440px] rounded-xl shadow-md overflow-hidden snap-center cursor-pointer"
            onClick={() => setSelectedReel(reel)}
          >
            <img
              src={reel.thumbnail_url}
              alt="Student Story"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedReel && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReel(null)}
          >
            <motion.div
              className="relative w-full max-w-[360px] aspect-[9/16] bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedReel.media_url}
                controls
                autoPlay
                loop
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
