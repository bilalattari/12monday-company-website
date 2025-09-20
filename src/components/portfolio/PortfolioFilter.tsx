'use client';

import { useState } from 'react';
import { 
  Filter, 
  Search, 
  X, 
  Smartphone, 
  Globe, 
  BookOpen, 
  Heart, 
  Car, 
  Building, 
  Brain,
  Wrench,
  GraduationCap
} from 'lucide-react';

interface PortfolioFilterProps {
  categories: string[];
  platforms: string[];
}

const categoryIcons: { [key: string]: React.ReactNode } = {
  'AI & Technology': <Brain className="w-4 h-4" />,
  'Web Application': <Globe className="w-4 h-4" />,
  'Education': <GraduationCap className="w-4 h-4" />,
  'Lifestyle': <Heart className="w-4 h-4" />,
  'Pet Care': <Heart className="w-4 h-4" />,
  'Religious Education': <BookOpen className="w-4 h-4" />,
  'Transportation': <Car className="w-4 h-4" />,
  'Business Management': <Building className="w-4 h-4" />,
  'Service & Utility': <Wrench className="w-4 h-4" />
};

const platformIcons: { [key: string]: React.ReactNode } = {
  'iOS': <Smartphone className="w-4 h-4" />,
  'Android': <Smartphone className="w-4 h-4" />,
  'Web': <Globe className="w-4 h-4" />
};

export default function PortfolioFilter({ categories, platforms }: PortfolioFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPlatforms([]);
    setSearchTerm('');
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPlatforms.length > 0 || searchTerm.length > 0;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Filter <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect project that matches your interests and requirements
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#02654F] focus:border-transparent"
            />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="space-y-8">
          {/* Categories Filter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Filter className="w-5 h-5 mr-2 text-[#02654F]" />
              Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all ${
                    selectedCategories.includes(category)
                      ? 'bg-[#02654F] text-white border-[#02654F]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#02654F] hover:text-[#02654F]'
                  }`}
                >
                  {categoryIcons[category]}
                  <span className="text-sm font-medium">{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Platforms Filter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-[#02654F]" />
              Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => togglePlatform(platform)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all ${
                    selectedPlatforms.includes(platform)
                      ? 'bg-[#17C381] text-white border-[#17C381]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#17C381] hover:text-[#17C381]'
                  }`}
                >
                  {platformIcons[platform]}
                  <span className="text-sm font-medium">{platform}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="flex justify-center">
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
                <span className="text-sm font-medium">Clear All Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Active Filters Summary */}
        {(selectedCategories.length > 0 || selectedPlatforms.length > 0) && (
          <div className="mt-8 p-4 bg-gray-50 rounded-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Active filters:</span>
              {selectedCategories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-[#02654F] text-white text-xs rounded-full"
                >
                  {categoryIcons[category]}
                  <span>{category}</span>
                  <button
                    onClick={() => toggleCategory(category)}
                    className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {selectedPlatforms.map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-[#17C381] text-white text-xs rounded-full"
                >
                  {platformIcons[platform]}
                  <span>{platform}</span>
                  <button
                    onClick={() => togglePlatform(platform)}
                    className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
