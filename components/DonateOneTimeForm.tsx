"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BANKS,
  ONE_TIME_STEPS,
  PAYMENT_METHODS,
  formatAmount,
  isValidEmail,
} from "@/lib/donate-data";
import {
  FieldLabel,
  FieldPair,
  StepList,
  inputClass,
  selectClass,
  textareaClass,
} from "@/components/DonateFormControls";

interface DonateOneTimeFormProps {
  onBack: () => void;
  onSponsor: () => void;
}

type Submitted = {
  name: string;
  email: string;
  amount: string;
  method: string;
};

export default function DonateOneTimeForm({
  onBack,
  onSponsor,
}: DonateOneTimeFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState(PAYMENT_METHODS[0]);
  const [date, setDate] = useState("");
  const [reference, setReference] = useState("");
  const [notes, setNotes] = useState("");
  const [zakat, setZakat] = useState(false);
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState<Submitted | null>(null);

  const previewRef = useRef("");
  useEffect(() => {
    previewRef.current = preview;
  }, [preview]);
  useEffect(
    () => () => {
      if (previewRef.current) URL.revokeObjectURL(previewRef.current);
    },
    []
  );

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (preview) URL.revokeObjectURL(preview);
    setFileName(file.name);
    setPreview(file.type.startsWith("image/") ? URL.createObjectURL(file) : "");
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let message = "";
    if (!name.trim()) message = "Please enter your full name.";
    else if (!isValidEmail(email))
      message =
        "Please enter a valid email address so we can confirm your donation.";
    else if (!amount.trim()) message = "Please enter the amount you sent.";
    else if (!fileName) message = "Please attach a screenshot of your payment.";

    if (message) {
      setTouched(true);
      setError(message);
      return;
    }

    // TODO: post these details to a donation intake endpoint before launch.
    setError("");
    setDone({
      name: name.trim().split(" ")[0],
      email: email.trim(),
      amount,
      method,
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
          <h1 className="text-heading-2 mb-[18px]">Thank you, {done.name}</h1>
          <p className="text-[1.0625rem] lg:text-[1.1875rem] leading-[1.7] text-brand-muted mb-7">
            We’ve received your donation details and the screenshot of your
            payment. Someone from Hunehar will verify it and send a confirmation
            email to <strong className="text-brand-navy">{done.email}</strong>.
          </p>
          <div className="bg-brand-bg rounded-[20px] p-6 sm:p-8 mb-8">
            <dl className="m-0 grid sm:grid-cols-2 gap-5">
              <div>
                <dt className="text-xs font-semibold tracking-wider uppercase text-[#8095A3] mb-1.5">
                  Amount
                </dt>
                <dd className="m-0 text-lg font-semibold text-brand-navy">
                  Rs. {done.amount}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wider uppercase text-[#8095A3] mb-1.5">
                  Paid via
                </dt>
                <dd className="m-0 text-lg font-semibold text-brand-navy">
                  {done.method}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-wrap gap-3.5">
            <Button
              onClick={onBack}
              variant="brand-light"
              size="brand-lg"
              className="h-auto bg-brand-bg hover:bg-brand-border"
            >
              Back to ways to give
            </Button>
            <Button onClick={onSponsor} variant="brand" size="brand-lg" className="h-auto">
              Sponsor a child monthly
            </Button>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-heading-2 mb-[18px] max-w-[20em]">
            Confirm your one-time donation
          </h1>
          <p className="text-[1.0625rem] lg:text-[1.1875rem] leading-[1.7] text-brand-muted max-w-[34em] mb-8 sm:mb-12 text-pretty">
            Transfer your gift using any of the accounts below, then send us the
            details and a screenshot of the payment. Someone from Hunehar will
            email you a confirmation.
          </p>

          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-16 items-start">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-[22px]"
            >
              <FieldPair>
                <div>
                  <FieldLabel htmlFor="ot-name" required>
                    Full name
                  </FieldLabel>
                  <input
                    id="ot-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClass(touched && !name.trim())}
                  />
                </div>
                <div>
                  <FieldLabel htmlFor="ot-email" required>
                    Email
                  </FieldLabel>
                  <input
                    id="ot-email"
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
                  <FieldLabel htmlFor="ot-phone" hint="optional">
                    Phone
                  </FieldLabel>
                  <input
                    id="ot-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0300 0000000"
                    className={inputClass()}
                  />
                </div>
                <div>
                  <FieldLabel htmlFor="ot-amount" required>
                    Amount sent (PKR)
                  </FieldLabel>
                  <input
                    id="ot-amount"
                    type="text"
                    inputMode="numeric"
                    value={amount}
                    onChange={(e) => setAmount(formatAmount(e.target.value))}
                    placeholder="5,000"
                    className={`${inputClass(touched && !amount.trim())} font-semibold`}
                  />
                </div>
              </FieldPair>

              <FieldPair>
                <div>
                  <FieldLabel htmlFor="ot-method" required>
                    How you paid
                  </FieldLabel>
                  <select
                    id="ot-method"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className={selectClass()}
                  >
                    {PAYMENT_METHODS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <FieldLabel htmlFor="ot-date">Date of payment</FieldLabel>
                  <input
                    id="ot-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass()}
                  />
                </div>
              </FieldPair>

              <div>
                <FieldLabel htmlFor="ot-ref" hint="optional">
                  Transaction / reference ID
                </FieldLabel>
                <input
                  id="ot-ref"
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder="As shown on your receipt"
                  className={inputClass()}
                />
              </div>

              <div>
                <FieldLabel as="p" required>
                  Screenshot of the payment
                </FieldLabel>
                <label
                  htmlFor="ot-file"
                  className={`relative flex items-center gap-[18px] p-5 rounded-2xl bg-white cursor-pointer ring-inset transition-shadow hover:ring-2 hover:ring-brand-blue ${
                    touched && !fileName
                      ? "ring-2 ring-brand-orange"
                      : "ring-1 ring-[#DDE5EA]"
                  }`}
                >
                  <span className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-[#F1F7FC] flex-none overflow-hidden">
                    {preview ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={preview}
                        alt="Payment screenshot preview"
                        className="w-full h-full object-cover block"
                      />
                    ) : (
                      <Upload
                        className="w-[22px] h-[22px] text-brand-blue"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[0.9375rem] font-medium text-brand-navy truncate">
                      {fileName || "Upload a screenshot or receipt"}
                    </span>
                    <span className="block mt-1 text-[13px] text-brand-muted">
                      {fileName ? "Tap to replace" : "PNG, JPG or PDF"}
                    </span>
                  </span>
                  <input
                    id="ot-file"
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={handleFile}
                    className="sr-only"
                  />
                </label>
              </div>

              <div>
                <FieldLabel htmlFor="ot-notes" hint="optional">
                  Anything we should know?
                </FieldLabel>
                <textarea
                  id="ot-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Dedicate this gift, ask for a receipt, or tell us how you heard about Hunehar."
                  className={textareaClass()}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={zakat}
                  onChange={(e) => setZakat(e.target.checked)}
                  className="w-5 h-5 mt-0.5 flex-none accent-brand-blue cursor-pointer"
                />
                <span className="text-[0.9375rem] leading-[1.55] text-brand-muted-soft">
                  Treat this as Zakat. Zakat donations are utilized strictly in
                  accordance with Islamic guidelines.
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
                Submit donation details
                <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" />
              </Button>
            </form>

            <aside className="bg-brand-bg rounded-2xl lg:rounded-[28px] p-6 sm:p-8 lg:p-9">
              <h2 className="text-base font-semibold text-brand-blue mb-5">
                Where to send your gift
              </h2>
              <dl className="m-0 mb-7 flex flex-col gap-[22px]">
                {BANKS.map((bank) => (
                  <div key={bank.title}>
                    <dt className="text-xs font-semibold tracking-wider uppercase text-[#8095A3] mb-2.5">
                      {bank.title}
                    </dt>
                    {bank.rows.map((row) => (
                      <dd
                        key={row.label}
                        className="m-0 mb-1.5 text-[0.9375rem] text-brand-navy break-words"
                      >
                        <span className="text-brand-muted">{row.label}:</span>{" "}
                        {row.value}
                      </dd>
                    ))}
                  </div>
                ))}
              </dl>
              <h2 className="text-base font-semibold text-brand-blue mb-[18px]">
                What happens next
              </h2>
              <StepList steps={ONE_TIME_STEPS} />
            </aside>
          </div>
        </>
      )}
    </section>
  );
}
