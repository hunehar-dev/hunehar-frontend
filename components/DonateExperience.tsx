"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShareButton from "@/components/ShareButton";
import DonateHeroWidget from "@/components/DonateHeroWidget";
import DonateFAQAccordion from "@/components/DonateFAQAccordion";
import DonateOneTimeForm from "@/components/DonateOneTimeForm";
import DonateSponsorForm from "@/components/DonateSponsorForm";
import {
  BANKS,
  TRUST_POINTS,
  VOLUNTEER_FORM,
  WAYS,
  type FreqId,
  type PlanId,
} from "@/lib/donate-data";

type View = "choose" | "oneTime" | "sponsor";

export default function DonateExperience() {
  const [view, setView] = useState<View>("choose");
  const [plan, setPlan] = useState<PlanId>("monthly");

  const goTo = (next: View) => {
    setView(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /** The widget's CTA: recurring frequencies open the sponsorship sign-up
   * pre-set to that plan, a one-time gift opens the donation form. */
  const startFromWidget = (freq: FreqId) => {
    if (freq === "once") {
      goTo("oneTime");
      return;
    }
    setPlan(freq);
    goTo("sponsor");
  };

  if (view === "oneTime") {
    return (
      <DonateOneTimeForm
        onBack={() => goTo("choose")}
        onSponsor={() => goTo("sponsor")}
      />
    );
  }

  if (view === "sponsor") {
    return (
      <DonateSponsorForm
        plan={plan}
        onPlanChange={setPlan}
        onBack={() => goTo("choose")}
      />
    );
  }

  return (
    <>
      {/* HERO — headline + trust points, sticky donation widget */}
      <section className="container-brand pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          <div>
            <h1 className="text-[clamp(2.2rem,8vw,3.1rem)] lg:text-[clamp(3.2rem,5vw,4.6rem)] font-bold leading-[1.05] tracking-tight mb-6 max-w-[16em] text-balance">
              Rs. 3,000 a month keeps one child in{" "}
              <span className="text-brand-blue">school</span>
            </h1>
            <p className="text-[1.0625rem] lg:text-[1.1875rem] leading-[1.7] text-brand-muted max-w-[32em] mb-8 text-pretty">
              At Hunehar, every child’s education is supported by sponsors
              around the world. Your contribution provides tuition, uniforms,
              stationery, school bags, and lunch - helping children stay in
              school and reach their full potential.
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {TRUST_POINTS.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3.5 text-[1rem] leading-[1.55] text-brand-muted-soft"
                >
                  <Check
                    className="w-5 h-5 text-brand-blue flex-none mt-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <DonateHeroWidget onStart={startFromWidget} />
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="container-brand pb-16 sm:pb-20 lg:pb-28">
        <figure className="m-0 rounded-2xl lg:rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-[21/9] bg-brand-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Hunehar-Donate-Box2.webp"
            alt="A Hunehar donation drive"
            className="w-full h-full object-cover block"
          />
        </figure>
      </section>

      {/* WAYS TO MAKE AN IMPACT */}
      <section
        aria-labelledby="ways-h"
        className="container-brand pb-16 sm:pb-20 lg:pb-28"
      >
        <h2 id="ways-h" className="text-heading-2 mb-8 sm:mb-12">
          Ways to make an impact
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {WAYS.map((way, i) => (
            <article
              key={way.title}
              className="flex flex-col pt-[22px] border-t-2"
              style={{ borderColor: i % 3 === 1 ? "#206FAC" : "#E5533D" }}
            >
              <h3 className="text-[1.125rem] font-semibold mb-3">
                {way.title}
              </h3>
              <p className="text-[0.9375rem] leading-[1.7] text-brand-muted mb-6">
                {way.desc}
              </p>
              {way.target === "share" ? (
                <ShareButton variant="link" />
              ) : (
                <button
                  onClick={() =>
                    goTo(way.target === "sponsor" ? "sponsor" : "oneTime")
                  }
                  className="mt-auto self-start inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
                >
                  {way.action}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* BANK DETAILS */}
      <section
        id="bank"
        aria-labelledby="bank-h"
        className="bg-brand-bg py-16 sm:py-20 lg:py-28"
      >
        <div className="container-brand">
          <h2 id="bank-h" className="text-heading-2 mb-4">
            Bank details
          </h2>
          <p className="text-[1.0625rem] leading-[1.7] text-brand-muted max-w-[34em] mb-8 sm:mb-12">
            Prefer to transfer directly? Use whichever account suits you.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {BANKS.map((bank) => (
              <article
                key={bank.title}
                className="bg-white rounded-[20px] p-6 sm:p-8"
              >
                <h3 className="text-base font-semibold text-brand-blue mb-5">
                  {bank.title}
                </h3>
                <dl className="m-0 flex flex-col gap-4">
                  {bank.rows.map((row) => (
                    <div key={row.label}>
                      <dt className="text-xs font-semibold tracking-wider uppercase text-[#8095A3] mb-1">
                        {row.label}
                      </dt>
                      <dd className="m-0 text-[0.9375rem] text-brand-navy break-words">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE YOU GIVE */}
      <section
        aria-labelledby="dfaq-h"
        className="max-w-[820px] mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28"
      >
        <h2 id="dfaq-h" className="text-heading-2 mb-8 sm:mb-12">
          Before you give
        </h2>
        <DonateFAQAccordion />
      </section>

      {/* GIVE YOUR TIME CTA */}
      <section className="container-brand pb-16 sm:pb-20 lg:pb-28">
        <div className="relative rounded-2xl lg:rounded-[28px] overflow-hidden bg-brand-navy-soft">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/impact/Hunehar-Activity2.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            style={{ objectPosition: "center 35%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-soft/95 to-brand-navy-soft/60" />
          <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 text-center text-white">
            <h2 className="text-[clamp(1.7rem,6vw,2.2rem)] lg:text-[clamp(2.1rem,3.2vw,2.9rem)] font-bold leading-[1.1] tracking-tight max-w-[22em] mx-auto mb-5 text-balance">
              Can’t give today? Give your time instead.
            </h2>
            <p className="text-[1.0625rem] leading-[1.7] text-brand-mist max-w-[34em] mx-auto mb-7 sm:mb-8">
              We welcome volunteers both onsite and remotely, across HR,
              publications, social media, liaison and research.
            </p>
            <Button asChild variant="brand-light" size="brand-lg">
              <Link href={VOLUNTEER_FORM} target="_blank">
                Apply to volunteer
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
