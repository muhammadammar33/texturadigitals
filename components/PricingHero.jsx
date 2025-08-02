"use client";

export default function PricingHero() {

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
                Work that gives value to your money
            </h1>

            <p className="text-sm lg:text-md max-w-5xl mx-auto leading-relaxed mb-4">
                Logo brand can help visualize even the craziest ideas converting them into elegant designs, awesome experiences and catchy brands.
            </p>
            </div>
        </div>
    </div>
  );
}
