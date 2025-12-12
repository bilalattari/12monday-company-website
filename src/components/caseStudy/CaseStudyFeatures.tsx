'use client';

export default function CaseStudyFeatures() {
  const keyFeatures = [
    "Users Want Light, Easy Learning",
    "Authenticity Is the Top Priority",
    "Visual and Interactive Content Increases Retention",
    "Users Want Islam Integrated Into Daily Routine",
    "Users Dislike Ads and Clutter in Islamic Apps"
  ];

  const technologies = [
    "React Native",
    "Android",
    "Figma",
    "Islamic Content"
  ];

  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Key Features */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8">
              Key Features
            </h2>
            <ul className="space-y-4">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Technologies Used */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium border border-green-500/30 hover:border-green-500/50 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

