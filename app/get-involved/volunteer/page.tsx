import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer With Us",
  description:
    "Join Hunehar as a volunteer and help empower underprivileged children through education, community work, and social impact initiatives across Pakistan.",
};


const VOLUNTEER_FORM =
  "https://docs.google.com/forms/d/1q-mQQ9f4WHZ0JitQ4M3vrRuDs7qx3xSJPG554Lp--wU/viewform";

export default function VolunteerPage() {
  return (
    <main className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* HERO */}
      <section
        className="relative py-24 sm:py-32 px-4 sm:px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/impact/Hunehar-Activity2.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-[clamp(1.8rem,5vw,3rem)] sm:text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-white">
          Volunteer With Us
        </h1>
      </section>

      {/* INTRO */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-3xl md:max-w-5xl mx-auto text-center">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
          Hunehar’s team is powered by passionate students from institutions
          like NUST, FAST, Roots, Beaconhouse, and many more. We welcome
          individuals who want to be part of something meaningful while gaining
          hands-on experience and directly shaping children’s futures.
        </p>
      </section>

      {/* DEPARTMENTS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#206FAC] mb-8 sm:mb-12 text-center">
          Volunteer Departments & Responsibilities
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
          {[
            [
              "HR",
              "Recruitment, training, evaluations, SOPs, townhalls, hierarchy.",
            ],
            [
              "Social Media & Relations",
              "Manage social media, posters, sponsors, queries.",
            ],
            [
              "Liaison",
              "Maintain sponsor records, assign students, reallocations.",
            ],
            [
              "Publication",
              "Newsletters, blogs, annual report, official write-ups.",
            ],
            [
              "Ambassadors Team",
              "Promote events, workshops, sponsor engagement.",
            ],
            [
              "Research & Development",
              "NGO research, engagement strategies, funding models.",
            ],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="p-4 sm:p-6 border border-border rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#206FAC]/40 hover:bg-[#e4eff7]"
            >
              <h3 className="text-base sm:text-lg font-semibold text-[#206FAC] mb-1 sm:mb-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 text-center bg-secondary">
        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-[#206FAC] mb-6">
          Ready to Make a Difference?
        </h2>
        <Link
          href={VOLUNTEER_FORM}
          target="_blank"
          className="inline-block bg-gradient-to-r from-[#1a6aa0] to-[#3a8fd1] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:brightness-110"
        >
          Apply to Volunteer
        </Link>
      </section>

      <Footer />
    </main>
  );
}
