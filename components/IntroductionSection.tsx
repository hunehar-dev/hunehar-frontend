"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function IntroductionSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/Hunehar-students-studying.jpg"
                alt="Children learning in classroom"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#206FAC] mb-8 leading-tight">
              Eradicating Illiteracy, One Step at a Time
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Hunehar, we believe that{" "}
              <span className="font-bold text-[#206FAC]">
                {" "}
                every child deserves the right to dream, learn, and succeed
              </span>
              , regardless of their financial background.
              <br /> <br />
              Established in Mehrabadi, Islamabad, our school provides free
              education, learning materials, and mentorship to children from
              marginalized communities. With the help of donors, sponsors, and
              volunteers, we create an environment where potential thrives and
              futures are transformed.
            </p>
            <Link href="/about">
              <button className="bg-red-400 hover:bg-red-600 hover:cursor-pointer text-white px-8 py-4 text-lg font-semibold rounded-md transition-colors">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
