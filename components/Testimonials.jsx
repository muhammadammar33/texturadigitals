"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  const testimonials = [
    {
      id: 1,
      quote: "My logo is dope!",
      text: "Hey what's up y'all, Jay Phillips here! I just wanted to say a big thank you to the Logo Design team. They made my logo and it was really easy to work with the team, my logo is dope! So if you need a logo, or any graphic works, Logo Design is the team!",
      author: "Jay Phillips",
      role: "Comedian & Actor",
      image: "/assets/testimonial.webp"
    },
    {
      id: 2,
      quote: "Web Services To Attract Traffic",
      text: "Collaborating with QureLogix was exceptional and they delivered outstanding work in transforming our website which previously lacked effectiveness. Now it's not only visually captivating but also generating substantial traffic. I wholeheartedly endorse QureLogix for their web services",
      author: "Nathan Walker",
      role: "Business Owner",
      image: "/assets/testimonial.webp"
    },
    {
      id: 3,
      quote: "The branding resonates powerfully",
      text: "Delivered an identity that has captivated all our clients. The branding resonates powerfully and we've received countless compliments for it. The transformation is remarkable and we're celebrating this achievement.",
      author: "Ashly Vacanza",
      role: "CEO",
      image: "/assets/The-logo-speaks-volume.gif"
    },
    {
      id: 4,
      quote: "Personalization and Value working together",
      text: "We've been extremely pleased with QureLogix's web solutions. They exceeded expectations. As a growing company, we needed something personalized, budget-friendly and dependable - QureLogix delivered on every front",
      author: "Amber Alvarez",
      role: "CEO",
      image: "/assets/The-logo-speaks-volume.gif"
    },
    {
      id: 5,
      quote: "Results-Focused SEO Strategy",
      text: "We had an existing website but it wasn't search-optimized and we needed SEO services to enhance our business visibility. Fortunately, partnering with QureLogix solved our business challenge and our website now appears in top search results.",
      author: "john Lecatelli",
      role: "CEO",
      image: "/assets/The-logo-speaks-volume.gif"
    },
    {
      id: 6,
      quote: "Highly recommended!",
      text: "Creating my website design wouldn't have been possible without the QureLogix team. The team members are incredibly professional and their work exceeds expectations. Extremely satisfied customer here.",
      author: "Hennry David",
      role: "Project Manager",
      image: "/assets/Thumbs-up.gif"
    },
    {
      id: 7,
      quote: "Absolutely outstanding!",
      text: "Their branding creation is simply the finest service available. They offer diverse ideas and concepts to support your vision!",
      author: "Desire Jordan",
      role: "COO",
      image: "/assets/100-recommended.gif"
    },
    {
      id: 8,
      quote: "QureLogix prioritizes client success",
      text: "After countless design iterations for my brand, a colleague suggested QureLogix. My brand now reflects exactly what I envisioned, thank you QureLogix Team.",
      author: "Brandan",
      role: "Associate Creative Director",
      image: "/assets/logodesign-is-not-just-looking-for-revenue.gif"
    }
  ];

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
          setCurrentSlide(prev => (prev + 1) % testimonials.length);
          setTimeout(() => setIsAnimating(false), 50);
        }, 300);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAnimating, testimonials.length]);

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`text-sm ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-blue-300 py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-4xl font-bold text-black mb-8">
          We Believe In 100% Client Satisfaction.
        </h1>
        <p className="text-gray-600 leading-relaxed text-md max-w-6xl mx-auto">
          As a leading custom logo design agency in the USA, customer satisfaction is our top priority. We won't consider a project complete until you are 
          completely happy with the results. Our team of experts goes above and beyond to accommodate our clients and help them achieve their goals, 
          including brand development, improved ROI, enhanced SEO, and increased brand reach. Let us help you take your business to the next level with 
          our top-notch logo design for business services.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="max-w-7xl mx-auto relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
            disabled={isAnimating}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
            disabled={isAnimating}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* Testimonial Content */}
          <div className="mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Text Content */}
            <div className={`flex-1 lg:w-1/2 text-center lg:text-left transition-all duration-300 ease-in-out ${
              isAnimating 
                ? `opacity-0 transform ${slideDirection === 'right' ? 'translate-x-[-40px]' : 'translate-x-[40px]'}` 
                : 'opacity-100 transform translate-x-0'
            }`}>
              <div className="text-6xl inline-flex text-black mb-4"><FontAwesomeIcon icon={faQuoteLeft} className="mr-4 mt-[-10px]" />
              <div className="text-gray-300">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                {testimonials[currentSlide].quote}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {testimonials[currentSlide].text}
              </p>
              </div>
              </div>
              
              {/* Author Info */}
              <div className="mb-6">
                <h3 className="text-xl text-black">
                  {testimonials[currentSlide].author}
                </h3>
                <p className="text-gray-500">
                  — {testimonials[currentSlide].role} —
                </p>
              </div>
            </div>

            {/* Right Side - Testimonial Image */}
            <div className={`flex-1 lg:w-1/2 flex justify-center transition-all duration-300 ease-in-out ${
              isAnimating 
                ? `opacity-0 transform ${slideDirection === 'right' ? 'translate-x-[40px]' : 'translate-x-[-40px]'}` 
                : 'opacity-100 transform translate-x-0'
            }`}>
              <div className="relative">
                <Image
                  src={testimonials[currentSlide].image}
                  alt={`${testimonials[currentSlide].author} testimonial`}
                  width={600}
                  height={400}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-6 h-6 border-2 border-black rounded-full flex items-center justify-center' 
                    : 'w-6 h-6 bg-gray-300 rounded-full'
                }`}
                disabled={isAnimating}
              >
                {index === currentSlide && (
                  <div className="w-2 h-2 bg-black rounded-full" />
                )}
              </button>
            ))}
          </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 sm:mt-16">
        <p className="text-center text-gray-500 text-xs sm:text-sm mb-6">Trusted by 500+ businesses worldwide</p>
        <div className="flex justify-center items-center space-x-4 sm:space-x-8 opacity-60">
          <Image
            src="/assets/bookPublishing/t-updated.png"
            alt="Trustpilot"
            width={80}
            height={30}
            className="h-6 sm:h-8 w-auto"
          />
          <Image
            src="/assets/bookPublishing/clutch.png"
            alt="Clutch"
            width={80}
            height={30}
            className="h-6 sm:h-8 w-auto"
          />
          <Image
            src="/assets/bookPublishing/gpartner.png"
            alt="Google Partner"
            width={80}
            height={30}
            className="h-6 sm:h-8 w-auto"
          />
        </div>
      </div>
    </div>
  );
}