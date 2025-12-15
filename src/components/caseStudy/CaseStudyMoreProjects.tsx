'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Calendar, Users, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function CaseStudyMoreProjects() {
  const relatedProjects = portfolioData
    .filter(p => p.slug !== 'seerat-ki-dunya')
    .slice(0, 3);

  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 text-center">
            See More Projects
          </h2>
          <p className="text-lg text-gray-300 text-center">
            Explore more of our work in similar categories and technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {relatedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-black rounded-2xl p-6 flex flex-col"
            >
              {/* Project Image - Centered */}
              <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-[200px] aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-green-600/30 to-black">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm">4.5</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Project Details */}
              <div className="flex items-center gap-4 mb-6 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.launchDate || '2024'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{project.teamSize || '2-3 Developers'}</span>
                </div>
              </div>

              {/* Case Study Button */}
              <div className="mt-auto">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="block w-full bg-white text-black px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 hover:border-green-500/50 transition-all text-center"
                >
                  Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-end">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-green-600/50 text-white  px-6 py-3 rounded-2xl font-semibold hover:bg-green-600/50 transition-all duration-300"
          >
            See All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

