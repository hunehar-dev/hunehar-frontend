"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
    <section className="container-brand py-16 sm:py-20 lg:py-28">
      <div className="rounded-2xl lg:rounded-[28px] bg-brand-navy-soft px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 text-white">
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

          <p className="text-[1.0625rem] leading-[1.7] text-brand-mist mb-8 sm:mb-10">
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
                className="bg-white text-brand-navy flex-1 h-[52px] px-5 text-[0.9375rem] rounded-full outline-none w-full placeholder:text-[#8095A3]"
              />

              <Button
                variant="brand"
                onClick={handleSubscribe}
                disabled={loading}
                className="h-[52px] px-7 text-[0.9375rem] w-full sm:w-auto"
              >
                {loading ? "Subscribing…" : "Subscribe"}
              </Button>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap gap-3.5 justify-center">
            <Button asChild variant="brand-light" size="brand-lg">
              <Link href="/get-involved/donate">Make a donation</Link>
            </Button>
            <Button asChild variant="brand-ghost" size="brand-lg">
              <Link href="/get-involved/volunteer">Become a volunteer</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
