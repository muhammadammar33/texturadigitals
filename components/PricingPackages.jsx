"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

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
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl lg:text-4xl font-bold text-black mb-6">
          OUR PACKAGES
        </h1>
        <p className="text-gray-600 max-w-5xl mx-auto leading-relaxed">
          At Textura Digitals, we are proud to offer our customers customized professional logo design packages that meet the needs of every business. Check out our customized packages and choose the best that suits your needs!
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center mb-12 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "text-black border-b-2 border-black font-bold"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {packageData[activeCategory]?.map((pkg, index) => (
            <div
              key={index}
              className="bg-white border border-black rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-110 transition-all duration-600 h-[530px] flex flex-col w-full max-w-sm"
            >
              {/* Package Header */}
              <div className="bg-black text-white p-6 text-center flex-shrink-0">
                <h3 className="text-2xl font-bold mb-2">{pkg.name} <br /> Package</h3>
                <div className="text-3xl font-bold">
                  {pkg.price}
                  <span className="text-sm font-bold"> /USD</span>
                </div>
              </div>

              {/* Package Features */}
              <div className="p-6 flex-1 flex flex-col">
                <div className={`mb-6 flex-1 overflow-y-auto max-h-64 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200`}>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCircleCheck} className='text-red-500 mt-1 flex-shrink-0' />
                        <span className="text-gray-600 text-md leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 flex-shrink-0">
                  <button className="flex-1 bg-black text-white py-3 px-4 rounded font-medium hover:bg-red-500 hover:text-black transition-colors">
                    Order Now
                  </button>
                  <button className="flex-1 bg-black text-white py-3 px-4 rounded font-medium hover:bg-red-500 hover:text-black transition-colors">
                    Live Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-black text-white px-8 py-3 rounded font-medium hover:bg-red-500 transition-colors">
            Let's Get Started
          </button>
          <button className="border border-black text-black px-8 py-3 rounded font-medium hover:bg-black hover:text-white transition-colors">
            +1 (800) 961-4590
          </button>
        </div>
      </div>
    </div>
  );
}
