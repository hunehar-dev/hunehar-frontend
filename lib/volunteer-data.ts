export const VOLUNTEER_ENDPOINT = "/api/v1/volunteers/volunteer-application";

export type DepartmentId =
  | "hr"
  | "social-media"
  | "liaison"
  | "publication"
  | "ambassadors"
  | "research";

export const DEPARTMENTS: {
  id: DepartmentId;
  name: string;
  desc: string;
  responsibilities: string[];
}[] = [
  {
    id: "hr",
    name: "HR",
    desc: "Recruitment, training, evaluations, SOPs, townhalls, hierarchy.",
    responsibilities: [
      "Recruit and onboard new volunteers",
      "Run trainings, evaluations and townhalls",
      "Maintain SOPs and the team hierarchy",
    ],
  },
  {
    id: "social-media",
    name: "Social Media & Relations",
    desc: "Manage social media, posters, sponsors, queries.",
    responsibilities: [
      "Plan and publish content across our channels",
      "Design posters and campaign creatives",
      "Answer sponsor and follower queries",
    ],
  },
  {
    id: "liaison",
    name: "Liaison",
    desc: "Maintain sponsor records, assign students, reallocations.",
    responsibilities: [
      "Keep sponsor records accurate and up to date",
      "Assign students to new sponsors",
      "Handle reallocations and follow-ups",
    ],
  },
  {
    id: "publication",
    name: "Publication",
    desc: "Newsletters, blogs, annual report, official write-ups.",
    responsibilities: [
      "Write monthly newsletters and blogs",
      "Produce the annual report and magazine",
      "Edit official write-ups and student stories",
    ],
  },
  {
    id: "ambassadors",
    name: "Ambassadors Team",
    desc: "Promote events, workshops, sponsor engagement.",
    responsibilities: [
      "Represent Hunehar at your campus or workplace",
      "Promote events, drives and workshops",
      "Bring in new sponsors and partners",
    ],
  },
  {
    id: "research",
    name: "Research & Development",
    desc: "NGO research, engagement strategies, funding models.",
    responsibilities: [
      "Research the NGO and education landscape",
      "Design engagement and outreach strategies",
      "Explore funding and sustainability models",
    ],
  },
];

/** How many departments an applicant may shortlist, in order of preference. */
export const MAX_DEPARTMENTS = 3;

export const departmentName = (id: DepartmentId) =>
  DEPARTMENTS.find((d) => d.id === id)?.name ?? id;

export const CURRENT_STATUSES = [
  "School / college student",
  "University student",
  "Recent graduate",
  "Working professional",
  "Other",
];

export const COMMITMENTS = [
  "2-4 hours a week",
  "5-8 hours a week",
  "9-12 hours a week",
  "More than 12 hours a week",
];

export const AVAILABILITY_SLOTS = [
  "Weekday mornings",
  "Weekday evenings",
  "Weekends",
  "Flexible",
];

export const START_OPTIONS = [
  "Right away",
  "Within two weeks",
  "Within a month",
  "Next semester",
];

export const WORK_MODES = ["Onsite (Islamabad)", "Remote", "Either works"];

export const REFERRAL_SOURCES = [
  "Instagram or Facebook",
  "LinkedIn",
  "A friend or current volunteer",
  "My university or society",
  "A Hunehar event",
  "Other",
];

export const VOLUNTEER_STEPS = [
  "You submit this application — it takes about three minutes.",
  "Our HR team reviews it and shortlists you for a department.",
  "We invite you to a short call to talk through the role and your availability.",
  "You are onboarded, added to the team, and paired with a department lead.",
];

export const VOLUNTEER_PERKS = [
  "Hands-on experience with a registered welfare foundation.",
  "An internship or volunteer certificate on completion of your term.",
  "Mentorship from department leads and a team of students nationwide.",
  "Work that directly shapes the schooling of the children we support.",
];
