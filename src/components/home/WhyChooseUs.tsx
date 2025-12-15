"use client"
import React from 'react';
import { ArrowRight, Star, WandSparkles, Zap, Shield, Users } from 'lucide-react';

// The main component, WhyChooseUs, which renders the professionally designed banner.
const WhyChooseUs = () => {

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
 
  
  // Helper component for the feature list items
  const FeatureItem = ({ icon: Icon, title, colorClass, shadowClass }) => (
    <div className="pt-2 flex items-start gap-4 hover:bg-white/5 transition-colors p-3 rounded-lg">
      <div 
        className={`p-3 rounded-xl ${colorClass} flex-shrink-0`}
        style={{ boxShadow: shadowClass }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl text-white">{title}</h3>
        {/* <p className="text-gray-400">{description}</p> */}
      </div>
    </div>
  );

  return (
    <>
      <style>{customStyles}</style>
      
      
      {/* ===================================================================== */}
      {/* WHY CHOOSE US SECTION (New Content) */}
      {/* ===================================================================== */}
      <section className="relative grid-bg py-20 md:py-32 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Image/Visual (Using the path /whychooseus.png) */}
            <div className="flex justify-center md:justify-start relative min-h-[400px]">
              {/* Centralized Glow behind the image area */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div 
                  className="w-full h-full max-w-md max-h-md bg-pink-500/10 rounded-full blur-[100px] opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                ></div>
              </div>
              
              {/* Placeholder/Actual Image */}
              <img 
                src="/whychooseus.png" 
                alt="Why Choose Us Visual" 
                className="w-full h-auto max-w-md object-contain relative z-10 rounded-xl shadow-2xl shadow-green-900/50"
                // Adding a glow effect to the image border for extra pop
                style={{ filter: 'drop-shadow(0 0 15px rgba(5, 150, 105, 0.4))' }}
              />
              
              {/* Subtle background overlay dots/pattern for extra detail (matching reference image) */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(5,150,105,0.05))] z-0 opacity-50"></div>
            </div>

            {/* Right Column: Text Content and Features */}
            <div className="text-left">
              
              {/* Subtitle */}
              <p className="text-sm font-semibold uppercase text-emerald-500 tracking-widest mb-2">
                Why Choose Us
              </p>
              
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
                Why businesses trust us to build their products
              </h2>
              
              {/* Short Description */}
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                We combine speed, clarity, and modern engineering to deliver MVPs that are ready to scale.
              </p>
              
              {/* Feature List */}
              <div className="space-y-4 max-w-lg">
                <FeatureItem 
                  icon={Zap} 
                  title="15-Day Build Process"
                //   description="Rapid prototyping and development to get your product to market faster than traditional methods."
                  colorClass="bg-emerald-700/50"
                  shadowClass="0 0 10px rgba(5, 150, 105, 0.5)"
                />
                <FeatureItem 
                  icon={Shield} 
                  title="Enterprise-grade security and reliability"
                //   description="Built on secure, robust cloud infrastructure that ensures your product is stable from day one."
                  colorClass="bg-green-700/50"
                  shadowClass="0 0 10px rgba(16, 185, 129, 0.5)"
                />
                <FeatureItem 
                  icon={Users} 
                  title="Experienced professionals dedicated to your success"
                //   description="Work directly with senior developers and designers who specialize in rapid product launches."
                  colorClass="bg-teal-700/50"
                  shadowClass="0 0 10px rgba(20, 184, 166, 0.5)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default WhyChooseUs;