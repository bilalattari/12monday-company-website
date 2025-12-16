"use client"
import React from 'react';
import { ArrowRight, Star, WandSparkles } from 'lucide-react';

interface FloatingStarProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  size: number;
  delay: number;
}

// The main component, HeroSection, which renders the professionally designed banner.
const HeroSection = () => {

  // Custom styles and animations embedded within the component using a style tag,
  // as is the standard for self-contained React files in this environment.
  const customStyles = `
    /* Custom styles for the grid background */
    .grid-bg {
        background-color: #000000;
        background-image: 
          repeating-linear-gradient(0deg, rgba(20, 100, 50, 0.08) 0, rgba(20, 100, 50, 0.08) 1px, transparent 1px, transparent 40px),
          repeating-linear-gradient(90deg, rgba(20, 100, 50, 0.08) 0, rgba(20, 100, 50, 0.08) 1px, transparent 1px, transparent 40px);
        background-size: 40px 40px;
    }

    /* Custom keyframes for floating animation */
    @keyframes float {
      0% { transform: translateY(0) scale(1); opacity: 0.9; }
      50% { transform: translateY(-15px) scale(1.05); opacity: 1; }
      100% { transform: translateY(0) scale(1); opacity: 0.9; }
    }
    
    .animate-float-slow {
      animation: float 12s ease-in-out infinite;
    }

    /* Custom keyframes for the soft background glow pulse */
    @keyframes pulse-soft {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.05); }
    }

    .animate-pulse-soft {
      animation: pulse-soft 15s ease-in-out infinite;
    }
  `;
  
  // Custom shadow for the button to create the specific emerald glow effect.
  const buttonGlowShadow = {
    boxShadow: '0 0 15px rgba(5, 150, 105, 0.6), inset 0 0 5px rgba(255, 255, 255, 0.2)',
  };


  // Helper component for the floating stars/icons
  const FloatingStar = ({ top, right, bottom, left, size, delay }: FloatingStarProps) => (
    <div 
      className={`absolute animate-float-slow opacity-80`}
      style={{ top, right, bottom, left, animationDelay: `${delay}ms` }}
    >
      <div className="p-1 rounded-xl shadow-lg bg-white/10 backdrop-blur-[2px]">
        {/* The star icon itself resembles the 4-pointed sparkle in the image */}
        <Star 
          className="text-white drop-shadow-lg" 
          fill="#FFFFFF" 
          size={size} 
        />
      </div>
    </div>
  );

  return (
    <>
      <style>{customStyles}</style>
      
      {/* Hero Section */}
      <section className="relative grid-bg min-h-screen flex items-center justify-center font-inter overflow-hidden">
        
        {/* --- Background Elements --- */}
        
        {/* Large Centralized Glow (Bottom-Center) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
          <div 
            className="w-[100vw] h-[70vh] sm:w-[80rem] sm:h-[80rem] bg-emerald-500/20 rounded-full blur-[120px] sm:blur-[200px] animate-pulse-soft"
          ></div>
        </div>

        {/* Vector Background Image (User specified path) */}
        {/* NOTE: Since this environment cannot load local files, we use the specified path '/vector.png'
            and comment it for clarity. */}
        <img 
          src="/vector.png" 
          alt="Vector Background Overlay" 
          className="absolute bottom-0 left-0 w-full h-auto opacity-70 z-0 object-cover"
        />

        {/* Floating Tech Icons (Stars) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <FloatingStar top="10%" left="15%" size={20} delay={0} />
          <FloatingStar top="25%" right="10%" size={16} delay={1500} />
          <FloatingStar bottom="10%" left="40%" size={12} delay={3000} />
          <FloatingStar bottom="30%" right="25%" size={24} delay={500} />
        </div>

        {/* --- Main Content Container (z-20 to layer above all backgrounds) --- */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center pt-24 pb-24">
          
          {/* Subtitle */}
          <span className="text-lg font-medium text-gray-400 mb-4 inline-block tracking-wider">
            Your AI-First Development Partner
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-5xl mx-auto">
            Turn Your Idea Into a Live Product in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Just 15 Days
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-md sm:text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            We turn early-stage ideas into real products using a rapid, structured workflow. Get a polished MVP that's ready to test, pitch, or scale — all within just 15 days.
          </p>

          {/* Dual Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            {/* Primary Button: Start Your MVP */}
            <button 
              className="
                inline-flex items-center justify-center 
                px-8 py-3 
                text-base font-bold
                rounded-xl
                group
                transition-all duration-300 ease-in-out
                transform hover:scale-[1.03] active:scale-[0.98]
                focus:outline-none focus:ring-4 focus:ring-emerald-500/50
                text-white
                border-2 border-emerald-500
                rounded-2xl
              "
              style={buttonGlowShadow}
              onClick={() => {

              }}
            >
              Start Your MVP
              <WandSparkles className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
            </button>
            
            {/* Secondary Button: Get a Free 15-Minute Consultation */}
            <button 
              className="
                inline-flex items-center justify-center 
                px-8 py-3 
                text-base font-bold
                rounded-xl
                transition-all duration-300 ease-in-out
                transform hover:scale-[1.03] active:scale-[0.98]
                bg-white text-gray-900 
                hover:bg-gray-100 hover:shadow-lg
              "
              onClick={() => console.log('Consultation clicked!')}
            >
              Get a Free 15-Minute Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;