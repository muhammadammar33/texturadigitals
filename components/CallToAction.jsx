"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faComments, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function CallToAction() {
  const [activeTab, setActiveTab] = useState('contact');

  const benefits = [
    "Free Consultation & Quote",
    "100% Satisfaction Guarantee",
    "Unlimited Revisions",
    "Fast 24-48 Hour Turnaround",
    "Dedicated Project Manager",
    "All File Formats Included"
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}
      />
      
      <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Join hundblues of satisfied clients who have boosted their brand with our professional design services. Get started today with a free consultation!
                </p>
              </div>

              {/* Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 justify-start">
                    <FontAwesomeIcon icon={faCheck} className="text-green-400 text-sm flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-700">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Contact Options */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-white/10 rounded-lg p-1 mb-6">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`flex-1 py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    activeTab === 'contact' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Get Quote
                </button>
                <button
                  onClick={() => setActiveTab('call')}
                  className={`flex-1 py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    activeTab === 'call' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Call Now
                </button>
              </div>

              {/* Contact Form Tab */}
              {activeTab === 'contact' && (
                <div className="space-y-4">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
                    Get Your Free Quote Today!
                  </h3>
                  
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-500 text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-500 text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-500 text-sm"
                    />
                    <select
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm"
                    >
                      <option value="" className="text-black">Select Service</option>
                      <option value="logo" className="text-black">Logo Design</option>
                      <option value="website" className="text-black">Website Development</option>
                      <option value="app" className="text-black">Mobile App</option>
                      <option value="branding" className="text-black">Branding Package</option>
                      <option value="marketing" className="text-black">Digital Marketing</option>
                    </select>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-500 resize-none text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <span>Get Free Quote</span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                    </button>
                  </form>
                </div>
              )}

              {/* Call Tab */}
              {activeTab === 'call' && (
                <div className="space-y-6 text-center">
                  <h3 className="text-white text-lg sm:text-xl font-bold">
                    Speak With Our Experts
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                      <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-2xl sm:text-3xl mb-3" />
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Call Us Now</h4>
                      <p className="text-gray-300 text-xs sm:text-sm mb-3">Available 24/7 for consultation</p>
                      <a 
                        href="tel:+18009614590"
                        className="text-blue-400 hover:text-blue-300 font-bold text-lg sm:text-xl transition-colors"
                      >
                        +1 (800) 961-4590
                      </a>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                      <FontAwesomeIcon icon={faComments} className="text-blue-500 text-2xl sm:text-3xl mb-3" />
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Live Chat</h4>
                      <p className="text-gray-300 text-xs sm:text-sm mb-3">Get instant support online</p>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors">
                        Start Chat Now
                      </button>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                      <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-2xl sm:text-3xl mb-3" />
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Email Us</h4>
                      <p className="text-gray-300 text-xs sm:text-sm mb-3">Send us your requirements</p>
                      <a 
                        href="mailto:info@texturadigitals.com"
                        className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm transition-colors"
                      >
                        info@texturadigitals.com
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Special Offer Banner */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold animate-pulse">
              <span>🎉</span>
              <span>Limited Time Offer: 50% OFF on all packages!</span>
              <span>🎉</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Offer valid until end of this month. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
