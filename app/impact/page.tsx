import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import PolaroidStack from "@/components/PolaroidStack";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Explore the impact of Hunehar’s education and welfare initiatives. From schooling and youth development to healthcare camps, Ramadan drives, and community programs, see how we work to uplift underprivileged families in Pakistan.",
};

export default function Impact() {
  const sections = [
    {
      title: "Health & Wellbeing",
      points: [
        "Dental and medical camps",
        "COVID-19 vaccination drives",
        "Mental health awareness sessions",
        "Hospital exposure visits",
      ],
      images: [
        "/images/impact/Hunehar-Dental-Camp3.webp",
        "/images/impact/Hunehar-Handwash.webp",
        "/images/impact/Covid-vaccination3.webp",
        "/images/impact/Hunehar-Hospital-Visit.webp",
      ],
    },
    {
      title: "Learning Beyond the Classroom",
      points: [
        "Literary and creative workshops",
        "Sports days and team-building activities",
        "Environmental awareness programs",
        "Educational trips and exhibitions",
      ],
      images: [
        "/images/impact/plant-trees-Hunehar.webp",
        "/images/impact/Hunehar-student-reading.webp",
        "/images/impact/HuneharSportsDay2.webp",
        "/images/impact/Hunehar-Activity2.webp",
        "/images/impact/Hunehar-Face-Paint.webp",
        "/images/impact/SaveTheEarthHunehar.webp",
        "/images/impact/Hunehar-Field-Trip.webp",
      ],
    },
    {
      title: "Youth & Future Builders",
      points: [
        "Virtual internship programs",
        "Career and skills workshops",
        "University student engagement",
        "Leadership and community service exposure",
      ],
      images: [
        "/images/impact/Hunehar-Internship1.webp",
        "/images/impact/Team-WorthAWhile.webp",
        "/images/impact/Open-guides-1.webp",
        "/images/impact/virtualinternship.webp",
        "/images/impact/Internship-speaker.webp",
      ],
    },
    {
      title: "Ramadan & Community Support",
      points: [
        "Ramadan ration drives",
        "Annual iftar dinners",
        "Eid clothes and gifts distribution",
      ],
      images: [
        "/images/impact/Ramadan-Ration-Drive2.webp",
        "/images/impact/Hunehar-Annual-Iftar-Dinner.webp",
        "/images/impact/ramadan-iftar.webp",
      ],
    },
    {
      title: "Fundraisers & Community Events",
      points: [
        "Musical nights",
        "Drum circles and match screenings",
        "Bake sales and community drives",
      ],
      images: [
        "/images/impact/Hunehar-Drum-Circle.webp",
        "/images/impact/Hunehar-bake-sale.webp",
        "/images/impact/matchscreening2.webp",
        "/images/impact/matchscreening1.webp",
      ],
    },
  ];

  return (
    <main className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* HERO */}
      <section
        className="relative py-28 sm:py-32 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/impact/Hunehar-Students.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-white">
          Our Impact
        </h1>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-[clamp(1rem,1.6vw,1.125rem)] md:text-lg leading-relaxed text-muted-foreground">
          We started Hunehar because we believe quality education shouldn't have
          a price tag, especially for the kids here in Islamabad. But as we
          grew, we realized our mission was bigger than the classroom. Today,
          we’re just as focused on empowering parents and strengthening our
          community as we are on teaching math or science. We’re building a
          culture of support where everyone has the chance to rise.
        </p>
      </section>

      {/* Sections */}
      {sections.map((section, i) => {
        const isReversed = i % 2 !== 0;

        return (
          <section
            key={i}
            className={`px-6 ${
              isReversed ? "bg-secondary" : ""
            } py-[1rem] sm:py-[3rem]`}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
              {/* Images */}
              <div className={isReversed ? "md:order-2" : "md:order-1"}>
                <PolaroidStack images={section.images} />
              </div>

              {/* Text */}
              <div
                className={`${
                  isReversed ? "md:order-1 md:justify-end" : "md:order-2 md:justify-start"
                } md:flex`}
              >
                <div className="max-w-md">
                  <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-[#206FAC] mb-4">
                    {section.title}
                  </h2>

                  <ul className="space-y-2 text-[clamp(0.95rem,1.6vw,1.05rem)] text-muted-foreground leading-relaxed">
                    {section.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </main>
  );
}
