import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import DonateExperience from "@/components/DonateExperience";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Hunehar’s mission to provide free education and community welfare. Your donation helps underprivileged children with schooling, meals, uniforms, and essential support in Pakistan.",
};

export default function DonatePage() {
  return (
    <main className="bg-white text-brand-navy">
      <Navbar />
      <DonateExperience />
      <Footer />
    </main>
  );
}
