"use client";

import { motion } from "framer-motion";
import { Heart, GraduationCap } from "lucide-react";

export default function DonateCards() {
  const cards = [
    {
      icon: <Heart className="w-6 h-6 text-[#E5533D]" />,
      title: "Sponsor a Student",
      description:
        "Sponsor a student for only Rs. 3,000/month and support their education and future.",
      buttonText: "Sponsor a Student",
      buttonStyle:
        "bg-[#E5533D] hover:bg-[#c9442f] text-white hover:cursor-pointer",
      iconBg: "bg-[#E5533D]/10",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#E5533D]" />,
      title: "One-Time Donation",
      description:
        "Support teachers and classrooms to create long-term educational impact.",
      buttonText: "One-Time Donation",
      buttonStyle:
        "border-2 border-[#E5533D] text-[#E5533D] hover:bg-[#E5533D] hover:text-white bg-transparent hover:cursor-pointer",
      iconBg: "bg-[#E5533D]/10",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[#206FAC] text-center mb-8">
            Make a Difference <span className="underline">Today</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Join us in supporting education and changing lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all rounded-xl p-6 text-center"
            >
              <div
                className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                {card.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>

              <p className="text-gray-600 text-base mb-6">{card.description}</p>

              <button
                className={`${card.buttonStyle} px-6 py-2.5 text-sm font-semibold rounded-md transition-colors`}
              >
                {card.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
