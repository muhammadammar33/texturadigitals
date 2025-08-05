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
            <section className="bg-gray-100 py-8 sm:py-12 md:py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 leading-tight">
                    Textura Digitals – Your Trusted{" "}
                    <span className="text-red-500">Custom Logo Design</span>
                    <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    Agency in the USA!
                </h1>
                
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-2">
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
            <section className="bg-gray-100 py-8 sm:py-12 md:py-20 px-2 sm:px-4 relative">
                <div className="max-w-7xl mx-auto relative">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">
                        {/* Left Content */}
                        <div className={`space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1 px-2 sm:px-0 transition-all duration-300 ease-in-out ${
                            isAnimating 
                                ? `opacity-0 transform ${slideDirection === 'right' ? 'translate-x-[-40px]' : 'translate-x-[40px]'}` 
                                : 'opacity-100 transform translate-x-0'
                        }`}>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                                {slideData.titles[currentSlide]}
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                                {slideData.descriptions[currentSlide]}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
                                <Link href={slideData.learnMoreLinks[currentSlide]} className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg hover:bg-gray-800 transition-colors font-medium">
                                        Learn More
                                    </button>
                                </Link>
                                <Link href="tel:+16282564002" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg hover:bg-gray-100 transition-colors">
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
                        </div>
                    </div>

                    {/* Navigation Arrows - positioned relative to the entire carousel */}
                    <button 
                        onClick={() => changeSlide(Math.max(0, currentSlide - 1))}
                        className="absolute left-0 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-black text-white w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10 text-sm sm:text-base lg:text-lg shadow-lg"
                        disabled={isAnimating}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <button 
                        onClick={() => changeSlide(Math.min(services.length - 1, currentSlide + 1))}
                        className="absolute right-0 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-black text-white w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10 text-sm sm:text-base lg:text-lg shadow-lg"
                        disabled={isAnimating}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                    {/* Service Navigation */}
                    <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
                        <div className="flex items-center gap-3 sm:gap-6 md:gap-10 relative overflow-x-auto max-w-full px-2 sm:px-4 md:px-0">
                            <div className="flex items-center gap-3 sm:gap-6 md:gap-10 min-w-max">
                                {services.map((service, index) => (
                                    <React.Fragment key={index}>
                                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                                            <button
                                                onClick={() => changeSlide(index)}
                                                className={`text-sm sm:text-base md:text-lg font-medium transition-colors whitespace-nowrap px-2 py-1 rounded ${
                                                    index === currentSlide ? 'text-gray-800 font-bold' : 'text-gray-400 hover:text-gray-600'
                                                }`}
                                                disabled={isAnimating}
                                            >
                                                {service.name}
                                            </button>
                                            <div className={`transition-all duration-300 ${
                                                index === currentSlide 
                                                    ? 'w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 border-2 border-gray-800 rounded-full flex items-center justify-center' 
                                                    : 'w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 bg-gray-300 rounded-full hover:bg-gray-400 cursor-pointer'
                                            }`}
                                            onClick={() => changeSlide(index)}>
                                                {index === currentSlide && (
                                                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-gray-800 rounded-full" />
                                                )}
                                            </div>
                                        </div>
                                        {index < services.length - 1 && (
                                            <div className="w-6 sm:w-10 md:w-20 h-0.5 bg-gray-300 mt-6 sm:mt-8" />
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