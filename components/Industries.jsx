"use client";

import Image from "next/image";

export default function Industries() {
  const industries = [
    { name: "AUTO CAR", image: "industry-19.png" },
    { name: "APPAREL", image: "industry-31.webp" },
    { name: "ARTS & CRAFTS", image: "industry-28.png" },
    { name: "AGRICULTURE", image: "industry-17.png" },
    { name: "BIKES", image: "industry-32.webp" },
    { name: "BUSINESS SOLUTIONS", image: "industry-20.png" },
    
    { name: "CONSULTING", image: "industry-15.png" },
    { name: "CONFECTIONERY", image: "industry-34.webp" },
    { name: "CHURCH", image: "industry-33.webp" },
    { name: "CONSTRUCTION", image: "industry-7.png" },
    { name: "EDUCATION", image: "industry-14.png" },
    { name: "ENGINEERING", image: "industry-1.png" },
    
    { name: "FASHION", image: "industry-23.png" },
    { name: "FOOD & DRINKS", image: "industry-27.png" },
    { name: "FINANCE", image: "industry-3.png" },
    { name: "HOTEL", image: "industry-35.webp" },
    { name: "HEALTH AND FITNESS", image: "industry-10.png" },
    { name: "INSURANCE", image: "industry-9.png" },
    
    { name: "JEWELRY", image: "industry-37.webp" },
    { name: "CLEANING SERVICES", image: "industry-36.webp" },
    { name: "KIDS & TOYS", image: "industry-6.png" },
    { name: "LEGAL", image: "industry-21.png" },
    { name: "LOGISTICS", image: "industry-38.webp" },
    { name: "LOVE & DATING", image: "industry-22.png" },
    
    { name: "MEDIA", image: "industry-16.png" },
    { name: "MEDICAL", image: "industry-4.png" },
    { name: "MASCOT", image: "industry-40.webp" },
    { name: "MANUFACTURING", image: "industry-39.webp" },
    { name: "MOBILE APPLICATION", image: "industry-41.webp" },
    { name: "MUSIC", image: "industry-18.png" },
    
    { name: "NGO", image: "industry-42.webp" },
    { name: "REAL ESTATE", image: "industry-43.webp" },
    { name: "RELIGION", image: "industry-2.png" },
    { name: "RETAIL", image: "industry-44.webp" },
    { name: "SOCIAL", image: "industry-8.png" },
    { name: "SPORTS", image: "industry-26.png" },
    
    { name: "SPA & SALON", image: "industry-29.png" },
    { name: "SECURITY", image: "industry-45.webp" },
    { name: "TECHNOLOGY", image: "industry-13.png" },
    { name: "TRAVEL", image: "industry-16.png" }
  ];

  return (
    <div className="bg-black py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-white text-4xl lg:text-2xl font-medium mb-4 tracking-wider">
          SERVING FORTUNE 500 COMPANIES
        </h1>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
          Belonging to 40+ Industries!
        </h2>
      </div>

      {/* Industries Grid */}
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex flex-row items-center justify-center p-4 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center duration-300">
                <Image 
                  src={`/assets/${industry.image}`}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="object-contain invert group-hover:brightness-100 group-hover:invert-0 group-hover:hue-rotate-[350deg] group-hover:saturate-150 transition-all duration-300"
                />
              </div>
              <h3 className="text-white pl-2 text-xs font-medium text-center leading-tight group-hover:text-red-500 transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
