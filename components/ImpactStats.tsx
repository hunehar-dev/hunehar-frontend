'use client'

import React from 'react'

export default function ImpactStats() {
  const stats = [
    { value: '$1M+', label: 'Fund Raised' },
    { value: '500+', label: 'Dedicated Volunteers' },
    { value: '100%', label: 'Delivered Donations' },
    { value: '250K', label: 'Charity Participation' },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1E4E6A]">
            Our Impact
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Every contribution creates lasting change
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-y-8 md:flex-row md:justify-center md:gap-x-4 lg:gap-x-12">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <div className="text-center px-4 py-2 md:px-6 lg:px-8">
                <p className="text-4xl font-semibold text-[#1E4E6A]">
                  {stat.value}
                </p>
                <p className="mt-2 text-base text-gray-500">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 && (
                <span className="hidden md:block text-3xl font-light text-[#1E4E6A]">
                  •
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-500">
            Contribute to our Impact! Every rupee counts!
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <button
              className="rounded-lg bg-[#294354] px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-90"
            >
              Donate Now
            </button>
            <a href="#" className="text-base text-gray-700 underline hover:text-gray-900">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}