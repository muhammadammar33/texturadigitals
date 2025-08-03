"use client";

import { useState } from "react";
import Image from "next/image";

export default function AppHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    comments: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative min-h-screen pt-24 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/website/web-intro.webm" type="video/webm" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                Leading App Design Company in USA - We turn your app ideas into reality, one tap at a time!
              </h1>
              
              <p className="text-md md:text-shadow-md mb-3 leading-relaxed text-gray-200">
                At Textura Digitals, we create apps that drives crazy engagement for businesses! We are a premium mobile app development company helping companies to increase their digital engagement through interactive and intuitive apps.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start p-0 m-0 space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white font-bold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-200 text-sm">Platform-specific mobile apps</p>
                </div>
                
                <div className="flex items-start p-0 m-0 space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white font-bold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-200 text-sm">Intuitive interface for higher engagement</p>
                </div>
                
                <div className="flex items-start space-x-3 p-0 m-0">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white font-bold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-200 text-sm">Improved conversion rates with a seamless app experience</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <button className="bg-black text-sm border-black text-white px-4 py-2 font-semibold hover:bg-gray-800 rounded-sm transition-colors">
                  Let's Get Started
                </button>
                <button className="border-2 border-white text-white px-4 py-2 font-semibold hover:bg-white hover:text-black rounded-sm transition-colors">
                  +1-628-256-4002
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-row space-x-4">
                <Image
                  src="/assets/bookPublishing/t-updated.png"
                  alt="Trustpilot"
                  width={120}
                  height={40}
                  className="h-13 w-auto"
                />
              
                <Image
                  src="/assets/bookPublishing/clutch.png"
                  alt="Clutch"
                  width={100}
                  height={40}
                  className="h-13 w-auto"
                />
                <Image
                  src="/assets/bookPublishing/gpartner.png"
                  alt="Google Partner"
                  width={100}
                  height={40}
                  className="h-13 w-auto"
                />
                <Image
                  src="/assets/bookPublishing/binsider.png"
                  alt="Business Insider"
                  width={100}
                  height={40}
                  className="h-13 w-auto"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:flex lg:justify-end">
              {/* Special Offer Badge */}
              <div className="absolute top-4 right-4 md:top-12 md:right-40 z-20">
                <Image
                  src="/assets/bookPublishing/sale-bage.png"
                  alt="50% OFF Special Offer"
                  width={120}
                  height={120}
                  className="w-24 h-24 md:w-32 md:h-32"
                />
              </div>
              <div className="bg-red-500/40 p-8 rounded-lg border border-red-500 shadow-2xl max-w-md w-full">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Sign-up to Avail
                </h2>
                <p className="text-white mb-6 text-lg">Special Discount</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/70 rounded focus:outline-none focus:border-white"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/70 rounded focus:outline-none focus:border-white"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/70 rounded focus:outline-none focus:border-white"
                    required
                  />

                  <textarea
                    name="comments"
                    placeholder="Additional Comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/70 rounded focus:outline-none focus:border-white resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-400 text-white font-semibold py-3 px-6 rounded transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Submit</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
