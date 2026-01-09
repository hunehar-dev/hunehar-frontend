import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function Impact() {
  return (
    <main className="bg-white text-[#0a0a0a]">
      <Navbar />

      {/* HERO */}
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-[#206FAC] mb-6">
          Our Impact
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          At Hunehar, our impact goes far beyond classrooms. Through education,
          health initiatives, community programs, and youth engagement, we work
          to uplift families and build pathways toward lasting change.
        </p>
      </section>

      {/* MILESTONES AS ACHIEVEMENTS */}
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
            "Expansion to Grade 5",
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

      {/* IMPACT SECTIONS */}
      {[
        {
          title: "Health & Wellbeing",
          points: [
            "Dental and medical camps",
            "COVID-19 vaccination drives",
            "Mental health awareness sessions",
            "Hospital exposure visits",
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
        },
        {
          title: "Youth & Future Builders",
          points: [
            "Virtual internship programs",
            "Career and skills workshops",
            "University student engagement",
            "Leadership and community service exposure",
          ],
        },
        {
          title: "Ramadan & Community Support",
          points: [
            "Ramadan ration drives",
            "Annual iftar dinners",
            "Eid clothes and gifts distribution",
          ],
        },
        {
          title: "Fundraisers & Community Events",
          points: [
            "Musical nights",
            "Drum circles and match screenings",
            "Bake sales and community drives",
          ],
        },
      ].map((section, i) => (
        <section
          key={i}
          className={`py-16 px-6 ${i % 2 === 1 ? "bg-secondary" : ""}`}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#206FAC] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                {section.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
            </div>
            <div className="h-64 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
              Image Gallery
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}
