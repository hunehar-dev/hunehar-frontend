// app/privacy/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="bg-white text-[#0a0a0a] min-h-screen">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#206FAC]">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: 25th January 2026 | Last Updated: 25th January 2026
        </p>

        <p className="mb-6 leading-relaxed">
          Hunehar Welfare School (“we,” “our,” or “us”) is committed to protecting your 
          privacy and ensuring that your personal information is handled securely and 
          transparently. This Privacy Policy explains what information we collect, how we 
          use it, and the steps we take to safeguard it, in line with the ICT Act 2020 
          and applicable Pakistani laws.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4 leading-relaxed">
          Currently, we only collect personal information when you voluntarily provide it 
          to us, including:
        </p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Contact forms: Name, email address, phone number, and message (from our general or partner contact forms)</li>
          <li>Newsletter subscription: Name and email address</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          At this time, we do not collect financial information, track users via cookies, 
          or store IP addresses or browser data.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>To respond to your inquiries or messages submitted via our contact forms</li>
          <li>To send newsletters and updates if you subscribe</li>
          <li>To manage partnerships, volunteering, or collaborations</li>
          <li>To improve our website and communication with our community</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          We do not share, sell, or trade your personal information for marketing or any other purposes.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">3. Access and Sharing of Data</h2>
        <p className="mb-4 leading-relaxed">
          Only authorized Hunehar staff (such as admin or program coordinators) can access your personal data. 
          Your data may be shared with government authorities only when required by law, such as under the ICT Act 2020 
          for record-keeping, audits, or compliance purposes. We do not disclose your information to unrelated third parties.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">4. Data Storage and Security</h2>
        <p className="mb-4 leading-relaxed">
          Your personal information is stored securely in password-protected systems accessible only to authorized staff. 
          All records required under Section 14 of the ICT Act 2020 (for donations, partnerships, or communications) are maintained accurately for audit and reporting purposes.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">5. Data Retention and Deletion</h2>
        <p className="mb-4 leading-relaxed">
          We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. 
          You may request that we delete your personal information at any time by contacting us (see Section 8).
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">6. Third-Party Services</h2>
        <p className="mb-4 leading-relaxed">
          Currently, our website uses minimal third-party services. For any future integrations (like email platforms or donation processing), 
          we will ensure that these services comply with data protection standards.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">7. Your Rights</h2>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Access the personal information we hold about you</li>
          <li>Request corrections or updates to your data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent to receive communications (e.g., newsletters)</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          To exercise any of these rights, please contact us using the details below.
        </p>

        <h2 className="text-xl font-semibold text-[#206FAC] mt-8 mb-4">8. Contact Us</h2>
        <p className="mb-4 leading-relaxed">
          If you have questions, concerns, or requests regarding your personal information, you can reach us at:
        </p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Email: info@hunehar.org</li>
          <li>Phone: 0341 0510902 | 0336 5426276</li>
        </ul>

        <p className="text-sm text-gray-500 mt-8">
          Notes: This policy will be updated as the website evolves, for example, when SSL certificates, cookies, or payment integrations are added. 
          We recommend users review this page periodically to stay informed about how we handle personal data.
        </p>
      </section>

      <Footer />
    </main>
  );
}
