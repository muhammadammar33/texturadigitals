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
    <div className={`fixed top-20 left-0 right-0 z-40 px-8 py-4 lg:px-50 transition-all duration-300 ${
      isScrolled ? 'bg-black' : 'bg-gray-500/20'
    }`} style={{fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol'}}>
      <nav className={`flex flex-wrap gap-16 text-sm transition-colors duration-300 ${
        isScrolled ? 'text-white' : 'text-white'
      }`}>
        <a href="#" className="hover:text-red-500">
          BOOK PUBLISHING
        </a>
        <a href="#" className="hover:text-red-500">
          GRAPHIC DESIGN
        </a>
        <a href="#" className="hover:text-red-500">
          WEBSITE DEVELOPMENT
        </a>
        <a href="#" className="hover:text-red-500">
          APP DESIGN & DEVELOPMENT
        </a>
        <a href="#" className="hover:text-red-500">
          MARKETING
        </a>
      </nav>
    </div>
  );
}
