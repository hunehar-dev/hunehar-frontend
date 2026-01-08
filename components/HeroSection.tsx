"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative bg-center bg-no-repeat text-white py-[clamp(6rem,10vw,8rem)] min-h-[60vh] flex items-center"
      style={{
        backgroundImage: "url('/images/Hunehar-students.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-[clamp(1rem,2vw,2rem)] items-center">
          <div className="lg:col-span-3">
            <h2 className="text-orange-400 font-bold text-[clamp(1rem,2vw,2rem)] mb-2">
              Sponsor a Child. Empower a Future.
            </h2>
            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-tight mb-4">
              Changing Lives Through Education
            </h1>
            <div className="flex items-start">
              <div className="w-1 bg-orange-400 self-stretch mr-3 mt-1 mb-1"></div>
              <p className="text-[clamp(0.9rem,1.5vw,1rem)] text-white-200">
                Hunehar is a registered non-profit organization running a
                community school in Mehrabadi, Islamabad, dedicated to
                empowering underprivileged children through free, quality
                education and holistic support.
              </p>
            </div>
          </div>
          {/*
          <div className="lg:col-span-2 flex justify-center lg:justify-end lg:mt-8">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-4 sm:p-6">
              <div className="inline-block bg-blue-900 text-white text-[0.7rem] font-semibold rounded-full px-4 py-1 mb-4">
                Education
              </div>

              <h3 className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-semibold text-slate-700 leading-snug mb-2">
                Make a Difference Today
              </h3>
              <p className="text-[clamp(0.875rem,1.3vw,1rem)] text-gray-600 mb-4">
                Your one-time gift can help provide quality education and
                brighter futures for children in need. Every contribution
                counts!
              </p>

              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                {["1000", "3000", "5000", "10000"].map((amount) => (
                  <button
                    key={amount}
                    className="border border-gray-300 rounded-lg py-2 font-semibold text-slate-700 hover:bg-blue-50 hover:border-blue-400 transition-colors"
                  >
                    Rs. {amount}
                  </button>
                ))}
              </div>
              <p className="text-[0.75rem] text-gray-500">
                All contributions 100% go towards children’s education.
              </p>
            </div>
          </div>{" "}
          */}
        </div>
      </div>
    </section>
  );
}
