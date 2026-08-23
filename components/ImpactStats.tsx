"use client";

import Link from "next/link";
import Image from "next/image";

export default function ImpactStats() {
  const stats = [
    { value: "Rs. 5M+", label: "Funds raised" },
    { value: "300+", label: "Students sponsored" },
    { value: "10+", label: "Years of continuous service" },
    { value: "150+", label: "Trusted sponsors" },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-[clamp(1.7rem,6vw,2.2rem)] lg:text-[clamp(2.1rem,3.2vw,2.9rem)] font-bold leading-[1.1] tracking-tight text-[#152A38] mb-4">
              Our impact
            </h2>

            <p className="text-[1.0625rem] leading-[1.7] text-[#5A6E7B] mb-10">
              Every contribution creates lasting change. Since 2016:
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-tight text-[#206FAC]">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm text-[#5A6E7B] leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-[1.0625rem] text-[#5A6E7B] mb-6">
                Contribute to our impact. Every rupee counts!
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/get-involved/donate"
                  className="inline-flex items-center bg-[#E5533D] hover:bg-[#C6462C] text-white px-8 py-[17px] rounded-full font-semibold text-[1.0625rem] transition-colors"
                >
                  Donate now
                </Link>

                <Link
                  href="/impact"
                  className="inline-flex items-center gap-2 text-[1.0625rem] font-semibold text-[#206FAC] hover:text-[#144A73] transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <figure className="relative m-0 w-full max-w-[420px] aspect-[4/5] rounded-2xl lg:rounded-[28px] overflow-hidden bg-[#F4F7F9]">
              <Image
                src="/images/Hunehar-Child-Happy.webp"
                alt="Hunehar impact"
                fill
                className="object-cover"
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
