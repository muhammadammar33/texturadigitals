"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // Reset services dropdown when closing menu
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex lg:justify-between items-center px-4 py-3 sm:px-6 lg:px-12 xl:px-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="flex items-center flex-shrink-0">
          <Image
            src={isScrolled ? "/assets/QureLogix-light.png" : "/assets/Qurelogix.png"}
            alt="QureLogix"
            width={120}
            height={40}
            className="h-8 sm:h-10 lg:h-12 w-auto"
            priority
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <nav className={`flex space-x-6 text-sm transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`} style={{fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol'}}>
            <a href="/" className="hover:text-blue-500 font-bold">
              Home
            </a>
            <a href="/about" className="hover:text-blue-500 font-bold">
              About Us
            </a>
            <a href="/contact" className="hover:text-blue-500 font-bold">
              Contact Us
            </a>
            <a href="/pricing" className="hover:text-blue-500 font-bold">
              Pricing
            </a>
            <a href="/portfolio" className="hover:text-blue-500 font-bold">
              Portfolio
            </a>
            <a href="tel:+1-628-256-4002" className="hover:text-blue-500 font-bold">
              📞+1-628-256-4002
            </a>
          </nav>
          <a href="/get-a-quote" className={`${
            isScrolled ? 'bg-black' : 'bg-gray-600/30'
          } text-blue-500 px-6 py-3 rounded ml-6 text-sm transition-colors duration-300 inline-block`} style={{fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol'}}>
            Get A Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className={`lg:hidden flex flex-col justify-center left-[150px] items-center w-8 h-8 z-50 transition-colors duration-300 flex-shrink-0 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${
            isScrolled ? 'bg-black' : 'bg-white'
          } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 mt-1 transition-all duration-300 ${
            isScrolled ? 'bg-black' : 'bg-white'
          } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 mt-1 transition-all duration-300 ${
            isScrolled ? 'bg-black' : 'bg-white'
          } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50" onClick={toggleMobileMenu}></div>
        <nav className={`absolute top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 overflow-y-auto z-[70] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col pt-20 px-6" style={{fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol'}}>
            <a href="/" className="text-black hover:text-blue-500 font-bold text-lg py-4 border-b border-gray-200" onClick={toggleMobileMenu}>
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="border-b border-gray-200">
              <button 
                onClick={toggleServices}
                className="w-full text-left text-black hover:text-blue-500 font-bold text-lg py-4 flex justify-between items-center"
              >
                Services
                <span className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {isServicesOpen && (
                <div className="bg-gray-50">
                  <a href="/book-publishing" className="block text-gray-700 hover:text-blue-500 py-3 px-4 text-base border-b border-gray-100" onClick={toggleMobileMenu}>
                    BOOK PUBLISHING
                  </a>
                  <a href="/graphic-design" className="block text-gray-700 hover:text-blue-500 py-3 px-4 text-base border-b border-gray-100" onClick={toggleMobileMenu}>
                    GRAPHIC DESIGN
                  </a>
                  <a href="/website-development" className="block text-gray-700 hover:text-blue-500 py-3 px-4 text-base border-b border-gray-100" onClick={toggleMobileMenu}>
                    WEBSITE DEVELOPMENT
                  </a>
                  <a href="/app-design-and-development" className="block text-gray-700 hover:text-blue-500 py-3 px-4 text-base border-b border-gray-100" onClick={toggleMobileMenu}>
                    APP DESIGN & DEVELOPMENT
                  </a>
                  <a href="/marketing" className="block text-gray-700 hover:text-blue-500 py-3 px-4 text-base" onClick={toggleMobileMenu}>
                    MARKETING
                  </a>
                </div>
              )}
            </div>

            <a href="/about" className="text-black hover:text-blue-500 font-bold text-lg py-4 border-b border-gray-200" onClick={toggleMobileMenu}>
              About Us
            </a>
            <a href="/contact" className="text-black hover:text-blue-500 font-bold text-lg py-4 border-b border-gray-200" onClick={toggleMobileMenu}>
              Contact Us
            </a>
            <a href="/pricing" className="text-black hover:text-blue-500 font-bold text-lg py-4 border-b border-gray-200" onClick={toggleMobileMenu}>
              Pricing
            </a>
            <a href="/portfolio" className="text-black hover:text-blue-500 font-bold text-lg py-4 border-b border-gray-200" onClick={toggleMobileMenu}>
              Portfolio
            </a>
            <a href="/get-a-quote" className="bg-black text-blue-500 px-6 py-3 rounded text-center font-bold mt-6 mb-4" onClick={toggleMobileMenu}>
              Get A Quote
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
