"use client";

import { useState } from "react";
import Image from "next/image";

export default function Recents() {

    const portfolioData = {
        items: [
            { src: "/assets/01.jpg", alt: "MARKETING 1" },
            { src: "/assets/02.jpg", alt: "MARKETING 2" },
            { src: "/assets/03.jpg", alt: "MARKETING 3" },
            { src: "/assets/04.jpg", alt: "MARKETING 4" },
            { src: "/assets/05.jpg", alt: "MARKETING 5" },
            { src: "/assets/06.jpg", alt: "MARKETING 6" },
            { src: "/assets/07.jpg", alt: "MARKETING 7" },
            { src: "/assets/08.jpg", alt: "MARKETING 8" }
        ]
    };

    return (
        <div className="text-white pb-16 min-h-screen">
            <div className="bg-black pt-16 pb-32">
                {/* Header Section */}
                <div className="text-center mb-8 px-4">
                    <h2 className="text-4xl lg:text-4xl font-bold mb-4">
                    A Glimpse of Our Professional Advertising Portfolio
                    </h2>
                    <p className="text-gray-300 text-sm max-w-4xl mx-auto leading-relaxed">
                    Our portfolio showcases the diverse range of custom marketing materials we have provided for our clients. It serves as a testament to our expertise and ability to deliver results. From brand development to digital marketing, our portfolio highlights the custom product advertising design solutions we have created for businesses across various industries. Each project featured in our portfolio represents our dedication to understanding our client's unique needs and goals and executing strategies that produce measurable results. Our marketing materials design services portfolio is not just a window into the work we do, but it also serves as a valuable resource for our potential clients to see the type of work we have done in the past and gives them a clear picture of what we can do for them.
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
