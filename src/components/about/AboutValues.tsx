"use client";
import React from "react";
import { Star, Lightbulb, Handshake, CheckCircle } from "lucide-react";

interface ValueCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  tall?: boolean;
}

const ValueCard = ({ icon: Icon, title, description, tall }: ValueCardProps) => {
  return (
    <div
      className={`
        bg-black/60 backdrop-blur-lg cursor-pointer rounded-3xl p-10 flex flex-col items-center text-center  
        border border-emerald-600/20 
        transition-all 
        hover:border-emerald-500/40 
        hover:scale-[1.01]
      `}
      style={{
        boxShadow:
          "0 0 20px rgba(16, 185, 129, 0.18), inset 0 0 10px rgba(16, 185, 129, 0.35)",
        height: tall ? "360px" : "290px", // EXACT screenshot design
      }}
    >
      <div
        className="p-6 rounded-full bg-white/10 border border-white/20 mb-6"
        style={{
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.35)",
        }}
      >
        <Icon className="w-10 h-10 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-base max-w-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const CoreValuesSection = () => {
  return (
    <section className="relative py-24 grid-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-400 text-lg">
            The principles that guide everything we do
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#046349] to-black px-3 py-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

            {/* Top Left — Tall */}
            <ValueCard
              icon={Lightbulb}
              title="Innovation"
              description="We embrace cutting-edge technologies and creative solutions."
              tall={false}
            />

            {/* Top Right — Short */}
            <ValueCard
              icon={Star}
              title="Quality"
              description="We deliver exceptional results with attention to detail."
              tall={true}
            />

            {/* Bottom Left — Short */}
            <ValueCard
              icon={Handshake}
              title="Collaboration"
              description="We work closely with clients as partners in success."
              tall={true}
            />

            {/* Bottom Right — Tall */}
            <ValueCard
              icon={CheckCircle}
              title="Reliability"
              description="We deliver on time and exceed expectations."
              tall={false}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;