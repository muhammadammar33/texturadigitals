"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function BookPackages() {

    const packageData = {
      items: [
          {
              name: "Startup Branding",
              price: "$99.00",
              features: [
                "2 Stationary Design Set",
                "FREE Fax Template",
                "Print Ready Formats",
                "UNLIMITED Revisions",
                "Satisfaction Guarantee",
                "Money Back Guarantee",
              ]
          },
          {
              name: "Classic Branding",
              price: "$199.00",
              features: [
                "2 Stationary Design Set",
                "UNLIMITED Revisions",
                "Flyer Design",
                "Brochure Design (Bi-fold/Tri-fold)",
                "Satisfaction Guarantee",
                "Money Back Guarantee",
              ]
          },
          {
              name: "Premium Branding",
              price: "$399.00",
              features: [
                "2 Stationary Design Set",
                "Packaging Design",
                "UNLIMITED Revisions",
                "T-Shirt Design",
                "Satisfaction Guarantee",
                "Money Back Guarantee",
              ]
          },
          {
              name: "Unlimited Branding",
              price: "$499.00",
              features: [
                "2 Stationary Design Set",
                "Menu Card Design",
                "T-Shirt Design",
                "1 Banner Design",
                "Satisfaction Guarantee",
                "Money Back Guarantee",
              ]
          },
      ]
    };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl lg:text-4xl font-bold text-black mb-6">
          OUR PACKAGES
        </h1>
        <p className="text-gray-600 max-w-5xl mx-auto leading-relaxed">
          At Textura Digitals, we offer a range of book publishing service packages to meet your unique goals. Whether you’re just starting out or looking for full-scale publishing, we have an option for you.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {packageData.items.slice(0, 3).map((pkg, index) => (
            <div
              key={index}
              className="bg-white border border-black rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-110 transition-all duration-600 h-[530px] flex flex-col w-full max-w-sm"
            >
              {/* Package Header */}
              <div className="bg-black text-white p-6 text-center flex-shrink-0">
                <h3 className="text-2xl font-bold mb-2">{pkg.name} <br /> Package</h3>
                <div className="text-3xl font-bold">
                  {pkg.price}
                  <span className="text-sm font-bold"> /USD</span>
                </div>
              </div>

              {/* Package Features */}
              <div className="p-6 flex-1 flex flex-col">
                <div className={`mb-6 flex-1 overflow-y-auto max-h-64 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200`}>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCircleCheck} className='text-red-500 mt-1 flex-shrink-0' />
                        <span className="text-gray-600 text-md leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 flex-shrink-0">
                  <button className="flex-1 bg-black text-white py-3 px-4 rounded font-medium hover:bg-red-500 hover:text-black transition-colors">
                    Order Now
                  </button>
                  <button className="flex-1 bg-black text-white py-3 px-4 rounded font-medium hover:bg-red-500 hover:text-black transition-colors">
                    Live Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fourth package centered */}
        {packageData.items.length > 3 && (
          <div className="flex justify-center mt-6">
            <div className="bg-white border border-black rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-110 transition-all duration-600 h-[530px] flex flex-col w-full max-w-sm">
              {/* Package Header */}
              <div className="bg-black text-white p-6 text-center flex-shrink-0">
                <h3 className="text-2xl font-bold mb-2">{packageData.items[3].name} <br /> Package</h3>
                <div className="text-3xl font-bold">
                  {packageData.items[3].price}
                  <span className="text-sm font-bold"> /USD</span>
                </div>
              </div>

              {/* Package Features */}
              <div className="p-6 flex-1 flex flex-col">
                <div className={`mb-6 flex-1 overflow-y-auto max-h-64 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200`}>
                  <ul className="space-y-3">
                    {packageData.items[3].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCircleCheck} className='text-red-500 mt-1 flex-shrink-0' />
                        <span className="text-gray-600 text-md leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 flex-shrink-0">
                  <button className="flex-1 bg-black text-white py-3 px-4 rounded font-medium hover:bg-red-500 hover:text-black transition-colors">
                    Order Now
                  </button>
                  <button className="flex-1 bg-black text-white py-3 px-4 rounded font-medium hover:bg-red-500 hover:text-black transition-colors">
                    Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-black text-white px-8 py-3 rounded font-medium hover:bg-red-500 transition-colors">
            Let's Get Started
          </button>
          <button className="border border-black text-black px-8 py-3 rounded font-medium hover:bg-black hover:text-white transition-colors">
            +1 (800) 961-4590
          </button>
        </div>
      </div>
    </div>
  );
}
