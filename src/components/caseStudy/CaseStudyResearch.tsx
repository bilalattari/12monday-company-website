'use client';

export default function CaseStudyResearch() {
  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              User Research
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed">
              The purpose of this research is to understand how users learn about Seerah (the life of Prophet Muhammad (PBUH)), what challenges they face, and what type of digital experience feels motivating, trustworthy, and easy to engage with. This helps shape an app that provides authentic Islamic knowledge in a modern, interactive, and spiritually uplifting way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

