"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function IntroductionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:order-1 order-2"
          >
            <figure className="m-0 mx-auto w-full sm:max-w-sm md:max-w-md lg:max-w-none rounded-2xl lg:rounded-[28px] overflow-hidden bg-[#F4F7F9] aspect-[4/3]">
              <Image
                src="/images/Hunehar-students-studying.webp"
                alt="Children learning in classroom"
                width={400}
                height={300}
                className="w-full h-full object-cover block"
              />
            </figure>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl lg:order-2 order-1"
          >
            <h2 className="text-[clamp(1.7rem,6vw,2.2rem)] lg:text-[clamp(2.1rem,3.2vw,2.9rem)] font-bold leading-[1.1] tracking-tight text-[#152A38] mb-6 text-balance">
              Eradicating illiteracy, one step at a time
            </h2>
            <p className="text-[1.0625rem] leading-[1.7] text-[#5A6E7B] mb-8 text-pretty">
              At Hunehar, we believe that{" "}
              <span className="font-semibold text-[#152A38]">
                every child deserves the right to dream, learn, and succeed
              </span>
              , regardless of their financial background. Established in
              Mehrabadi, Islamabad, our school provides free education,
              learning materials, and mentorship to children from marginalized
              communities.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center bg-[#E5533D] hover:bg-[#C6462C] text-white px-8 py-[17px] rounded-full font-semibold text-[1.0625rem] transition-colors"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
