"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebookF, faInstagram, faTwitter, faLinkedinIn, faPinterestP, faYoutube 
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 md:pt-20 pb-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-18">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 md:col-span-1">
            <Image
              src="/assets/Qurelogix.png"
              alt="QureLogix"
              width={200}
              height={80}
              className="h-12 sm:h-15 w-auto"
            />
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              At QureLogix, we're a team of result-focused professionals specializing in all kinds of digital marketing solutions including SEO, Social Media Marketing, Google Ads, Content Marketing, Conversion Rate Optimization, SERP analysis, and more.
            </p>
            <div className="mt-4 sm:mt-6">
              <Image
                src="/assets/dmca-badge.png"
                alt="DMCA Protected"
                width={150}
                height={100}
                className="h-10 sm:h-12 w-auto"
              />
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-blue-500 font-bold text-sm sm:text-md mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><a href="/book-publishing" className="text-gray-300 hover:text-white transition-colors">BOOK PUBLISHING</a></li>
              <li><a href="/graphic-design" className="text-gray-300 hover:text-white transition-colors">GRAPHIC DESIGN</a></li>
              <li><a href="/website-development" className="text-gray-300 hover:text-white transition-colors">WEBSITE DEVELOPMENT</a></li>
              <li><a href="/app-design-and-development" className="text-gray-300 hover:text-white transition-colors">APP DESIGN & DEVELOPMENT</a></li>
              <li><a href="/marketing" className="text-gray-300 hover:text-white transition-colors">MARKETING</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-blue-500 font-bold text-sm sm:text-md mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-white transition-colors">Packages</a></li>
              <li><a href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Condition</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* US Office */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-blue-500 font-bold text-sm sm:text-md mb-4 sm:mb-6">US Office</h3>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <p className="text-gray-300">
                100 Pine St Suite 1150-<br />
                1151 , San Francisco, CA<br />
                94111
              </p>
              <p className="text-blue-500 font-bold text-base sm:text-lg">+1-628-256-4002</p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3 mt-4 sm:mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faPinterestP} size="lg" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge and Payment Methods */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-6 sm:py-8 mb-6 sm:mb-8 border-t border-gray-800">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Image 
              src="/assets/badge.webp" 
              alt="Badge 1" 
              width={80} 
              height={80} 
              className="h-12 sm:h-16 w-auto object-contain"
              quality={100}
              unoptimized={true}
            />
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-4">
            <Image src="/assets/card-brands.svg" alt="Visa" width={40} height={25} className="h-5 sm:h-6 w-auto object-contain" quality={100} unoptimized={true} />
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-2 text-xs sm:text-sm text-gray-400 space-y-2 sm:space-y-0">
          <p>QureLogix. All rights reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
