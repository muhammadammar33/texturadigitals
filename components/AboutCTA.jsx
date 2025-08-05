"use client";

import Image from "next/image";

export default function AboutCTA() {
  return (
    <div className="bg-red-600 px-4 py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 sm:space-y-6 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
              Have A Unique and Creative Logo For Your Brand Ready in A Few Days!
            </h2>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
              Hit Us Up And Take Your Brand Image To Greater Heights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-black text-white border-t border-black border-l px-6 sm:px-8 py-3 rounded font-medium hover:bg-red-600 hover:border-amber-50 transition-colors text-sm sm:text-base">
                Get Started Today
              </button>
              <button className="w-full sm:w-auto border border-white text-white px-6 sm:px-8 py-3 rounded font-medium hover:bg-white hover:text-black transition-colors text-sm sm:text-base">
                +1-628-256-4002
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/assets/about/cta-plane.png"
              alt="Ready to Take Off"
              width={400}
              height={300}
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md z-10 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
