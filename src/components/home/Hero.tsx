'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 overflow-hidden bg-white font-serotiva">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="relative w-6 h-6">
                <Image src="/GroupTriangle.png" alt="icon" fill className="object-contain" />
              </div>
              <span className="text-[15px] font-medium text-[#444444] tracking-wide">
                Your AI-First Development Partner
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-[64px] font-bold text-[#111111] leading-[1.1] mb-8"
            >
              Turn Your Idea Into a <br />
              Live Product in <span className="font-black text-black">Just <br /> 15 Days</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#555555] leading-relaxed max-w-xl mb-10"
            >
              We turn early-stage ideas into real products using a rapid, structured workflow. 
              Get a polished MVP that's ready to test, pitch, or scale — all within just 15 days.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="bg-dark-green text-white px-8 py-4 rounded-full flex items-center space-x-3 group hover:bg-opacity-95 transition-all"
              >
                <span className="text-base font-semibold">Start Your MVP</span>
                <div className="bg-white rounded-full p-1 text-dark-green">
                  <ArrowUpRight size={20} />
                </div>
              </Link>

              <Link
                href="/contact"
                className="border border-dark-green text-dark-green px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-dark-green hover:text-white transition-all group"
              >
                <span className="text-base font-semibold">Get a Free Consultation</span>
                <div className="bg-dark-green rounded-full p-1 text-white group-hover:bg-white group-hover:text-dark-green transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Image Collage */}
          <div className="flex-1 relative w-full max-w-[600px] h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full"
            >
              {/* Purple Mobile App */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[45%] z-20 shadow-2xl rounded-3xl overflow-hidden"
              >
                <Image src="/hero1.png" alt="Mobile App" width={300} height={500} className="w-full h-auto" />
              </motion.div>

              {/* Isometric Laptop */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[15%] left-0 w-[55%] z-10 shadow-2xl rounded-2xl overflow-hidden"
              >
                <Image src="/hero2.png" alt="Development" width={400} height={300} className="w-full h-auto" />
              </motion.div>

              {/* Dashboard White */}
              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 right-[5%] w-[50%] z-10 shadow-2xl rounded-2xl overflow-hidden"
              >
                <Image src="/hero3.png" alt="Dashboard" width={350} height={250} className="w-full h-auto" />
              </motion.div>

              {/* Dashboard Dark */}
              <motion.div 
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[5%] left-[5%] w-[50%] z-20 shadow-2xl rounded-2xl overflow-hidden"
              >
                <Image src="/hero4.png" alt="Statistics" width={350} height={250} className="w-full h-auto" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
