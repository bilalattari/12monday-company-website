'use client';

export default function AboutMission() {
  return (
    <section className="relative py-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Our Mission Button */}
          <div className="flex justify-center mb-8">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium border border-green-500/30">
              Our Mission
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
            Building the Tech Foundation Behind Tomorrow's Startups
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            From idea to launch, we help startups build scalable mobile apps and digital products with a solid tech foundation.
          </p>

          {/* Green Vertical Line */}
          <div className="flex justify-center mt-8">
            <div className="w-1 h-40 bg-gradient-to-b from-gray-900 to-green-500/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

