'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';

export default function MarketingObjectives() {
  const [activeFilter, setActiveFilter] = useState('Web Development');

  const filters = ['All Works', 'Web Development', 'Mobile Development', 'UI/UX Design', 'AI Solutions'];

  // Filter projects based on active filter
  const getFilteredProjects = () => {
    if (activeFilter === 'All Works') {
      return portfolioData.slice(0, 3);
    }
    if (activeFilter === 'Web Development') {
      return portfolioData.filter(p => p.category === 'Web Application' || p.platforms.includes('Web')).slice(0, 3);
    }
    if (activeFilter === 'Mobile Development') {
      return portfolioData.filter(p => p.platforms.includes('iOS') || p.platforms.includes('Android')).slice(0, 3);
    }
    if (activeFilter === 'AI Solutions') {
      return portfolioData.filter(p => p.category === 'AI & Technology').slice(0, 3);
    }
    return portfolioData.slice(0, 3);
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section className="py-20 bg-black">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-500/20">

          {/* 🌟 FRONT GLOW (Inside the box, not behind it) */}
          <div className="
      absolute inset-0
      -z-0
      rounded-3xl 
      blur-[120px]
      opacity-80
      bg-[radial-gradient(circle_at_center,_#04644A_0%,_rgba(0,0,0,0)_70%)]
      pointer-events-none
  "></div>

          {/* Make content above glow */}
          <div className="relative z-10">

            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Real-world examples of how we have helped companies achieve their marketing objectives.
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter
                      ? 'bg-[#17C381] text-white'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className="group relative bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 overflow-hidden"
                >

                  {/* Image */}
                  <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-gray-900">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-white font-semibold text-lg">
                    {project.name}
                  </h3>

                </Link>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

