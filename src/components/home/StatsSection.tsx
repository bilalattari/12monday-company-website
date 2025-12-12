"use client"

import React from "react";
import { motion } from "framer-motion";

export const statsData = [
  {
    value: "102+",
    label: "Projects Completed",
  },
  {
    value: "102+",
    label: "Happy Clients",
  },
  {
    value: "99%",
    label: "Success Rate",
  },
  {
    value: "24/7",
    label: "Support",
  },
];


const StatsSection = () => {
  return (
    <section className="w-full bg-black px-4 py-7 pt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {statsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="
              rounded-2xl 
              bg-gray-900/40 
              border border-gray-800 
              backdrop-blur-sm 
              p-8 text-center 
              shadow-[0_0_20px_-5px_rgba(0,255,150,0.15)]
              hover:shadow-[0_0_35px_-5px_rgba(0,255,150,0.35)]
              transition-all duration-300 hover:-translate-y-1
            "
          >
            <h2 className="
              text-4xl font-bold 
              bg-gradient-to-r from-green-400 to-green-300 
              bg-clip-text text-transparent
            ">
              {item.value}
            </h2>

            <p className="text-gray-400 mt-2 text-sm font-medium">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default StatsSection;
