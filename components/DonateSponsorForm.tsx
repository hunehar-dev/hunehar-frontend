"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FREQUENCIES,
  SPONSOR_PLANS,
  SPONSOR_STEPS,
  STUDENT_COUNTS,
  isValidEmail,
  type PlanId,
} from "@/lib/donate-data";
import {
  FieldLabel,
  FieldPair,
  StepList,
  inputClass,
  selectClass,
  textareaClass,
} from "@/components/DonateFormControls";

interface DonateSponsorFormProps {
  plan: PlanId;
  onPlanChange: (plan: PlanId) => void;
  onBack: () => void;
}

type Submitted = { name: string; email: string; plan: string };

export default function DonateSponsorForm({
  plan,
  onPlanChange,
  onBack,
}: DonateSponsorFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [count, setCount] = useState(STUDENT_COUNTS[0]);
  const [message, setMessage] = useState("");
  const [updates, setUpdates] = useState(true);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState<Submitted | null>(null);

  const selectedPlan = SPONSOR_PLANS.find((p) => p.id === plan)!;
  const planNote = FREQUENCIES.find((f) => f.id === plan)?.note;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let problem = "";
    if (!name.trim()) problem = "Please enter your full name.";
    else if (!isValidEmail(email))
      problem =
        "Please enter a valid email address — this is where we’ll send your student’s details.";
    else if (!phone.trim())
      problem =
        "Please enter a phone or WhatsApp number so our team can reach you.";

    if (problem) {
      setTouched(true);
      setError(problem);
      return;
    }

    // TODO: post these details to a sponsorship intake endpoint before launch.
    setError("");
    setDone({
      name: name.trim().split(" ")[0],
      email: email.trim(),
      plan: selectedPlan.adjective,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="container-brand pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-28">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 mb-7 text-[0.9375rem] font-medium text-brand-muted hover:text-brand-navy transition-colors"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        All ways to give
      </button>

      {done ? (
        <div className="max-w-[640px]">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F1F7FC] mb-7">
            <Check
              className="w-[30px] h-[30px] text-brand-blue"
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>
          <h1 className="text-heading-2 mb-[18px]">
            You’re on the list, {done.name}
          </h1>
          <p className="text-[1.0625rem] lg:text-[1.1875rem] leading-[1.7] text-brand-muted mb-8">
            Our team will assign you a student and email{" "}
            <strong className="text-brand-navy">{done.email}</strong> with their
            details and the payment instructions for your {done.plan} plan.
          </p>
          <div className="bg-brand-bg rounded-[20px] p-6 sm:p-8 mb-8">
            <StepList steps={SPONSOR_STEPS} />
          </div>
          <Button
            onClick={onBack}
            variant="brand-light"
            size="brand-lg"
            className="h-auto bg-brand-bg hover:bg-brand-border"
          >
            Back to ways to give
          </Button>
        </div>
      ) : (
        <>
          <h1 className="text-heading-2 mb-[18px] max-w-[20em]">
            Sign up to sponsor a student
          </h1>
          <p className="text-[1.0625rem] lg:text-[1.1875rem] leading-[1.7] text-brand-muted max-w-[34em] mb-8 sm:mb-12 text-pretty">
            Tell us a little about yourself and pick a plan. Our team will assign
            you a student and email you their details along with the payment
            instructions — no payment needed yet.
          </p>

          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-16 items-start">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-[22px]"
            >
              <FieldPair>
                <div>
                  <FieldLabel htmlFor="sp-name" required>
                    Full name
                  </FieldLabel>
                  <input
                    id="sp-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClass(touched && !name.trim())}
                  />
                </div>
                <div>
                  <FieldLabel htmlFor="sp-email" required>
                    Email
                  </FieldLabel>
                  <input
                    id="sp-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass(touched && !isValidEmail(email))}
                  />
                </div>
              </FieldPair>

              <FieldPair>
                <div>
                  <FieldLabel htmlFor="sp-phone" required>
                    Phone / WhatsApp
                  </FieldLabel>
                  <input
                    id="sp-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0300 0000000"
                    className={inputClass(touched && !phone.trim())}
                  />
                </div>
                <div>
                  <FieldLabel htmlFor="sp-city">City &amp; country</FieldLabel>
                  <input
                    id="sp-city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Islamabad, Pakistan"
                    className={inputClass()}
                  />
                </div>
              </FieldPair>

              <div>
                <FieldLabel as="p" required>
                  Sponsorship plan
                </FieldLabel>
                <div className="grid sm:grid-cols-3 gap-3">
                  {SPONSOR_PLANS.map((p) => {
                    const active = plan === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => onPlanChange(p.id)}
                        aria-pressed={active}
                        className={`flex flex-col gap-1.5 text-left p-[18px] rounded-2xl border-0 cursor-pointer ring-inset transition-all ${
                          active
                            ? "ring-2 ring-brand-blue bg-[#F1F7FC]"
                            : "ring-1 ring-brand-border bg-white hover:ring-brand-blue/40"
                        }`}
                      >
                        <span className="text-[0.9375rem] font-medium text-brand-navy">
                          {p.label}
                        </span>
                        <span
                          className={`text-lg font-bold ${
                            active ? "text-brand-blue" : "text-brand-navy"
                          }`}
                        >
                          {p.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <FieldLabel htmlFor="sp-count">
                  How many students would you like to sponsor?
                </FieldLabel>
                <select
                  id="sp-count"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  className={selectClass()}
                >
                  {STUDENT_COUNTS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <FieldLabel htmlFor="sp-message" hint="optional">
                  Anything you’d like our team to know?
                </FieldLabel>
                <textarea
                  id="sp-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="A preferred grade, a message for your student, or how you heard about Hunehar."
                  className={textareaClass()}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={updates}
                  onChange={(e) => setUpdates(e.target.checked)}
                  className="w-5 h-5 mt-0.5 flex-none accent-brand-blue cursor-pointer"
                />
                <span className="text-[0.9375rem] leading-[1.55] text-brand-muted-soft">
                  Send me monthly updates, biannual progress reports, and the
                  annual magazine.
                </span>
              </label>

              <p
                role="alert"
                className="m-0 text-sm text-brand-orange min-h-[1.2em]"
              >
                {error}
              </p>

              <Button
                type="submit"
                variant="brand"
                size="brand-lg"
                className="self-start h-auto gap-2.5"
              >
                Create my sponsor profile
                <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" />
              </Button>
            </form>

            <aside className="bg-brand-bg rounded-2xl lg:rounded-[28px] p-6 sm:p-8 lg:p-9">
              <p className="text-[13px] font-semibold tracking-wider uppercase text-brand-muted mb-1.5">
                Your commitment
              </p>
              <p className="text-[2rem] font-bold text-brand-navy tracking-tight mb-1">
                {selectedPlan.price}
              </p>
              <p className="text-sm text-brand-muted mb-7">{planNote}</p>
              <h2 className="text-base font-semibold text-brand-blue mb-[18px]">
                What happens next
              </h2>
              <StepList steps={SPONSOR_STEPS} />
              <p className="mt-7 pt-[22px] border-t border-[#E0E7EC] text-sm leading-[1.6] text-brand-muted">
                Signing up costs nothing. You only pay once we’ve assigned your
                student and sent the payment details.
              </p>
            </aside>
          </div>
        </>
      )}
    </section>
  );
}
