"use client";

import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-3xl text-xl text-white">
      Learning Beyond Classrooms
    </p>
    <p className="text-neutral-200 mt-2 max-w-lg">
      A safe environment where children learn with confidence and dignity.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-3xl text-xl text-white">
      Dedicated Teachers
    </p>
    <p className="text-neutral-200 mt-2 max-w-lg">
      Our teachers guide students with patience, care, and commitment.
    </p>
  </div>
);

const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-3xl text-xl text-white">
      Classroom Engagement
    </p>
    <p className="text-neutral-200 mt-2 max-w-lg">
      Encouraging participation, curiosity, and confidence.
    </p>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-3xl text-xl text-white">
      Hope in Every Child
    </p>
    <p className="text-neutral-200 mt-2 max-w-lg">
      Education that nurtures dreams and builds futures.
    </p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/school/Hunehar-Gate.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/school/Hunehar-Halls.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "public/images/school/Hunehar-Halls.webp",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/school/Hunehar-Halls.webp",
  },
];

export default function SchoolGallery() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#206FAC]">
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
