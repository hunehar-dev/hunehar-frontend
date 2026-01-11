"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  images: string[];
};

export default function PolaroidStack({ images }: Props) {
  const [cards, setCards] = useState(images);

  const handleClick = () => {
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <div className="relative w-[240px] h-[320px] mx-auto">
      {cards.map((src, index) => {
        const isTop = index === 0;

        return (
          <motion.div
            key={`${src}-${index}`}
            onClick={isTop ? handleClick : undefined}
            className="absolute inset-0 cursor-pointer"
            style={{ zIndex: cards.length - index }}
            animate={{
              rotate: index * 3 - 6,
              x: index * 5,
              y: index * 5,
              scale: isTop ? 1 : 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
          >
            <div className="bg-white rounded-md shadow-xl p-3 pb-10">
              <img
                src={src}
                alt="Activity"
                className="w-full h-52 object-cover rounded-sm"
                draggable={false}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
