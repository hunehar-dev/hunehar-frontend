"use client";

import { motion } from "framer-motion";
import { Heart, GraduationCap } from "lucide-react";

export default function DonateCards() {
  const cards = [
    {
      icon: <Heart className="w-8 h-8 text-[#E5533D]" />,
      title: "Sponsor a Student",
      description:
        "Sponsor a student for only Rs. 3,000/month. Ensuring education, mentorship, and a brighter future.",
      buttonText: "Sponsor a Student",
      buttonStyle:
        "bg-[#E5533D] hover:bg-[#c9442f] text-white hover:cursor-pointer",
      iconBg: "bg-[#E5533D]/10",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#E5533D]" />,
      title: "Support a Teacher",
      description:
        "Help us train and support dedicated teachers to create lasting educational impact in their communities.",
      buttonText: "Support a Teacher",
      buttonStyle:
        "border-2 border-[#E5533D] text-[#E5533D] hover:bg-[#E5533D] hover:text-white bg-transparent hover:cursor-pointer",
      iconBg: "bg-[#E5533D]/10",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#206FAC] mb-4 leading-tight">
            Make a Difference <span className="underline">Today</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in our cause, sponsor and donate today!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-8 text-center"
            >
              <div
                className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                {card.icon}
              </div>
              <h3 className="text-2xl text-gray-900 font-semibold tracking-tight mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {card.description}
              </p>
              <button
                className={`${card.buttonStyle} px-8 py-4 font-semibold rounded-md transition-colors`}
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
