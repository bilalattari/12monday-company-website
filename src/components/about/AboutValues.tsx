'use client';

import { Lightbulb, Award, Handshake, ShieldCheck, TrendingUp } from 'lucide-react';

export default function AboutValues() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "We deliver exceptional results with attention to detail"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with clients as partners in success"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Reliability",
      description: "We deliver on time and exceed expectations"
    }
  ];

  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        {/* Values Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-black rounded-2xl p-8 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 ${
                index === 0 ? 'md:h-[280px]' : index === 2 ? 'md:h-[320px]' : ''
              }`}
            >
              {/* Icon in circular background with white outline */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 rounded-full bg-gray-800 border-2 border-white/20 flex items-center justify-center">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

