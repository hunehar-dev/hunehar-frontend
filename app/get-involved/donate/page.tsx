import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import ShareButton from "@/components/ShareButton";
import DonateHeroWidget from "@/components/DonateHeroWidget";
import DonateFAQAccordion from "@/components/DonateFAQAccordion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Hunehar’s mission to provide free education and community welfare. Your donation helps underprivileged children with schooling, meals, uniforms, and essential support in Pakistan.",
};

const DONATION_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeCWO6Um1U3qPad2phOSCsTT4IymqiLGY4KOmWXwjPkOf0EFA/viewform";

const VOLUNTEER_FORM =
  "https://docs.google.com/forms/d/1q-mQQ9f4WHZ0JitQ4M3vrRuDs7qx3xSJPG554Lp--wU/viewform";

const TRUST_POINTS = [
  "100% of your donations directly fund our students’ education.",
  "Registered as a Foundation with the Securities and Exchange Commission of Pakistan.",
  "Zakat accepted and utilized strictly in accordance with Islamic guidelines.",
];

const WAYS = [
  {
    title: "Sponsor a Child",
    desc: "Support a child’s full education for PKR 3,000/month (USD 15 / GBP 13 / CAD 22). Receive monthly newsletters and biannual report cards, and build a meaningful connection with your sponsored child.",
    rule: "#E5533D",
  },
  {
    title: "Donate Library Books",
    desc: "Provide textbooks, storybooks, and reference materials to inspire curiosity and literacy.",
    rule: "#206FAC",
  },
  {
    title: "Fund the Computer Lab",
    desc: "Support free digital learning and prepare students for higher education and future careers.",
    rule: "#E5533D",
  },
  {
    title: "Uniform & Supplies Support",
    desc: "Help children attend school confidently with uniforms, stationery, and essential supplies.",
    rule: "#E5533D",
  },
  {
    title: "One-Time Donations",
    desc: "Contribute to infrastructure and long-term projects that sustain Hunehar’s mission.",
    rule: "#206FAC",
  },
  {
    title: "Share With Friends & Family",
    desc: "Help us expand our reach by spreading awareness of Hunehar’s work.",
    rule: "#E5533D",
    share: true,
  },
];

const BANKS = [
  {
    title: "Bank Account (Local Donors)",
    rows: [
      { label: "Account title", value: "Hunehar" },
      { label: "Account number", value: "06015529096100" },
      { label: "Bank", value: "Sindh Bank, Blue Area Branch" },
    ],
  },
  {
    title: "Bank Account (International Donors)",
    rows: [
      { label: "Account title", value: "Hunehar" },
      { label: "IBAN", value: "PK69SIND00060155290296100" },
      { label: "Bank", value: "Sindh Bank, Blue Area Branch" },
    ],
  },
  {
    title: "EasyPaisa (Local Donors)",
    rows: [
      { label: "Account title", value: "Mian Waqar Ud Din" },
      { label: "CNIC", value: "17301-123850-5" },
      { label: "Phone", value: "0300 8508250" },
      { label: "Email", value: "info@hunehar.org" },
    ],
  },
];

export default function DonatePage() {
  return (
    <main className="bg-white text-[#152A38]">
      <Navbar />

      {/* HERO — headline + trust points, sticky donation widget */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          <div>
            <h1 className="text-[clamp(2.2rem,8vw,3.1rem)] lg:text-[clamp(3.2rem,5vw,4.6rem)] font-bold leading-[1.05] tracking-tight mb-6 max-w-[16em] text-balance">
              Rs. 3,000 a month keeps one child in{" "}
              <span className="text-[#206FAC]">school</span>
            </h1>
            <p className="text-[1.0625rem] lg:text-[1.1875rem] leading-[1.7] text-[#5A6E7B] max-w-[32em] mb-8 text-pretty">
              At Hunehar, every child’s education is supported by sponsors
              around the world. Your contribution provides tuition, uniforms,
              stationery, school bags, and lunch - helping children stay in
              school and reach their full potential.
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {TRUST_POINTS.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3.5 text-[1rem] leading-[1.55] text-[#3F5563]"
                >
                  <Check
                    className="w-5 h-5 text-[#206FAC] flex-none mt-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <DonateHeroWidget />
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-28">
        <figure className="m-0 rounded-2xl lg:rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-[21/9] bg-[#F4F7F9]">
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
        className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-28"
      >
        <h2
          id="ways-h"
          className="text-[clamp(1.7rem,6vw,2.2rem)] lg:text-[clamp(2.1rem,3.2vw,2.9rem)] font-bold leading-[1.1] tracking-tight mb-8 sm:mb-12"
        >
          Ways to make an impact
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {WAYS.map((way, i) => (
            <article
              key={i}
              className="flex flex-col pt-[22px] border-t-2"
              style={{ borderColor: way.rule }}
            >
              <h3 className="text-[1.125rem] font-semibold mb-3">
                {way.title}
              </h3>
              <p className="text-[0.9375rem] leading-[1.7] text-[#5A6E7B] mb-6">
                {way.desc}
              </p>
              {way.share ? (
                <ShareButton variant="link" />
              ) : (
                <Link
                  href={DONATION_FORM}
                  target="_blank"
                  className="mt-auto self-start inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#206FAC] hover:text-[#144A73] transition-colors"
                >
                  Support now
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* BANK DETAILS */}
      <section
        id="bank"
        aria-labelledby="bank-h"
        className="bg-[#F4F7F9] py-16 sm:py-20 lg:py-28"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2
            id="bank-h"
            className="text-[clamp(1.7rem,6vw,2.2rem)] lg:text-[clamp(2.1rem,3.2vw,2.9rem)] font-bold leading-[1.1] tracking-tight mb-4"
          >
            Bank details
          </h2>
          <p className="text-[1.0625rem] leading-[1.7] text-[#5A6E7B] max-w-[34em] mb-8 sm:mb-12">
            Prefer to transfer directly? Use whichever account suits you.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {BANKS.map((bank, i) => (
              <article
                key={i}
                className="bg-white rounded-[20px] p-6 sm:p-8"
              >
                <h3 className="text-base font-semibold text-[#206FAC] mb-5">
                  {bank.title}
                </h3>
                <dl className="m-0 flex flex-col gap-4">
                  {bank.rows.map((row, idx) => (
                    <div key={idx}>
                      <dt className="text-xs font-semibold tracking-wider uppercase text-[#8095A3] mb-1">
                        {row.label}
                      </dt>
                      <dd className="m-0 text-[0.9375rem] text-[#152A38] break-words">
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
        <h2
          id="dfaq-h"
          className="text-[clamp(1.7rem,6vw,2.2rem)] lg:text-[clamp(2.1rem,3.2vw,2.9rem)] font-bold leading-[1.1] tracking-tight mb-8 sm:mb-12"
        >
          Before you give
        </h2>
        <DonateFAQAccordion />
      </section>

      {/* GIVE YOUR TIME CTA */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-28">
        <div className="relative rounded-2xl lg:rounded-[28px] overflow-hidden bg-[#0E2433]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/impact/Hunehar-Activity2.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            style={{ objectPosition: "center 35%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E2433]/95 to-[#0E2433]/60" />
          <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 text-center text-white">
            <h2 className="text-[clamp(1.7rem,6vw,2.2rem)] lg:text-[clamp(2.1rem,3.2vw,2.9rem)] font-bold leading-[1.1] tracking-tight max-w-[22em] mx-auto mb-5 text-balance">
              Can’t give today? Give your time instead.
            </h2>
            <p className="text-[1.0625rem] leading-[1.7] text-[#B9CBD6] max-w-[34em] mx-auto mb-7 sm:mb-8">
              We welcome volunteers both onsite and remotely, across HR,
              publications, social media, liaison and research.
            </p>
            <Link
              href={VOLUNTEER_FORM}
              target="_blank"
              className="inline-flex items-center bg-white text-[#152A38] px-8 py-[17px] rounded-full font-semibold text-[1.0625rem] hover:bg-[#E7EDF1] transition-colors"
            >
              Apply to volunteer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
