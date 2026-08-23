import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Explore the impact of Hunehar’s education and welfare initiatives. From schooling and youth development to healthcare camps, Ramadan drives, and community programs, see how we work to uplift underprivileged families in Pakistan.",
};

const PROGRAMS = [
  {
    title: "Health & wellbeing",
    points: [
      "Dental and medical camps",
      "COVID-19 vaccination drives",
      "Mental health awareness sessions",
      "Hospital exposure visits",
    ],
    images: [
      { src: "/images/impact/Hunehar-Dental-Camp3.webp", alt: "A dental camp for students" },
      { src: "/images/impact/Hunehar-Handwash.webp", alt: "Handwashing awareness session" },
      { src: "/images/impact/Covid-vaccination3.webp", alt: "COVID-19 vaccination drive" },
      { src: "/images/impact/Hunehar-Hospital-Visit.webp", alt: "Hospital exposure visit" },
    ],
  },
  {
    title: "Learning beyond the classroom",
    points: [
      "Literary and creative workshops",
      "Sports days and team-building activities",
      "Environmental awareness programs",
      "Educational trips and exhibitions",
    ],
    images: [
      { src: "/images/impact/HuneharSportsDay2.webp", alt: "Sports day", span: true },
      { src: "/images/impact/plant-trees-Hunehar.webp", alt: "Tree planting activity" },
      { src: "/images/impact/Hunehar-Field-Trip.webp", alt: "Educational field trip" },
    ],
  },
  {
    title: "Youth & future builders",
    points: [
      "Virtual internship programs",
      "Career and skills workshops",
      "University student engagement",
      "Leadership and community service exposure",
    ],
    images: [
      { src: "/images/impact/Hunehar-Internship1.webp", alt: "Internship programme session" },
      { src: "/images/impact/Team-WorthAWhile.webp", alt: "Volunteer team" },
      { src: "/images/impact/virtualinternship.webp", alt: "Virtual internship" },
      { src: "/images/impact/internship-speaker.webp", alt: "Guest speaker at an internship session" },
    ],
  },
  {
    title: "Ramadan & community support",
    points: [
      "Ramadan ration drives",
      "Annual iftar dinners",
      "Eid clothes and gifts distribution",
    ],
    images: [
      { src: "/images/impact/Ramadan-Ration-Drive2.webp", alt: "Ramadan ration drive", span: true },
      { src: "/images/impact/Hunehar-Annual-Iftar-Dinner.webp", alt: "Annual iftar dinner" },
      { src: "/images/impact/ramadan-iftar.webp", alt: "Iftar with the community" },
    ],
  },
  {
    title: "Fundraisers & community events",
    points: [
      "Musical nights",
      "Drum circles and match screenings",
      "Bake sales and community drives",
    ],
    images: [
      { src: "/images/impact/Hunehar-Drum-Circle.webp", alt: "Drum circle fundraiser" },
      { src: "/images/impact/Hunehar-bake-sale.webp", alt: "Bake sale" },
      { src: "/images/impact/matchscreening1.webp", alt: "Match screening event" },
      { src: "/images/impact/matchscreening2.webp", alt: "Match screening crowd" },
    ],
  },
];

export default function Impact() {
  return (
    <main className="bg-white text-brand-navy">
      <Navbar />

      {/* HERO */}
      <section className="container-brand pt-12 sm:pt-16 lg:pt-24 pb-10 sm:pb-14 lg:pb-16">
        <h1 className="text-[clamp(2.2rem,8vw,3.1rem)] lg:text-[clamp(3.2rem,5vw,4.6rem)] font-bold leading-[1.05] tracking-tight mb-6">
          Bigger than the classroom
        </h1>
        <p className="text-[1.0625rem] lg:text-[1.1875rem] leading-[1.75] text-brand-muted max-w-[38em] text-pretty">
          We started Hunehar because we believe quality education shouldn’t
          have a price tag, especially for the kids here in Islamabad. But as
          we grew, we realized our mission was bigger than the classroom.
          Today, we’re just as focused on empowering parents and
          strengthening our community as we are on teaching math or science.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="container-brand pb-16 sm:pb-20 lg:pb-28">
        <figure className="m-0 rounded-2xl lg:rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-[21/9] bg-brand-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/impact/Hunehar-Students.webp"
            alt="Hunehar students"
            className="w-full h-full object-cover block"
          />
        </figure>
      </section>

      {/* PROGRAMS */}
      {PROGRAMS.map((program, i) => {
        const isReversed = i % 2 !== 0;

        return (
          <section
            key={program.title}
            className={isReversed ? "bg-brand-bg" : "bg-white"}
          >
            <div className="container-brand section-y-lg">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                  <h2 className="text-2xl lg:text-[2rem] font-bold leading-[1.12] tracking-tight mb-6">
                    {program.title}
                  </h2>
                  <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
                    {program.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3.5 text-[1.0625rem] leading-[1.6] text-brand-muted"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 flex-none" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`grid grid-cols-2 gap-4 lg:gap-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {program.images.map((image) => (
                    <figure
                      key={image.src}
                      className={`m-0 overflow-hidden rounded-[20px] aspect-square bg-brand-border ${
                        image.span ? "col-span-2" : ""
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-full object-cover block"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="container-brand py-16 sm:py-20 lg:py-28 text-center">
        <h2 className="text-heading-2 max-w-[24em] mx-auto mb-8 text-balance">
          Contribute to our impact. Every rupee counts.
        </h2>
        <div className="flex flex-wrap gap-3.5 justify-center">
          <Button asChild variant="brand" size="brand-lg">
            <Link href="/get-involved/donate">Sponsor a child</Link>
          </Button>
          <Button
            asChild
            variant="brand-light"
            size="brand-lg"
            className="bg-brand-bg hover:bg-brand-border"
          >
            <Link href="/get-involved/volunteer">Volunteer</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
