"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import SchoolGallery from "@/components/SchoolGallery";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const genderData = [
  { name: "Girls", value: 75 },
  { name: "Boys", value: 78 },
];

const COLORS = ["#206FAC", "#9BBFE0"];

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
        <h2 className="text-2xl md:text-3xl font-semibold text-[#206FAC] mb-8 text-center">
          Message from the Vice Principal
        </h2>

        <div className="bg-[#f6fafd] p-6 sm:p-10 rounded-2xl shadow-sm border">
          <p className="leading-relaxed text-muted-foreground mb-6">
            I began my journey with Hunehar in early 2022 as a teacher and now
            proudly serve as the Vice Principal of Hunehar School. Driven by my
            passion for education and a commitment to empowering underprivileged
            children, I fully embraced Hunehar’s mission to provide quality
            education and foster holistic development.
          </p>

          <p className="leading-relaxed text-muted-foreground mb-6">
            Over the past years, I have collaborated with a dedicated team to
            create a nurturing learning environment where students can thrive.
            My focus remains on strengthening academic standards, supporting
            teachers, and building meaningful community engagement.
          </p>

          <p className="leading-relaxed text-muted-foreground mb-8">
            Looking ahead, I am hopeful about the future of Hunehar and the
            impact we can continue to create by empowering children through
            education.
          </p>

          <div className="mt-6">
            <p className="text-2xl text-[#206FAC] font-[cursive]">
              Aleena Naeem
            </p>
            <p className="text-sm text-muted-foreground">
              Vice Principal, Hunehar Welfare School
            </p>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#206FAC] mb-10 text-center">
          Facilities & Curriculum
        </h2>

        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Hunehar Welfare School follows Pakistan’s Single National Curriculum
            (SNC), ensuring standardized and structured education aligned with
            national academic requirements.
          </p>

          <ul className="space-y-3 text-muted-foreground list-disc list-inside">
            <li>
              English, Urdu, Mathematics, General Science, Islamiat, and Social
              Studies
            </li>
            <li>Age-appropriate learning outcomes for every grade</li>
            <li>Concept-based learning instead of rote memorization</li>
            <li>
              Moral, ethical, and Islamic values embedded in daily learning
            </li>
          </ul>
        </div>
      </section>

      {/* SCHOOL AT A GLANCE */}
      <section className="py-24 px-4 sm:px-6 bg-[#f7fbff]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#206FAC] mb-4">
            School at a Glance
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto mb-14">
            In the academic year 2025, Hunehar Welfare School continued to
            provide structured, accessible education through a balanced
            classroom environment and committed teaching staff.
          </p>

          {/* PRIMARY STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16">
            <div>
              <p className="text-4xl font-semibold text-[#206FAC]">153</p>
              <p className="text-sm text-muted-foreground mt-2">
                Students Enrolled
              </p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-[#206FAC]">10</p>
              <p className="text-sm text-muted-foreground mt-2">
                Dedicated Teachers
              </p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-[#206FAC]">15 : 1</p>
              <p className="text-sm text-muted-foreground mt-2">
                Student–Teacher Ratio
              </p>
            </div>
          </div>

          {/* GENDER PIE */}
          <div className="bg-white rounded-3xl py-14 px-6 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-[#206FAC] mb-6">
              Gender Distribution
            </h3>

            <div className="flex flex-col items-center">
              <div className="w-[220px] h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genderData}
                      dataKey="value"
                      innerRadius={65}
                      outerRadius={95}
                      paddingAngle={2}
                    >
                      {genderData.map((_, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="flex gap-8 mt-6 text-sm text-muted-foreground">
                <span>
                  <strong className="text-[#206FAC]">75</strong> Girls
                </span>
                <span>
                  <strong className="text-[#206FAC]">78</strong> Boys
                </span>
              </div>

              <p className="mt-6 text-sm text-muted-foreground max-w-xl">
                This balanced composition supports inclusive participation,
                confidence building, and equal learning opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SCHOOL GALLERY */}
      <SchoolGallery />
      {/* UMAIMA */}
      <section className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#206FAC] mb-10 text-center">
          Umaima’s Story
        </h2>

        <div className="bg-white border rounded-2xl p-6 sm:p-10 shadow-sm hover:shadow-xl transition">
          <p className="text-muted-foreground leading-relaxed mb-4">
            When Umaima first joined Hunehar, she was a young student with
            limited access to education and dreams she had not yet learned to
            name.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Through consistency, guidance, and belief, she completed her
            schooling and achieved 82% marks in Intermediate (FSc).
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Today, Umaima is pursuing Cyber Security at UET Islamabad.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            To support her continued journey, Hunehar gifted her a laptop and
            offered her a part-time role — empowering her academically and
            professionally.
          </p>

          <p className="font-medium text-[#206FAC] mt-6">
            From a classroom bench to a university campus — her journey reflects
            the purpose of Hunehar.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
