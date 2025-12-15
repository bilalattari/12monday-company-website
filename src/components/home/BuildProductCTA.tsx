"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';

// The main component, BuildProductCTA, which renders the professionally designed banner.
const BuildProductCTA = () => {
    // Styles for the subtle grid background effect.
    // We use a custom style object for the background image property,
    // which uses repeating linear gradients to create the dark grid lines.
    const gridBackgroundStyle = {
        backgroundColor: '#000000', // Solid black background
        backgroundImage: `
      repeating-linear-gradient(0deg, rgba(20, 100, 50, 0.08) 0, rgba(20, 100, 50, 0.08) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(90deg, rgba(20, 100, 50, 0.08) 0, rgba(20, 100, 50, 0.08) 1px, transparent 1px, transparent 40px)
    `,
        backgroundSize: '40px 40px',
    };

    // Custom shadow for the button to create the specific emerald glow effect.
    const buttonGlowShadow = {
        boxShadow: '0 0 20px rgba(5, 150, 105, 0.6), inset 0 0 5px rgba(255, 255, 255, 0.2)',
    };

    return (
        <div
            // Added 'relative' to position the glow element absolutely within this container
            style={gridBackgroundStyle}
            className="min-h-screen w-full flex items-center justify-center p-4 sm:p-10 font-inter relative overflow-hidden"
        >

            {/* Green Glow Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* CENTRALIZED BACKGROUND GLOW EFFECT 
        This is an absolute element positioned behind the content (z-0) 
        using a large blurred circle to create the requested soft light source.
      */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="
          w-96 h-96 sm:w-[50rem] sm:h-[50rem] 
          bg-emerald-500/20 
          rounded-full 
          blur-3xl 
          opacity-30 
          animate-pulse-slow
          "
                ></div>
            </div>

            {/* Main Content Container (z-10 to layer above the glow) */}
            <div className="max-w-4xl mx-auto text-center relative z-10">

                {/* Main Heading: Ready to Build Your Product in 15 Days? */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-snug tracking-tight mb-6">
                    {/* White/Light Grey text part (default text is white/light gray as requested) */}
                    <span className="text-gray-100 block sm:inline">
                        Ready to Build Your Product in
                    </span>
                    {/* Gradient Green/Teal text part for the '15 Days?' */}
                    <span className="
            text-transparent 
            bg-clip-text 
            bg-gradient-to-r 
            from-emerald-400 
            to-teal-500 
            block sm:inline sm:ml-3
          ">
                        15 Days?
                    </span>
                </h1>

                {/* Description Paragraph */}
                <p className="text-md sm:text-lg text-gray-400 max-w-3xl mx-auto mb-12 px-2">
                    We follow a fast, structured process to turn your idea into a fully functional Product—
                    designed, developed, and ready to launch in just 15 days.
                </p>

                {/* Call to Action Button */}
                <button
                    className="
            inline-flex
            items-center
            justify-center
            px-10 py-4
            text-base font-bold
            rounded-xl
            group
            transition-all duration-300 ease-in-out
            transform hover:scale-[1.03] active:scale-[0.98]
            focus:outline-none focus:ring-4 focus:ring-emerald-500/50
            text-white
            /* Reverting to gradient for better visual fidelity to original image */
            bg-[#04644a]
          "
                    style={buttonGlowShadow}
                    onClick={() => {
                        // Simple console log for demonstration in this component
                        console.log('Product Build CTA engaged!');
                    }}
                >
                    Let's Build Your Product
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

export default BuildProductCTA;