"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared field chrome for the donation and sponsorship forms. */
export const fieldBase =
  "w-full h-[52px] px-4 rounded-xl border-0 bg-white text-brand-navy text-base outline-none ring-inset transition-shadow focus:ring-2 focus:ring-brand-blue";

export const fieldRing = (invalid?: boolean) =>
  invalid ? "ring-2 ring-brand-orange" : "ring-1 ring-[#DDE5EA]";

export const inputClass = (invalid?: boolean) =>
  cn(fieldBase, fieldRing(invalid));

export const selectClass = (invalid?: boolean) =>
  cn(
    fieldBase,
    fieldRing(invalid),
    "appearance-none cursor-pointer pr-12 bg-no-repeat bg-[length:18px_18px] bg-[position:right_16px_center]",
    "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23206FAC%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]"
  );

export const textareaClass = (invalid?: boolean) =>
  cn(
    "w-full h-[110px] px-4 py-3.5 rounded-xl border-0 bg-white text-brand-navy text-base leading-relaxed resize-y outline-none ring-inset transition-shadow focus:ring-2 focus:ring-brand-blue",
    fieldRing(invalid)
  );

export function FieldLabel({
  htmlFor,
  children,
  required,
  hint,
  as = "label",
}: {
  htmlFor?: string;
  children: ReactNode;
  required?: boolean;
  hint?: string;
  as?: "label" | "p";
}) {
  const content = (
    <>
      {children}
      {required && <span className="text-brand-orange"> *</span>}
      {hint && <span className="text-[#8095A3] font-normal"> ({hint})</span>}
    </>
  );

  if (as === "p") {
    return (
      <p className="mb-2 text-sm font-medium text-brand-muted-soft">{content}</p>
    );
  }

  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium text-brand-muted-soft"
    >
      {content}
    </label>
  );
}

export function FieldPair({ children }: { children: ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-5">{children}</div>;
}

export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="list-none m-0 p-0 flex flex-col gap-4">
      {steps.map((step, i) => (
        <li
          key={i}
          className="flex items-start gap-3.5 text-[0.9375rem] leading-[1.6] text-brand-muted-soft"
        >
          <span className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-white text-brand-blue text-[13px] font-semibold flex-none">
            {i + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}
