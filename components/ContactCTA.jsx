"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ContactCTA() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-1/3 md:top-1/3 sm:top-1/4 right-0 z-50 flex flex-col items-end gap-2 md:gap-3 overflow-hidden">
      {/* Chat icon */}
      <div className="group">
        <div
          className={`${
            isScrolled ? "bg-black" : "bg-gray-600/30"
          } text-blue-600 rounded-l-full cursor-pointer shadow-lg shadow-gray-500/50 hover:shadow-gray-500/70 flex items-center overflow-hidden w-10 md:w-12 group-hover:w-32 md:group-hover:w-52 transition-all duration-300 ease-out`}
        >
          <div className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 md:py-3 whitespace-nowrap">
            <FontAwesomeIcon
              icon={faComment}
              size="sm"
              className="md:text-lg hover:scale-105 transition-transform"
            />
            <span className="text-blue-600 pl-1 md:pl-2 border-l border-gray-200 font-medium text-xs md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              Chat With Us
            </span>
          </div>
        </div>
      </div>

      {/* Call icon */}
      <div className="group">
        <div
          className={`${
            isScrolled ? "bg-black" : "bg-gray-600/30"
          } text-blue-600 rounded-l-full cursor-pointer shadow-lg shadow-gray-500/50 hover:shadow-gray-500/70 flex items-center overflow-hidden w-10 md:w-12 group-hover:w-32 md:group-hover:w-52 transition-all duration-300 ease-out`}
        >
          <div className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 md:py-3 whitespace-nowrap">
            <FontAwesomeIcon
              icon={faPhone}
              size="sm"
              className="md:text-lg hover:scale-105 transition-transform"
            />
            <Link href="tel:+16282564002">
              <span className="text-blue-600 pl-1 md:pl-2 border-l border-gray-200 font-medium text-xs md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                +1-628-256-4002
              </span> 
            </Link>
          </div>
        </div>
      </div>

      {/* Rotated text */}
      <div
        className={`h-48 md:h-64 w-10 md:w-12 ${
          isScrolled ? "bg-black" : "bg-gray-600/30"
        } rounded-l-2xl flex items-center justify-center shadow-lg shadow-gray-500/50 hover:shadow-gray-500/70 hover:shadow-lg transition-all`}
      >
        <span className="text-blue-600 font-bold rotate-[-90deg] whitespace-nowrap text-xs md:text-sm">
          50% OFF ON ALL SERVICES
        </span>
      </div>
    </div>
  );
}
