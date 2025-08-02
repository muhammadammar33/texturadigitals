"use client";

import Image from "next/image";

export default function AboutHero() {
  const clientLogos = [
    { src: "/assets/sunjoy-logo.png", alt: "SunJoy" },
    { src: "/assets/qualityauto-logo.png", alt: "QualityAuto" },
    { src: "/assets/createspace-logo.png", alt: "CreateSpace" },
    { src: "/assets/truecorners-logo.png", alt: "True Corners" },
    { src: "/assets/prosites-logo.png", alt: "ProSites" },
  ];

  return (
    <div>
      {/* Hero Section with Background */}
      <div
        className="relative bg-cover bg-center bg-no-repeat pt-68 pb-16 px-4"
        style={{
          backgroundImage: "url('/assets/about/about-us.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/90"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight">
            Enabling You to Succeed in the New Era of Digitization
          </h1>

          <p className="text-sm lg:text-sm max-w-5xl mx-auto leading-relaxed mb-4">
            We are a full-service digital consultant with the experience and
            capacity to satisfy the demands of the world's largest and most
            complicated businesses.
          </p>

          {/* Client Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="h-12 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Content Sections */}
      {/* Statistics Section */}
      <div className="bg-red-500 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <h3 className="text-md font-medium mb-4">Years in Business</h3>
              <p className="text-4xl lg:text-5xl font-bold">6+</p>
            </div>
            <div>
              <h3 className="text-md font-medium mb-4">Projects Delivered</h3>
              <p className="text-4xl lg:text-5xl font-bold">1150+</p>
            </div>
            <div>
              <h3 className="text-md font-medium mb-4">Global Digital Experts</h3>
              <p className="text-4xl lg:text-5xl font-bold">150+</p>
            </div>
            <div>
              <h3 className="text-md font-medium mb-4">Business Delivered</h3>
              <p className="text-4xl lg:text-5xl font-bold">$1M+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
