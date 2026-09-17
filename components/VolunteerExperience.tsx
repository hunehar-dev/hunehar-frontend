"use client";

import { useState } from "react";
import { Check, Plus } from "lucide-react";
import VolunteerApplicationForm from "@/components/VolunteerApplicationForm";
import {
  DEPARTMENTS,
  MAX_DEPARTMENTS,
  type DepartmentId,
} from "@/lib/volunteer-data";

export default function VolunteerExperience() {
  const [departments, setDepartments] = useState<DepartmentId[]>([]);

  /** Department cards and the form's own picker edit the same shortlist. */
  const pickDepartment = (id: DepartmentId) => {
    setDepartments((prev) => {
      if (prev.includes(id)) return prev.filter((d) => d !== id);
      if (prev.length >= MAX_DEPARTMENTS) return prev;
      return [...prev, id];
    });
    document
      .getElementById("apply")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* DEPARTMENTS */}
      <section className="section-y container-brand">
        <h2 className="text-heading-3 mb-3 text-center">
          Volunteer Departments &amp; Responsibilities
        </h2>
        <p className="mb-8 sm:mb-12 text-center text-sm sm:text-base text-brand-muted max-w-2xl mx-auto">
          Pick the departments that suit you — you can shortlist up to{" "}
          {MAX_DEPARTMENTS}, and your first pick becomes your first preference.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-8">
          {DEPARTMENTS.map((dept) => {
            const rank = departments.indexOf(dept.id);
            const active = rank !== -1;
            const full = !active && departments.length >= MAX_DEPARTMENTS;
            return (
              <div
                key={dept.id}
                className={`flex flex-col p-5 sm:p-6 border rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  active
                    ? "border-brand-blue bg-brand-blue-tint/25"
                    : "border-brand-border hover:border-brand-blue/40 hover:bg-brand-bg"
                }`}
              >
                <h3 className="text-base sm:text-lg font-semibold text-brand-blue mb-1 sm:mb-2">
                  {dept.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-brand-muted">
                  {dept.desc}
                </p>

                <ul className="mt-4 mb-5 flex flex-col gap-2">
                  {dept.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-muted-soft"
                    >
                      <Check
                        className="w-4 h-4 mt-0.5 flex-none text-brand-blue"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => pickDepartment(dept.id)}
                  disabled={full}
                  aria-pressed={active}
                  className={`mt-auto self-start inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    active
                      ? "bg-brand-blue text-white hover:opacity-90"
                      : "bg-brand-bg text-brand-navy hover:bg-brand-border disabled:opacity-50 disabled:cursor-not-allowed"
                  }`}
                >
                  {active ? (
                    <>
                      <Check className="w-4 h-4" aria-hidden="true" />
                      {rank === 0 ? "First choice" : `Choice ${rank + 1}`}
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" aria-hidden="true" />
                      {full ? `Shortlist full` : "Add to my application"}
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <div className="border-t border-brand-border">
        <VolunteerApplicationForm
          departments={departments}
          onDepartmentsChange={setDepartments}
        />
      </div>
    </>
  );
}
