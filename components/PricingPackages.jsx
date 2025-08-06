"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCrown, faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function PricingPackages() {
    const [activeCategory, setActiveCategory] = useState("LOGO");

    const categories = [
        "LOGO",
        "ILLUSTRATION LOGO", 
        "WEBSITE",
        "BROUCHER",
        "ANIMATION",
        "DIGITAL MARKETING"
    ];

    const packageData = {
      "LOGO": [
          {
              name: "Special ",
              price: "$49.00",
              features: [
              "3 Custom Logo Design Concepts",
              "1 Dedicated Designer",
              "2 Revisions",
              "48 to 72 hours TAT",
              "Final Files Format (JPG, PNG)",
              "100% Unique Design Guarantee",
              "100% Satisfaction Guarantee",
              "100% Money Back Guarantee"
              ]
          },
          {
              name: "Beginners ",
              price: "$179",
              features: [
              "2 Original Logo Concepts",
              "Unlimited Revisions",
              "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
              "Value-Added Services",
              "24 - 48 Hours Turn Around Time",
              "Dedicated Account Manager",
              "100% Satisfaction With Unlimited Revisions"
              ]
          },
          {
              name: "Basic ",
              price: "$90.00",
              features: [
              "4 Original Logo Concepts",
              "2 Dedicated Logo Designers",
              "Unlimited Revisions",
              "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
              "Stationary Design (Business Card Letterhead, Envelope Design )",
              "Value-Added Services",
              "24 - 48 Hours Turn Around Time",
              "100% Satisfaction With Unlimited Revisions"
              ]
          },
          {
              name: "Startup ",
              price: "$169.00",
              features: [
              "8 Original Logo Concepts",
              "4 Dedicated Logo Designers",
              "Unlimited Revisions",
              "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
              "Stationary Design (Business Card Letterhead, Envelope Design )",
              "Value-Added Services",
              "24 - 48 Hours Turn Around Time",
              "Dedicated Account Manager",
              "100% Satisfaction With Unlimited Revisions"
              ]
          },
          {
              name: "Unlimited ",
              price: "$299.00",
              features: [
                  "Unlimited Logo Design Concepts",
                  "By 6 Logo Designers",
                  "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
                  "FREE Letterhead & Envelope",
                  "FREE Business Card",
                  "FREE Email Signature",
                  "FREE Color Options",
                  "Unlimited Revisions on Complete Package",
                  "Value-Added Services",
                  "24 - 48 Hours Turn Around Time",
                  "Dedicated Account Manager",
                  "100% Satisfaction With Unlimited Revisions"
              ]
          },
          {
              name: "Professional ",
              price: "$399.00",
              features: [
                  "2 Logo Design Concepts",
                  "By 2 Award Winning Logo Designers",
                  "3 Revisions",
                  "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
                  "5 Page Static Website",
                  "1 Year Domain name",
                  "1 Year Web Hosting",
                  "Search Engine Friendly HTML",
                  "Unlimited Revisions on Complete Package",
                  "Value-Added Services",
                  "24 - 48 Hours Turn Around Time",
                  "Dedicated Account Manager",
                  "100% Satisfaction With Unlimited Revisions"
              ]
          },
          {
              name: "Enterprise ",
              price: "$755.00",
              features: [
                  "2 Logo Design Concepts",
                  "By 2 Award Winning Logo Designers",
                  "3 Revisions",
                  "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
                  "5 Page Static Website",
                  "1 Year Domain name",
                  "1 Year Web Hosting",
                  "Search Engine Friendly HTML",
                  "Unlimited Revisions on Complete Package",
                  "Value-Added Services",
                  "24 - 48 Hours Turn Around Time",
                  "Dedicated Account Manager",
                  "100% Satisfaction With Unlimited Revisions"
              ]
          },
          {
              name: "Mascot Silver",
              price: "$300.00",
              features: [
                  "(1) Mascot Logo",
                  "10 Revisions",
                  "Hand drawn Sketch",
                  "Presentation on mockup",
                  "(2) days' time delivery (initial 72 hours)",
                  "Revision time Delivery (24 hours)",
                  "File Formats: Ai,Eps,Png,Psd,Jpeg,Pdf",
              ]
          },
          {
              name: "Mascot Gold",
              price: "$500.00",
              features: [
                  "(1) Mascot Logo",
                  "Unlimited Revisions",
                  "Hand drawn Sketch",
                  "Presentation on mockup",
                  "(2) days' time delivery (initial 72 hours)",
                  "Revision time Delivery (24 hours)",
                  "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff,Bmp,Pdf"
              ]
          },
      ],
      "ILLUSTRATION LOGO": [
          {
              name: "Basic Illustrative Logo ",
              price: "$199.99",
              features: [
                "One Custom Logo Design Concept",
                "By 2 Designers",
                "UNLIMITED Revisions",
                "48 to 72 hours TAT",
                "All Final Files Format (AI, PSD, EP, PNG, GIF, JPG, PDF)",
                "100% Ownership Rights",
              ]
          },
          {
              name: "Startup Illustrative ",
              price: "$249.99",
              features: [
                "2 Custom Logo Design Concepts",
                "By 2 Designers",
                "48 to 72 hours TAT",
                "UNLIMITED Revisions",
                "File Formats: Ai,Eps,Png,Psd,Jpeg,Tiff",
                "All Final Files Format (AI, PSD, EP, PNG, GIF, JPG, PDF)",
                "100% Ownership Rights",
              ]
          },
          {
              name: "Professional Illustrative",
              price: "$349.99",
              features: [
                "UNLIMITED Original Logo Concepts",
                "By 4 Designers",
                "UNLIMITED Revisions",
                "48 to 72 hours TAT",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
              ]
          },
      ],
      "WEBSITE": [
          {
              name: "Basic Website",
              price: "$149.00",
              features: [
                "1 Page Website Design",
                "HTML Based",
                "1 Banner Design",
                "Contact/Query Form",
                "3 Revisions",
                "Complete W3C Certified HTML",
                "Complete Deployment"
              ]
          },
          {
              name: "Start Up Website",
              price: "$349.00",
              features: [
                "3 Page Website Design",
                "HTML Based",
                "Hover Effects",
                "2 Banner Designs",
                "Sliding Banner",
                "2 Stock Photos (You can provide us more)",
              ]
          },
          {
              name: "Professional Website",
              price: "$799.00",
              features: [
                "10 Web Pages",
                "Custom Design Layout",
                "Contact/Query Form",
                "Content Management System",
                "15 Stock Photos",
                "6 Animated Sliders",
                "Logo design Concepts",
              ]
          },
          {
              name: "Elite Website",
              price: "$1299.00",
              features: [
                "Unique 5 Pages Website Design",
                "Custom, Interactive, Dynamic & High End Web Design",
                "Custom WordPress Development",
                "Content Management System",
                "5 Stock Images",
                "5 Banner Designs",
                "Sliding Banners",
              ]
          },
          {
              name: "Identity Website",
              price: "$1699.00",
              features: [
                "Unique 10 Pages Website Design",
                "Custom, Interactive, Dynamic & High End Web Design",
                "Customize WordPress (or) PHP Development",
                "Interactive Sliding Banners",
                "10 Stock Images",
              ]
          },
          {
              name: "Corporate Website",
              price: "$3399.00",
              features: [
                "Unique 15 to 20 Pages Website Design",
                "Custom Made, Interactive, Dynamic & High End Design",
                "Customized WordPress (or) PHP Development",
                "Interactive Sliding Banners",
                "Up to 15 Custom Made Banner Designs",
              ]
          },
      ],
      "BROUCHER": [
          {
              name: "Startup Branding",
              price: "$99.00",
              features: [
                "2 Stationary Design Set",
                "FREE Fax Template",
                "Print Ready Formats",
                "UNLIMITED Revisions",
                "Satisfaction Guarantee",
                "Money Back Guarantee",
              ]
          },
          {
              name: "Classic Branding",
              price: "$199.00",
              features: [
                "2 Stationary Design Set",
                "UNLIMITED Revisions",
                "Flyer Design",
                "Brochure Design (Bi-fold/Tri-fold)",
                "Satisfaction Guarantee",
                "Money Back Guarantee",
              ]
          },
          {
              name: "Premium Branding",
              price: "$399.00",
              features: [
                "2 Stationary Design Set",
                "Packaging Design",
                "UNLIMITED Revisions",
                "T-Shirt Design",
                "Satisfaction Guarantee",
                "Money Back Guarantee",
              ]
          },
          {
              name: "Unlimited Branding",
              price: "$499.00",
              features: [
                "2 Stationary Design Set",
                "Menu Card Design",
                "T-Shirt Design",
                "1 Banner Design",
                "Satisfaction Guarantee",
                "Money Back Guarantee",
              ]
          },
      ],
      "ANIMATION": [
          {
              name: "Basic Video",
              price: "$499.00",
              features: [
                  "30 Second Video",
                  "Professional Script",
                  "Storyboard",
                  "Animation",
                  "Voice-Over & Sound Effects",
                  "4 weeks Delivery",
                  "Unlimited Revisions"
              ]
          },
          {
              name: "Classic Video",
              price: "$999.00",
              features: [
                  "60 Second Video",
                  "Professional Script",
                  "Sample Theme",
                  "Storyboard",
                  "Animation",
                  "Voice-Over & Sound Effects",
                  "5 weeks Delivery",
              ]
          },
          {
              name: "Premium Video",
              price: "$1499.00",
              features: [
                  "90 Second Video",
                  "Professional Script",
                  "Sample Theme",
                  "Storyboard",
                  "Animation",
                  "Voice-Over & Sound Effects",
                  "6 Weeks Delivery"
              ]
          },
          {
              name: "Unlimited Video",
              price: "$2299.00",
              features: [
                  "120 Second Video",
                  "Professional Script",
                  "Sample Theme",
                  "Storyboard",
                  "Animation",
                  "Voice-Over & Sound Effects",
                  "Dedicated Project Manager"
              ]
          },
      ],
      "DIGITAL MARKETING": [
        {
          name: "Bronze SMM",
          price: "$200",
          features: [
            "Social Channels(Facebook, Instagram)",
            "Facebook Page Setup & Management",
            "Instagram Page Setup & Management",
            "Set Up and Optimization Of Business Page / Profile"
          ]
        },
        {
          name: "Silver SMM",
          price: "$300",
          features: [
            "Social Channels(Facebook, Instagram, Twitter)",
            "Facebook Page Setup & Management",
            "Instagram Page Setup & Management",
            "Twitter Page Setup & Management",
            "Set Up and Optimization Of Business Page / Profile"
          ]
        },
        {
          name: "Gold SMM",
          price: "$500",
          features: [
            "Social Channels(Facebook, Instagram, Twitter, LinkedIn, Pinterest)",
            "Facebook Page Setup & Management",
            "Instagram Page Setup & Management",
            "Twitter Page Setup & Management",
            "LinkedIn Page Setup & Management",
            "Pinterest Page Setup & Management",
            "Set Up and Optimization Of Business Page / Profile"
          ]
        },
        {
          name: "Bronze SEO",
          price: "$350",
          features: [
            "Campaign Setup And Optimization",
            "Website Audit",
            "Pages Optimized (10 pages)",
            "15 Selected Keywords Targeting",
            "Keyword Research",
            "Keyword Grouping",
            "Keyword Mapping"
          ]
        },
        {
          name: "Silver SEO",
          price: "$700",
          features: [
            "Prior Analysis",
            "Business Analysis",
            "Consumer Analysis",
            "Competitor Analysis",
            "35 Selected Keywords Targeting",
            "15 Pages Keyword Targeted",
            "Webpage Optimization"
          ]
        },
        {
          name: "Gold SEO",
          price: "$1200",
          features: [
            "Prior Analysis",
            "Business Analysis",
            "Consumer Analysis",
            "Competitor Analysis",
            "60+ Selected Keywords Targeting",
            "30 Pages Keyword Targeted",
            "Webpage Optimization"
          ]
        },
      ]
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}/>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              <FontAwesomeIcon icon={faCrown} className="mr-2" />
              Premium Packages
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600">
              OUR PACKAGES
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          
          <p className="text-gray-600 text-sm sm:text-lg max-w-4xl mx-auto leading-relaxed px-2">
            At QureLogix, we are proud to offer our customers customized professional logo design packages that meet the needs of every business. Check out our customized packages and choose the best that suits your needs!
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-8 opacity-70">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <span className="text-sm text-gray-600">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Category Navigation - Mobile Optimized */}
        <div className="mb-8 sm:mb-12 lg:mb-16 px-4">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-3 sm:p-4 lg:p-6 border border-gray-200/50 shadow-2xl">
            {/* Mobile: Horizontal Scroll */}
            <div className="block sm:hidden">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-2 text-xs font-medium transition-all duration-300 whitespace-nowrap rounded-lg flex-shrink-0 ${
                      activeCategory === category
                        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg font-bold"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category.replace(' ', '\n')}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tablet and Desktop: Grid Layout */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-2 lg:gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 rounded-xl transform hover:scale-105 ${
                      activeCategory === category
                        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg font-bold border-2 border-white/30"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-2 border-transparent"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Packages Grid - Mobile Optimized */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {packageData[activeCategory]?.map((pkg, index) => {
              const isPopular = index === 1 || index === 4; // Make certain packages popular
              const isPremium = index === packageData[activeCategory].length - 1; // Last package is premium
              
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-auto min-h-[520px] sm:h-[580px] flex flex-col w-full transform hover:scale-105 border-2 ${
                    isPopular 
                      ? 'border-gradient-to-r from-blue-500 to-purple-500 shadow-blue-200/50' 
                      : isPremium 
                        ? 'border-gradient-to-r from-purple-500 to-pink-500 shadow-purple-200/50'
                        : 'border-gray-200 hover:border-blue-300'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Popular/Premium Badge */}
                  {isPopular && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        🔥 POPULAR
                      </span>
                    </div>
                  )}
                  {isPremium && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        <FontAwesomeIcon icon={faCrown} className="mr-1" />
                        PREMIUM
                      </span>
                    </div>
                  )}

                  {/* Background Decorations */}
                  <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 transform rotate-12 transition-all duration-500 group-hover:scale-110 ${
                    isPopular 
                      ? 'bg-gradient-to-br from-blue-400 to-purple-400' 
                      : isPremium 
                        ? 'bg-gradient-to-br from-purple-400 to-pink-400'
                        : 'bg-gradient-to-br from-gray-400 to-blue-400'
                  } rounded-full blur-2xl`}></div>

                  {/* Package Header */}
                  <div className={`p-4 sm:p-6 text-center relative z-10 ${
                    isPopular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                      : isPremium 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                        : 'bg-gradient-to-r from-gray-900 to-gray-800'
                  } text-white`}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 leading-tight">
                      {pkg.name}
                      <br />
                      <span className="text-xs sm:text-sm font-normal opacity-90">Package</span>
                    </h3>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                      {pkg.price}
                      <span className="text-xs sm:text-sm font-normal opacity-80"> /USD</span>
                    </div>
                    {isPopular && (
                      <div className="text-xs opacity-90">Most Popular Choice</div>
                    )}
                    {isPremium && (
                      <div className="text-xs opacity-90">Best Value Package</div>
                    )}
                  </div>

                  {/* Package Features */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col relative z-10">
                    <div className="mb-4 sm:mb-6 flex-1 overflow-y-auto max-h-48 sm:max-h-64 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      <ul className="space-y-2 sm:space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 sm:gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${featureIndex * 50}ms`}}>
                            <FontAwesomeIcon 
                              icon={faCircleCheck} 
                              className={`mt-0.5 sm:mt-1 flex-shrink-0 text-xs sm:text-sm ${
                                isPopular 
                                  ? 'text-blue-500' 
                                  : isPremium 
                                    ? 'text-purple-500'
                                    : 'text-green-500'
                              }`} 
                            />
                            <span className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 sm:gap-3 flex-shrink-0">
                      <Link href={`/order/${pkg.name}`} className="w-full">
                        <button className={`group w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 ${
                          isPopular 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500' 
                            : isPremium 
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500'
                              : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}>
                          Order Now
                          <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </Link>
                      <Link href="/live-chat" className="w-full">
                        <button className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 border-2 ${
                          isPopular 
                            ? 'border-blue-500 text-blue-600 hover:bg-blue-50' 
                            : isPremium 
                              ? 'border-purple-500 text-purple-600 hover:bg-purple-50'
                              : 'border-gray-400 text-gray-600 hover:bg-gray-50'
                        }`}>
                          Live Chat
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 px-4">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200/50 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Join thousands of satisfied clients who have elevated their business with our premium design packages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/get-a-quote" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 sm:gap-3">
                  Let's Get Started
                  <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link href="tel:+18009614590" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  +1 (800) 961-4590
                </button>
              </Link>
            </div>

            {/* Additional Trust Indicators */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-4 sm:gap-8 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">500+</div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-600">98%</div>
                <div className="text-xs text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-pink-600">1000+</div>
                <div className="text-xs text-gray-600">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
