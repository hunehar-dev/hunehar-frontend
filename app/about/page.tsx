import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <main className="bg-white text-gray-700">
      <Navbar />

      {/* HERO */}
      <section
        className="relative bg-cover bg-center h-[60vh]"
        style={{
          backgroundImage: "url('/images/about/Hunehar-Welfare-School.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        {/* 40% opacity black overlay */}
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold mb-4 tracking-tight drop-shadow-lg">
            About Us
          </h1>

          <p className="text-sm md:text-base max-w-3xl leading-relaxed drop-shadow-md">
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
            Since 2017, Hunehar Welfare School has enrolled over 300 children
            from Mehrabadi and surrounding communities, offering education from
            Play Group to Grade 5, with plans to expand annually.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Classrooms */}
            <div className="h-48 bg-gray-200 rounded-2xl flex items-center justify-center shadow-sm overflow-hidden">
              <img
                src="/images/about/Hunehar-classroom.webp"
                alt="Classrooms"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Library */}
            <div className="h-48 bg-gray-200 rounded-2xl flex items-center justify-center shadow-sm overflow-hidden">
              <img
                src="/images/about/Hunehar-Students.webp"
                alt="Student in a Classroom"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Computer Lab */}
            <div className="h-48 bg-gray-200 rounded-2xl flex items-center justify-center shadow-sm overflow-hidden">
              <img
                src="/images/about/Hunehar-computer-lab.webp"
                alt="Computer Lab"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Playground */}
            <div className="h-48 bg-gray-200 rounded-2xl flex items-center justify-center shadow-sm overflow-hidden">
              <img
                src="/images/about/Hunehar-children-playing.webp"
                alt="Playground"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          {/* SECTION TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#206FAC] mb-16 text-center">
            Meet Our Team
          </h2>

          {/* ================= LEADERSHIP ================= */}
          <div className="mb-20">
            <h3 className="text-xl font-semibold text-center mb-10">
              Leadership
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto flex-center">
              {/* President */}
              <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                <a
                  href="https://www.linkedin.com/in/hareem-fatima-9a5434166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/team/president.jpg"
                    alt="Hunehar President - Hareem Fatima"
                    className="w-full h-48 object-cover rounded-xl mb-6 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="text-lg font-semibold text-gray-800">
                  Hareem Fatima
                </p>
                <p className="text-sm text-gray-500">President</p>
              </div>

              {/* Vice President */}
              <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                <a
                  href="https://linkedin.com/in/vp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/team/vp.jpg"
                    alt="Hunehar Vice President - Zain Ilyas"
                    className="w-full h-48 object-cover rounded-xl mb-6 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="text-lg font-semibold text-gray-800">
                  Zain Ilyas
                </p>
                <p className="text-sm text-gray-500">Vice President</p>
              </div>
            </div>
          </div>

          {/* ================= DIRECTORS ================= */}
          <div className="mb-20">
            <h3 className="text-xl font-semibold text-center mb-10">
              Department Directors
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Director 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="https://www.linkedin.com/in/haniya-ali-503722226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/about/Haniya.webp"
                    alt="Hunehar Director HR - Haniya Ali"
                    className="flex w-3/4 mx-auto object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">Haniya Ali</p>
                <p className="text-sm text-gray-500">Director HR</p>
              </div>

              {/* Director 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="https://www.linkedin.com/in/dr-bushra-tabbasum-a0a8a0268/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/team/director2.jpg"
                    alt="Hunehar Director Liaison - Bushra Tabassum"
                    className="w-full h-40 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">Bushra Tabassum</p>
                <p className="text-sm text-gray-500">Director Liaison</p>
              </div>

              {/* Director 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="https://www.linkedin.com/in/hania-tahir-92572b203/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/team/director2.jpg"
                    alt="Hunehar Director Finance - Hania Tahir"
                    className="w-full h-40 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">Hania Tahir</p>
                <p className="text-sm text-gray-500">Director Finance</p>
              </div>

              {/* Director 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="https://www.linkedin.com/in/muhammad-bin-sanaullah/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/about/Muhammad.webp"
                    alt="Hunehar Director Publications - Sanauallah"
                    className="flex w-3/4 mx-auto object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">
                  Muhammad Sanauallah
                </p>
                <p className="text-sm text-gray-500">Director Publications</p>
              </div>

              {/* Director 5 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="https://linkedin.com/in/director2-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/about/Wardah.webp"
                    alt="Hunehar Director Philanthropy - Wardah Muzammil"
                    className="flex w-3/4 mx-auto object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">Wardah Muzammil</p>
                <p className="text-sm text-gray-500">Director Philanthropy</p>
              </div>

              {/* Director 6 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="https://www.linkedin.com/in/sumaima-ilyas-1a7618285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/team/director2.jpg"
                    alt="Hunehar Director SMR - Sumaima Ilyas"
                    className="w-full h-40 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">Sumaima Ilyas</p>
                <p className="text-sm text-gray-500">
                  Director Social Media Relations
                </p>
              </div>

              {/* Director 7 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="https://www.linkedin.com/in/rameen-bajwa-88135725a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/team/director2.jpg"
                    alt="Hunehar Director R&D - Rameen Bajwa"
                    className="w-full h-40 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">Rameen Bajwa</p>
                <p className="text-sm text-gray-500">Director R&D</p>
              </div>
            </div>
          </div>

          {/* ================= ASSISTANT DIRECTORS ================= */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-10">
              Assistant Directors
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Assistant Director 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="www.linkedin.com/in/aqib-irfan-b77b43284"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/team/assistant1.jpg"
                    alt="Hunehar AD HR - Aqib Irfan"
                    className="w-full h-40 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">Aqib Irfan</p>
                <p className="text-sm text-gray-500">Assistant Director HR</p>
              </div>

              {/* Assistant Director 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="https://linkedin.com/in/assistant2-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/about/Fareha.webp"
                    alt="Hunehar AD Liaison - Fareha Meraj"
                    className="flex w-3/4 mx-auto object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">Fareha Meraj</p>
                <p className="text-sm text-gray-500">
                  Assistant Director Liaison
                </p>
              </div>

              {/* Assistant Director 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="https://linkedin.com/in/syeda-farheen-masroor-b9a5b6285"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/about/Syeda.webp"
                    alt="Hunehar AD Publications - Farheen"
                    className="flex w-3/4 mx-auto object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">
                  Syeda Farheen Masroor
                </p>
                <p className="text-sm text-gray-500">
                  Assistant Director Publications
                </p>
              </div>

              {/* Assistant Director 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <img
                  src="/images/team/assistant2.jpg"
                  alt="Hunehar AD Philanthropy - Faqaha"
                  className="w-full h-40 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                />
                <p className="font-semibold text-gray-800">Faqaha Asif</p>
                <p className="text-sm text-gray-500">
                  Assistant Director Philanthropy
                </p>
              </div>

              {/* Assistant Director 5 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="https://www.linkedin.com/in/malala-khan-4a1138242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/team/assistant2.jpg"
                    alt="Hunehar AD SMR - Malala Khan"
                    className="w-full h-40 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">Malala Khan</p>
                <p className="text-sm text-gray-500">
                  Assistant Director Social Media Relations
                </p>
              </div>

              {/* Assistant Director 6 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <a
                  href="https://www.linkedin.com/in/hannia-malik-98593036b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/team/assistant2.jpg"
                    alt="Hunehar AD R&D - Hannia Faisal"
                    className="w-full h-40 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="font-semibold text-gray-800">Hannia Faisal</p>
                <p className="text-sm text-gray-500">Assistant Director R&D</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
