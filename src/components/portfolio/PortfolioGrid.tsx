'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ExternalLink, 
  Smartphone, 
  Globe, 
  Calendar, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';
import { PortfolioItem } from '@/data/portfolioData';

interface PortfolioGridProps {
  projects: PortfolioItem[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');

  // Get filter parameters from URL or state
  const [filters, setFilters] = useState({
    categories: [] as string[],
    platforms: [] as string[],
    searchTerm: ''
  });

  // Filter and sort projects
  const processedProjects = useMemo(() => {
    let filtered = projects;

    // Apply category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(project => 
        filters.categories.includes(project.category)
      );
    }

    // Apply platform filter
    if (filters.platforms.length > 0) {
      filtered = filtered.filter(project => 
        project.platforms.some(platform => filters.platforms.includes(platform))
      );
    }

    // Apply search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(project => 
        project.name.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchLower))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        filtered = filtered.sort((a, b) => {
          const dateA = new Date(a.launchDate || '2023').getTime();
          const dateB = new Date(b.launchDate || '2023').getTime();
          return dateB - dateA;
        });
        break;
      case 'oldest':
        filtered = filtered.sort((a, b) => {
          const dateA = new Date(a.launchDate || '2023').getTime();
          const dateB = new Date(b.launchDate || '2023').getTime();
          return dateA - dateB;
        });
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [projects, filters, sortBy]);

  // Listen for filter changes from parent component
  useEffect(() => {
    const handleFilterChange = (event: CustomEvent) => {
      setFilters(event.detail);
    };

    window.addEventListener('portfolioFilterChange', handleFilterChange as EventListener);
    return () => {
      window.removeEventListener('portfolioFilterChange', handleFilterChange as EventListener);
    };
  }, []);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'iOS':
      case 'Android':
        return <Smartphone className="w-4 h-4" />;
      case 'Web':
        return <Globe className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800';
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="portfolio-grid" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-gray-600">
              {processedProjects.length} project{processedProjects.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'name')}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02654F] focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name A-Z</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-[#02654F] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'list'
                    ? 'bg-[#02654F] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        {processedProjects.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }>
            {processedProjects.map((project) => (
              <div
                key={project.id}
                className={`group bg-white rounded-3xl shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'md:w-80 h-48 md:h-auto' : 'h-56'
                }`}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Platform Icons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {project.platforms.map((platform, index) => (
                      <div
                        key={index}
                        className="bg-white/90 backdrop-blur-sm p-2 rounded-full"
                      >
                        {getPlatformIcon(platform)}
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-white/90 text-gray-800 backdrop-blur"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-white/90 text-gray-800 backdrop-blur">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#02654F] transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.launchDate || '2023'}</span>
                    </div>
                    {project.teamSize && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{project.teamSize}</span>
                      </div>
                    )}
                    {project.client && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Award className="w-4 h-4 mr-2" />
                        <span>{project.client}</span>
                      </div>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#02654F] mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="flex-1 bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-4 py-2 rounded-xl font-semibold hover:shadow-sm transition-all flex items-center justify-center"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    
                    {project.links.length > 0 && (
                      <a
                        href={project.links[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-[#02654F] hover:text-[#02654F] transition-all"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters to see more projects.</p>
            <button
              onClick={() => setFilters({ categories: [], platforms: [], searchTerm: '' })}
              className="bg-[#02654F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#02654F]/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
