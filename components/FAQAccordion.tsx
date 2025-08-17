'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQAccordion() {
  const faqs = [
    {
      question: 'How are donations used?',
      answer: '100% of donations go directly to our educational programs and support services. We cover operational costs through separate grants and partnerships, ensuring your contribution makes the maximum impact on children\'s lives. We provide detailed quarterly reports showing exactly how funds are allocated and the outcomes achieved.'
    },
    {
      question: 'Can I sponsor a specific child?',
      answer: 'Yes! Our child sponsorship program allows you to support a specific child\'s education, healthcare, and development. You\'ll receive regular updates, photos, and can even correspond with your sponsored child to see their progress firsthand. This creates a meaningful connection that benefits both you and the child.'
    },
    {
      question: 'Is Hunehar a registered NGO?',
      answer: 'Yes, we are a registered 501(c)(3) nonprofit organization with full transparency in our financial reporting. All donations are tax-deductible, and we undergo regular independent audits to ensure accountability and proper fund management. Our registration details and financial reports are available on our website.'
    },
    {
      question: 'Where do you operate?',
      answer: 'We currently operate in 15 countries across Asia, Africa, and South America, focusing on underserved communities where educational resources are most needed. Our programs are designed to work within local cultural contexts and community needs, ensuring sustainable and respectful development.'
    },
    {
      question: 'How can I volunteer?',
      answer: 'We welcome volunteers both locally and internationally. You can apply through our website, and we\'ll match you with opportunities that fit your skills, interests, and availability. We offer both short-term and long-term volunteer positions, including virtual volunteering options for those who cannot travel.'
    }
  ]

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tighter">Frequently Asked Questions</h2>
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
                <AccordionTrigger className="text-left font-semibold text-gray-900  text-lg py-6">
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
  )
}
