'use client';

export default function CaseStudyOverview() {
  return (
    <section className="relative py-10 bg-gradient-to-br from-green-900/30 via-green-800/50 to-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mx-auto rounded-3xl">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              Project Overview
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Seerat Ki Duniya is a comprehensive educational application designed to help users learn about the life, teachings, and noble character of Prophet Muhammad (PBUH). The app features interactive Seerah courses, maps of major events, Shamail (traits and habits), daily Sunnah tasks, and Durood reminders, making it a valuable resource for Islamic education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

