import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hunehar, a non-profit charity organisation founded in 2012 dedicated to empowering underprivileged children through education, welfare initiatives, and community development in Pakistan.",

  openGraph: {
    title: "About Hunehar | Non Profit Charity Organisation",
    description:
      "Since 2012, Hunehar has worked to ensure no child is denied education due to financial hardship. Discover our mission, vision, and journey.",
    url: "https://www.hunehar.org/about",
    siteName: "Hunehar",
    type: "website",
  },
};


export default function About() {
  return (
    <main className="bg-white text-brand-navy">
      <Navbar />

      {/* HERO */}
      <section
        className="relative bg-cover bg-center h-[60vh]"
        style={{
          backgroundImage: "url('/images/about/Hunehar-Welfare-School.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-navy-soft/60"></div>
        <div className="relative z-10 container-brand flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-heading-1 mb-4">About Us</h1>

          <p className="text-sm md:text-base max-w-3xl leading-relaxed">
            Hunehar exists to ensure that no child is denied education because
            of circumstances beyond their control. What began as a small effort
            has grown into a promise we continue to uphold every day.
          </p>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="section-y-lg">
        <div className="container-brand grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-heading-3 mb-6">
              Message from the Founder
            </h2>
            <blockquote className="text-sm md:text-base text-brand-muted leading-relaxed border-l-4 border-brand-blue pl-6 italic">
              “It’s so heartwarming whenever we receive a donation, sponsorship,
              or volunteering application, allowing us to help those facing
              financial hardships. You are the reason children start school,
              continue their studies, and experience new possibilities in life.
              <br />
              Thank you for believing in them.”
            </blockquote>

            <p className="mt-6 font-semibold text-brand-navy">Mian Samiuddin</p>
            <p className="text-sm md:text-base leading-relaxed text-brand-muted">
              Founder & Chairman
            </p>
          </div>

          <div className="flex items-center justify-center overflow-hidden">
            <img
              src="/images/about/Sami-ud-Din.webp"
              alt="Founder of Hunehar"
              height={300}
              width={400}
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-brand-bg section-y-lg">
        <div className="container-brand">
          <h2 className="text-heading-3 mb-12 text-center">
            Our Story
          </h2>

          <div className="max-w-4xl mx-auto space-y-10 border-l-2 border-brand-blue pl-8">
            <div>
              <h3 className="text-heading-4">
                2012 - Our Beginning
              </h3>
              <p className="text-sm md:text-base text-brand-muted leading-relaxed mt-2">
                Hunehar began in 2012 with a simple concern: too many children
                around us were being left behind because education was out of
                reach.
              </p>
            </div>

            <div>
              <h3 className="text-heading-4">
                Early Years
              </h3>
              <p className="text-sm md:text-base text-brand-muted leading-relaxed mt-2">
                In the early years, we supported children already enrolled in
                local schools by sponsoring their education. We helped with
                school fees, uniforms, stationery, and learning resources, so
                they could continue studying without burdening their families.
              </p>
            </div>

            <div>
              <h3 className="text-heading-4">
                2017 - The Hunehar Welfare School
              </h3>
              <p className="text-sm md:text-base text-brand-muted leading-relaxed mt-2">
                As needs grew, we opened The Hunehar Welfare School in
                Mehrabadi, Islamabad, providing free, quality education in a
                safe environment.
              </p>
            </div>

            <div>
              <h3 className="text-heading-4">
                Today
              </h3>
              <p className="text-sm md:text-base text-brand-muted leading-relaxed mt-2">
                We educate children up to Grade 6 and continue supporting them
                beyond our school by helping secure admissions and sponsorships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-y-lg">
        <div className="container-brand grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-brand-bg rounded-2xl shadow-sm">
            <h2 className="text-heading-4 mb-4">
              Our Mission
            </h2>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              To ensure that every child, regardless of background, can exercise
              their right to quality education, emotional well-being, and
              economic empowerment.
            </p>
          </div>

          <div className="p-10 bg-brand-bg rounded-2xl shadow-sm">
            <h2 className="text-heading-4 mb-4">
              Our Vision
            </h2>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              A Pakistan where no child is left behind, and where education is
              not a privilege but a promise fulfilled.
            </p>
          </div>
        </div>
      </section>

      {/* LEGAL STATUS */}
      <section className="bg-brand-bg section-y-lg">
        <div className="container-brand max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* SECP Badge */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 bg-white rounded-2xl shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src="/images/about/SECP.webp"
                  alt="Registered with SECP Pakistan"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-heading-3 mb-4">
                Legal Status & Registration
              </h2>
              <p className="text-sm md:text-base text-brand-muted leading-relaxed max-w-xl">
                Hunehar is registered as a Foundation with the Securities and
                Commission of Pakistan (SECP) and operates under the ICT Act 2020. 
                Details regarding compliance are available in our{" "}
                <Link href="/terms" className="text-brand-blue hover:underline">
                  Terms & Conditions
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HUNEHAR WELFARE SCHOOL */}
      <section className="section-y-lg bg-white">
        <div className="container-brand">
          {/* Heading */}
          <h2 className="text-heading-3 mb-6 text-center">
            Hunehar Welfare School
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-justify text-sm md:text-base text-brand-muted leading-relaxed space-y-6 mb-16 leading-relaxed">
            <p>
              Since 2017, Hunehar Welfare School has enrolled over 200 children
              from Mehrabadi and surrounding communities, providing them with
              free, quality education in a safe and nurturing environment.
            </p>

            <p>
              We currently offer eight grades: Play Group, Nursery,
              Kindergarten, and Grades 1 through 6. Each year, we aim to add one
              grade, with the long-term goal of educating our students through
              to Matriculation.
            </p>

            <p>
              We strongly believe in empowering women through meaningful
              employment. Our faculty is entirely female and trained under the
              mentorship of Ms. Saima Rehman, Principal of Roots School System.
              Teaching follows the guidelines of the National Curriculum Council
              (NCC), ensuring quality and consistency.
            </p>
          </div>

          {/* Campus Includes */}
          <h3 className="text-[clamp(1.4rem,2.4vw,1.8rem)] font-semibold text-brand-blue mb-10 text-center">
            Our Campus Includes
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card */}
            {[
              {
                src: "/images/about/Hunehar-classroom.webp",
                alt: "Designated Classrooms",
                label: "Designated Classrooms",
              },
              {
                src: "/images/about/Hunehar-Library.webp",
                alt: "School Library",
                label: "Library",
              },
              {
                src: "/images/about/Hunehar-computer-lab.webp",
                alt: "Computer Lab",
                label: "Computer Lab",
              },
              {
                src: "/images/about/playground.webp",
                alt: "Hunehar Playground",
                label: "Playground",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-brand-bg rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Image wrapper */}
                <div className="relative w-full aspect-[4/3] bg-brand-border">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="
            absolute inset-0 w-full h-full
            object-contain
            md:object-cover
            transition-all duration-300
          "
                  />
                </div>

                <p className="py-4 text-center font-medium text-brand-navy">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-brand-bg section-y-lg">
        <div className="container-brand">
          {/* SECTION TITLE */}
          <h2 className="text-heading-3 mb-16 text-center">
            Meet Our Team
          </h2>

          {/* ================= LEADERSHIP ================= */}
          <div className="mb-20">
            <h3 className="text-heading-4 text-center mb-10">
              Leadership
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
              {/* President */}
              <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                <a
                  href="https://www.linkedin.com/in/hareem-fatima-9a5434166"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-40 aspect-square mx-auto mb-6 overflow-hidden rounded-full">
                    <img
                      src="/images/about/hareem.webp"
                      alt="Hunehar President - Hareem Fatima"
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </a>
                <p className="text-lg font-semibold text-brand-navy">
                  Hareem Fatima
                </p>
                <p className="text-sm text-brand-muted">President</p>
              </div>

              {/* Vice President */}
              <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                <a
                  href="https://linkedin.com/in/vp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-40 aspect-square mx-auto mb-6 overflow-hidden rounded-full">
                    <img
                      src="/images/about/zain-ilyas.webp"
                      alt="Hunehar Vice President - Zain Ilyas"
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </a>
                <p className="text-lg font-semibold text-brand-navy">
                  Zain Ilyas
                </p>
                <p className="text-sm text-brand-muted">Vice President</p>
              </div>
            </div>
          </div>

          {/* ================= DIRECTORS ================= */}
          <div className="mb-20">
            <h3 className="text-heading-4 text-center mb-10">
              Department Directors
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Haniya Ali",
                  role: "Director HR",
                  img: "/images/about/Haniya.webp",
                  link: "https://www.linkedin.com/in/haniya-ali-503722226",
                },
                {
                  name: "Fareha Meraj",
                  role: "Director Liaison",
                  img: "/images/about/Fareha.webp",
                  link: "https://www.linkedin.com/in/fareha-meraj-a00b96216/",
                },
                {
                  name: "Hania Tahir",
                  role: "Director Finance",
                  img: "/images/about/Hania.webp",
                  link: "https://www.linkedin.com/in/hania-tahir-92572b203/",
                },
                {
                  name: "Muhammad Sanauallah",
                  role: "Director Publications",
                  img: "/images/about/Muhammad.webp",
                  link: "https://www.linkedin.com/in/muhammad-bin-sanaullah/",
                },
                {
                  name: "Wardah Muzammil",
                  role: "Director Philanthropy",
                  img: "/images/about/Wardah.webp",
                  link: "https://linkedin.com/in/director2-link",
                },
                {
                  name: "Sumaima Ilyas",
                  role: "Director Social Media Relations",
                  img: "/images/about/sumaima.webp",
                  link: "https://www.linkedin.com/in/sumaima-ilyas-1a7618285",
                },
                {
                  name: "Rameen Bajwa",
                  role: "Director R&D",
                  img: "/images/about/rameen.webp",
                  link: "https://www.linkedin.com/in/rameen-bajwa-88135725a/",
                },
              ].map((person) => (
                <div
                  key={person.name}
                  className="bg-white p-6 rounded-2xl shadow-sm text-center"
                >
                  <a
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-32 aspect-square mx-auto mb-4 overflow-hidden rounded-full">
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </a>
                  <p className="font-semibold text-brand-navy">{person.name}</p>
                  <p className="text-sm text-brand-muted">{person.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= ASSISTANT DIRECTORS ================= */}
          <div>
            <h3 className="text-heading-4 text-center mb-10">
              Assistant Directors
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Aqib Irfan",
                  role: "Assistant Director HR",
                  img: "/images/about/aqib-irfan.webp",
                  link: "https://www.linkedin.com/in/aqib-irfan-b77b43284",
                },
                {
                  name: "Alina Khan",
                  role: "Assistant Director Liaison",
                  img: "/images/about/Alina-Khan.webp",
                  link: "http://www.linkedin.com/in/alina-khan-67b9952b1",
                },
                {
                  name: "Syeda Farheen Masroor",
                  role: "Assistant Director Publications",
                  img: "/images/about/Syeda.webp",
                  link: "https://linkedin.com/in/syeda-farheen-masroor-b9a5b6285",
                },
                {
                  name: "Faqaha Asif",
                  role: "Assistant Director Philanthropy",
                  img: "/images/about/faqaha.webp",
                },
                {
                  name: "Malala Khan",
                  role: "Assistant Director Social Media Relations",
                  img: "/images/about/Malala.webp",
                  link: "https://www.linkedin.com/in/malala-khan-4a1138242",
                },
                {
                  name: "Ali Kashif",
                  role: "Assistant Director R&D",
                  img: "/images/about/ali-kashif.webp",
                  link: "https://www.linkedin.com/in/ali-kashif-262150241/",
                },
              ].map((person) => (
                <div
                  key={person.name}
                  className="bg-white p-6 rounded-2xl shadow-sm text-center"
                >
                  {person.link ? (
                    <a
                      href={person.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-32 aspect-square mx-auto mb-4 overflow-hidden rounded-full">
                        <img
                          src={person.img}
                          alt={person.name}
                          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="w-32 aspect-square mx-auto mb-4 overflow-hidden rounded-full">
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}
                  <p className="font-semibold text-brand-navy">{person.name}</p>
                  <p className="text-sm text-brand-muted">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
