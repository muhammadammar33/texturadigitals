import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat lg:pl-50 lg:pt-60 pb-16"
      style={{
        backgroundImage: "url('/assets/350879.jpg')",
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol'
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 grid lg:grid-cols-2 items-center">
        <div className="space-y-4 lg:pr-30">
          <h1 className="text-3xl lg:text-3xl font-bold leading-tight">
            Welcome to{" "}
            <span className="text-red-500">Textura Digitals</span>
            <br />
            Empowering Your Brand with
            <br />
            <span className="text-red-500">Creative Solutions</span>
          </h1>

          <p className="text-shadow-md text-gray-300 leading-relaxed lg:pr-30">
            At Textura Digitals, we are passionate about delivering high-quality,
            innovative solutions that help businesses grow. Whether you need graphic
            design, illustration design, marketing strategies, or app design &
            development, our experienced team is here to bring your vision to life
            and build a digital presence that drives results.
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCircleCheck} className='text-red-500' />
              <span>Custom logo design tailored to your business</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCircleCheck} className='text-red-500' />
              <span>Professional and experienced design team</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCircleCheck} className='text-red-500' />
              <span>Strategic approach to brand identity</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCircleCheck} className='text-red-500' />
              <span>Affordable pricing without sacrificing quality</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCircleCheck} className='text-red-500' />
              <span>100% satisfaction guarantee</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center lg:ml-[-100px] lg:mr-10">
          <Image 
            src="/assets/imac.webp" 
            alt="iMac showcase" 
            width={800} 
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Partner/Trust Images */}
      <div className="relative z-10 mt-4 flex gap-8 flex-wrap">
        <Image 
          src="/assets/trust.webp" 
          alt="Trust badge" 
          width={120} 
          height={80}
          className="h-8 w-auto"
        />
        <Image 
          src="/assets/clutch.png" 
          alt="Clutch partner" 
          width={120} 
          height={80}
          className="h-8 w-auto"
        />
        <Image 
          src="/assets/gpartner.png" 
          alt="Google partner" 
          width={120} 
          height={80}
          className="h-8 w-auto"
        />
        <Image 
          src="/assets/binsider.png" 
          alt="Business insider" 
          width={120} 
          height={80}
          className="h-8 w-auto"
        />
      </div>

      {/* Contact Form */}
      <div className="relative z-10 mt-12 flex">
        <div className="flex rounded-r-lg shadow-lg overflow-hidden max-w-4xl w-full">
          <input
            type="text"
            placeholder="Enter Name"
            className="flex-1 px-4 py-3 bg-white text-gray-700 border-r border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-1 px-4 py-3 bg-white text-gray-700 border-r border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Phone*"
            className="flex-1 px-4 py-3 bg-white text-gray-700 border-r border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
