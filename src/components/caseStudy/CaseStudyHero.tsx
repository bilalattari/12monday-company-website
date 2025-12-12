'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

export default function CaseStudyHero() {
  return (
    <section className="relative py-20 bg-black min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left Column - Content */}
          <div>
          <button className="bg-gray-800 text-white px-6 py-2 mb-4 rounded-full text-sm font-medium border border-green-500/30">
             Case Study
          </button>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-4 leading-tight">
              Seerat Ki Duniya
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                Religious Education
              </span>
              <Link
                href="https://play.google.com/store/apps/details?id=com.seeratemustufa&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 hover:border-green-500/50 transition-all flex items-center gap-2"
              >
               <Image src="/assets/icons/playstore.svg" alt="Play Store" width={20} height={20} />
                View on Android
              </Link>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="relative">
            <div className="flex items-center justify-center">
              {/* Left Phone */}
              <div className="relative w-32 md:w-40 transform z-0 left-8">
                <div className="relative bg-black rounded-[2.5rem]  shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    <Image
                      src="/assets/portfolio/portfolio-15.jpeg"
                      alt="Seerat Ki Duniya App"
                      width={200}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Center Phone - Larger */}
              <div className="relative w-40 md:w-52 z-10">
                <div className="relative bg-black rounded-[2.5rem] shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    <Image
                      src="/assets/portfolio/portfolio-15.jpeg"
                      alt="Seerat Ki Duniya App"
                      width={250}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Phone */}
              <div className="relative w-32 md:w-40 transform z-0 right-8">
                <div className="relative bg-black rounded-[2.5rem] shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    <Image
                      src="/assets/portfolio/portfolio-15.jpeg"
                      alt="Seerat Ki Duniya App"
                      width={200}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

