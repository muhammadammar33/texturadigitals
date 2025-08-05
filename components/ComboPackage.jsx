"use client";

import Image from "next/image";

export default function ComboPackage() {
  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat py-8 sm:py-12 lg:py-24 px-4"
      style={{
        backgroundImage: "url('/assets/pricing/bg-combo-ZLYTDJUG.png')",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              All In One Exclusive<br />
              Brand Design Package
            </h1>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
              {/* Logo Design */}
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Logo Design</h3>
                <ul className="text-gray-200 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  <li>• Unlimited Logo Design Concepts</li>
                  <li>• Unlimited Revisions</li>
                  <li>• Icon Design</li>
                  <li>• All Final File Formats</li>
                </ul>
              </div>
              
              {/* Value Added Services */}
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Value Added Services</h3>
                <ul className="text-gray-200 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  <li>• Dedicated Account Manager</li>
                  <li>• Ownership Rights</li>
                  <li>• Money Back Guarantee</li>
                  <li>• Complete Deployment</li>
                </ul>
              </div>
              
              {/* Website Design */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Website Design</h3>
                <ul className="text-gray-200 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  <li>• UNLIMITED Pages Website</li>
                  <li>• Content Management System (CMS)</li>
                  <li>• Mobile Responsive</li>
                  <li>• 5 Stock Photos + 3 Banner Designs</li>
                  <li>• Any 3 Social Media Platforms</li>
                  <li>• Complete W3C Certified HTML</li>
                  <li>• Complete Deployment</li>
                </ul>
              </div>

              {/* Stationary Design */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Stationary Design</h3>
                <ul className="text-gray-200 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  <li>• Business Card, Letterhead, Envelope</li>
                  <li>• MS Word Letterhead</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Content - Pricing & CTA */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 order-first lg:order-last">
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Our ultimate, all-in-one combo package offering the bang for your buck! This package is ideal for brands that want the complete digital solution with value for money.
            </p>
            
            {/* Device Mockup */}
            <div className="mb-6 sm:mb-8">
              <Image
                src="/assets/pricing/combo.png"
                alt="Design Mockup"
                width={400}
                height={300}
                className="w-full max-w-sm sm:max-w-md lg:max-w-full mx-auto lg:mx-0 lg:ml-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-purple-600 rounded-lg w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 mt-8 lg:mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="text-center sm:text-left">
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Advance</h2>
              <h2 className="text-white text-2xl sm:text-3xl font-bold">Combo Package</h2>
              <p className="text-orange-400 text-sm sm:text-lg mt-1 sm:mt-2">20% OFF Next Order</p>
            </div>

            {/* All for just */}
            <div className="flex items-center justify-center px-4 sm:px-12">
              <Image
                src="/assets/pricing/all.png"
                alt="All"
                width={50}
                height={25}
                className="w-auto h-6 sm:h-8"
              />
            </div>
            
            {/* Price */}
            <div className="text-center">
              <span className="text-gray-300 text-sm sm:text-lg line-through">$1,988</span>
              <span className="text-white text-xs sm:text-sm ml-2">Only</span>
              <div className="text-yellow-400 text-4xl sm:text-5xl lg:text-6xl font-bold">$994</div>
              <button className="bg-red-500 hover:bg-red-600 mt-4 sm:mt-6 lg:mt-8 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-colors">
                Start Project Now
              </button>
            </div>
          </div>

          <div className="text-white text-xs sm:text-sm text-center sm:text-left">
            <p className="mb-2">Speak with us &nbsp;&nbsp;&nbsp; Want to discuss?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2">
              <span>+1-628-256-4002</span>
              
              {/* OR Divider */}
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/pricing/or.png"
                  alt="OR"
                  width={20}
                  height={10}
                  className="w-auto h-3"
                />
              </div>
              
              <span className="text-white rounded text-xs">
                Live Chat Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
