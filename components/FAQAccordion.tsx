"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      answer:
        "Yes, we are a registered charitable public trust under Pakistan's ICT Trust Act 2020 with full transparency in our financial reporting. We undergo regular independent audits to ensure accountability and proper fund management.",
    },
    {
      question: "Do you accept Zakat donations?",
      answer:
        "Yes, we accept Zakat and ensure it is used strictly in compliance with Islamic guidelines.",
    },
    {
      question: "Can I volunteer?",
      answer: `Absolutely! We welcome volunteers both onsite and remotely. You can read more about each our departments and apply through our Volunteer Page`,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#206FAC] mb-6 leading-tighter">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-2xl px-8 shadow-lg"
              >
                <AccordionTrigger className="text-left font-semibold text-[#206FAC]  text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-lg pb-6">
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
