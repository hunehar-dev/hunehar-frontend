"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function IntroductionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:order-1 order-2"
          >
            <figure className="m-0 mx-auto w-full sm:max-w-sm md:max-w-md lg:max-w-none rounded-2xl lg:rounded-[28px] overflow-hidden bg-brand-bg aspect-[4/3]">
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
            <h2 className="text-heading-2 mb-6 text-balance">
              Eradicating illiteracy, one step at a time
            </h2>
            <p className="text-[1.0625rem] leading-[1.7] text-brand-muted mb-8 text-pretty">
              At Hunehar, we believe that{" "}
              <span className="font-semibold text-brand-navy">
                every child deserves the right to dream, learn, and succeed
              </span>
              , regardless of their financial background. Established in
              Mehrabadi, Islamabad, our school provides free education,
              learning materials, and mentorship to children from marginalized
              communities.
            </p>
            <Button asChild variant="brand" size="brand-lg">
              <Link href="/about">Learn more</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
