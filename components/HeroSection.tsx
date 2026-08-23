"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/Hunehar-students.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E2433]/90 via-[#0E2433]/60 to-[#0E2433]/40" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-28">
        <p className="text-[#E5533D] font-semibold text-[0.9375rem] sm:text-base mb-4 tracking-tight">
          Sponsor a child. Empower a future.
        </p>
        <h1 className="text-[clamp(2.2rem,8vw,3.1rem)] lg:text-[clamp(3.2rem,5vw,4.6rem)] font-bold leading-[1.05] tracking-tight mb-6 max-w-[18em] text-balance">
          Changing lives through education
        </h1>
        <p className="text-[1.0625rem] lg:text-[1.1875rem] leading-[1.7] text-[#D7E1E8] max-w-[36em] mb-10 text-pretty">
          Hunehar is a registered non-profit organization running a community
          school in Mehrabadi, Islamabad, dedicated to empowering
          underprivileged children through free, quality education and
          holistic support.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Link
            href="/get-involved/donate"
            className="inline-flex items-center bg-[#E5533D] hover:bg-[#C6462C] text-white px-8 py-[17px] rounded-full font-semibold text-[1.0625rem] transition-colors"
          >
            Sponsor a child
          </Link>
          <Link
            href="/impact"
            className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-[30px] py-[17px] rounded-full font-semibold text-[1.0625rem] transition-colors ring-1 ring-white/25"
          >
            See our impact
          </Link>
        </div>
      </div>
    </section>
  );
}
