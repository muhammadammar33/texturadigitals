"use client";

import { useState } from "react";
import Image from "next/image";

export default function Recents() {

    const portfolioData = {
        items: [
            { src: "/assets/web-1.jpg", alt: "Website1" },
            { src: "/assets/web-2.jpg", alt: "Website2" },
            { src: "/assets/web-3.jpg", alt: "Website3" },
            { src: "/assets/web-4.jpg", alt: "Website4" },
            { src: "/assets/web-5.jpg", alt: "Website5" },
            { src: "/assets/web-6.jpg", alt: "Website6" },
            { src: "/assets/web-1.jpg", alt: "Website7" },
            { src: "/assets/web-2.jpg", alt: "Website8" }
        ]
    };

    return (
        <div className="text-white pb-16 min-h-screen">
            <div className="bg-black pt-16 pb-32">
                {/* Header Section */}
                <div className="text-center mb-8 px-4">
                    <h2 className="text-4xl lg:text-4xl font-bold mb-4">
                    A Glimpse of Our Professional Logo Portfolio
                    </h2>
                    <p className="text-gray-300 text-sm max-w-4xl mx-auto leading-relaxed">
                    At QureLogix, we proudly present our diverse portfolio of apps. From sleek and user-friendly designs to innovative and feature-rich functionality, our experienced developers have the skills and expertise to bring any app idea to life. Take a glimpse into our mobile app development portfolio and see the quality and creativity of our work for yourself.
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
