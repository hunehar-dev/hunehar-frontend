"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQAccordion() {
  const faqs = [
    {
      question: "Where do my donations go?",
      answer:
        "100% of your donations directly fund our students’ education, including tuition, uniforms, books, and extracurricular activities.",
    },
    {
      question:
        "Will I be updated about the sponsored child’s progress at school?",
      answer:
        "Yes, sponsors receive regular progress updates, report cards, and stories about their sponsored child’s achievements.",
    },
    {
      question: "Is Hunehar a registered NGO?",
      answer: (
        <>
          Yes. Hunehar is registered as a Foundation with the Securities and
          Exchange Commission of Pakistan (SECP). You can find more details in
          our{" "}
          <Link href="/terms" className="text-brand-blue hover:underline">
            Terms & Conditions
          </Link>
          .
        </>
      ),
    },
    {
      question: "Do you accept Zakat donations?",
      answer:
        "Yes, we accept Zakat. Zakat donations are utilized strictly in accordance with Islamic guidelines.",
    },
    {
      question: "Can I volunteer?",
      answer: (
        <>
          Absolutely! We welcome volunteers both onsite and remotely. You can
          learn more and apply through our{" "}
          <Link
            href="/get-involved/volunteer"
            className="text-brand-blue hover:underline"
          >
            Volunteer page
          </Link>
          .
        </>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-brand-bg">
      <div className="max-w-[820px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-heading-2">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-0 rounded-2xl px-5 sm:px-6"
              >
                <AccordionTrigger className="text-left text-brand-navy text-[1rem] font-semibold py-4 sm:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-muted text-[0.9375rem] leading-[1.7] pb-4 sm:pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
