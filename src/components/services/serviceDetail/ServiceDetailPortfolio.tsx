'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ExternalLink,
  Calendar,
  Tag
} from 'lucide-react';

interface ServiceDetailPortfolioProps {
  service: {
    id: string;
    title: string;
    portfolio: Array<{
      id: number;
      name: string;
      description: string;
      image: string;
      category: string;
      technologies: string[];
      status: string;
      slug: string;
    }>;
  };
}

export default function ServiceDetailPortfolio({ service }: ServiceDetailPortfolioProps) {
  // Don't render the component if no portfolio items
  if (!service.portfolio || service.portfolio.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Related <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent {service.title} projects and see how we&apos;ve helped clients achieve their goals
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {service.portfolio.slice(0, 6).map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#02654F] transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    View Project
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#02654F] transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to See More Projects?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our complete portfolio of successful projects across all our development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="bg-[#02654F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#17C381] transition-all flex items-center justify-center"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#02654F] text-[#02654F] px-8 py-3 rounded-full font-semibold hover:bg-[#02654F] hover:text-white transition-all flex items-center justify-center"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
