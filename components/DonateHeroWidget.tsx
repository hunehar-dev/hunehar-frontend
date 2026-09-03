"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  COVERS,
  FREQUENCIES,
  ONCE_COVERS,
  formatAmount,
  type FreqId,
} from "@/lib/donate-data";

interface DonateHeroWidgetProps {
  /** Opens the sponsorship sign-up (recurring plans) or the one-time flow. */
  onStart: (freq: FreqId) => void;
}

export default function DonateHeroWidget({ onStart }: DonateHeroWidgetProps) {
  const [freq, setFreq] = useState<FreqId>("monthly");
  const [customAmount, setCustomAmount] = useState("");

  const current = FREQUENCIES.find((f) => f.id === freq)!;
  const isCustom = freq === "once";
  const amountDisplay = isCustom
    ? customAmount
      ? `Rs. ${customAmount}`
      : "You choose"
    : current.amount;

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
            onChange={(e) => setCustomAmount(formatAmount(e.target.value))}
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
        variant="brand"
        onClick={() => onStart(freq)}
        className="w-full rounded-2xl py-[18px] h-auto text-[17px] gap-2.5"
      >
        {current.cta}
        <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" />
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
