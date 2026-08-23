"use client";

import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

const cards = [
  {
    id: 1,
    className: "md:col-span-2 h-[340px]",
    thumbnail: "/images/school/Hunehar-Gate.webp",
  },
  {
    id: 2,
    className: "h-[340px]",
    thumbnail: "/images/school/Hunehar-Smiling.webp",
  },
  {
    id: 3,
    className: "h-[340px]",
    thumbnail: "/images/school/Hunehar-Assembly.webp",
  },
  {
    id: 4,
    className: "md:col-span-2 h-[340px]",
    thumbnail: "/images/school/Hunehar-children.webp",
  },

  {
    id: 5,
    className: "h-[340px]",
    thumbnail: "/images/school/Hunehar-children-playing.webp",
  },
  {
    id: 6,
    className: "h-[340px]",
    thumbnail: "/images/school/Hunehar-Children-Playing2.webp",
  },

  {
    id: 7,
    className: "h-[340px]",
    thumbnail: "/images/school/Hunehar-Classroom.webp",
  },
  {
    id: 8,
    className: "h-[340px]",
    thumbnail: "/images/school/computer-lab.webp",
  },

  {
    id: 9,
    className: "md:col-span-2 h-[340px]",
    thumbnail: "/images/school/Hunehar-Library.webp",
  },
  {
    id: 10,
    className: "h-[340px]",
    thumbnail: "/images/school/Hunehar-Shelf.webp",
  },

  {
    id: 11,
    className: "h-[340px]",
    thumbnail: "/images/school/Hunehar-Student.webp",
  },
  {
    id: 12,
    className: "h-[340px]",
    thumbnail: "/images/school/Hunehar-Student3.webp",
  },

  {
    id: 13,
    className: "md:col-span-2 h-[340px]",
    thumbnail: "/images/school/Hunehar-Students2.webp",
  },
  {
    id: 14,
    className: "h-[340px]",
    thumbnail: "/images/school/Hunehar-Students4.webp",
  },
];



export default function SchoolGallery() {
  return (
    <section className="section-y-lg px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue">
          Life at Hunehar
        </h2>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          Moments from classrooms, learning spaces, and the everyday life of our
          students.
        </p>
      </div>

      <LayoutGrid cards={cards} />
    </section>
  );
}
