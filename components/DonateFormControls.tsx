"use client";

import type { ReactNode } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Shared field chrome for the donation and sponsorship forms. */
export const fieldBase =
  "w-full h-[52px] px-4 rounded-xl border-0 bg-white text-brand-navy text-base outline-none ring-inset transition-shadow focus:ring-2 focus:ring-brand-blue";

export const fieldRing = (invalid?: boolean) =>
  invalid ? "ring-2 ring-brand-orange" : "ring-1 ring-[#DDE5EA]";

export const inputClass = (invalid?: boolean) =>
  cn(fieldBase, fieldRing(invalid));

export const textareaClass = (invalid?: boolean) =>
  cn(
    "w-full h-[110px] px-4 py-3.5 rounded-xl border-0 bg-white text-brand-navy text-base leading-relaxed resize-y outline-none ring-inset transition-shadow focus:ring-2 focus:ring-brand-blue",
    fieldRing(invalid)
  );

/**
 * Branded dropdown. A native <select> hands its option list to the OS, which on
 * phones renders an unstyled popup that ignores the field's width and position;
 * this keeps the list in the page so it matches the trigger and stays on screen.
 */
export function SelectField({
  id,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  invalid,
}: {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  /** Shown while nothing is picked — the empty-value case a native <option> covered. */
  placeholder?: string;
  invalid?: boolean;
}) {
  return (
    <SelectPrimitive.Root value={value || undefined} onValueChange={onChange}>
      <SelectPrimitive.Trigger
        id={id}
        className={cn(
          fieldBase,
          fieldRing(invalid),
          "group flex items-center justify-between gap-3 cursor-pointer text-left",
          "data-[state=open]:ring-2 data-[state=open]:ring-brand-blue",
          "data-[placeholder]:text-brand-muted"
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} className="truncate" />
        <SelectPrimitive.Icon asChild>
          <ChevronDown
            className="w-[18px] h-[18px] flex-none text-brand-blue transition-transform duration-200 group-data-[state=open]:rotate-180"
            aria-hidden="true"
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={8}
          collisionPadding={16}
          className={cn(
            "z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-[#DDE5EA]",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          )}
        >
          <SelectPrimitive.Viewport className="max-h-[min(17rem,var(--radix-select-content-available-height))] overflow-y-auto p-1.5">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option}
                value={option}
                className={cn(
                  // min-h keeps every row a comfortable tap target on phones,
                  // where long options wrap onto a second line.
                  "relative flex min-h-11 items-center py-2 pl-3 pr-9 rounded-lg",
                  "text-[0.9375rem] leading-[1.4] text-brand-muted-soft cursor-pointer select-none outline-none",
                  "data-[highlighted]:bg-brand-bg data-[highlighted]:text-brand-navy",
                  "data-[state=checked]:bg-[#F1F7FC] data-[state=checked]:text-brand-blue data-[state=checked]:font-medium"
                )}
              >
                <SelectPrimitive.ItemText>{option}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute right-3">
                  <Check className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

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
