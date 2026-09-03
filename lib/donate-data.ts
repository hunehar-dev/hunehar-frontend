export const DONATION_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeCWO6Um1U3qPad2phOSCsTT4IymqiLGY4KOmWXwjPkOf0EFA/viewform";

export const VOLUNTEER_FORM =
  "https://docs.google.com/forms/d/1q-mQQ9f4WHZ0JitQ4M3vrRuDs7qx3xSJPG554Lp--wU/viewform";

export type FreqId = "monthly" | "quarterly" | "annually" | "once";
export type PlanId = Exclude<FreqId, "once">;

export const TRUST_POINTS = [
  "100% of your donations directly fund our students’ education.",
  "Registered as a Foundation with the Securities and Exchange Commission of Pakistan.",
  "Zakat accepted and utilized strictly in accordance with Islamic guidelines.",
];

export const FREQUENCIES: {
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

export const COVERS = ["Tuition", "Uniforms", "Stationery", "School bags", "Lunch"];
export const ONCE_COVERS = ["Infrastructure", "Long-term projects"];

export const SPONSOR_PLANS: {
  id: PlanId;
  label: string;
  price: string;
  adjective: string;
}[] = [
  { id: "monthly", label: "Monthly", price: "Rs. 3,000", adjective: "monthly" },
  { id: "quarterly", label: "Quarterly", price: "Rs. 12,000", adjective: "quarterly" },
  { id: "annually", label: "Yearly", price: "Rs. 36,000", adjective: "yearly" },
];

/** Which flow a "way to give" card opens. */
export type WayTarget = "sponsor" | "oneTime" | "share";

export const WAYS: {
  title: string;
  desc: string;
  action: string;
  target: WayTarget;
}[] = [
  {
    title: "Sponsor a Child",
    desc: "Support a child’s full education for PKR 3,000/month (USD 15 / GBP 13 / CAD 22). Receive monthly newsletters and biannual report cards, and build a meaningful connection with your sponsored child.",
    action: "Support now",
    target: "sponsor",
  },
  {
    title: "Donate Library Books",
    desc: "Provide textbooks, storybooks, and reference materials to inspire curiosity and literacy.",
    action: "Support now",
    target: "oneTime",
  },
  {
    title: "Fund the Computer Lab",
    desc: "Support free digital learning and prepare students for higher education and future careers.",
    action: "Support now",
    target: "oneTime",
  },
  {
    title: "Uniform & Supplies Support",
    desc: "Help children attend school confidently with uniforms, stationery, and essential supplies.",
    action: "Support now",
    target: "oneTime",
  },
  {
    title: "One-Time Donations",
    desc: "Contribute to infrastructure and long-term projects that sustain Hunehar’s mission.",
    action: "Support now",
    target: "oneTime",
  },
  {
    title: "Share With Friends & Family",
    desc: "Help us expand our reach by spreading awareness of Hunehar’s work.",
    action: "Share our mission",
    target: "share",
  },
];

export const BANKS = [
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

export const PAYMENT_METHODS = [
  "Sindh Bank transfer (local)",
  "Bank transfer via IBAN (international)",
  "EasyPaisa",
];

export const STUDENT_COUNTS = [
  "1 student",
  "2 students",
  "3 students",
  "More than 3",
];

export const ONE_TIME_STEPS = [
  "You send your gift to any of the accounts listed here.",
  "You submit this form with the amount and a screenshot of the payment.",
  "Someone from Hunehar verifies it and emails you a confirmation.",
];

export const SPONSOR_STEPS = [
  "You sign up — no payment needed yet.",
  "Our team reviews your details and assigns you a student.",
  "We email you your student’s details and the payment instructions.",
  "You start your plan and receive updates, report cards, and the annual magazine.",
];

export const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

/** Digits only, grouped with thousands separators — used by every amount field. */
export const formatAmount = (value: string) => {
  const digits = value.replace(/[^0-9]/g, "").slice(0, 9);
  return digits ? Number(digits).toLocaleString("en-US") : "";
};
