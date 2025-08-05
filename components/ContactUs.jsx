"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faFileText } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    project: ''
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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content and Illustration */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 lg:mb-6 text-center lg:text-left">
                Contact Us
              </h1>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm text-center lg:text-left">
                If you have any questions or concerns, please don't hesitate to 
                reach out to us. Simply fill out the form below, and we'll be in 
                touch with you as soon as possible. Our team is always here to 
                help, and we are dedicated to providing excellent customer 
                service. Don't hesitate to contact us with any inquiries you may 
                have.
              </p>
            </div>

            {/* Illustration */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <Image
                  src="/assets/Contact-Us.gif"
                  alt="Contact Us Illustration"
                  width={400}
                  height={300}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Project Description */}
              <div className="relative">
                <div className="absolute left-3 top-4 text-gray-400 text-sm">
                  <FontAwesomeIcon icon={faFileText} />
                </div>
                <textarea
                  name="project"
                  placeholder="What's your project all about ?"
                  value={formData.project}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none placeholder-gray-500 text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 sm:py-4 px-6 rounded-sm font-medium hover:bg-red-500 hover:text-black transition-colors duration-300 text-sm sm:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
