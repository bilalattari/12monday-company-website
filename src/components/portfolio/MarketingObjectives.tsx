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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container with Green Glow */}
        <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Real-world examples of how we have helped companies achieve their marketing objectives.
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
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
                {/* Project Image/Logo */}
                <div className="relative w-full aspect-[9/16] mb-4 rounded-xl overflow-hidden bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Initial/Logo Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                  <span className="text-white font-bold text-xl">
                    {project.name.charAt(0).toUpperCase()}
                  </span>
                </div>

                {/* Project Name */}
                <h3 className="text-white font-semibold text-lg">
                  {project.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

