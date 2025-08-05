import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-4 py-8 sm:px-6 lg:px-8 lg:pt-60 pb-8 lg:pb-16"
      style={{
        backgroundImage: "url('/assets/350879.jpg')",
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol'
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-16 sm:mt-20 lg:mt-0">
          <div className="space-y-4 lg:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight text-white">
              Welcome to{" "}
              <span className="text-red-500">Textura Digitals</span>
              <br />
              Empowering Your Brand with
              <br />
              <span className="text-red-500">Creative Solutions</span>
            </h1>

            <p className="text-sm sm:text-base text-shadow-md text-gray-300 leading-relaxed">
              At Textura Digitals, we are passionate about delivering high-quality,
              innovative solutions that help businesses grow. Whether you need graphic
              design, illustration design, marketing strategies, or app design &
              development, our experienced team is here to bring your vision to life
              and build a digital presence that drives results.
            </p>

            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-white">
              <li className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <FontAwesomeIcon icon={faCircleCheck} className='text-red-500 text-sm sm:text-base' />
                <span>Custom logo design tailored to your business</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <FontAwesomeIcon icon={faCircleCheck} className='text-red-500 text-sm sm:text-base' />
                <span>Professional and experienced design team</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <FontAwesomeIcon icon={faCircleCheck} className='text-red-500 text-sm sm:text-base' />
                <span>Strategic approach to brand identity</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <FontAwesomeIcon icon={faCircleCheck} className='text-red-500 text-sm sm:text-base' />
                <span>Affordable pricing without sacrificing quality</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <FontAwesomeIcon icon={faCircleCheck} className='text-red-500 text-sm sm:text-base' />
                <span>100% satisfaction guarantee</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <Image 
              src="/assets/imac.webp" 
              alt="iMac showcase" 
              width={800} 
              height={600}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </div>

        {/* Partner/Trust Images */}
        <div className="mt-6 sm:mt-8 lg:mt-4 flex gap-4 sm:gap-6 lg:gap-8 flex-wrap justify-center">
          <Image 
            src="/assets/trust.webp" 
            alt="Trust badge" 
            width={120} 
            height={80}
            className="h-6 sm:h-8 w-auto"
          />
          <Image 
            src="/assets/clutch.png" 
            alt="Clutch partner" 
            width={120} 
            height={80}
            className="h-6 sm:h-8 w-auto"
          />
          <Image 
            src="/assets/gpartner.png" 
            alt="Google partner" 
            width={120} 
            height={80}
            className="h-6 sm:h-8 w-auto"
          />
          <Image 
            src="/assets/binsider.png" 
            alt="Business insider" 
            width={120} 
            height={80}
            className="h-6 sm:h-8 w-auto"
          />
        </div>

        {/* Contact Form */}
        <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
          <div className="flex flex-col sm:flex-row rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
            <input
              type="text"
              placeholder="Enter Name"
              className="flex-1 px-3 sm:px-4 py-3 bg-white text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 px-3 sm:px-4 py-3 bg-white text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="flex-1 px-3 sm:px-4 py-3 bg-white text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
            />
            <button
              type="submit"
              className="px-6 sm:px-8 py-3 bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors cursor-pointer text-sm sm:text-base"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
