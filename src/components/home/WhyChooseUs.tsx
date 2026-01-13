'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F9F9F9] font-serotiva overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[40px] font-bold text-black leading-tight max-w-md"
          >
            Why businesses trust us to build their products
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[17px] text-[#555555] max-w-md leading-relaxed"
          >
            We combine speed, clarity, and modern engineering to deliver MVPs that are ready to scale.
          </motion.p>
        </div>

        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] p-12 shadow-sm border border-gray-100 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black">We Start With Understanding</h3>
              <p className="text-[16px] text-[#555555] leading-relaxed">
                Every product begins by deeply understanding the idea, the user, and the business goal. 
                We listen first, then shape solutions that align with real needs.
              </p>
            </div>

            {/* Center Column - Puzzle Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square">
                <Image 
                  src="/Union.png" 
                  alt="Puzzle Landscape" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black">Progress Over Perfection</h3>
              <p className="text-[16px] text-[#555555] leading-relaxed">
                We believe in momentum. By breaking ideas into focused sprints, we deliver meaningful 
                progress early and improve continuously.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[20px] font-medium text-black max-w-lg"
          >
            Our interfaces are not just visually appealing they communicate...
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="bg-dark-green text-white px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-opacity-95 transition-all shadow-lg shadow-dark-green/20"
            >
              <span className="text-base font-semibold">Want to Connect</span>
              <div className="bg-white rounded-full p-1 text-dark-green">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
