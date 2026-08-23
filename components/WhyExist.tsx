"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyExist() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-brand-bg">
      <div className="container-brand">
        <h2 className="text-heading-2 text-center mb-12 sm:mb-16 text-balance">
          Why we exist
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <figure className="m-0 mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-full rounded-2xl lg:rounded-[28px] overflow-hidden bg-white">
              <Image
                src="/images/Pakistan-OOC-Infographic.webp"
                alt="Out-of-school children in Pakistan"
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </figure>

            <div className="bg-white border-l-4 border-brand-orange p-5 rounded-2xl">
              <p className="text-[1.0625rem] leading-[1.6] text-brand-navy font-semibold">
                "Currently, Pakistan has the world's{" "}
                <span className="text-brand-orange">
                  second-highest number of out-of-school children (OOSC)
                </span>{" "}
                with an estimated 22.8 million children aged 5-16 not
                attending school"
              </p>
              <a
                href="https://www.unicef.org/pakistan/education"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-blue hover:underline block mt-3 font-medium"
              >
                — UNICEF Report
              </a>
            </div>

            <p className="text-[1.0625rem] leading-[1.7] text-brand-muted">
              Millions of children in Pakistan are denied their basic right to
              education. Many are forced into labor, early responsibility, or
              a life with limited choices, simply because access to schooling
              is out of reach.
            </p>
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
              <h3 className="text-2xl lg:text-[2rem] font-bold leading-[1.12] tracking-tight text-brand-navy mb-4">
                Our solution: Hunehar
              </h3>
              <p className="text-[1.0625rem] leading-[1.7] text-brand-muted mb-6">
                Hunehar provides{" "}
                <strong className="text-brand-navy font-semibold">
                  free, quality education
                </strong>{" "}
                and holistic support to children from underprivileged
                backgrounds, giving them the tools to learn, grow, and thrive.
              </p>

              <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
                {[
                  "Free primary & secondary education",
                  "Books, uniforms & learning materials",
                  "Mentorship & extracurricular activities",
                  "Community-driven change",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 text-[1.0625rem] leading-[1.6] text-brand-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 flex-none" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="m-0 mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-full rounded-2xl lg:rounded-[28px] overflow-hidden bg-white">
              <Image
                src="/images/Hunehar-children2.webp"
                alt="Hunehar children"
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
