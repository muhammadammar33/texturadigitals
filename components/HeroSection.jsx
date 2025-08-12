import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div
      className="relative max-w-8xl bg-cover bg-center bg-no-repeat pt-16 min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/assets/350879.jpg')",
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Floating Badge */}
            <div className="inline-block lg:block">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg backdrop-blur-sm">
                ✨ Award-Winning Agency
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
              <span className="text-white">Welcome to </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                QureLogix
              </span>
              <br />
              <span className="text-white">Transforming Your Brand through</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Innovative Solutions
              </span>
            </h1>

            {/* Description */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
              <p className="text-base sm:text-xs text-gray-200 leading-relaxed">
                At QureLogix, we're passionate about delivering premium,
                cutting-edge solutions that accelerate business growth. Whether you require graphic
                design, creative illustration, strategic marketing, or app design &
                development, our expert team is committed to realizing your vision
                and establishing a digital presence that generates measurable results.
              </p>
            </div>

            {/* Features List */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-xs">
                <li className="flex items-center justify-start gap-3 text-gray-200 hover:text-white transition-colors duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                    <FontAwesomeIcon icon={faCircleCheck} className='text-white text-sm' />
                  </div>
                  <span className='justify-start'>Custom logo design tailored to your business</span>
                </li>
                <li className="flex items-center justify-start gap-3 text-gray-200 hover:text-white transition-colors duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                    <FontAwesomeIcon icon={faCircleCheck} className='text-white text-sm' />
                  </div>
                  <span className='justify-start'>Professional and experienced design team</span>
                </li>
                <li className="flex items-center justify-start gap-3 text-gray-200 hover:text-white transition-colors duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                    <FontAwesomeIcon icon={faCircleCheck} className='text-white text-sm' />
                  </div>
                  <span className='justify-start'>Strategic approach to brand identity</span>
                </li>
                <li className="flex items-center justify-start gap-3 text-gray-200 hover:text-white transition-colors duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                    <FontAwesomeIcon icon={faCircleCheck} className='text-white text-sm' />
                  </div>
                  <span className='justify-start'>Affordable pricing without sacrificing quality</span>
                </li>
                <li className="flex items-center justify-start gap-3 text-gray-200 hover:text-white transition-colors duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                    <FontAwesomeIcon icon={faCircleCheck} className='text-white text-sm' />
                  </div>
                  <span className='justify-start'>100% satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-2xl">
                <Image 
                  src="/assets/imac.webp" 
                  alt="iMac showcase" 
                  width={800} 
                  height={600}
                  className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Partner/Trust Images */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-center text-gray-300 text-sm mb-6">Trusted by industry leaders</p>
            <div className="flex gap-6 sm:gap-8 lg:gap-12 flex-wrap justify-center items-center">
              <Image 
                src="/assets/trust.webp" 
                alt="Trust badge" 
                width={120} 
                height={80}
                className="h-8 sm:h-10 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <Image 
                src="/assets/clutch.png" 
                alt="Clutch partner" 
                width={120} 
                height={80}
                className="h-8 sm:h-10 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <Image 
                src="/assets/gpartner.png" 
                alt="Google partner" 
                width={120} 
                height={80}
                className="h-8 sm:h-10 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <Image 
                src="/assets/binsider.png" 
                alt="Business insider" 
                width={120} 
                height={80}
                className="h-8 sm:h-10 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
                Start Your Project Today
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 rounded-xl overflow-hidden shadow-xl">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="flex-1 px-4 sm:px-6 py-4 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base font-medium"
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="flex-1 px-4 sm:px-6 py-4 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 border-0 border-t sm:border-t-0 sm:border-l border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base font-medium"
                />
                <input
                  type="tel"
                  placeholder="Phone*"
                  className="flex-1 px-4 sm:px-6 py-4 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 border-0 border-t sm:border-t-0 sm:border-l border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base font-medium"
                />
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-t sm:border-t-0 border-gray-200 hover:shadow-lg"
                >
                  Get Started
                </button>
              </div>
              <p className="text-center text-gray-300 text-xs sm:text-sm mt-4">
                Free consultation • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
