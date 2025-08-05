"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function CarousalPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState('right');

    const services = [
        { name: "Book Publishing", active: true },
        { name: "Marketing", active: false },
        { name: "App Design", active: false },
        { name: "Graphic Design", active: false },
        { name: "Web App Design", active: false }
    ];

    const slideData = {
        titles: ["Book Publishing", "Marketing", "App Design & Development", "Graphic Design", "Website Development"],
        descriptions: [
            "Every great book begins with a well-crafted manuscript, but even the best writing can benefit from professional editing. Our expert editors will work closely with you to refine your manuscript, improve flow, structure, and style, and ensure it's free from grammatical errors.",
            "In today's competitive digital landscape, effective marketing is essential to your business success. Our marketing services are designed to create a comprehensive strategy that attracts, engages, and converts your audience. From social media marketing to SEO and content marketing, we help you build a strong presence and connect with your target market.",
            "Whether you need a simple app or a complex enterprise solution, Textura Digitals offers cutting-edge app design and development services that bring your ideas to life. Our mobile and web applications are user-friendly, scalable, and designed to provide an exceptional user experience.",
            "Great graphic design tells a compelling story and leaves a lasting impression. At Textura Digitals, we offer comprehensive graphic design services tailored to your business needs. From logos and business cards to brochures and social media assets, we ensure your brand identity is consistent, professional, and impactful.",
            "Your website is often the first point of contact for potential clients. With our expert website design and development services, we ensure your online presence is visually appealing, easy to navigate, and optimized for search engines. We create websites that not only look great but also perform seamlessly across all devices."],
        images: [
            { src: "/assets/Book-And-Magazine.webp", alt: "Book And Magazine" },
            { src: "/assets/Advertising.webp", alt: "Advertising" },
            { src: "/assets/Web-App-Design.webp", alt: "Web App Design" },
            { src: "/assets/Logo-And-Branding.webp", alt: "Logo And Branding" },
            { src: "/assets/Logo-And-Branding.webp", alt: "Web Development" }
        ],
        learnMoreLinks: [
            "/book-publishing",
            "/marketing",
            "/app-design",
            "/graphic-design",
            "/web-development"
        ]
    };

    const changeSlide = (newSlide) => {
        if (newSlide === currentSlide || isAnimating) return;
        
        // Determine slide direction
        setSlideDirection(newSlide > currentSlide ? 'right' : 'left');
        
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide(newSlide);
            setTimeout(() => setIsAnimating(false), 50);
        }, 300);
    };

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                setSlideDirection('right');
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrentSlide(prev => (prev + 1) % services.length);
                    setTimeout(() => setIsAnimating(false), 50);
                }, 300);
            }
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAnimating, services.length]);

    return (
        <div>
            {/* Custom Logo Design Agency Section */}
            <section className="bg-gray-100 py-6 sm:py-8 md:py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Textura Digitals – Your Trusted{" "}
                    <span className="text-red-500">Custom Logo Design</span>
                    <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    Agency in the USA!
                </h1>
                
                <p className="text-gray-600 text-xs sm:text-sm md:text-md leading-relaxed max-w-3xl mx-auto px-2">
                    At Textura Digitals, we don't just create logos; we craft brand identities that elevate{" "}
                    <br className="hidden lg:block" />
                    businesses to new heights. As a custom logo design agency, we understand the power of a{" "}
                    <br className="hidden lg:block" />
                    strong logo in building a successful brand. Our team of professional designers approaches{" "}
                    <br className="hidden lg:block" />
                    each project with a strategic mindset, combining creativity and technical expertise to deliver{" "}
                    <br className="hidden lg:block" />
                    a logo that truly represents your business.
                </p>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="bg-gray-100 py-6 sm:py-8 md:py-16 px-2 sm:px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-12 items-center">
                        {/* Left Content */}
                        <div className={`space-y-3 sm:space-y-4 md:space-y-6 order-2 lg:order-1 px-2 sm:px-0 transition-all duration-300 ease-in-out ${
                            isAnimating 
                                ? `opacity-0 transform ${slideDirection === 'right' ? 'translate-x-[-40px]' : 'translate-x-[40px]'}` 
                                : 'opacity-100 transform translate-x-0'
                        }`}>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                                {slideData.titles[currentSlide]}
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                                {slideData.descriptions[currentSlide]}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                                <Link href={slideData.learnMoreLinks[currentSlide]} className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-gray-800 transition-colors">
                                        Learn More
                                    </button>
                                </Link>
                                <Link href="tel:+16282564002" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto border border-gray-900 text-gray-900 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-gray-100 transition-colors">
                                        +1-628-256-4002
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className="relative order-1 lg:order-2 px-4 sm:px-0">
                            <div className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
                                isAnimating 
                                    ? `opacity-0 transform ${slideDirection === 'left' ? 'translate-x-[40px]' : 'translate-x-[-40px]'}` 
                                    : 'opacity-100 transform translate-x-0'
                            }`}>
                                <Image 
                                    src={slideData.images[currentSlide].src} 
                                    alt={slideData.images[currentSlide].alt}
                                    width={500}
                                    height={400}
                                    className="max-w-full h-auto object-contain w-full max-w-xs sm:max-w-md lg:max-w-full"
                                />
                            </div>
                            
                            {/* Right Navigation Arrow */}
                            <button 
                                onClick={() => changeSlide(Math.min(services.length - 1, currentSlide + 1))}
                                className="absolute right-0 sm:right-2 lg:right-[-35px] top-1/2 transform -translate-y-1/2 bg-black text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors text-xs lg:text-sm"
                                disabled={isAnimating}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>

                    {/* Left Navigation Arrow - positioned for entire carousel */}
                    <button 
                        onClick={() => changeSlide(Math.max(0, currentSlide - 1))}
                        className="absolute left-0 sm:left-2 lg:left-12 top-1/2 transform -translate-y-1/2 bg-black text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10 text-xs lg:text-sm"
                        disabled={isAnimating}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    {/* Service Navigation */}
                    <div className="flex justify-center mt-6 sm:mt-8 md:mt-12">
                        <div className="flex items-center gap-2 sm:gap-4 md:gap-8 relative overflow-x-auto max-w-full px-2 sm:px-4 md:px-0">
                            <div className="flex items-center gap-2 sm:gap-4 md:gap-8 min-w-max">
                                {services.map((service, index) => (
                                    <React.Fragment key={index}>
                                        <div className="flex flex-col items-center gap-1 sm:gap-2">
                                            <button
                                                onClick={() => changeSlide(index)}
                                                className={`text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                                                    index === currentSlide ? 'text-gray-800' : 'text-gray-400'
                                                }`}
                                                disabled={isAnimating}
                                            >
                                                {service.name}
                                            </button>
                                            <div className={`transition-all duration-300 ${
                                                index === currentSlide 
                                                    ? 'w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-2 border-gray-800 rounded-full flex items-center justify-center' 
                                                    : 'w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-gray-300 rounded-full'
                                            }`}>
                                                {index === currentSlide && (
                                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gray-800 rounded-full" />
                                                )}
                                            </div>
                                        </div>
                                        {index < services.length - 1 && (
                                            <div className="w-4 sm:w-8 md:w-16 h-0.5 bg-gray-300 mt-4 sm:mt-6" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}