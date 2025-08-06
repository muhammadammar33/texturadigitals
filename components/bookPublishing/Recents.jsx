"use client";

import { useState } from "react";
import Image from "next/image";

export default function Recents() {

    const portfolioData = {
        items: [
            { src: "/assets/01 (1).jpg", alt: "Books1" },
            { src: "/assets/02 (1).jpg", alt: "Books2" },
            { src: "/assets/03 (1).jpg", alt: "Books3" },
            { src: "/assets/04 (1).jpg", alt: "Books4" },
            { src: "/assets/05 (1).jpg", alt: "Books5" },
            { src: "/assets/06 (1).jpg", alt: "Books6" },
            { src: "/assets/07 (1).jpg", alt: "Books7" },
            { src: "/assets/08 (1).jpg", alt: "Books8" }
    ]};

    return (
        <div className="text-white pb-16 min-h-screen">
            <div className="bg-black pt-16 pb-32">
                {/* Header Section */}
                <div className="text-center mb-8 px-4">
                    <h2 className="text-4xl lg:text-4xl font-bold mb-4">
                    Our Recent Book Publishing Projects
                    </h2>
                    <p className="text-gray-300 text-sm max-w-4xl mx-auto leading-relaxed">
                    Explore the diverse range of books we have proudly helped publish. From gripping novels to inspiring memoirs, our portfolio reflects our dedication to quality, creativity, and author success.
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
            <button className="bg-black text-white px-8 py-3 rounded font-medium hover:bg-blue-500 hover:text-black transition-all duration-500 transform hover:scale-105 animate-pulse">
                Let's Get Started
            </button>
            <button className="border border-black text-black px-8 py-3 rounded font-medium hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors">
                +1 (800) 961-4590
            </button>
            </div>
        </div>
        </div>
    );
}
