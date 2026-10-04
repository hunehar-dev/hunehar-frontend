"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FieldLabel,
  FieldPair,
  SelectField,
  StepList,
  inputClass,
  textareaClass,
} from "@/components/DonateFormControls";
import { apiUrl } from "@/lib/api";
import { isValidEmail } from "@/lib/utils";
import {
  AVAILABILITY_SLOTS,
  COMMITMENTS,
  CURRENT_STATUSES,
  DEPARTMENTS,
  MAX_DEPARTMENTS,
  REFERRAL_SOURCES,
  START_OPTIONS,
  VOLUNTEER_ENDPOINT,
  VOLUNTEER_STEPS,
  WORK_MODES,
  departmentName,
  type DepartmentId,
} from "@/lib/volunteer-data";

interface VolunteerApplicationFormProps {
  /** Departments preselected from the department cards, in preference order. */
  departments: DepartmentId[];
  onDepartmentsChange: (departments: DepartmentId[]) => void;
}

type Submitted = { name: string; email: string; departments: string[] };

export default function VolunteerApplicationForm({
  departments,
  onDepartmentsChange,
}: VolunteerApplicationFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [institution, setInstitution] = useState("");
  const [status, setStatus] = useState(CURRENT_STATUSES[1]);
  const [commitment, setCommitment] = useState(COMMITMENTS[0]);
  const [workMode, setWorkMode] = useState(WORK_MODES[2]);
  const [start, setStart] = useState(START_OPTIONS[0]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [motivation, setMotivation] = useState("");
  const [experience, setExperience] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [referral, setReferral] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<Submitted | null>(null);

  /** Tapping a department adds it to the end of the preference list. */
  const toggleDepartment = (id: DepartmentId) => {
    if (departments.includes(id)) {
      onDepartmentsChange(departments.filter((d) => d !== id));
      return;
    }
    if (departments.length >= MAX_DEPARTMENTS) {
      setError(
        `You can shortlist up to ${MAX_DEPARTMENTS} departments — remove one to add another.`
      );
      return;
    }
    setError("");
    onDepartmentsChange([...departments, id]);
  };

  const toggleAvailability = (slot: string) =>
    setAvailability((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    let problem = "";
    if (!name.trim()) problem = "Please enter your full name.";
    else if (!isValidEmail(email))
      problem =
        "Please enter a valid email address — this is where we’ll send your application update.";
    else if (!phone.trim())
      problem =
        "Please enter a phone or WhatsApp number so our HR team can reach you.";
    else if (!city.trim()) problem = "Please tell us which city you’re in.";
    else if (departments.length === 0)
      problem = "Please pick at least one department you’d like to join.";
    else if (motivation.trim().length < 20)
      problem =
        "Tell us a little more about why you want to volunteer — a couple of sentences is plenty.";
    else if (!consent)
      problem = "Please confirm that our team can contact you about this application.";

    if (problem) {
      setTouched(true);
      setError(problem);
      return;
    }

    const chosen = departments.map(departmentName);

    try {
      setSending(true);
      setError("");

      const res = await fetch(apiUrl(VOLUNTEER_ENDPOINT), {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          city: city.trim(),
          institution: institution.trim(),
          currentStatus: status,
          departments: chosen,
          primaryDepartment: chosen[0],
          weeklyCommitment: commitment,
          workMode,
          availability,
          startAvailability: start,
          motivation: motivation.trim(),
          experience: experience.trim(),
          portfolioUrl: portfolio.trim(),
          referralSource: referral,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setDone({
        name: name.trim().split(" ")[0],
        email: email.trim(),
        departments: chosen,
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Volunteer application error:", err);
      setError(
        "We couldn’t submit your application just now. Please try again, or email us at info@hunehar.org."
      );
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <section
        id="apply"
        className="container-brand scroll-mt-24 py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-[640px]">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F1F7FC] mb-7">
            <Check
              className="w-[30px] h-[30px] text-brand-blue"
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>
          <h2 className="text-heading-2 mb-[18px]">
            Welcome aboard, {done.name}
          </h2>
          <p className="text-[1.0625rem] lg:text-[1.1875rem] leading-[1.7] text-brand-muted mb-8">
            Your application for{" "}
            <strong className="text-brand-navy">
              {done.departments.join(", ")}
            </strong>{" "}
            is with our HR team. We’ll email{" "}
            <strong className="text-brand-navy">{done.email}</strong> within a
            week to set up a short call.
          </p>
          <div className="bg-brand-bg rounded-[20px] p-6 sm:p-8">
            <StepList steps={VOLUNTEER_STEPS} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="apply"
      className="container-brand scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <h2 className="text-heading-2 mb-[18px] max-w-[20em]">
        Apply to join the team
      </h2>
      <p className="text-[1.0625rem] lg:text-[1.1875rem] leading-[1.7] text-brand-muted max-w-[34em] mb-8 sm:mb-12 text-pretty">
        Tell us about yourself and pick the departments you’d like to work with.
        Our HR team reviews every application and gets back to you within a week
        — no prior experience needed.
      </p>

      <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-16 items-start">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-[22px]"
        >
          <FieldPair>
            <div>
              <FieldLabel htmlFor="vol-name" required>
                Full name
              </FieldLabel>
              <input
                id="vol-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={inputClass(touched && !name.trim())}
              />
            </div>
            <div>
              <FieldLabel htmlFor="vol-email" required>
                Email
              </FieldLabel>
              <input
                id="vol-email"
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
              <FieldLabel htmlFor="vol-phone" required>
                Phone / WhatsApp
              </FieldLabel>
              <input
                id="vol-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0300 0000000"
                className={inputClass(touched && !phone.trim())}
              />
            </div>
            <div>
              <FieldLabel htmlFor="vol-city" required>
                City
              </FieldLabel>
              <input
                id="vol-city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Islamabad"
                className={inputClass(touched && !city.trim())}
              />
            </div>
          </FieldPair>

          <FieldPair>
            <div>
              <FieldLabel htmlFor="vol-status">Where you are right now</FieldLabel>
              <SelectField
                id="vol-status"
                value={status}
                onChange={setStatus}
                options={CURRENT_STATUSES}
              />
            </div>
            <div>
              <FieldLabel htmlFor="vol-institution" hint="optional">
                Institution or workplace
              </FieldLabel>
              <input
                id="vol-institution"
                type="text"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                placeholder="NUST, FAST, Beaconhouse…"
                className={inputClass()}
              />
            </div>
          </FieldPair>

          {/* DEPARTMENT PREFERENCES — tapped in the order you'd prefer them */}
          <div>
            <FieldLabel as="p" required>
              Departments you’d like to join
            </FieldLabel>
            <p className="-mt-1 mb-3 text-[13px] text-brand-muted">
              Pick up to {MAX_DEPARTMENTS}. The first one you choose is treated
              as your first preference.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {DEPARTMENTS.map((dept) => {
                const rank = departments.indexOf(dept.id);
                const active = rank !== -1;
                const full =
                  !active && departments.length >= MAX_DEPARTMENTS;
                return (
                  <button
                    key={dept.id}
                    type="button"
                    onClick={() => toggleDepartment(dept.id)}
                    aria-pressed={active}
                    className={`flex items-start gap-3 text-left p-[18px] rounded-2xl border-0 cursor-pointer ring-inset transition-all ${
                      active
                        ? "ring-2 ring-brand-blue bg-[#F1F7FC]"
                        : `ring-1 ring-brand-border bg-white hover:ring-brand-blue/40 ${
                            full ? "opacity-55" : ""
                          }`
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-[26px] h-[26px] rounded-full flex-none text-[13px] font-semibold ${
                        active
                          ? "bg-brand-blue text-white"
                          : "bg-brand-bg text-brand-muted"
                      }`}
                      aria-hidden="true"
                    >
                      {active ? rank + 1 : "+"}
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-[0.9375rem] font-medium text-brand-navy">
                        {dept.name}
                        {rank === 0 && (
                          <span className="ml-2 text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
                            1st choice
                          </span>
                        )}
                      </span>
                      <span className="text-[13px] leading-[1.5] text-brand-muted">
                        {dept.desc}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <FieldPair>
            <div>
              <FieldLabel htmlFor="vol-commitment">
                Time you can give
              </FieldLabel>
              <SelectField
                id="vol-commitment"
                value={commitment}
                onChange={setCommitment}
                options={COMMITMENTS}
              />
            </div>
            <div>
              <FieldLabel htmlFor="vol-mode">How you’d like to work</FieldLabel>
              <SelectField
                id="vol-mode"
                value={workMode}
                onChange={setWorkMode}
                options={WORK_MODES}
              />
            </div>
          </FieldPair>

          <div>
            <FieldLabel as="p" hint="optional">
              When you’re usually free
            </FieldLabel>
            <div className="flex flex-wrap gap-2.5">
              {AVAILABILITY_SLOTS.map((slot) => {
                const active = availability.includes(slot);
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => toggleAvailability(slot)}
                    aria-pressed={active}
                    className={`px-4 py-2.5 rounded-full border-0 cursor-pointer text-[0.9375rem] ring-inset transition-all ${
                      active
                        ? "ring-2 ring-brand-blue bg-[#F1F7FC] text-brand-blue font-medium"
                        : "ring-1 ring-brand-border bg-white text-brand-muted hover:ring-brand-blue/40"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          <FieldPair>
            <div>
              <FieldLabel htmlFor="vol-start">When you can start</FieldLabel>
              <SelectField
                id="vol-start"
                value={start}
                onChange={setStart}
                options={START_OPTIONS}
              />
            </div>
            <div>
              <FieldLabel htmlFor="vol-referral" hint="optional">
                How you heard about Hunehar
              </FieldLabel>
              <SelectField
                id="vol-referral"
                value={referral}
                onChange={setReferral}
                options={REFERRAL_SOURCES}
              />
            </div>
          </FieldPair>

          <div>
            <FieldLabel htmlFor="vol-motivation" required>
              Why do you want to volunteer with Hunehar?
            </FieldLabel>
            <textarea
              id="vol-motivation"
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
              placeholder="What draws you to this work, and what you hope to take away from it."
              className={textareaClass(touched && motivation.trim().length < 20)}
            />
          </div>

          <div>
            <FieldLabel htmlFor="vol-experience" hint="optional">
              Relevant skills or experience
            </FieldLabel>
            <textarea
              id="vol-experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Societies, past volunteering, design, writing, research, teaching — anything that fits the departments you picked."
              className={textareaClass()}
            />
          </div>

          <div>
            <FieldLabel htmlFor="vol-portfolio" hint="optional">
              LinkedIn, portfolio or CV link
            </FieldLabel>
            <input
              id="vol-portfolio"
              type="url"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              placeholder="https://"
              className={inputClass()}
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="w-5 h-5 mt-0.5 flex-none accent-brand-blue cursor-pointer"
            />
            <span className="text-[0.9375rem] leading-[1.55] text-brand-muted-soft">
              Hunehar’s team can contact me about this application and about
              volunteering opportunities.
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
            disabled={sending}
            className="self-start h-auto gap-2.5"
          >
            {sending ? "Sending your application…" : "Submit my application"}
            {sending ? (
              <Loader2
                className="w-[18px] h-[18px] animate-spin"
                aria-hidden="true"
              />
            ) : (
              <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" />
            )}
          </Button>
        </form>

        <aside className="bg-brand-bg rounded-2xl lg:rounded-[28px] p-6 sm:p-8 lg:p-9 lg:sticky lg:top-24">
          <p className="text-[13px] font-semibold tracking-wider uppercase text-brand-muted mb-1.5">
            Your preferences
          </p>
          {departments.length > 0 ? (
            <ol className="list-none m-0 mb-7 p-0 flex flex-col gap-2">
              {departments.map((id, i) => (
                <li
                  key={id}
                  className="flex items-center gap-3 text-[0.9375rem] text-brand-navy"
                >
                  <span className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-white text-brand-blue text-[13px] font-semibold flex-none">
                    {i + 1}
                  </span>
                  {departmentName(id)}
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-[0.9375rem] leading-[1.6] text-brand-muted mb-7">
              No department picked yet — choose up to {MAX_DEPARTMENTS} from the
              list and they’ll appear here in order of preference.
            </p>
          )}

          <h3 className="text-base font-semibold text-brand-blue mb-[18px]">
            What happens next
          </h3>
          <StepList steps={VOLUNTEER_STEPS} />
          <p className="mt-7 pt-[22px] border-t border-[#E0E7EC] text-sm leading-[1.6] text-brand-muted">
            Applying costs nothing and carries no obligation. Questions first?
            Email{" "}
            <a
              href="mailto:info@hunehar.org"
              className="text-brand-blue hover:underline"
            >
              info@hunehar.org
            </a>
            .
          </p>
        </aside>
      </div>
    </section>
  );
}
