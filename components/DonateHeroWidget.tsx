"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DONATION_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeCWO6Um1U3qPad2phOSCsTT4IymqiLGY4KOmWXwjPkOf0EFA/viewform";

type FreqId = "monthly" | "quarterly" | "annually" | "once";

const FREQUENCIES: {
  id: FreqId;
  label: string;
  amount: string;
  note: string;
  cta: string;
}[] = [
  {
    id: "monthly",
    label: "Monthly",
    amount: "Rs. 3,000",
    note: "≈ USD 15 · GBP 13 · CAD 22 per month",
    cta: "Sponsor monthly",
  },
  {
    id: "quarterly",
    label: "Quarterly",
    amount: "Rs. 12,000",
    note: "Three months of a child’s education, paid at once.",
    cta: "Sponsor quarterly",
  },
  {
    id: "annually",
    label: "Yearly",
    amount: "Rs. 36,000",
    note: "A full year of a child’s education.",
    cta: "Sponsor for a year",
  },
  {
    id: "once",
    label: "One-time",
    amount: "You choose",
    note: "Goes towards infrastructure and long-term projects.",
    cta: "Give once",
  },
];

const COVERS = ["Tuition", "Uniforms", "Stationery", "School bags", "Lunch"];
const ONCE_COVERS = ["Infrastructure", "Long-term projects"];

export default function DonateHeroWidget() {
  const [freq, setFreq] = useState<FreqId>("monthly");
  const [customAmount, setCustomAmount] = useState("");

  const current = FREQUENCIES.find((f) => f.id === freq)!;
  const isCustom = freq === "once";
  const amountDisplay = isCustom
    ? customAmount
      ? `Rs. ${customAmount}`
      : "You choose"
    : current.amount;

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/[^0-9]/g, "").slice(0, 9);
    setCustomAmount(digits ? Number(digits).toLocaleString("en-US") : "");
  };

  return (
    <div className="bg-brand-bg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:sticky lg:top-24">
      <div
        role="tablist"
        aria-label="Donation frequency"
        className="grid grid-cols-4 gap-1 bg-brand-border p-1 rounded-full mb-6"
      >
        {FREQUENCIES.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={freq === f.id}
            onClick={() => setFreq(f.id)}
            className={`py-2.5 px-1 rounded-full font-semibold text-[12px] sm:text-[13px] transition-colors ${
              freq === f.id
                ? "bg-white text-brand-blue"
                : "text-brand-muted hover:text-brand-blue"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="text-[13px] font-semibold tracking-wider uppercase text-brand-muted mb-2">
        {isCustom ? "One-time gift" : "Your gift"}
      </p>
      <p className="text-4xl sm:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-1.5">
        {amountDisplay}
      </p>
      <p className="text-sm text-brand-muted mb-6 min-h-[1.3em]">
        {current.note}
      </p>

      {isCustom && (
        <div className="mb-6">
          <label
            htmlFor="custom-amount"
            className="block mb-2.5 text-sm font-medium text-brand-muted-soft"
          >
            Enter an amount in PKR
          </label>
          <input
            id="custom-amount"
            type="text"
            inputMode="numeric"
            placeholder="5,000"
            value={customAmount}
            onChange={handleCustomAmount}
            className="w-full h-14 px-[18px] rounded-2xl border-0 bg-white text-brand-navy text-lg font-semibold outline-none ring-1 ring-inset ring-[#DDE5EA] focus:ring-2 focus:ring-brand-blue transition-shadow"
          />
        </div>
      )}

      <p className="text-sm font-medium text-brand-muted-soft mb-3">
        {isCustom ? "Where it goes" : "What it covers"}
      </p>
      <ul className="flex flex-wrap gap-2 mb-6 list-none p-0 m-0">
        {(isCustom ? ONCE_COVERS : COVERS).map((c) => (
          <li
            key={c}
            className="bg-white rounded-full px-3.5 py-2 text-[13px] text-brand-muted-soft"
          >
            {c}
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant="brand"
        className="w-full rounded-2xl py-[18px] text-[17px] gap-2.5"
      >
        <Link href={DONATION_FORM} target="_blank">
          {current.cta}
          <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" />
        </Link>
      </Button>
      <p className="mt-3.5 text-center text-[13px] text-brand-muted">
        Or{" "}
        <a href="#bank" className="text-brand-blue font-medium hover:underline">
          transfer directly to our bank account
        </a>
      </p>
    </div>
  );
}
