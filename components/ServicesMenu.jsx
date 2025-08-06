"use client";

import { useState, useEffect } from "react";

export default function ServicesMenu() {
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
    <div className={`hidden lg:block fixed top-16 sm:top-20 left-0 right-0 z-30 px-3 py-3 sm:px-2 lg:px-12 xl:px-50 transition-all duration-300 ${
      isScrolled ? 'bg-black' : 'bg-gray-500/20'
    }`} style={{fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol'}}>
      <nav className={`flex flex-wrap gap-3 sm:gap-2 lg:gap-16 text-xs sm:text-sm transition-colors duration-300 ${
        isScrolled ? 'text-white' : 'text-white'
      }`}>
        <a href="/book-publishing" className="hover:text-blue-500 whitespace-nowrap">
          BOOK PUBLISHING
        </a>
        <a href="/graphic-design" className="hover:text-blue-500 whitespace-nowrap">
          GRAPHIC DESIGN
        </a>
        <a href="/website-development" className="hover:text-blue-500 whitespace-nowrap">
          WEBSITE DEVELOPMENT
        </a>
        <a href="/app-design-and-development" className="hover:text-blue-500 whitespace-nowrap">
          APP DESIGN & DEVELOPMENT
        </a>
        <a href="/marketing" className="hover:text-blue-500 whitespace-nowrap">
          MARKETING
        </a>
      </nav>
    </div>
  );
}
