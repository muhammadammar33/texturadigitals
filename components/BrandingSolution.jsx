"use client";

import Image from "next/image";
import Link from "next/link";

export default function BrandingSolution() {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl lg:text-4xl font-bold text-black mb-6">
          Your Complete Branding Solution!
        </h1>
        <p className="text-gray-600 max-w-6xl mx-auto leading-relaxed text-sm">
          Our complete branding solution is designed to help your business stand out in a crowded market. From logo for business to website development, we've got you covered. <br />
          Our team of professionals will work with you to understand your vision and create a cohesive brand identity that reflects your company's unique personality. With our
          complete branding solution, you'll have everything you need to take your brand to the next level. Contact us today to learn more!
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative flex justify-center items-center">
          {/* Left Side Services */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-8">
            {/* Logo Design */}
            <div className="text-right pr-8">
              <h3 className="text-red-500 font-bold text-lg mb-2">LOGO DESIGN</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>Unlimited Concepts</li>
                <li>Unlimited Revisions</li>
                <li>12 Dedicated Logo Designers</li>
                <li>Turnaround 48-72 hrs</li>
              </ul>
            </div>

            {/* Web Design */}
            <div className="text-right pr-8">
              <h3 className="text-red-500 font-bold text-lg mb-2">WEB DESIGN</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>10 Web Pages</li>
                <li>Unlimited Revisions</li>
                <li>1 Year Free Domain Registration</li>
                <li>Content Management System</li>
                <li>(Admin Panel)</li>
                <li>Search Engine Submission</li>
              </ul>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative">
            <Image
              src="/assets/orderss.webp"
              alt="Complete Branding Solution"
              width={500}
              height={350}
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Right Side Services */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-8">
            {/* Stationery Design */}
            <div className="text-left pl-8">
              <h3 className="text-red-500 font-bold text-lg mb-2">STATIONERY DESIGN</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>Business Card Design</li>
                <li>Letterhead Design</li>
                <li>Complimentary Slip Design</li>
                <li>Brochure Design</li>
              </ul>
            </div>

            {/* Banner Design */}
            <div className="text-left pl-8">
              <h3 className="text-red-500 font-bold text-lg mb-2">BANNER DESIGN</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>2 Design Concepts</li>
                <li>Free Grayscale Format</li>
                <li>Free Color Options</li>
              </ul>
            </div>

            {/* Social Media Design */}
            <div className="text-left pl-8">
              <h3 className="text-red-500 font-bold text-lg mb-2">SOCIAL MEDIA DESIGN</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>Any 3 of Your Choice</li>
                <li>(Facebook, LinkedIn, Twitter, YouTube)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Order Button */}
        <div className="text-center mt-16">
          <Link href={`/order-sequence`}>
            <button className="flex-1 bg-black text-white py-3 px-4 rounded font-medium hover:bg-red-500 hover:text-black transition-colors">
              Order Now
            </button>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            CLICK HERE TO <span className="text-red-500 font-bold">CHAT</span> | CALL <span className="text-red-500 font-bold">+1-628-256-4002</span>
          </p>
        </div>
      </div>
    </div>
  );
}