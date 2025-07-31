"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPhone } from "@fortawesome/free-solid-svg-icons";

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
    <div className="fixed top-1/3 right-0 z-50 flex flex-col items-end gap-3 pr-1">
      {/* Chat icon */}
      <div className="group">
        <div
          className={`${
            isScrolled ? "bg-black" : "bg-gray-600/30"
          } text-red-600 rounded-l-full cursor-pointer shadow-lg shadow-gray-500/50 hover:shadow-gray-500/70 flex items-center overflow-hidden w-12 group-hover:w-44 transition-all duration-300 ease-out`}
        >
          <div className="flex items-center gap-3 px-3 py-3 whitespace-nowrap">
            <FontAwesomeIcon
              icon={faComment}
              size="lg"
              className="hover:scale-105 transition-transform"
            />
            <span className="text-white pl-2 border-l border-gray-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              Chat with us
            </span>
          </div>
        </div>
      </div>

      {/* Call icon */}
      <div className="group">
        <div
          className={`${
            isScrolled ? "bg-black" : "bg-gray-600/30"
          } text-red-600 rounded-l-full cursor-pointer shadow-lg shadow-gray-500/50 hover:shadow-gray-500/70 flex items-center overflow-hidden w-12 group-hover:w-44 transition-all duration-300 ease-out`}
        >
          <div className="flex items-center gap-3 px-3 py-3 whitespace-nowrap">
            <FontAwesomeIcon
              icon={faPhone}
              size="lg"
              className="hover:scale-105 transition-transform"
            />
            <span className="text-white pl-2 border-l border-gray-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              Call us now
            </span>
          </div>
        </div>
      </div>

      {/* Rotated text */}
      <div
        className={`h-64 w-12 ${
          isScrolled ? "bg-black" : "bg-gray-600/30"
        } rounded-l-2xl flex items-center justify-center shadow-lg shadow-gray-500/50 hover:shadow-gray-500/70 hover:shadow-lg transition-all`}
      >
        <span className="text-red-600 font-bold rotate-[-90deg] whitespace-nowrap">
          50% OFF ON ALL SERVICES
        </span>
      </div>
    </div>
  );
}
