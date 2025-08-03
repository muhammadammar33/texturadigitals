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
              1. Let's Chat!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our friendly customer representatives are always available to lend a listening ear and connect you with our team of experts.
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
              2. Let's Collaborate!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Let's sit down over a cup of coffee and brainstorm the details of your project. Our designers will use this information to create visually stunning and impactful designs that perfectly capture your brand's essence.
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
              3. Kick Back and Relax!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Once we've sorted all the details, it's time for you to sit back and relax! Our team will take care of the rest, and you'll receive regular updates and mock designs for your approval. Trust us to bring your branding to life.
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
