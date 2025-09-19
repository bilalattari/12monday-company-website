import Image from 'next/image';
import Link from 'next/link';
import { PortfolioItem } from '@/data/portfolioData';

interface PortfolioCardProps {
  project: PortfolioItem;
  variant?: 'featured' | 'compact' | 'grid';
}

export default function PortfolioCard({ project, variant = 'grid' }: PortfolioCardProps) {
  if (variant === 'featured') {
    return (
      <Link href={`/portfolio/${project.slug}`} className="block cursor-pointer">
        <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="relative h-80 overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"></div>
            
            {/* Eye Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-[#1BC47D] text-white rounded-full text-sm font-semibold shadow-lg">
                {project.category}
              </span>
            </div>
            
            {/* Status Badge */}
            <div className="absolute top-6 right-6">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                project.status === 'Live' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-yellow-500 text-white'
              }`}>
                {project.status}
              </span>
            </div>
            
            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#1BC47D] transition-colors duration-300 drop-shadow-lg">
                {project.name}
              </h3>
              
              {/* Platforms */}
              <div className="flex flex-wrap gap-2">
                {project.platforms.map((platform, platformIndex) => (
                  <span 
                    key={platformIndex}
                    className="px-4 py-2 bg-white/30 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20 shadow-lg"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href={`/portfolio/${project.slug}`} className="block cursor-pointer">
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative h-40 overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Eye Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-3 left-3 right-3">
              <h4 className="text-white text-lg font-bold truncate drop-shadow-lg mb-2">{project.name}</h4>
              <div className="flex flex-wrap gap-1">
                {project.platforms.map((platform, platformIndex) => (
                  <span 
                    key={platformIndex}
                    className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Default grid variant
  return (
    <Link href={`/portfolio/${project.slug}`} className="block cursor-pointer">
      <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Eye Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
            <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 shadow-lg">
              <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === 'Live' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {project.status}
            </span>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#1BC47D] bg-opacity-90 text-white rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1BC47D] transition-colors duration-300">{project.name}</h3>
          
          {/* Platforms */}
          <div className="flex flex-wrap gap-2 justify-center">
            {project.platforms.map((platform, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-[#1BC47D] bg-opacity-10 text-[#01624B] rounded-full text-sm font-medium"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
