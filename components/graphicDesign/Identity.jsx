"use client";

import Image from "next/image";

export default function BookLaunchSection() {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-600 uppercase tracking-wide mb-4">
              Corporate Identity
            </p>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              Company Graphic Design Services - Work with A Leading Graphic Design Company USA that Builds your Corporate Identity!
            </h2>
            
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Are you ready to take your business to the next level with powerful, conversion-driven graphic design? Look no further than Textura Digitals! Based in the USA, our team is dedicated to helping our clients succeed through innovative and effective design. With some of the most experienced and innovative designers, we have the skills to bring your vision to life.
            </p>

            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              So don't hesitate – if you have a graphic design project that's been weighing on your mind, let us help you turn it into a reality. Together, we can create something truly special and achieve great things for your business.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-semibold">Detailed Examination</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-semibold">Inventive Design</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-semibold">Results of accountable QA processes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-black text-white px-8 py-4 rounded-sm font-semibold hover:bg-red-500 transition-colors">
                Let's Get Started
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-sm font-semibold hover:text-red-500 hover:border-red-500 transition-colors">
                +1-628-256-4002
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/assets/graphicDesign/CORPORATE-IDENTITY.jpg"
                alt="Book covers and layouts showcase"
                width={600}
                height={400}
                className="w-full max-w-lg h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
