"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { PortableText } from '@portabletext/react'
import { client } from "@/sanity/lib/client";

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;

    client.fetch(
      `
      *[_type == "article" && slug.current == $slug][0]{
        title,
        author,
        publishedAt,
        content,
        image{asset->{url}},
        pdf{asset->{url}}
      }
      `,
      { slug }
    ).then(setArticle);
  }, [slug]);

  if (!article) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading article...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* IMAGE */}
        {article.image?.asset?.url && (
          <div className="relative w-full h-[420px] mb-10 rounded-xl overflow-hidden">
            <Image
              src={article.image.asset.url}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#206FAC] mb-2">
          {article.title}
        </h1>

        {/* META */}
        <p className="text-sm text-gray-500 mb-8">
          Written by {article.author}
          {article.publishedAt &&
            ` • ${new Date(article.publishedAt).toLocaleDateString()}`}
        </p>

        {/* CONTENT */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
  <div className="font-poppins text-gray-800">
    <PortableText
      value={article.content}
      components={{
        block: {
          normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
          h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
          h4: ({ children }) => <h4 className="text-xl text-[#206FAC] font-semibold mt-6 mb-3">{children}</h4>,
        },
        list: {
          bullet: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
          number: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
        },
        listItem: {
          bullet: ({ children }) => <li className="mb-2">{children}</li>,
          number: ({ children }) => <li className="mb-2">{children}</li>,
        },
      }}
    />
  </div>
</section>


        {/* DOWNLOAD */}
        {article.pdf?.asset?.url && (
          <a
            href={article.pdf.asset.url}
            download
            className="inline-block px-6 py-3 bg-[#206FAC] text-white rounded-lg hover:bg-[#185a8f]"
          >
            Download PDF
          </a>
        )}

      </main>

      <Footer />
    </>
  );
}
