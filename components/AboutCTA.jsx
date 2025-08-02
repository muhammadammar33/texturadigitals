"use client";

import Image from "next/image";

export default function AboutCTA() {
  return (
    <div className="bg-red-600 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Have A Unique and Creative Logo For Your Brand Ready in A Few Days!
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Hit Us Up And Take Your Brand Image To Greater Heights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-black text-white border-t border-black border-l px-8 py-3 rounded font-medium hover:bg-red-600 hover:border-amber-50 transition-colors">
                Get Started Today
              </button>
              <button className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-black transition-colors">
                +1-628-256-4002
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/assets/about/cta-plane.png"
              alt="Ready to Take Off"
              width={1200}
              height={1000}
              className="w-full max-w-md z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
