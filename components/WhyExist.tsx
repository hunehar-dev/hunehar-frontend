"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyExist() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#206FAC] text-center mb-16">
          Why We Exist
        </h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/Pakistan-OOC-Infographic.jpg"
                alt="Out-of-school children in Pakistan"
                width={600}
                height={450}
                className="w-full max-w mx-auto"
              />
            </div>
            <div className="bg-white border-l-4 border-red-500 p-8 rounded-xl shadow-sm">
              <p className="text-xl leading-relaxed text-gray-800 font-semibold">
                “Pakistan has the world’s{" "}
                <span className="text-red-600">
                  second-highest number of out-of-school children
                </span>{" "}
                — over 22.8 million aged 5–16 are deprived of education.”
              </p>
              <a
                href="https://www.unicef.org/pakistan/education"
                target="_blank"
                className="text-xl text-blue-600 underline block mt-3"
              >
                — UNICEF Report
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#206FAC] mb-4">
                Our Solution: Hunehar
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Hunehar provides{" "}
                <strong className="text-[#206FAC]">
                  free, quality education
                </strong>{" "}
                and holistic support to children from underprivileged
                backgrounds — giving them the tools to learn, grow, and thrive.
              </p>

              <ul className="text-xl space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="w-2.5 h-2.5 bg-[#206FAC] rounded-full mt-2"></span>
                  <span className="text-gray-700">
                    Free primary & secondary education
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2.5 h-2.5 bg-[#206FAC] rounded-full mt-2"></span>
                  <span className="text-gray-700">
                    Books, uniforms & learning materials
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2.5 h-2.5 bg-[#206FAC] rounded-full mt-2"></span>
                  <span className="text-gray-700">
                    Mentorship & life skills programs
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2.5 h-2.5 bg-[#206FAC] rounded-full mt-2"></span>
                  <span className="text-gray-700">Community-driven change</span>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/Hunehar-children2.jpg"
                alt="Out-of-school children in Pakistan"
                width={500}
                height={300}
                className="w-full max-w mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
