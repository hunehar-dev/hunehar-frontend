"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ImpactStats() {
  const stats = [
    { value: "Rs. 5M+", label: "Funds Raised" },
    { value: "400+", label: "Students Sponsored" },
    { value: "10+", label: "Years of Continuous Service" },
    { value: "150+", label: "Trusted Sponsors" },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* TWO COLUMN WRAPPER */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto">
          {/* LEFT COLUMN - 2/3 */}
          <div className="lg:w-2/3 flex justify-center lg:justify-center">
            <div className="max-w-xl">
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[#206FAC] mb-3">
                Our Impact
              </h2>

              <p className="text-sm md:text-base text-gray-500 mb-10">
                Every contribution creates lasting change. Since 2016:
              </p>

              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[clamp(1.5rem,2.5vw,2rem)] font-semibold text-[#206FAC]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-sm md:text-base text-gray-500 mb-6">
                  Contribute to our impact. Every rupee counts!
                </p>

                <div className="flex items-center gap-6">
                  <Link href="/donate">
                    <button className="rounded-md bg-[#206FAC] px-6 py-3 text-sm md:text-base font-medium text-white">
                      Donate Now
                    </button>
                  </Link>

                  <Link
                    href="/impact"
                    className="text-sm md:text-base underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - 1/3 */}
          {/* RIGHT COLUMN - 1/3 */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative w-1/2 lg:w-[90%] h-[320px] lg:h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/images/Hunehar-Child-Happy.webp"
                alt="Hunehar Impact"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
