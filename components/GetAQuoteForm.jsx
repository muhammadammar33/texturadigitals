"use client";

import { useState } from "react";

export default function GetAQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const services = [
    "3D Logo",
    "Abstract Logo", 
    "Animated Logo",
    "Branding",
    "Illustrative Logo",
    "Website Design",
    "Website Development",
    "Video Animation",
    "Digital Marketing",
    "Social Media Marketing"
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Get A Quote
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              required
            />
          </div>

          {/* Email and Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              className="px-4 py-4 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              required
            />
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <span className="text-green-600 text-lg">🇵🇰</span>
                <span className="text-gray-600">+92</span>
                <span className="text-gray-300">|</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-20 pr-4 py-4 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                required
              />
            </div>
          </div>

          {/* Type of Service Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Type of Service <span className="text-red-500">*</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                  <span className="text-gray-700 hover:text-red-500 transition-colors">
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Write Us What You Need"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-vertical"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-4 px-6 rounded-sm transition-colors duration-300 text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
