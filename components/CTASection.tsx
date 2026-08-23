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
      const res = await fetch(
        "https://hunehar-backend-production.up.railway.app/api/v1/newsletter/subscribe",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

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
    <section className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
      <div className="rounded-2xl lg:rounded-[28px] bg-[#0E2433] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-[clamp(1.7rem,6vw,2.2rem)] lg:text-[clamp(2.1rem,3.2vw,2.9rem)] font-bold leading-[1.1] tracking-tight mb-5 text-balance">
            Subscribe to our newsletter
          </h2>

          <p className="text-[1.0625rem] leading-[1.7] text-[#B9CBD6] mb-8 sm:mb-10">
            Stay updated with our latest news, impact stories, and ways to get
            involved in our mission.
          </p>

          {/* Email form */}
          <div className="max-w-md mx-auto mb-8 sm:mb-10">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-[#152A38] flex-1 h-[52px] px-5 text-[0.9375rem] rounded-full outline-none w-full placeholder:text-[#8095A3]"
              />

              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="bg-[#E5533D] hover:bg-[#C6462C] disabled:opacity-60 text-white h-[52px] px-7 text-[0.9375rem] font-semibold rounded-full transition-colors w-full sm:w-auto"
              >
                {loading ? "Subscribing…" : "Subscribe"}
              </button>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap gap-3.5 justify-center">
            <Link
              href="/get-involved/donate"
              className="inline-flex items-center bg-white text-[#152A38] px-8 py-[17px] rounded-full font-semibold text-[1.0625rem] hover:bg-[#E7EDF1] transition-colors"
            >
              Make a donation
            </Link>
            <Link
              href="/get-involved/volunteer"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-8 py-[17px] rounded-full font-semibold text-[1.0625rem] transition-colors ring-1 ring-white/25"
            >
              Become a volunteer
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
