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
          <Link href="/terms" className="text-brand-blue hover:underline">
            Terms & Conditions
          </Link>
          .
        </>
      ),
    },
  ];

  return (
    <Accordion type="single" collapsible>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-b-0 border-t border-brand-border"
        >
          <AccordionTrigger className="text-left text-brand-navy text-[1.0625rem] font-semibold py-6 gap-5 hover:no-underline [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-brand-blue">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-[1.7] text-brand-muted max-w-[44em] pb-[26px] pt-0">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
