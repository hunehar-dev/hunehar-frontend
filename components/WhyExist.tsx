"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyExist() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[#206FAC] text-center mb-10">
          Why We Exist
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden rounded-xl shadow-md max-h-[430px]">
              <Image
                src="/images/Pakistan-OOC-Infographic.webp"
                alt="Out-of-school children in Pakistan"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
              <p className="text-sm sm:text-base leading-relaxed text-gray-800 font-semibold">
                "Currently, Pakistan has the world’s{" "}
                <span className="text-red-600">
                  second-highest number of out-of-school children (OOSC)
                </span>{" "}
                with an estimated 22.8 million children aged 5-16 not attending
                school"
              </p>
              <a
                href="https://www.unicef.org/pakistan/education"
                target="_blank"
                className="text-sm text-blue-600 underline block mt-2"
              >
                — UNICEF Report
              </a>
            </div>
            <div>
              <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                Millions of children in Pakistan are denied their basic right to
                education. Many are forced into labor, early responsibility, or
                a life with limited choices, simply because access to schooling
                is out of reach.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-[clamp(1.4rem,2.5vw,1.75rem)] font-bold text-[#206FAC] mb-3">
                Our Solution: Hunehar
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Hunehar provides{" "}
                <strong className="text-[#206FAC]">
                  free, quality education
                </strong>{" "}
                and holistic support to children from underprivileged
                backgrounds, giving them the tools to learn, grow, and thrive.
              </p>

              <ul className="text-sm sm:text-base space-y-2">
                {[
                  "Free primary & secondary education",
                  "Books, uniforms & learning materials",
                  "Mentorship & extracurricular activities",
                  "Community-driven change",
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#206FAC] rounded-full mt-2"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-md max-h-[380px]">
              <Image
                src="/images/Hunehar-children2.webp"
                alt="Hunehar children"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
