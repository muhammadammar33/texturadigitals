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
              Lookout
            </p>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              We Create Mobile Apps that Help You Standout!
            </h2>
            
            <p className="text-sm text-gray-700 mb-8 leading-relaxed">
              As a leading mobile app development company, we specialize in creating top-quality iOS and Android apps that help businesses succeed in today's mobile-driven world. Based in USA, our team is dedicated to delivering innovative and customer-focused apps that meet the unique needs of your business and exceed your expectations. Get in touch with us today to discuss your requirements and find out how we can help transform your business with a cutting-edge mobile app.
            </p>

            <p className="text-sm text-gray-700 mb-8 leading-relaxed">
              We can help you with:
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-semibold">Mobile App Consulting</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-semibold">iOS App Development</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-semibold">Android App Development</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-semibold">Hybrid App Development</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-black text-white px-8 py-4 rounded-sm font-semibold hover:bg-blue-500 transition-colors">
                Let's Get Started
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-sm font-semibold hover:text-blue-500 hover:border-blue-500 transition-colors">
                +1-628-256-4002
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/assets/website/Lookout.jpg"
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
