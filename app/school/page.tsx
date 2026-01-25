import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import SchoolGallery from "@/components/SchoolGallery";
import Image from "next/image";
import GenderChart from "@/components/GenderChart";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our School",
  description:
    "Hunehar Welfare School provides quality education to underprivileged children in Islamabad through a structured curriculum, dedicated teachers, and a nurturing learning environment.",

  openGraph: {
    title: "Our School | Hunehar Non Profit Charity Organisation",
    description:
      "Learn about Hunehar Welfare School, our curriculum, facilities, student impact, and our mission to empower underprivileged children through education in Pakistan.",
    url: "https://www.hunehar.org/school",
    siteName: "Hunehar",
    type: "website",
  },
};


export default function OurSchoolPage() {
  return (
    <main className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* HERO */}
      <section
        className="relative py-28 sm:py-36 px-4 sm:px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/school/Hunehar-children.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-[clamp(2rem,5vw,3.5rem)] font-bold text-white">
          Our School
        </h1>
      </section>

      {/* VP MESSAGE */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-[clamp(1.4rem,2.5vw,1.75rem)] font-semibold text-[#206FAC] mb-8 text-center">
          Message from the Vice Principal
        </h2>

        <div className="bg-[#f6fafd] p-6 sm:p-10 rounded-2xl shadow-sm border">
          <p className="leading-relaxed text-muted-foreground mb-6 text-[clamp(0.9rem,1.25vw,1rem)]">
            I began my journey with Hunehar in early 2022 as a teacher and now proudly serve as the Vice Principal of Hunehar School. Driven by my passion for education and a commitment to empowering underprivileged children, I fully embraced Hunehar’s mission to provide quality education and foster holistic development. Over the past years, I have collaborated with a dedicated team to create a nurturing learning environment where students can thrive.
          </p>

          <p className="leading-relaxed text-muted-foreground mb-6 text-[clamp(0.9rem,1.25vw,1rem)]">
            As Vice Principal, my focus is on enhancing educational standards, introducing innovative teaching methods, supporting teacher development, and strengthening community engagement. I firmly believe that every child deserves access to quality education and the opportunity to reach their full potential.
          </p>

          <p className="leading-relaxed text-muted-foreground mb-8 text-[clamp(0.9rem,1.25vw,1rem)]">
            Looking ahead, I am excited about Hunehar’s future and the positive changes we can bring to our community by working with its committed team to empower children through education and help them build brighter futures.
          </p>

          <div className="mt-6">
            <p className="text-2xl text-[#206FAC] font-[cursive]">
              Aleena Naeem
            </p>
            <p className="text-[clamp(0.9rem,1.25vw,1rem)] text-muted-foreground">
              Vice Principal, Hunehar Welfare School
            </p>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-[clamp(1.4rem,2.5vw,1.75rem)] font-semibold text-[#206FAC] mb-10 text-center">
          Facilities & Curriculum
        </h2>

        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm text-[clamp(0.9rem,1.25vw,1rem)] text-muted-foreground">
          <p className="leading-relaxed mb-6">
            Hunehar Welfare School follows Pakistan’s Single National Curriculum (SNC), ensuring that our students receive standardized, quality education aligned with national academic requirements. The curriculum emphasizes:
          </p>

          <ul className="space-y-3 list-disc list-inside">
            <li>Core subjects including English, Urdu, Mathematics, General Science, Islamiat, and Social Studies</li>
            <li>Age-appropriate learning outcomes for each grade level</li>
            <li>Concept-based understanding rather than rote learning</li>
            <li>Moral, ethical, and Islamic values integrated into daily learning</li>
          </ul>
        </div>
      </section>

      {/* SCHOOL AT A GLANCE */}
      <section className="py-24 px-4 sm:px-6 bg-[#f7fbff]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[clamp(1.4rem,2.5vw,1.75rem)] font-semibold text-[#206FAC] mb-4">
            School at a Glance
          </h2>

          <p className="text-[clamp(0.9rem,1.25vw,1rem)] text-muted-foreground max-w-3xl mx-auto mb-14">
            In the academic year 2025, Hunehar Welfare School continued to provide structured, accessible education through a balanced classroom environment and committed teaching staff.
          </p>

          {/* PRIMARY STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16 text-[clamp(0.9rem,1.25vw,1rem)]">
            <div>
              <p className="text-4xl sm:text-[clamp(2rem,4vw,3rem)] font-semibold text-[#206FAC]">153</p>
              <p className="mt-2">Students Enrolled</p>
            </div>

            <div>
              <p className="text-4xl sm:text-[clamp(2rem,4vw,3rem)] font-semibold text-[#206FAC]">10</p>
              <p className="mt-2">Dedicated Teachers</p>
            </div>

            <div>
              <p className="text-4xl sm:text-[clamp(2rem,4vw,3rem)] font-semibold text-[#206FAC]">15 : 1</p>
              <p className="mt-2">Student-Teacher Ratio</p>
            </div>
          </div>

          {/* GENDER PIE */}
          <div className="bg-white rounded-3xl py-10 px-5 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-[clamp(1.4rem,2.5vw,1.75rem)] font-semibold text-[#206FAC] mb-6">
              Gender Distribution
            </h3>

            <div className="flex flex-col items-center">
              <div className="w-full max-w-[250px] h-auto">
                <GenderChart />
              </div>

              <div className="flex gap-8 mt-6 text-[clamp(0.9rem,1.25vw,1rem)] text-muted-foreground">
                <span>
                  <strong className="text-[#f79dc6]">75</strong> Girls
                </span>
                <span>
                  <strong className="text-[#206FAC]">78</strong> Boys
                </span>
              </div>

              <p className="mt-6 max-w-xl text-[clamp(0.9rem,1.25vw,1rem)] text-muted-foreground">
                This balanced ratio allows teachers to provide individual attention and maintain a supportive learning atmosphere for every child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL GALLERY */}
      <SchoolGallery />

      {/* UMAIMA */}
      <section className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-[clamp(1.4rem,2.5vw,1.75rem)] font-semibold text-[#206FAC] mb-10 text-center">
          Meet Umaima Iqbal
        </h2>

        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm hover:shadow-xl transition flex flex-col md:flex-row items-center gap-8">
          {/* IMAGE */}
          <div className="md:w-1/2 w-full relative rounded-xl overflow-hidden">
            <Image
              src="/images/school/Umaima-Hunehar.webp"
              alt="Umaima at Hunehar"
              width={500}
              height={400}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* TEXT */}
          <div className="md:w-1/2 w-full text-muted-foreground text-[clamp(0.9rem,1.25vw,1rem)]">
            <p className="leading-relaxed mb-4">
              Umaima joined Hunehar in Class 4, at a time when access to education was uncertain for her family. From those early years, Hunehar supported her and her siblings, becoming a steady presence in their lives.
            </p>

            <p className="leading-relaxed mb-4">
              As she grew, so did her connection with the school. Within the classrooms of Hunehar, Umaima found guidance, encouragement, and a space where learning felt possible. With the support of her teachers and her own commitment, she completed her schooling and continued toward higher education.
            </p>

            <p className="leading-relaxed mb-4">
              Her efforts were reflected in her Intermediate results, where she secured 82% marks in FSc. This achievement opened the door for her to pursue a Bachelor’s degree in Cyber Security at UET Islamabad.
            </p>

            <p className="leading-relaxed mb-4">
              As she takes this new step, Hunehar continues to support her by providing a laptop for her studies and offering her a part-time role within the organization.
            </p>

            <p className="font-medium text-[#206FAC] mt-6">
              Now both a university student and a member of the Hunehar team, Umaima’s journey reflects what steady support, trust, and care can nurture over time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
