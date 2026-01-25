import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories & Reports",
  description:
    "Explore Hunehar’s stories, articles, and annual reports highlighting our impact in providing education and welfare support to underprivileged children across Pakistan.",

  openGraph: {
    title: "Stories & Reports | Hunehar Non Profit Charity Organisation",
    description:
      "Read real stories from Hunehar and access our annual reports showcasing transparency, impact, and our commitment to education for underprivileged children.",
    url: "https://www.hunehar.org/stories",
    siteName: "Hunehar",
    type: "website",
  },
};


export default async function StoriesReportsPage() {
  const articles = await client.fetch(`
    *[_type == "article"] | order(publishedAt desc){
      _id,
      title,
      slug,
      pdf{asset->{url}},
      publishedAt
    }
  `);

  const reports = await client.fetch(`
    *[_type == "annualReport"] | order(year desc){
      _id,
      title,
      year,
      pdf{asset->{url}}
    }
  `);

  return (
    <main className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* HERO */}
      <section
        className="relative py-28 sm:py-36 px-4 sm:px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/stories/Stories-Hero-Pic2.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-[clamp(2rem,5vw,3.5rem)] font-bold text-white">
          Stories & Reports
        </h1>
      </section>

      {/* ARTICLES */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
        <h2 className="text-[clamp(1.4rem,2.5vw,1.75rem)] font-semibold text-[#206FAC] mb-6">
          Articles
        </h2>

        <ul className="space-y-4">
          {articles.map((a: any) => (
            <li
              key={a._id}
              className="border p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              {/* ARTICLE TITLE */}
              <Link
                href={`/stories/articles/${a.slug.current}`}
                target="_blank"
                className="font-medium text-[#206FAC] text-[clamp(0.9rem,1.25vw,1rem)] hover:underline"
              >
                {a.title}
              </Link>

              {/* PDF */}
              {a.pdf?.asset?.url && (
                <a
                  href={a.pdf.asset.url}
                  download
                  className="text-[clamp(0.85rem,1.2vw,0.95rem)] text-gray-600 hover:underline whitespace-nowrap"
                >
                  Download PDF
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ANNUAL REPORTS */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
        <h2 className="text-[clamp(1.4rem,2.5vw,1.75rem)] font-semibold text-[#206FAC] mb-6">
          Annual Reports
        </h2>

        <ul className="space-y-4">
          {reports.map((r: any) => (
            <li
              key={r._id}
              className="border p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <span className="font-medium text-[#206FAC] text-[clamp(0.9rem,1.25vw,1rem)]">
                {r.title} ({r.year})
              </span>

              <a
                href={r.pdf.asset.url}
                target="_blank"
                download
                className="text-[clamp(0.85rem,1.2vw,0.95rem)] text-gray-600 hover:underline whitespace-nowrap"
              >
                View / Download
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
