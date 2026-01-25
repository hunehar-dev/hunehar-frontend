import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import ShareButton from "@/components/ShareButton";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Hunehar’s mission to provide free education and community welfare. Your donation helps underprivileged children with schooling, meals, uniforms, and essential support in Pakistan.",
};


const DONATION_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeCWO6Um1U3qPad2phOSCsTT4IymqiLGY4KOmWXwjPkOf0EFA/viewform";

export default function DonatePage() {
  return (
    <main className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* HERO */}
      <section
        className="relative py-24 sm:py-32 px-4 sm:px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Hunehar-Donate-Box2.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-[clamp(1.8rem,5vw,3rem)] sm:text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-white">
          Donate
        </h1>
      </section>

      {/* INTRO */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-3xl md:max-w-5xl mx-auto text-center">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
          At Hunehar, every child’s education is supported by sponsors around
          the world. Your contribution provides tuition, uniforms, stationery,
          school bags, and lunch - helping children stay in school and reach
          their full potential. You can choose a monthly, quarterly, or yearly
          sponsorship.
        </p>
      </section>

      {/* WAYS TO MAKE AN IMPACT */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#206FAC] mb-10 sm:mb-12 text-center">
          Ways to Make an Impact
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
          {[
            {
              title: "Sponsor a Child",
              desc: "Support a child’s full education for PKR 3,000/month (USD 15 / GBP 13 / CAD 22). Receive monthly newsletters and biannual report cards, and build a meaningful connection with your sponsored child.",
            },
            {
              title: "Donate Library Books",
              desc: "Provide textbooks, storybooks, and reference materials to inspire curiosity and literacy.",
            },
            {
              title: "Fund the Computer Lab",
              desc: "Support free digital learning and prepare students for higher education and future careers.",
            },
            {
              title: "Uniform & Supplies Support",
              desc: "Help children attend school confidently with uniforms, stationery, and essential supplies.",
            },
            {
              title: "One-Time Donations",
              desc: "Contribute to infrastructure and long-term projects that sustain Hunehar’s mission.",
            },
            {
              title: "Share With Friends & Family",
              desc: "Help us expand our reach by spreading awareness of Hunehar’s work.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 sm:p-6 border border-border rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#206FAC]/40 hover:bg-[#e4eff7]"
            >
              <h3 className="text-base sm:text-lg font-semibold text-[#206FAC] mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4">
                {item.desc}
              </p>
              {item.title === "Share With Friends & Family" ? (
                <ShareButton />
              ) : (
                <Link
                  href={DONATION_FORM}
                  target="_blank"
                  className="inline-block text-xs sm:text-sm md:text-sm font-medium text-white bg-[#206FAC] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:opacity-90 transition"
                >
                  Support Now
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BANK DETAILS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#c1e0f7]">
        <div className="max-w-3xl md:max-w-5xl mx-auto">
          <h2 className="text-[clamp(1.8em,5vw,2.25rem)] font-bold text-[#206FAC] mb-6 sm:mb-8 text-center">
            Bank Details
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Bank Account (International Donors)",
                lines: [
                  "Account Title: Hunehar",
                  "Account Number: PK69SIND00060155290296100",
                  "Sindh Bank, Blue Area Branch",
                ],
              },
              {
                title: "EasyPaisa (Local Donors)",
                lines: [
                  "Account Title: Mian Waqar Ud Din",
                  "CNIC: 17301-123850-5",
                  "Phone: 0300 8508250",
                  "Email: info@hunehar.org",
                ],
              },
              {
                title: "Bank Account (Local Donors)",
                lines: [
                  "Account Title: Hunehar",
                  "Account Number: 06015529096100",
                  "Sindh Bank, Blue Area Branch",
                ],
              },
            ].map((box, i) => (
              <div
                key={i}
                className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-3 border-[#206FAC]"
              >
                <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">
                  {box.title}
                </h3>
                <ul className="text-xs sm:text-sm md:text-sm text-muted-foreground space-y-1">
                  {box.lines.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
