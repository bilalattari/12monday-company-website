'use client';

export default function ServicesProcess() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap."
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Our team creates detailed wireframes, UI/UX designs, and technical architecture for your project."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your application with clean, scalable code and rigorous testing throughout the development cycle."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your application and provide ongoing maintenance, updates, and technical support."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Process
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A proven methodology that delivers exceptional results through structured development phases
          </p>
        </div>

        {/* Process Timeline with Wavy Line - Hill Effect */}
        <div className="relative min-h-[500px] lg:min-h-[600px]">
          {/* Wavy Green Line - Desktop Only - Following Hill Pattern */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none" className="overflow-visible">
              <path
                d="M 0 550 Q 300 500, 600 400 Q 900 300, 1200 250"
                stroke="#17C381"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Process Steps - Hill Layout */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => {
              // Calculate vertical position for hill effect (bottom to top)
              // Step 1 (index 0) at bottom, Step 4 (index 3) at top
              const verticalOffsets = [
                'lg:mt-[280px]',  // Step 1 - bottom (280px from top)
                'lg:mt-[180px]',  // Step 2 - higher (180px from top)
                'lg:mt-[180px]',  // Step 3 - higher (100px from top)
                'lg:mt-0'         // Step 4 - top (0px from top)
              ];
              const offset = verticalOffsets[index];

              return (
                <div
                  key={index}
                  className={`relative text-center ${offset} transition-all duration-500`}
                >
                  {/* Large Grey Number Behind */}
                  <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 text-gray-800 text-7xl md:text-9xl font-bold opacity-20 select-none">
                    {step.step}
                  </div>

                  {/* Green Circle Node */}
                  <div className="relative z-10 flex justify-center mb-6 mt-4">
                    <div className="w-16 h-16 bg-[#17C381] rounded-full flex items-center justify-center border-4 border-black shadow-lg">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
