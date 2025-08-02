"use client";

import Image from "next/image";

export default function AboutDifferentiators() {
  return (
    <div className="bg-gray-50 px-4">
      {/* What Makes Us Different Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We have a professional design team on staff! Those Who Are Creative, Experts, 
              And Experienced In The Industry. We Are Professionals Seeking To Help Build A Better 
              Culture. Unlike other companies, we do not distribute our project to freelancers, 
              but instead, have our dedicated design team take full control of creating unique 
              designs based on business needs.
            </p>
            
            <div className="flex gap-4 mt-8">
              <button className="bg-black text-white px-6 py-3 rounded text-sm font-medium hover:bg-red-500 hover:text-black transition-colors">
                Get A Free Consultation
              </button>
              <button className="border border-black text-black px-6 py-3 rounded text-sm font-medium hover:border-red-500 hover:text-red-500 transition-colors">
                +1-628-256-4002
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/assets/about/about-first-fold.png"
              alt="What Makes Us Different"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* What Makes Us Practical Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <Image
              src="/assets/about/about-second-fold.png"
              alt="What Makes Us Practical"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              What Makes Us Practical
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
                Top graphic designers, illustration artists, mascot animators, and branding 
                specialists combine at Textura Digitals to create masterpieces for small and 
                large enterprises. We guarantee that you will perform our work for the purpose of 
                mercenary gain. Instead, we aim to maximize our ability to exist to give just 
                the greatest in aesthetic creativity.
            </p>
            
            <div className="flex gap-4 mt-8">
              <button className="bg-black text-white px-6 py-3 rounded text-sm font-medium hover:bg-red-500 hover:text-black transition-colors">
                Get A Free Consultation
              </button>
              <button className="border border-black text-black px-6 py-3 rounded text-sm font-medium hover:border-red-500 hover:text-red-500 transition-colors">
                +1-628-256-4002
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Achievements Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Our Achievements
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Our experienced designers are the key to our success. Every creative logo 
              designer on our team of logo design specialists is completely capable of 
              producing a masterwork. We are able to give you good.
            </p>
            
            <div className="flex gap-4 mt-8">
              <button className="bg-black text-white px-6 py-3 rounded text-sm font-medium hover:bg-red-500 hover:text-black transition-colors">
                Get A Free Consultation
              </button>
              <button className="border border-black text-black px-6 py-3 rounded text-sm font-medium hover:border-red-500 hover:text-red-500 transition-colors">
                +1-628-256-4002
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/assets/about/Our-Achievements.png"
              alt="Our Achievements"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
