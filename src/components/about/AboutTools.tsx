'use client';

import Image from 'next/image';

export default function AboutTools() {
  const tools = [
    { name: "React Native", icon: "/assets/tech/native.svg" },
    { name: "Flutter", icon: "/assets/tech/flutter.svg" },
    { name: "MongoDB", icon: "/assets/tech/mongodb.svg" },
    { name: "Express.js", icon: "/assets/tech/express.svg" },
    { name: "Node.js", icon: "/assets/tech/node.svg" },
    { name: "Figma", icon: "/assets/tech/figma.svg" }
  ];

  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tools We Use
          </h2>
        </div>

        {/* Tools List */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center border border-green-500/20 group-hover:border-green-500/50 transition-all duration-300">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-white text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

