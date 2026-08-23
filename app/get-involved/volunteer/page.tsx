import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <main className="bg-white text-brand-navy">
      <Navbar />

      {/* HERO */}
      <section
        className="relative bg-cover bg-center text-center"
        style={{
          backgroundImage: "url('/images/impact/Hunehar-Activity2.webp')",
        }}
      >
        <div className="absolute inset-0 bg-brand-navy-soft/60" />
        <div className="relative z-10 container-brand py-24 sm:py-32">
          <h1 className="text-heading-1">Volunteer With Us</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-y px-4 sm:px-6 max-w-3xl md:max-w-5xl mx-auto text-center">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-brand-muted">
          Hunehar’s team is powered by passionate students from institutions
          like NUST, FAST, Roots, Beaconhouse, and many more. We welcome
          individuals who want to be part of something meaningful while gaining
          hands-on experience and directly shaping children’s futures.
        </p>
      </section>

      {/* DEPARTMENTS */}
      <section className="section-y px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-heading-3 mb-8 sm:mb-12 text-center">
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
              className="p-4 sm:p-6 border border-brand-border rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-blue/40 hover:bg-brand-bg"
            >
              <h3 className="text-base sm:text-lg font-semibold text-brand-blue mb-1 sm:mb-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-muted">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-y px-4 sm:px-6 text-center bg-brand-bg">
        <h2 className="text-heading-4 mb-6">Ready to Make a Difference?</h2>
        <Button asChild variant="brand" size="brand-lg">
          <Link href={VOLUNTEER_FORM} target="_blank">
            Apply to Volunteer
          </Link>
        </Button>
      </section>

      <Footer />
    </main>
  );
}
