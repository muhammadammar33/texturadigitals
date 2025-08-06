"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      question: "What services does Textura Digitals offer?",
      answer: "We offer a comprehensive range of digital services including logo design, website development, mobile app development, branding packages, digital marketing, book publishing, and graphic design services. Our team specializes in creating custom solutions tailoblue to your business needs."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on the scope and complexity. Logo designs typically take 3-5 business days, websites can take 2-4 weeks, and mobile apps may take 6-12 weeks. We provide detailed timelines during the consultation phase and keep you updated throughout the process."
    },
    {
      question: "Do you offer revisions on your work?",
      answer: "Yes! We offer unlimited revisions on most of our packages to ensure your complete satisfaction. Our goal is to deliver exactly what you envision for your brand. We work closely with you throughout the revision process until you're 100% happy with the result."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer competitive, transparent pricing with packages starting from $49 for basic logo design up to comprehensive branding solutions. Each package is clearly outlined with no hidden fees. We also offer custom quotes for unique project requirements."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! We provide ongoing support and maintenance services. For websites and apps, we offer hosting, updates, and technical support. We also provide brand guidelines and marketing materials to help you implement your new brand effectively."
    },
    {
      question: "Can you work with businesses outside the USA?",
      answer: "Yes, we work with clients globally! While we're based in the USA, we serve businesses worldwide. We use modern communication tools and project management systems to ensure seamless collaboration regardless of your location or time zone."
    },
    {
      question: "What file formats do you provide for logo designs?",
      answer: "We provide all major file formats including AI, EPS, PNG, PSD, JPEG, TIFF, PDF, and SVG. You'll receive high-resolution files suitable for both print and digital use, ensuring your logo looks perfect across all applications."
    },
    {
      question: "Do you offer rush or expedited services?",
      answer: "Yes, we offer expedited services for urgent projects. Rush orders typically have a 24-48 hour turnaround for logos and shorter timelines for other services. Additional fees may apply for expedited delivery, which we'll discuss during consultation."
    },
    {
      question: "What makes Textura Digitals different from other agencies?",
      answer: "We have a dedicated in-house team of experienced professionals - no freelancers or outsourcing. We focus on creating unique, custom designs that reflect your brand identity. Plus, we offer comprehensive packages, competitive pricing, and exceptional customer service with 100% satisfaction guarantee."
    },
    {
      question: "How do I get started with my project?",
      answer: "Getting started is easy! Simply contact us through our website, phone, or live chat. We'll schedule a free consultation to discuss your needs, provide a detailed quote, and outline the project timeline. Once approved, we'll begin working on your project immediately."
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Have questions about our services? We've compiled answers to the most common questions our clients ask. Can't find what you're looking for? Feel free to contact us!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm sm:text-lg font-semibold text-black pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon
                      icon={openItems.has(index) ? faMinus : faPlus}
                      className={`text-sm sm:text-base transition-colors duration-200 ${
                        openItems.has(index) ? 'text-blue-500' : 'text-gray-400'
                      }`}
                    />
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <button className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 rounded font-medium text-sm sm:text-base hover:bg-blue-500 hover:text-black transition-colors">
              Contact Us Today
            </button>
            <button className="w-full sm:w-auto border border-black text-black px-6 sm:px-8 py-3 rounded font-medium text-sm sm:text-base hover:bg-black hover:text-white transition-colors">
              +1 (800) 961-4590
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
