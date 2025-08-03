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
        <div className="text-white pb-16 min-h-screen">
            <div className="bg-black pt-16 pb-32">
                {/* Header Section */}
                <div className="text-center mb-8 px-4">
                    <h1 className="text-3xl lg:text-2xl font-bold mb-4">
                    Textura Digitals – The Logical Web Design and Development Company
                    </h1>
                    <h2 className="text-4xl lg:text-4xl font-bold mb-8">
                    A Glimpse of our Stunning Portfolio!
                    </h2>
                    <p className="text-gray-300 text-sm max-w-4xl mx-auto leading-relaxed">
                    The logo is your business face and should express your company's brand identity, values, and everything in between. At Textura 
                    Digitals, we create enchanting business logo designs that reflect your business identity and make sure it communicates the right 
                    message to your customers.
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="flex flex-wrap justify-center gap-1 mb-4 px-8">
                    {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                            ? "text-white border-b-2 border-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                    >
                        {category}
                    </button>
                    ))}
                </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-9/10 mx-auto px-4 mt-[-100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
            {portfolioData[activeCategory]?.map((item, index) => (
                <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-square hover:scale-110 transition-transform duration-1000"
                >
                <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
            ))}
            </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-a-quote">
                <button className="bg-black text-white px-8 py-3 rounded font-medium hover:bg-red-500 hover:text-black transition-all duration-500 transform hover:scale-105 animate-pulse">
                    Let's Get Started
                </button>
            </Link>
            <Link href="tel:+18009614590">
                <button className="border border-black text-black px-8 py-3 rounded font-medium hover:bg-white hover:text-red-500 hover:border-red-500 transition-colors">
                    +1 (800) 961-4590
                </button>
            </Link>
            </div>
        </div>
        </div>
    );
}
