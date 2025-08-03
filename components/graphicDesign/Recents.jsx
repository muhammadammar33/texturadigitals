"use client";

import { useState } from "react";
import Image from "next/image";

export default function Recents() {

    const portfolioData = {
        items: [
            { src: "/assets/1 (3).png", alt: "Branding 1" },
            { src: "/assets/2 (3).png", alt: "Branding 2" },
            { src: "/assets/3 (3).png", alt: "Branding 3" },
            { src: "/assets/4 (3).png", alt: "Branding 4" },
            { src: "/assets/5 (4).png", alt: "Branding 5" },
            { src: "/assets/6 (4).png", alt: "Branding 6" },
            { src: "/assets/8 (3).png", alt: "Branding 7" },
            { src: "/assets/7 (3).png", alt: "Branding 8" }
        ]
    };

    return (
        <div className="text-white pb-16 min-h-screen">
            <div className="bg-black pt-16 pb-32">
                {/* Header Section */}
                <div className="text-center mb-8 px-4">
                    <h2 className="text-4xl lg:text-4xl font-bold mb-4">
                    A Glimpse of Our Professional Company Graphic Design Portfolio!
                    </h2>
                    <p className="text-gray-300 text-sm max-w-4xl mx-auto leading-relaxed">
                    As you browse through our work, you'll see the diverse range of projects we've tackled and the level of creativity and attention to detail that goes into each one. From logos and branding materials to promotional videos and infographics, our portfolio showcases the versatility and expertise of our team.
                    </p>
                </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-9/10 mx-auto px-4 mt-[-100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
            {portfolioData.items?.map((item, index) => (
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
            <button className="bg-black text-white px-8 py-3 rounded font-medium hover:bg-red-500 hover:text-black transition-all duration-500 transform hover:scale-105 animate-pulse">
                Let's Get Started
            </button>
            <button className="border border-black text-black px-8 py-3 rounded font-medium hover:bg-white hover:text-red-500 hover:border-red-500 transition-colors">
                +1 (800) 961-4590
            </button>
            </div>
        </div>
        </div>
    );
}
