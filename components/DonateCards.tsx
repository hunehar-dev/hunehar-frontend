"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, HandHeart, ArrowRight } from "lucide-react";

export default function DonateCards() {
  const cards = [
    {
      icon: <Heart className="w-5 h-5" aria-hidden="true" />,
      title: "Sponsor a student",
      description:
        "Sponsor a student for only Rs. 3,000/month and support their education and future.",
      rule: "#E5533D",
    },
    {
      icon: <HandHeart className="w-5 h-5" aria-hidden="true" />,
      title: "One-time donation",
      description:
        "Make a one-time contribution to support classrooms, resources, and student welfare.",
      rule: "#206FAC",
    },
  ];

  const steps = [
    {
      title: "Step 1: Pick your plan",
      body: (
        <>
          Choose a sponsorship plan that works for you:
          <span className="block mt-2">
            • Monthly: <strong className="text-brand-navy">Rs. 3,000</strong>
            <br />• Quarterly:{" "}
            <strong className="text-brand-navy">Rs. 12,000</strong>
            <br />• Annually:{" "}
            <strong className="text-brand-navy">Rs. 36,000</strong>
          </span>
        </>
      ),
    },
    {
      title: "Step 2: Complete the sponsorship form",
      body: "Fill in a simple form with your details and preferred sponsorship plan.",
    },
    {
      title: "Step 3: Get connected",
      body: "Our team will match you with a student and guide you through the next steps.",
    },
    {
      title: "Step 4: Stay connected & see the impact",
      body: "Receive monthly updates, biannual progress reports, and our annual magazine. You can even write letters, send gifts, or arrange a visit to meet your sponsored child.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container-brand">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-heading-2">
            How sponsorship works
          </h2>
        </motion.div>

        {/* How Sponsorship Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-brand-bg rounded-2xl lg:rounded-[28px] p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 max-w-4xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.title}>
                <h3 className="font-semibold text-brand-blue mb-2 text-[1.0625rem]">
                  {step.title}
                </h3>
                <p className="text-[0.9375rem] leading-[1.7] text-brand-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Donate Cards */}
        <div>
          <p className="text-[1.125rem] sm:text-xl font-semibold text-brand-navy mb-8 text-center">
            Your support directly changes lives. Choose how you'd like to
            help:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-7 max-w-3xl mx-auto">
            {cards.map((card, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col pt-[22px] border-t-2"
                style={{ borderColor: card.rule }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${card.rule}1A`, color: card.rule }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[1.125rem] font-semibold text-brand-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-[0.9375rem] leading-[1.7] text-brand-muted mb-6">
                  {card.description}
                </p>
                <Link
                  href="/get-involved/donate"
                  className="mt-auto self-start inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
                >
                  {card.title}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
