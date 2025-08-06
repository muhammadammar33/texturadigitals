"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
            "Great graphic design tells a compelling story and leaves a lasting impression. At Textura Digitals, we offer comprehensive graphic design services tailoblue to your business needs. From logos and business cards to brochures and social media assets, we ensure your brand identity is consistent, professional, and impactful.",
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
            <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}/>
                </div>
                
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <div className="inline-block mb-4 sm:mb-6">
                        <span className="bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                            Trusted Design Agency
                        </span>
                    </div>
                    
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                        Textura Digitals – Your Trusted{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
                            Custom Logo Design
                        </span>
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        Agency in the USA!
                    </h1>
                    
                    <p className="text-gray-600 text-sm sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-2 mb-8">
                        At Textura Digitals, we don't just create logos; we craft brand identities that elevate{" "}
                        businesses to new heights. Our team of professional designers combines creativity and technical expertise to deliver{" "}
                        a logo that truly represents your business vision.
                    </p>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-70">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600">500+ Happy Clients</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600">1000+ Projects Completed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600">24/7 Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="bg-white py-12 sm:py-16 md:py-24 px-2 sm:px-4 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center min-h-[600px]">
                        {/* Left Content */}
                        <div className={`space-y-6 sm:space-y-8 order-1 lg:order-1 px-4 sm:px-0 transition-all duration-500 ease-out ${
                            isAnimating 
                                ? `opacity-0 transform ${slideDirection === 'right' ? 'translate-x-[-60px] scale-95' : 'translate-x-[60px] scale-95'}` 
                                : 'opacity-100 transform translate-x-0 scale-100'
                        }`}>
                            {/* Service Badge */}
                            <div className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                                Service {String(currentSlide + 1).padStart(2, '0')} of {String(services.length).padStart(2, '0')}
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                                    {slideData.titles[currentSlide]}
                                </span>
                            </h2>
                            
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"></div>
                            
                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl font-light">
                                {slideData.descriptions[currentSlide]}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
                                <Link href={slideData.learnMoreLinks[currentSlide]} className="w-full sm:w-auto">
                                    <button className="group w-full sm:w-auto bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3">
                                        Learn More
                                        <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </Link>
                                <Link href="tel:+16282564002" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                        +1-628-256-4002
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className="relative order-2 lg:order-2 px-4 sm:px-0">
                            <div className={`flex items-center justify-center transition-all duration-500 ease-out ${
                                isAnimating 
                                    ? `opacity-0 transform ${slideDirection === 'left' ? 'translate-x-[60px] scale-95' : 'translate-x-[-60px] scale-95'}` 
                                    : 'opacity-100 transform translate-x-0 scale-100'
                            }`}>
                                {/* Image Container with Decorative Elements */}
                                <div className="relative group">
                                    {/* Decorative Background */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                        ✨ Premium
                                    </div>
                                    
                                    {/* Main Image */}
                                    <div className="relative bg-white p-6 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                                        <Image 
                                            src={slideData.images[currentSlide].src} 
                                            alt={slideData.images[currentSlide].alt}
                                            width={500}
                                            height={400}
                                            className="max-w-full h-auto object-contain w-full rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={() => changeSlide(Math.max(0, currentSlide - 1))}
                        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-900 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center hover:bg-white hover:shadow-2xl transition-all duration-300 z-20 border border-gray-200/50 group"
                        disabled={isAnimating || currentSlide === 0}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-lg group-hover:scale-110 transition-transform duration-300" />
                    </button>

                    <button 
                        onClick={() => changeSlide(Math.min(services.length - 1, currentSlide + 1))}
                        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-900 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center hover:bg-white hover:shadow-2xl transition-all duration-300 z-20 border border-gray-200/50 group"
                        disabled={isAnimating || currentSlide === services.length - 1}
                    >
                        <FontAwesomeIcon icon={faChevronRight} className="text-lg group-hover:scale-110 transition-transform duration-300" />
                    </button>

                    {/* Service Navigation */}
                    <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-200/50">
                            <div className="flex items-center gap-4 sm:gap-8 relative overflow-x-auto max-w-full">
                                <div className="flex items-center gap-4 sm:gap-8 min-w-max">
                                    {services.map((service, index) => (
                                        <React.Fragment key={index}>
                                            <div className="flex flex-col items-center gap-3">
                                                <button
                                                    onClick={() => changeSlide(index)}
                                                    className={`text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap px-4 py-2 rounded-lg transform hover:scale-105 ${
                                                        index === currentSlide 
                                                            ? 'text-white bg-gradient-to-r from-gray-900 to-gray-700 shadow-lg font-bold' 
                                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                                    }`}
                                                    disabled={isAnimating}
                                                >
                                                    {service.name}
                                                </button>
                                                <div className={`transition-all duration-500 ${
                                                    index === currentSlide 
                                                        ? 'w-6 h-6 border-2 border-gray-900 rounded-full flex items-center justify-center transform scale-110' 
                                                        : 'w-4 h-4 bg-gray-300 rounded-full hover:bg-gray-400 cursor-pointer transform hover:scale-110'
                                                }`}
                                                onClick={() => changeSlide(index)}>
                                                    {index === currentSlide && (
                                                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full animate-pulse" />
                                                    )}
                                                </div>
                                            </div>
                                            {index < services.length - 1 && (
                                                <div className={`h-0.5 bg-gradient-to-r transition-all duration-500 mt-6 ${
                                                    index < currentSlide 
                                                        ? 'w-8 sm:w-16 from-blue-500 to-pink-500'
                                                        : 'w-6 sm:w-12 from-gray-300 to-gray-400'
                                                }`} />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-500 ease-out"
                                    style={{ width: `${((currentSlide + 1) / services.length) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}