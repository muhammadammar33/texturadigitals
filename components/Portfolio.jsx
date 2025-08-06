"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("LOGO");

    const categories = [
        "LOGO",
        "3D LOGO", 
        "ABSTRACT LOGO",
        "BRANDING",
        "ILLUSTRATIVE",
        "VIDEO ANIMATION",
        "MARKETING",
        "BOOKS PUBLISHING",
        "MERCHANDISE",
        "PACKAGING AND LABEL",
        "WEBSITE"
    ];

    const portfolioData = {
        "LOGO": [
        { src: "/assets/logo-1.jpeg", alt: "Logo Design 1" },
        { src: "/assets/logo-2.jpeg", alt: "Logo Design 2" },
        { src: "/assets/logo-3.jpg", alt: "Logo Design 3" },
        { src: "/assets/logo-4.jpg", alt: "Logo Design 4" },
        { src: "/assets/logo-5.jpg", alt: "Logo Design 5" },
        { src: "/assets/logo-6.jpg", alt: "Logo Design 6" },
        ],
        "BOOKS PUBLISHING": [
        { src: "/assets/01 (1).jpg", alt: "Books1" },
        { src: "/assets/02 (1).jpg", alt: "Books2" },
        { src: "/assets/03 (1).jpg", alt: "Books3" },
        { src: "/assets/04 (1).jpg", alt: "Books4" },
        { src: "/assets/05 (1).jpg", alt: "Books5" },
        { src: "/assets/06 (1).jpg", alt: "Books6" },
        { src: "/assets/07 (1).jpg", alt: "Books7" },
        { src: "/assets/08 (1).jpg", alt: "Books8" }
        ],
        
        
        
        "3D LOGO": [
        { src: "/assets/1.png", alt: "3D Logo Design 1" },
        { src: "/assets/2.png", alt: "3D Logo Design 2" },
        { src: "/assets/3.png", alt: "3D Logo Design 3" },
        { src: "/assets/4.png", alt: "3D Logo Design 4" },
        { src: "/assets/5.png", alt: "3D Logo Design 5" },
        { src: "/assets/6.png", alt: "3D Logo Design 6" },
        { src: "/assets/7.png", alt: "3D Logo Design 7" },
        { src: "/assets/8.png", alt: "3D Logo Design 8" }
        ],
        
        "ABSTRACT LOGO": [
        { src: "/assets/1 (1).png", alt: "Abstract Logo Design 1" },
        { src: "/assets/2 (1).png", alt: "Abstract Logo Design 2" },
        { src: "/assets/3 (1).png", alt: "Abstract Logo Design 3" },
        { src: "/assets/4 (1).png", alt: "Abstract Logo Design 4" },
        { src: "/assets/5 (2).png", alt: "Abstract Logo Design 5" },
        { src: "/assets/6 (2).png", alt: "Abstract Logo Design 6" },
        { src: "/assets/8 (1).png", alt: "Abstract Logo Design 7" },
        { src: "/assets/7 (1).png", alt: "Abstract Logo Design 8" }
        ],
        "BRANDING":[
        { src: "/assets/1 (3).png", alt: "Branding 1" },
        { src: "/assets/2 (3).png", alt: "Branding 2" },
        { src: "/assets/3 (3).png", alt: "Branding 3" },
        { src: "/assets/4 (3).png", alt: "Branding 4" },
        { src: "/assets/5 (4).png", alt: "Branding 5" },
        { src: "/assets/6 (4).png", alt: "Branding 6" },
        { src: "/assets/8 (3).png", alt: "Branding 7" },
        { src: "/assets/7 (3).png", alt: "Branding 8" }
        ],
        "ILLUSTRATIVE":[
        { src: "/assets/1 (4).png", alt: "Illustrative 1" },
        { src: "/assets/2 (4).png", alt: "Illustrative 2" },
        { src: "/assets/3 (4).png", alt: "Illustrative 3" },
        { src: "/assets/4 (4).png", alt: "Illustrative 4" },
        { src: "/assets/5 (5).png", alt: "Illustrative 5" },
        { src: "/assets/6 (5).png", alt: "Illustrative 6" },
        { src: "/assets/8 (4).png", alt: "Illustrative 7" },
        { src: "/assets/7 (4).png", alt: "Illustrative 8" }
        ],
        "VIDEO ANIMATION": [
        { src: "/assets/1.gif", alt: "Animation 1" },
        { src: "/assets/2.gif", alt: "Animation 2" },
        { src: "/assets/3.gif", alt: "Animation 3" },
        { src: "/assets/4.gif", alt: "Animation 4" },
        { src: "/assets/5.gif", alt: "Animation 5" },
        { src: "/assets/6.gif", alt: "Animation 6" },
        { src: "/assets/7.gif", alt: "Animation 7" },
        { src: "/assets/8.gif", alt: "Animation 8" }
        ],
        "MARKETING": [
        { src: "/assets/01.jpg", alt: "MARKETING 1" },
        { src: "/assets/02.jpg", alt: "MARKETING 2" },
        { src: "/assets/03.jpg", alt: "MARKETING 3" },
        { src: "/assets/04.jpg", alt: "MARKETING 4" },
        { src: "/assets/05.jpg", alt: "MARKETING 5" },
        { src: "/assets/06.jpg", alt: "MARKETING 6" },
        { src: "/assets/07.jpg", alt: "MARKETING 7" },
        { src: "/assets/08.jpg", alt: "MARKETING 8" }
        ],
        "MERCHANDISE": [
        { src: "/assets/01 (2).jpg", alt: "Merchandise1" },
        { src: "/assets/02 (2).jpg", alt: "Merchandise2" },
        { src: "/assets/03 (2).jpg", alt: "Merchandise3" },
        { src: "/assets/04 (2).jpg", alt: "Merchandise4" },
        { src: "/assets/05 (2).jpg", alt: "Merchandise5" },
        { src: "/assets/06 (2).jpg", alt: "Merchandise6" },
        { src: "/assets/07 (2).jpg", alt: "Merchandise7" },
        { src: "/assets/08 (2).jpg", alt: "Merchandise8" }
        ],
        "PACKAGING AND LABEL": [
        { src: "/assets/01 (3).jpg", alt: "Packaging1" },
        { src: "/assets/02 (3).jpg", alt: "Packaging2" },
        { src: "/assets/03 (3).jpg", alt: "Packaging3" },
        { src: "/assets/04 (3).jpg", alt: "Packaging4" },
        { src: "/assets/05 (3).jpg", alt: "Packaging5" },
        { src: "/assets/06 (3).jpg", alt: "Packaging6" },
        { src: "/assets/07 (3).jpg", alt: "Packaging7" },
        { src: "/assets/08 (3).jpg", alt: "Packaging8" }
        ],
        "WEBSITE": [
        { src: "/assets/web-1.jpg", alt: "Website1" },
        { src: "/assets/web-2.jpg", alt: "Website2" },
        { src: "/assets/web-3.jpg", alt: "Website3" },
        { src: "/assets/web-4.jpg", alt: "Website4" },
        { src: "/assets/web-5.jpg", alt: "Website5" },
        { src: "/assets/web-6.jpg", alt: "Website6" },
        { src: "/assets/web-1.jpg", alt: "Website7" },
        { src: "/assets/web-2.jpg", alt: "Website8" }
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }}/>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

            <div className="relative z-10 pb-8 sm:pb-16">
                <div className="pt-12 sm:pt-20 pb-20 sm:pb-32">
                    {/* Header Section */}
                    <div className="text-center mb-8 sm:mb-12 px-4 relative">
                        {/* Floating Badge */}
                        <div className="inline-block mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                                ✨ Creative Portfolio
                            </span>
                        </div>

                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 leading-tight text-gray-300">
                            QureLogix – The Logical Web Design and Development Company
                        </h1>
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200">
                                A Glimpse of our Stunning Portfolio!
                            </span>
                        </h2>
                        
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                        
                        <p className="text-gray-300 text-sm sm:text-lg max-w-4xl mx-auto leading-relaxed px-2">
                            The logo is your business face and should express your company's brand identity, values, and everything in between. At Textura 
                            Digitals, we create enchanting business logo designs that reflect your business identity and make sure it communicates the right 
                            message to your customers.
                        </p>
                    </div>

                    {/* Category Navigation */}
                    <div className="overflow-x-auto pb-4 mb-8 px-4 sm:px-8">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-2xl">
                            <div className="flex gap-2 min-w-max sm:flex-wrap sm:justify-center sm:min-w-0">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap rounded-xl transform hover:scale-105 ${
                                            activeCategory === category
                                                ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg font-bold border-2 border-white/30"
                                                : "text-gray-300 hover:text-white hover:bg-white/10 border-2 border-transparent"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-[-60px] sm:mt-[-100px]">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {portfolioData[activeCategory]?.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-square hover:scale-105 sm:hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl border border-white/10"
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Image */}
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                
                                {/* Hover Content */}
                                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <div>
                                        <h3 className="text-white font-bold text-sm sm:text-base mb-1">
                                            {item.alt}
                                        </h3>
                                        <p className="text-gray-300 text-xs">
                                            {activeCategory}
                                        </p>
                                    </div>
                                </div>

                                {/* Corner Badge */}
                                <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                    View
                                </div>

                                {/* Animated Border */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 sm:mt-24 px-4">
                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl max-w-4xl mx-auto">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-300 mb-8 text-sm sm:text-base">
                            Join hundblues of satisfied clients who have transformed their brands with our creative solutions.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
                            <Link href="/get-a-quote" className="w-full sm:w-auto">
                                <button className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3">
                                    Let's Get Started
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </Link>
                            <Link href="tel:+18009614590" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm">
                                    +1 (800) 961-4590
                                </button>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-8 opacity-70">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-300">500+ Projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-300">98% Satisfaction</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-300">24/7 Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
