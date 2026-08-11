"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DonateFAQAccordion() {
  const faqs = [
    {
      question: "Where do my donations go?",
      answer:
        "100% of your donations directly fund our students’ education, including tuition, uniforms, books, and extracurricular activities.",
    },
    {
      question: "Do you accept Zakat donations?",
      answer:
        "Yes, we accept Zakat. Zakat donations are utilized strictly in accordance with Islamic guidelines.",
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
          <Link href="/terms" className="text-[#206FAC] hover:underline">
            Terms & Conditions
          </Link>
          .
        </>
      ),
    },
  ];

  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-white border border-[#E7EDF1] rounded-xl px-5"
        >
          <AccordionTrigger className="text-left text-[#152A38] text-[1.0625rem] font-semibold py-4 sm:py-5">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-[#5A6E7B] text-[0.95rem] leading-relaxed pb-4 sm:pb-5">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
