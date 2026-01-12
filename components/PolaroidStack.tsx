"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";

type Props = {
  images: string[];
};

export default function PolaroidStack({ images }: Props) {
  const [cards, setCards] = useState(images);
  const isMobile = useIsMobile();

  const next = () => {
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <div className="relative w-[290px] h-[350px] mx-auto">
      {cards.map((src, index) => {
        // Mobile: only show active image
        if (isMobile && index !== 0) return null;

        const isTop = index === 0;

        return (
          <motion.div
            key={`${src}-${index}`}
            onClick={isTop ? next : undefined}
            className="absolute inset-0 cursor-pointer"
            style={{ zIndex: cards.length - index }}
            animate={{
              rotate: isMobile ? 0 : index * 3 - 6,
              x: isMobile ? 0 : index * 6,
              y: isMobile ? 0 : index * 6,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
          >
            <div className="bg-[#bbe0fc] rounded-md shadow-xl p-3 pb-10">
              <img
                src={src}
                alt="Hunehar Impact"
                className="w-full h-52 object-cover rounded-sm"
                draggable={false}
              />
            </div>
          </motion.div>
        );
      })}

      {/* Mobile hint */}
      {isMobile && (
        <p className="mt-3 text-sm text-muted-foreground text-center">
          Tap image to view next →
        </p>
      )}
    </div>
  );
}
