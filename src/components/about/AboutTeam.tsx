'use client';

import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

export default function AboutTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Bilal Attari",
      role: "Founder & CEO",
      image: "/Bilal-Attari.jpg",
      fallback: "BA"
    },
    {
      id: 2,
      name: "Muhammad Ahmed",
      role: "Full Stack Developer",
      image: "/muhammad-ahmed.jpg",
      fallback: "MA"
    },
    {
      id: 3,
      name: "Bilal Attari",
      role: "Founder & CEO",
      image: "/Bilal-Attari.jpg",
      fallback: "BA"
    },
    {
      id: 4 ,
      name: "Muhammad Ahmed",
      role: "Full Stack Developer",
      image: "/muhammad-ahmed.jpg",
      fallback: "MA"
    },
  ];

  return (
    <section className="relative py-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Our Team Button */}
          <div className="flex justify-center mb-8">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium border border-green-500/30">
              Our Team
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-2 leading-tight">
            It's all about the people
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Innovative team behind our amazing product
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative rounded-2xl group"
            >
              {/* Inner black background with inner green glow */}
              <div 
                className="relative bg-black rounded-2xl p-6 overflow-hidden"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(34, 197, 94, 0.3), inset 0 0 40px rgba(57, 206, 112, 0.1)',
                }}
              >
                {/* Inner gradient blur effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.4) 0%, transparent 20%)',
                    filter: 'blur(20px)',
                  }}
                ></div>
                <div className="relative z-10 flex flex-col items-center justify-center ">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0 flex items-center justify-center w-40 h-40 rounded-2xl overflow-hidden border-2 border-green-500/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover "
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{member.fallback}</span>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-1 text-center">
                    <h3 className="text-xl font-medium text-white mb-1 mt-4">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {member.role}
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3 justify-center">
                      <button className="text-gray-400 hover:text-green-500/20 transition-colors  cursor-pointer">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="text-gray-400 hover:text-green-500/20 transition-colors  cursor-pointer">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

