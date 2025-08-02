"use client";

import Image from "next/image";

export default function Awards() {
  const awards = [
    {
      src: "/assets/awards1.png",
      alt: "Graphic Creatives Award 2020-21",
    },
    {
      src: "/assets/awards2.png",
      alt: "CDA Communication Design Award 2020",
    },
    {
      src: "/assets/awards4.png",
      alt: "Zend Engineer Excellence Award",
    },
    {
      src: "/assets/awards5.png",
      alt: "Design Guru Award 2020",
    }
  ];

  return (
    <div className="bg-white pt-16 px-4">
      {/* Header Section */}
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-4xl font-bold text-black mb-4">
          Awards and Recognition
        </h1>
        <p className="text-gray-600 leading-relaxed text-sm max-w-6xl mx-auto mb-4">
          Looking for a professional and eye-catching logo for your business? Look no further!
        </p>
        <p className="text-gray-600 leading-relaxed text-sm max-w-6xl mx-auto">
          Our team of expert designers is here to help. Each member of our team is highly skilled and experienced in creating custom logo designs that perfectly reflect your 
          brand's unique identity. We are dedicated to providing excellent customer service and will work closely with you to ensure that you are completely satisfied with the 
          final result. Trust us to bring your vision to life and take your business to new heights. Contact us today to get started!
        </p>
      </div>

      {/* Awards Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center relative">
          {awards.map((award, index) => (
            <div key={index} className="relative">
              <div className="group relative overflow-hidden p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 flex flex-col items-center justify-center min-h-[250px] w-full max-w-[250px]">
                <div className="relative w-full h-40">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    width={250}
                    height={250}
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              </div>
              
              {/* Vertical divider - appears on medium screens and up, except for last item */}
              {index < awards.length - 1 && (
                <div className="hidden lg:block absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-px h-32 bg-gray-300" />
              )}
              
              {/* Horizontal divider - appears on mobile/tablet for items in first row */}
              {index < 2 && (
                <div className="block lg:hidden absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 h-px w-32 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
