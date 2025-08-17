'use client'

import React from 'react';

export default function HeroSection() {
  const EasyPaisaIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#00A950"/>
      <path d="M12.0001 14.8572C13.5786 14.8572 14.8572 13.5786 14.8572 12.0001C14.8572 10.4215 13.5786 9.14294 12.0001 9.14294C10.4215 9.14294 9.14294 10.4215 9.14294 12.0001C9.14294 13.5786 10.4215 14.8572 12.0001 14.8572Z" fill="white"/>
      <path d="M18 12C18 15.3137 15.3137 18 12 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const JazzCashIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 19L19 5" stroke="#F36F21" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 19L5 5" stroke="#F36F21" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section 
      className="relative bg-cover bg-center text-white py-20 lg:py-32 flex items-center min-h-screen"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/8061687/pexels-photo-8061687.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          
          <div className="lg:col-span-3">
            <h2 className="text-orange-400 font-bold text-3xl mb-4">Land a Helping Hand</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tighter mb-8">
              Only by help each <br />
              other we can make <br />
              world better
            </h1>
            <div className="flex items-start">
              <div className="w-1 bg-orange-400 self-stretch mr-5 mt-1 mb-1"></div>
              <p className="text-lg text-orange-200">
                We need the support of more people like you to help make a long-lasting effect on our children, their future and our community. Here is your chance to transform the future of a child.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
              <div className="inline-block bg-blue-900 text-white text-sm font-semibold rounded-full px-5 py-2 mb-6">
                Education
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-slate-700 leading-tighter tracking-tight mb-4">
                Help children get out of poverty & have a Future.
              </h3>
              <p className="text-gray-600 text-base mb-8">
                Hunehar is a non-profit student run organization founded in 2012 to ensure that all children can exercise their right to basic education. Our aim is to educate, empower and support out-of-school children in underserved areas of Pakistan.
              </p>
              
              <div className="mb-8">
                <div className="flex justify-between items-center text-sm font-semibold text-slate-700 mb-2">
                  <span>Rs. 12,800 PKR</span>
                  <span>Goal - 1200000 PKR</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 relative overflow-hidden">
                  <div 
                    className="bg-blue-900 h-full rounded-full flex items-center justify-center" 
                    style={{ width: '82%' }}
                  >
                    <span className="text-white text-xs font-bold">82%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-2 font-semibold text-slate-700 hover:bg-gray-100 transition-colors">
                  <EasyPaisaIcon />
                  <span>EasyPaisa</span>
                </button>
                <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-2 font-semibold text-slate-700 hover:bg-gray-100 transition-colors">
                  <JazzCashIcon />
                  <span>JazzCash</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}