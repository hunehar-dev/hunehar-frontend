"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function IntroductionSection() {
  return (
    <section className="py-[clamp(3rem,6vw,5rem)] bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-[clamp(1rem,2vw,2rem)] items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:order-1 order-2"
          >
            <div className="mx-auto w-full sm:max-w-sm md:max-w-md lg:max-w-none relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/Hunehar-students-studying.webp"
                alt="Children learning in classroom"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl lg:order-2 order-1"
          >
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[#206FAC] mb-4 leading-tight">
              Eradicating Illiteracy, One Step at a Time
            </h2>
            <p className="text-[clamp(0.9rem,1.25vw,1rem)] text-gray-600 leading-relaxed mb-4">
              At Hunehar, we believe that{" "}
              <span className="font-bold text-[#206FAC]">
                every child deserves the right to dream, learn, and succeed
              </span>
              , regardless of their financial background.
              <br />
              Established in Mehrabadi, Islamabad, our school provides free
              education, learning materials, and mentorship to children from
              marginalized communities.
            </p>
            <Link href="/about">
              <button className="bg-red-400 hover:bg-red-600 hover:cursor-pointer text-white px-6 py-3 sm:px-4 sm:py-2 xs:px-3 xs:py-1.5 text-[clamp(0.875rem,1.2vw,1rem)] font-semibold rounded-md transition-colors">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
