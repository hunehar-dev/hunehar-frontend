"use client";

import { motion } from "framer-motion";
import { Heart, HandHeart } from "lucide-react";

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
      icon: <HandHeart className="w-6 h-6 text-[#E5533D]" />,
      title: "One-Time Donation",
      description:
        "Make a one-time contribution to support classrooms, resources, and student welfare.",
      buttonText: "One-Time Donation",
      buttonStyle:
        "border-2 border-[#E5533D] text-[#E5533D] hover:bg-[#E5533D] hover:text-white bg-transparent hover:cursor-pointer",
      iconBg: "bg-[#E5533D]/10",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          {/*
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[#206FAC] mb-4">
            Make a Difference <span className="underline">Today</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Join us in supporting education and changing lives.
          </p> */}
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[#206FAC] mb-4">
            How Sponsorship Works
          </h2>
        </motion.div>

        {/* How Sponsorship Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              <span className="font-bold text-[#206FAC]">
                Step 1: Pick your plan
              </span>
              <br />
              Choose a sponsorship plan that works for you:
              <br />
              <span className="block mt-2">
                • Monthly: <strong className="text-[#206FAC]">Rs. 3,000</strong>
                <br />• Quarterly:{" "}
                <strong className="text-[#206FAC]">Rs. 12,000</strong>
                <br />• Annually:{" "}
                <strong className="text-[#206FAC]">Rs. 36,000</strong>
              </span>
            </p>

            <p>
              <span className="font-bold text-[#206FAC]">
                Step 2: Complete the sponsorship form
              </span>
              <br />
              Fill in a simple form with your details and preferred sponsorship
              plan.
            </p>

            <p>
              <span className="font-bold text-[#206FAC]">
                Step 3: Get connected
              </span>
              <br />
              Our team will match you with a student and guide you through the
              next steps.
            </p>

            <p>
              <span className="font-bold text-[#206FAC]">
                Step 4: Stay connected & see the impact
              </span>
              <br />
              Receive monthly updates, biannual progress reports, and our annual
              magazine. You can even write letters, send gifts, or arrange a
              visit to meet your sponsored child.
            </p>
          </div>
        </motion.div>

        {/* Donate Cards */}
        <div>
          <p className="text-[clamp(1rem,1.75vw,2rem)] font-bold text-gray-700 mb-4 text-center">
            Your support directly changes lives. Choose how you’d like to help:
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto px-2">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all rounded-xl p-4 sm:p-6 text-center"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${card.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  {card.icon}
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base mb-6">{card.description}</p>

                <button
                  className={`${card.buttonStyle} px-4 py-2 sm:px-6 sm:py-2.5 text-sm font-semibold rounded-md transition-colors`}
                >
                  {card.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
