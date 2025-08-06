"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function BookPackages() {

    const packageData = {
        items: [
            {
                name: "Special ",
                price: "$49.00",
                features: [
                "3 Custom Logo Design Concepts",
                "1 Dedicated Designer",
                "2 Revisions",
                "48 to 72 hours TAT",
                "Final Files Format (JPG, PNG)",
                "100% Unique Design Guarantee",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee"
                ]
            },
            {
                name: "Beginners ",
                price: "$179",
                features: [
                "2 Original Logo Concepts",
                "Unlimited Revisions",
                "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
                "Value-Added Services",
                "24 - 48 Hours Turn Around Time",
                "Dedicated Account Manager",
                "100% Satisfaction With Unlimited Revisions"
                ]
            },
            {
                name: "Basic ",
                price: "$90.00",
                features: [
                "4 Original Logo Concepts",
                "2 Dedicated Logo Designers",
                "Unlimited Revisions",
                "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
                "Stationary Design (Business Card Letterhead, Envelope Design )",
                "Value-Added Services",
                "24 - 48 Hours Turn Around Time",
                "100% Satisfaction With Unlimited Revisions"
                ]
            },
            {
                name: "Startup ",
                price: "$169.00",
                features: [
                "8 Original Logo Concepts",
                "4 Dedicated Logo Designers",
                "Unlimited Revisions",
                "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
                "Stationary Design (Business Card Letterhead, Envelope Design )",
                "Value-Added Services",
                "24 - 48 Hours Turn Around Time",
                "Dedicated Account Manager",
                "100% Satisfaction With Unlimited Revisions"
                ]
            },
            {
                name: "Unlimited ",
                price: "$299.00",
                features: [
                    "Unlimited Logo Design Concepts",
                    "By 6 Logo Designers",
                    "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
                    "FREE Letterhead & Envelope",
                    "FREE Business Card",
                    "FREE Email Signature",
                    "FREE Color Options",
                    "Unlimited Revisions on Complete Package",
                    "Value-Added Services",
                    "24 - 48 Hours Turn Around Time",
                    "Dedicated Account Manager",
                    "100% Satisfaction With Unlimited Revisions"
                ]
            },
            {
                name: "Professional ",
                price: "$399.00",
                features: [
                    "2 Logo Design Concepts",
                    "By 2 Award Winning Logo Designers",
                    "3 Revisions",
                    "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
                    "5 Page Static Website",
                    "1 Year Domain name",
                    "1 Year Web Hosting",
                    "Search Engine Friendly HTML",
                    "Unlimited Revisions on Complete Package",
                    "Value-Added Services",
                    "24 - 48 Hours Turn Around Time",
                    "Dedicated Account Manager",
                    "100% Satisfaction With Unlimited Revisions"
                ]
            },
            {
                name: "Enterprise ",
                price: "$755.00",
                features: [
                    "2 Logo Design Concepts",
                    "By 2 Award Winning Logo Designers",
                    "3 Revisions",
                    "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
                    "5 Page Static Website",
                    "1 Year Domain name",
                    "1 Year Web Hosting",
                    "Search Engine Friendly HTML",
                    "Unlimited Revisions on Complete Package",
                    "Value-Added Services",
                    "24 - 48 Hours Turn Around Time",
                    "Dedicated Account Manager",
                    "100% Satisfaction With Unlimited Revisions"
                ]
            },
            {
                name: "Mascot Silver",
                price: "$300.00",
                features: [
                    "(1) Mascot Logo",
                    "10 Revisions",
                    "Hand drawn Sketch",
                    "Presentation on mockup",
                    "(2) days' time delivery (initial 72 hours)",
                    "Revision time Delivery (24 hours)",
                    "File Formats: Ai,Eps,Png,Psd,Jpeg,Pdf",
                ]
            },
            {
                name: "Mascot Gold",
                price: "$500.00",
                features: [
                    "(1) Mascot Logo",
                    "Unlimited Revisions",
                    "Hand drawn Sketch",
                    "Presentation on mockup",
                    "(2) days' time delivery (initial 72 hours)",
                    "Revision time Delivery (24 hours)",
                    "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff,Bmp,Pdf"
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
          At QureLogix, we offer customized design packages at affordable prices to meet the unique needs of your business. Our team is dedicated to delivering exceptional results for every project we take on.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {packageData.items?.map((pkg, index) => (
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
