'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  { value: '102+', label: 'Completed Projects' },
  { value: '150+', label: 'Satisfied or Happy Customers' },
  { value: '99%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Maintenance / Support' },
];

export default function StatsSection() {
  return (
    <section className="bg-[#F3F3F3] py-16 font-serotiva">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-1 items-center justify-center w-full">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-[44px] font-bold text-black mb-1">{stat.value}</h3>
                <p className="text-[15px] font-medium text-[#555555]">{stat.label}</p>
              </motion.div>

              {index < stats.length - 1 && (
                <div className="hidden md:flex items-center justify-center flex-1">
                  <div className="relative w-6 h-6 rotate-180">
                     <Image src="/GroupTriangle.png" alt="arrow" fill className="object-contain" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
