"use client";

import Image from "next/image";

export default function Expertise() {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-600 uppercase tracking-wide mb-4">
              Digital Advertising
            </p>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              Pushing the Boundaries of Digital Advertising.
            </h2>
            
            <p className="text-sm text-gray-700 mb-8 leading-relaxed">
              Our company's steadfast mission is to stay at the forefront of the digital advertising industry. Our highly-skilled researchers and analysts team is dedicated to constantly scouring the ever-evolving digital landscape to uncover the latest advancements and innovations in the field. We pride ourselves on being forward-thinking and always looking for the newest updates and features from leading industry players such as Google, Microsoft, and Facebook. We diligently study and take note of the latest technological advancements to ensure that our tools and equipment remain state-of-the-art, enabling us to offer our clients the most cutting-edge solutions and unparalleled results without custom marketing materials design services.
            </p>

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
                src="/assets/marketing/DIGITAL-ADVERTISING.jpg"
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
