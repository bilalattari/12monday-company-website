'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Calendar, Users } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function FeaturedWorks() {
  // Get featured projects: Rez AI, Lift Learn, Seerat ki Dunya
  const featuredProjects = [
    portfolioData.find(p => p.slug === 'rez-ai'),
    portfolioData.find(p => p.slug === 'lift-learn'),
    portfolioData.find(p => p.slug === 'seerat-ki-dunya')
  ].filter(Boolean);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
          FEATURED WORKS
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project?.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Info */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {project?.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-lg font-semibold">4.8</span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {project?.description}
                </p>

                {/* Project Details */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <span>{project?.launchDate || '2024'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-5 h-5" />
                    <span>{project?.teamSize || '2-5 Developers'}</span>
                  </div>
                </div>

                {/* Case Study Button */}
                <Link
                  href={`/portfolio/${project?.slug}`}
                  className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Case Study
                </Link>
              </div>

              {/* Mobile Mockup */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative w-full max-w-sm mx-auto">
                  {/* Background with pattern */}
                  <div 
                    className={`rounded-3xl p-8 ${
                      index === 0 ? 'bg-gradient-to-br from-green-600/30 to-green-800/20' :
                      index === 1 ? 'bg-gradient-to-br from-teal-600/30 to-teal-800/20' :
                      'bg-gradient-to-br from-teal-600/30 to-teal-800/20'
                    }`}
                  >
                    {/* Phone Mockup */}
                    <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                      <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                        <Image
                          src={project?.image || '/assets/portfolio/portfolio-13.jpeg'}
                          alt={project?.name || 'Project'}
                          width={400}
                          height={800}
                          className="w-full h-full object-cover"
                        />
                      </div>
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

