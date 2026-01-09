import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <main className="bg-white text-gray-700">
      <Navbar />

      {/* HERO */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#206FAC] mb-6">
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            Hunehar exists to ensure that no child is denied education because
            of circumstances beyond their control. What began as a small effort
            has grown into a promise we continue to uphold every day.
          </p>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#206FAC] mb-6">
              Message from the Founder
            </h2>
            <blockquote className="text-gray-600 leading-relaxed border-l-4 border-[#206FAC] pl-6 italic">
              “It’s so heartwarming whenever we receive a donation, sponsorship,
              or volunteering application, allowing us to help those facing
              financial hardships. You are the reason children start school,
              continue their studies, and experience new possibilities in life.
              Thank you for believing in them.”
            </blockquote>

            <p className="mt-6 font-semibold text-gray-800">Mian Samiuddin</p>
            <p className="text-sm text-gray-500">Founder & Chairman</p>
          </div>

          <div className="w-full h-80 bg-gray-200 rounded-2xl shadow-inner flex items-center justify-center text-gray-500">
            Founder Image
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#206FAC] mb-12 text-center">
            Our Story
          </h2>

          <div className="max-w-4xl mx-auto space-y-10 border-l-2 border-[#206FAC] pl-8">
            <div>
              <h3 className="font-semibold text-lg text-[#206FAC]">
                2012 — A Beginning
              </h3>
              <p className="text-gray-600 mt-2">
                Hunehar began with a simple concern: too many children were
                being left behind because education was out of reach.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#206FAC]">
                Supporting Students
              </h3>
              <p className="text-gray-600 mt-2">
                We initially sponsored children already enrolled in schools,
                covering fees, uniforms, stationery, and learning resources.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#206FAC]">
                2017 — The Hunehar Welfare School
              </h3>
              <p className="text-gray-600 mt-2">
                As needs grew, we opened The Hunehar Welfare School in
                Mehrabadi, Islamabad, providing free, quality education in a
                safe environment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#206FAC]">Today</h3>
              <p className="text-gray-600 mt-2">
                We educate children up to Grade 5 and continue supporting them
                beyond our school by helping secure admissions and sponsorships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-gray-50 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#206FAC] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To ensure that every child, regardless of background, can exercise
              their right to quality education, emotional well-being, and
              economic empowerment.
            </p>
          </div>

          <div className="p-10 bg-gray-50 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#206FAC] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A Pakistan where no child is left behind, and where education is
              not a privilege but a promise fulfilled.
            </p>
          </div>
        </div>
      </section>

      {/* LEGAL STATUS */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-[#206FAC] mb-4">
            Legal Status & Registration
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Hunehar is registered as a Foundation with the Securities and
            Exchange Commission of Pakistan (SECP) and operates under the ICT
            Act 2020. Details regarding compliance are available in our Terms &
            Conditions.
          </p>
        </div>
      </section>

      {/* HUNEHAR WELFARE SCHOOL */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#206FAC] mb-6 text-center">
            Hunehar Welfare School
          </h2>

          <p className="max-w-4xl mx-auto text-center text-gray-600 mb-14">
            Since 2017, Hunehar Welfare School has enrolled over 200 children
            from Mehrabadi and surrounding communities, offering education from
            Play Group to Grade 5, with plans to expand annually.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Classrooms", "Library", "Computer Lab", "Playground"].map(
              (item) => (
                <div
                  key={item}
                  className="h-48 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 shadow-sm"
                >
                  {item} Image
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#206FAC] mb-12 text-center">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm text-center"
              >
                <div className="w-full h-40 bg-gray-200 rounded-xl mb-4" />
                <p className="font-semibold text-gray-800">Team Member Name</p>
                <p className="text-sm text-gray-500">Department / Role</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
