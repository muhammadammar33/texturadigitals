"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 lg:px-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="flex items-center">
        <Image
          src={isScrolled ? "/assets/textura-digitals.png" : "/assets/textura-digitals-light.png"}
          alt="Textura Digitals"
          width={100}
          height={32}
          className="h-10 w-auto"
        />
      </div>
      <div className="hidden md:flex items-center">
        <nav className={`flex space-x-6 text-sm transition-colors duration-300 ${
          isScrolled ? 'text-black' : 'text-white'
        }`} style={{fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol'}}>
          <a href="/" className="hover:text-red-500 font-bold">
            Home
          </a>
          <a href="/about" className="hover:text-red-500 font-bold">
            About Us
          </a>
          <a href="/contact" className="hover:text-red-500 font-bold">
            Contact Us
          </a>
          <a href="/pricing" className="hover:text-red-500 font-bold">
            Pricing
          </a>
          <a href="/portfolio" className="hover:text-red-500 font-bold">
            Portfolio
          </a>
          <a href="tel:+1-628-256-4002" className="hover:text-red-500 font-bold">
            📞+1-628-256-4002
          </a>
        </nav>
        <a href="/get-a-quote" className={`${
          isScrolled ? 'bg-black' : 'bg-gray-600/30'
        } text-red-500 px-6 py-3 rounded ml-6 text-sm transition-colors duration-300 inline-block`} style={{fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol'}}>
          Get A Quote
        </a>
      </div>
    </header>
  );
}
