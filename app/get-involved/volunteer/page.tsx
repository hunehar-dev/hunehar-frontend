import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import VolunteerExperience from "@/components/VolunteerExperience";
import { VOLUNTEER_PERKS } from "@/lib/volunteer-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer With Us",
  description:
    "Join Hunehar as a volunteer and help empower underprivileged children through education, community work, and social impact initiatives across Pakistan.",
};

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
          <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed">
            Apply in three minutes, join the department of your choice, and
            become part of the team behind Hunehar.
          </p>
          <Button asChild variant="brand" size="brand-lg" className="mt-8">
            <Link href="#apply">Apply to Volunteer</Link>
          </Button>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-y container-brand text-center">
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-brand-muted">
          Hunehar’s team is powered by passionate students from institutions
          like NUST, FAST, Roots, Beaconhouse, and many more. We welcome
          individuals who want to be part of something meaningful while gaining
          hands-on experience and directly shaping children’s futures.
        </p>
      </section>

      {/* DEPARTMENTS + APPLICATION FORM */}
      <VolunteerExperience />

      {/* WHAT YOU GET */}
      <section className="section-y container-brand">
        <h2 className="text-heading-3 mb-8 sm:mb-12 text-center">
          What You Get Out of It
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {VOLUNTEER_PERKS.map((perk) => (
            <li
              key={perk}
              className="flex items-start gap-3 p-5 sm:p-6 border border-brand-border rounded-2xl text-sm sm:text-base text-brand-muted-soft"
            >
              <Check
                className="w-5 h-5 mt-0.5 flex-none text-brand-blue"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="section-y text-center bg-brand-bg">
        <div className="container-brand">
          <h2 className="text-heading-4 mb-6">Ready to Make a Difference?</h2>
          <Button asChild variant="brand" size="brand-lg">
            <Link href="#apply">Apply to Volunteer</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
