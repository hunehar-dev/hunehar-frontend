"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 lg:py-32 flex items-center min-h-screen"
      style={{
        backgroundImage: "url('/images/Hunehar-students.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-orange-400 font-bold text-3xl mb-4">
              Sponsor a Child. Empower a Future.
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tighter mb-8">
              Changing Lives Through Education
            </h1>
            <div className="flex items-start">
              <div className="w-1 bg-orange-400 self-stretch mr-5 mt-1 mb-1"></div>
              <p className="text-lg text-white-200">
                Hunehar is a registered non-profit organization running a
                community school in Mehrabadi, Islamabad, dedicated to
                empowering underprivileged children through free, quality
                education and holistic support.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end lg:mt-16">
            <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
              <div className="inline-block bg-blue-900 text-white text-sm font-semibold rounded-full px-5 py-2 mb-6">
                Education
              </div>

              <h3 className="text-2xl lg:text-3xl font-semibold text-slate-700 leading-tighter tracking-tight mb-4">
                Make a Difference Today
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Your one-time gift can help provide quality education and
                brighter futures for children in need. <br />
                Every contribution counts!
              </p>

              <div className="grid grid-cols-2 gap-3 text-lg mb-8">
                {["1000", "3000", "5000", "10000"].map((amount) => (
                  <button
                    key={amount}
                    className="border border-gray-300 rounded-lg py-3 font-semibold text-slate-700 hover:bg-blue-50 hover:border-blue-400 transition-colors"
                  >
                    Rs. {amount}
                  </button>
                ))}
              </div>
              <p className="text-md text-gray-500 mb-6">
                All contributions 100% go towards children’s education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
