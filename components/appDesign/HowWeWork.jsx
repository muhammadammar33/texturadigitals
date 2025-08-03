"use client";

import Image from "next/image";

export default function HowWeWork() {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Three Easy Steps to Begin
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Step 1 */}
          <div className="text-center group">
            <div className="relative mb-8">
              {/* Animated Dots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-35 h-35">
                  <div className="absolute top-0 left-2/3 w-4 h-4 bg-orange-500 rounded-full animate-spin-slow origin-[0_60px] transform -translate-x-1/2"></div>
                  <div className="absolute top-0 left-2/3 w-4 h-4 bg-orange-500 rounded-full animate-spin-reverse origin-[0_60px] transform -translate-x-1/2" style={{animationDelay: '4s'}}></div>
                </div>
              </div>
              
              {/* Step Image */}
              <div className="relative z-10 flex justify-center">
                <Image
                  src="/assets/bookPublishing/The-Designing-Methodology.png"
                  alt="The Designing Methodology"
                  width={40}
                  height={40}
                  quality={100}
                  className="w-18 h-18 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-4">
              1. Get in Touch
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Don't let another day go by - reach out to our team of app design specialists and take the first step towards turning your app idea into a reality.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="relative mb-8">
              {/* Animated Dots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-35 h-35">
                  <div className="absolute top-0 left-2/3 w-4 h-4 bg-orange-500 rounded-full animate-spin-slow origin-[0_60px] transform -translate-x-1/2"></div>
                  <div className="absolute top-0 left-2/3 w-4 h-4 bg-orange-500 rounded-full animate-spin-reverse origin-[0_60px] transform -translate-x-1/2" style={{animationDelay: '4s'}}></div>
                </div>
              </div>
              
              {/* Step Image */}
              <div className="relative z-10 flex justify-center">
                <Image
                  src="/assets/bookPublishing/Approvals-%26-Revisions.png"
                  alt="Approvals & Revisions"
                  width={40}
                  height={40}
                  quality={100}
                  className="w-18 h-18 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-4">
              2. Collaborate and Plan
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Together, we'll define the scope of your project, iron out any technical details, and bring your unique app vision to life. Our team is here to listen to your ideas and work with you every step of the way.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="relative mb-8">
              {/* Animated Dots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-35 h-35">
                  <div className="absolute top-0 left-2/3 w-4 h-4 bg-orange-500 rounded-full animate-spin-slow origin-[0_60px] transform -translate-x-1/2"></div>
                  <div className="absolute top-0 left-2/3 w-4 h-4 bg-orange-500 rounded-full animate-spin-reverse origin-[0_60px] transform -translate-x-1/2" style={{animationDelay: '4s'}}></div>
                </div>
              </div>
              
              {/* Step Image */}
              <div className="relative z-10 flex justify-center">
                <Image
                  src="/assets/bookPublishing/Designing-and-Finishing-Your-Project.png"
                  alt="Designing and Finishing Your Project"
                  width={40}
                  height={40}
                  quality={100}
                  className="w-18 h-18 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-4">
              3. Watch Your App Take Shape   
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sit back and watch as our talented designers bring your app concept to fruition with engaging and intuitive design elements. From wireframing to final testing, we'll handle all the details and keep you in the loop as your app comes to life.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: translateX(-50%) rotate(0deg);
          }
          to {
            transform: translateX(-50%) rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: translateX(-50%) rotate(360deg);
          }
          to {
            transform: translateX(-50%) rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
