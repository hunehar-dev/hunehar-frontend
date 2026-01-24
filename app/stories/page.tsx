import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

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
    <main>
      <Navbar />

      <section className="py-28 text-center bg-[#f7fbff]">
        <h1 className="text-3xl font-bold text-[#206FAC]">
          Stories & Reports
        </h1>
      </section>

      {/* ARTICLES */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-[#206FAC] mb-6">
          Articles
        </h2>

        <ul className="space-y-4">
          {articles.map((a: any) => (
            <li key={a._id} className="border p-4 rounded-lg flex justify-between items-center">

              {/* OPEN ARTICLE PAGE */}
              <Link
                href={`/stories/articles/${a.slug.current}`}
                target="_blank"
                className="font-medium text-[#206FAC]"
              >
                {a.title}
              </Link>

              {/* DOWNLOAD PDF */}
              {a.pdf?.asset?.url && (
                <a
                  href={a.pdf.asset.url}
                  download
                  className="text-sm text-gray-600 hover:underline"
                >
                  Download PDF
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ANNUAL REPORTS */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-[#206FAC] mb-6">
          Annual Reports
        </h2>

        <ul className="space-y-4">
          {reports.map((r: any) => (
            <li key={r._id} className="border p-4 rounded-lg flex justify-between items-center">
              <span className="font-medium text-[#206FAC]">
                {r.title} ({r.year})
              </span>

              <a
                href={r.pdf.asset.url}
                target="_blank"
                download
                className="text-sm text-gray-600 hover:underline"
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
