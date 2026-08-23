"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/Hunehar-students.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-soft/90 via-brand-navy-soft/60 to-brand-navy-soft/40" />

      <div className="container-brand relative z-10 pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-28">
        <p className="text-brand-orange font-semibold text-[0.9375rem] sm:text-base mb-4 tracking-tight">
          Sponsor a child. Empower a future.
        </p>
        <h1 className="text-[clamp(2.2rem,8vw,3.1rem)] lg:text-[clamp(3.2rem,5vw,4.6rem)] font-bold leading-[1.05] tracking-tight mb-6 max-w-[18em] text-balance">
          Changing lives through education
        </h1>
        <p className="text-[1.0625rem] lg:text-[1.1875rem] leading-[1.7] text-brand-mist max-w-[36em] mb-10 text-pretty">
          Hunehar is a registered non-profit organization running a community
          school in Mehrabadi, Islamabad, dedicated to empowering
          underprivileged children through free, quality education and
          holistic support.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Button asChild variant="brand" size="brand-lg">
            <Link href="/get-involved/donate">Sponsor a child</Link>
          </Button>
          <Button asChild variant="brand-ghost" size="brand-lg">
            <Link href="/impact">See our impact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
