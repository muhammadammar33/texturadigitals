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
              1. Talk To Us
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our customer representatives are available 24/7, ready to hear your concerns and connect you with our experts!
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
              2. Discuss Details
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Let's talk through the project details over a cup of coffee. This will help our designers to sketch the most relatable and connective graphic designs for your branding.
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
              3. Sit Back & Relax   
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Once we are onboard, you can sit back and relax as we get your branding done the right way! You will get weekly updates and mock designs for approvals!
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
