"use client";

import Image from "next/image";

export default function ComboPackage() {
  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat pt-24 pb-12 px-4"
      style={{
        backgroundImage: "url('/assets/pricing/bg-combo-ZLYTDJUG.png')",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              All In One Exclusive<br />
              Brand Design Package
            </h1>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Logo Design */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Logo Design</h3>
                <ul className="text-gray-200 text-sm space-y-2">
                  <li>• Unlimited Logo Design Concepts</li>
                  <li>• Unlimited Revisions</li>
                  <li>• Icon Design</li>
                  <li>• All Final File Formats</li>
                </ul>
              </div>
              {/* Value Added Services */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Value Added Services</h3>
                <ul className="text-gray-200 text-sm space-y-2">
                  <li>• Dedicated Account Manager</li>
                  <li>• Ownership Rights</li>
                  <li>• Money Back Guarantee</li>
                  <li>• Complete Deployment</li>
                </ul>
              </div>
              {/* Website Design */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Website Design</h3>
                <ul className="text-gray-200 text-sm space-y-2">
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
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Stationary Design</h3>
                <ul className="text-gray-200 text-sm space-y-2">
                  <li>• Business Card, Letterhead, Envelope</li>
                  <li>• MS Word Letterhead</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Content - Pricing & CTA */}
          <div className="text-center lg:text-left space-y-6">
            <p className="text-gray-200 text-sm leading-relaxed max-w-md">
              Our ultimate, all-in-one combo package offering the bang for your buck! This package is ideal for brands that want the complete digital solution with value for money.
            </p>
            {/* Device Mockup */}
            <div className="mb-8">
              <Image
                src="/assets/pricing/combo.png"
                alt="Design Mockup"
                width={600}
                height={500}
                className="w-full mx-auto lg:mx-0 lg:ml-auto"
              />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-purple-600 rounded-lg max-w-2xl p-8">
          <div className="flex flex-row items-center mb-6">
            <div className="mb-4">
              <h2 className="text-white text-2xl font-bold mb-2">Advance</h2>
              <h2 className="text-white text-3xl font-bold">Combo Package</h2>
              <p className="text-orange-400 text-lg mt-2">20% OFF Next Order</p>
            </div>

            {/* All for just */}
            <div className="flex items-center justify-center px-12 mb-6">
              <Image
                src="/assets/pricing/all.png"
                alt="All"
                width={60}
                height={30}
                className="mr-2"
              />
            </div>
            {/* Price */}
            <div className="mb-6">
              <span className="text-gray-300 text-lg line-through">$1,988</span>
              <span className="text-white text-sm ml-2">Only</span>
              <div className="text-yellow-400 text-6xl font-bold">$994</div>
              <button className="bg-red-500 hover:bg-red-600 my-8 text-white px-4 py-3 rounded-lg text-md transition-colors mb-4">
                Start Project Now
              </button>
            </div>
          </div>

          <div className="text-white text-sm">
            <p>Speak with us &nbsp;&nbsp;&nbsp; Want to discuss?</p>
            <p className="flex mt-2">
              +1-628-256-4002 
              {/* OR Divider */}
              <div className="flex items-center mx-2 justify-center">
                <Image
                  src="/assets/pricing/or.png"
                  alt="OR"
                  width={20}
                  height={10}
                  className="w-auto"
                />
              </div>
              <span className="text-white py-1 rounded text-xs">
                Live Chat Now
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
