import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import PolaroidStack from "@/components/PolaroidStack";

export default function Impact() {
  return (
    <main className="bg-white text-[#0a0a0a]">
      <Navbar />
      {/* HERO */}
      {/* Impact Heading Section */}
      <section
        className="relative py-30 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/impact/Hunehar-Students.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="relative z-10 text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-white">
          Our Impact
        </h1>
      </section>
      {/* Impact Description */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          We started Hunehar because we believe quality education shouldn't have
          a price tag, especially for the kids here in Islamabad. But as we
          grew, we realized our mission was bigger than the classroom. Today,
          we’re just as focused on empowering parents and strengthening our
          community as we are on teaching math or science. We’re building a
          culture of support where everyone has the chance to rise.
        </p>
      </section>
      {/* 
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#206FAC] mb-10 text-center">
          Milestones of Change
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "First school fundraiser enabling expansion",
            "Establishment of computer lab and library",
            "First graduating cohort supported beyond primary school",
            "Launch of virtual internship programs",
            "Expansion to Grade 7",
            "Umaima’s 2024 academic result symbolizing long-term impact",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-border rounded-lg text-center text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      */}
      {[
        {
          title: "Health & Wellbeing",
          points: [
            "Dental and medical camps",
            "COVID-19 vaccination drives",
            "Mental health awareness sessions",
            "Hospital exposure visits",
          ],
          images: [
            "/placeholders/health-1.webp",
            "/placeholders/health-2.webp",
            "/placeholders/health-3.webp",
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
            "/placeholders/learning-1.webp",
            "/placeholders/learning-2.webp",
            "/placeholders/learning-3.webp",
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
            "/placeholders/youth-1.webp",
            "/placeholders/youth-2.webp",
            "/placeholders/youth-3.webp",
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
            "/placeholders/ramadan-1.webp",
            "/placeholders/ramadan-2.webp",
            "/placeholders/ramadan-3.webp",
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
            "/placeholders/events-1.webp",
            "/placeholders/events-2.webp",
            "/placeholders/events-3.webp",
          ],
        },
      ].map((section, i) => {
        const isReversed = i % 2 !== 0;

        return (
          <section
            key={i}
            className={`py-20 px-6 ${isReversed ? "bg-secondary" : ""}`}
          >
            <div
              className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center`}
            >
              {/* Image */}
              <div className={isReversed ? "md:order-2" : ""}>
                <PolaroidStack images={section.images} />
              </div>

              {/* Text */}
              <div className={isReversed ? "md:order-1" : ""}>
                <h3 className="text-xl font-semibold text-[#206FAC] mb-4">
                  {section.title}
                </h3>

                <ul className="space-y-2 text-muted-foreground">
                  {section.points.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
      <Footer />
    </main>
  );
}
