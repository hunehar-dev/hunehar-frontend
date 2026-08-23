"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ImpactStats() {
  const stats = [
    { value: "Rs. 5M+", label: "Funds raised" },
    { value: "300+", label: "Students sponsored" },
    { value: "10+", label: "Years of continuous service" },
    { value: "150+", label: "Trusted sponsors" },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-heading-2 mb-4">
              Our impact
            </h2>

            <p className="text-[1.0625rem] leading-[1.7] text-brand-muted mb-10">
              Every contribution creates lasting change. Since 2016:
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-tight text-brand-blue">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm text-brand-muted leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-[1.0625rem] text-brand-muted mb-6">
                Contribute to our impact. Every rupee counts!
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Button asChild variant="brand" size="brand-lg">
                  <Link href="/get-involved/donate">Donate now</Link>
                </Button>

                <Link
                  href="/impact"
                  className="inline-flex items-center gap-2 text-[1.0625rem] font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <figure className="relative m-0 w-full max-w-[420px] aspect-[4/5] rounded-2xl lg:rounded-[28px] overflow-hidden bg-brand-bg">
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
