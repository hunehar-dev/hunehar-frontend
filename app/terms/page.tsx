"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

export default function TermsPage() {
    const router = useRouter();
  return (
    <main className="bg-white text-[#0a0a0a] min-h-screen">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center gap-2 border-2 border-[#206FAC] text-white bg-[#206FAC] hover:bg-white hover:text-[#206FAC] hover:cursor-pointer px-2 rounded font-medium"
      >
        ← Back
      </button>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#206FAC]">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: 25th January 2026 | Last Updated: 25th January 2026
        </p>

        <p className="mb-6 leading-relaxed">
          Welcome to the Hunehar Welfare School website (“we,” “our,” or “us”). 
          By using this website, you agree to comply with these Terms & Conditions. 
          Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">1. About Hunehar</h2>
        <p className="mb-4 leading-relaxed">
          Hunehar Welfare School is a registered charitable foundation under the 
          Securities and Exchange Commission of Pakistan (SECP) and operates in 
          accordance with the ICT Act 2020. Our mission is to provide quality 
          education and holistic support to underprivileged children. All donations, 
          funds, and resources are used solely for charitable purposes, including 
          education, poverty relief, and community development.
        </p>
        <p className="mb-4 leading-relaxed">
          We do not engage in political activities or for-profit commercial ventures, 
          and no trustee or related individual benefits personally from donations or resources.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">2. Agreement Clause</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>You will use the website responsibly and for lawful purposes only.</li>
          <li>You will not post or submit any abusive, defamatory, or illegal content through contact forms or other interactive features.</li>
          <li>You understand that donations and any support you provide are voluntary and used strictly for charitable purposes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">3. Services Offered</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Information about our educational programs and initiatives</li>
          <li>Opportunities for volunteering or partnerships</li>
          <li>Details on how to support Hunehar through donations or campaigns</li>
        </ul>
        <p className="mt-2 mb-4 leading-relaxed">
          Note: Donations made through the website are voluntary and currently redirected 
          to a Google Form. They are non-refundable, unless explicitly stated otherwise.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">4. Intellectual Property</h2>
        <p className="mb-4 leading-relaxed">
          All content on this website, including text, images, logos, and blog articles, 
          is the property of Hunehar Welfare School unless otherwise stated. You may not 
          reproduce, distribute, or use any content for commercial purposes without prior 
          written permission.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">5. Limitation of Liability</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Any direct or indirect loss arising from the use of this website</li>
          <li>Errors or omissions in the website content</li>
          <li>Actions taken based on information from third-party links</li>
        </ul>
        <p className="mt-2 mb-4 leading-relaxed">
          We aim to provide accurate and up-to-date information but do not guarantee 
          that the website is always error-free or uninterrupted.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">6. Modifications to Terms</h2>
        <p className="mb-4 leading-relaxed">
          We reserve the right to update or modify these Terms & Conditions at any time. 
          Changes will be posted on this page with a new “Last Updated” date. Continued 
          use of the website constitutes acceptance of any updated terms.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">7. Governing Law</h2>
        <p className="mb-4 leading-relaxed">
          These Terms & Conditions are governed by the laws of Pakistan, including the ICT Act 2020. 
          Any disputes arising from the use of this website will be resolved in accordance with Pakistani law.
        </p>
      </section>

      <Footer />
    </main>
  );
}
