"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full p-6 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "relative overflow-hidden rounded-2xl bg-gray-100",
            card.className
          )}
        >
          <Image
            src={card.thumbnail}
            alt="Hunehar School"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </motion.div>
      ))}
    </div>
  );
};
