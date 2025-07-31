"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FontAwesomeIcon icon={faPaintBrush} className='text-black' />,
      title: "Discovery and Strategy:",
      description: "We get to know your business inside and out. We'll ask you about your brand values, target audience, and competitors and use that information to craft a strategy that aligns with your business goals."
    },
    {
      number: "02", 
      icon: <FontAwesomeIcon icon={faTrophy} className='text-black' />,
      title: "Creative Conceptualization:",
      description: "Our professional designers will present you with several concepts that embody your brand strategy. We'll work with you to refine the design, ensuring it meets your needs and expectations."
    },
    {
      number: "03",
      icon: <FontAwesomeIcon icon={faSquareCheck} className='text-black' />,
      title: "Perfection and Delivery:",
      description: "Once the design is approved, our team will finalize the logo, ensuring it's pixel-perfect and ready for use across all mediums. You'll receive your logo in various formats, making it easy to use in any situation."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 mb-6 relative">
          <div className="loader absolute inset-0"></div>
          <span className="text-black font-medium relative z-10">How It Works</span>
        </div>
        <h2 className="text-4xl lg:text-4xl font-bold text-black mb-8">
          Three Simple Steps to Start the Process
        </h2>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="text-5xl font-bold text-gray-200 mb-4">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="text-5xl mb-6">
                {step.icon}
              </div>

              {/* Connecting Dots */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 right-0 transform translate-x-1/2">
                  <div className="flex items-center space-x-2">
                    <div className="loader1"></div>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-black">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
