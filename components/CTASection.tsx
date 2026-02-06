"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);
     const res = await fetch("https://hunehar-backend-production.up.railway.app/api/v1/newsletter/subscribe", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
       body: JSON.stringify({ email }),
    });


      const data = await res.json();

      if (res.ok) {
        alert("Subscribed successfully!");
        setEmail("");
      } else {
        alert(data.message || "Subscription failed");
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-[#1a2c44] via-[#4074AD] to-[#0d1b2a] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold mb-4">
            Subscribe to our Newsletter
          </h2>

          <p className="text-[0.95rem] text-blue-100 mb-8 leading-relaxed">
            Stay updated with our latest news, impact stories, and ways to get
            involved in our mission.
          </p>

          {/* Email form */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-900 flex-1 h-11 px-4 py-2 text-[0.95rem] rounded-md outline-none w-full"
              />

              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white h-11 px-6 sm:px-4 text-[0.95rem] sm:text-[0.85rem] font-semibold rounded-md transition-colors w-full sm:w-auto hover:cursor-pointer"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/get-involved/donate">
              <span className="inline-block bg-white text-blue-900 hover:bg-green-300 px-6 py-2.5 text-[0.95rem] font-semibold rounded-md transition-colors">
                Make a Donation
              </span>
            </Link>
            <Link href="/get-involved/volunteer">
              <span className="inline-block border border-white text-white hover:bg-pink-300 hover:text-blue-900 px-6 py-2.5 text-[0.95rem] font-semibold rounded-md transition-colors">
                Become a Volunteer
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
