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
        <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover-lift-2025 hover-glow-2025 transition-all duration-700">
          <div className="relative h-96 overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            
            {/* Advanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
            
            {/* Holographic Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1BC47D]/20 via-transparent to-[#8B5CF6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Enhanced Eye Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="w-20 h-20 glass-2025 rounded-full flex items-center justify-center border border-white/30 hover-glow-2025 animate-pulse-rainbow">
                <svg className="w-10 h-10 text-white animate-float-complex" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            
            {/* Enhanced Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="px-5 py-3 bg-gradient-to-r from-[#1BC47D] to-[#3B82F6] text-white rounded-2xl text-sm font-bold shadow-2xl neon-green-2025 animate-pulse-rainbow">
                {project.category}
              </span>
            </div>
            
            {/* Enhanced Status Badge */}
            <div className="absolute top-6 right-6">
              <span className={`px-5 py-3 rounded-2xl text-sm font-bold shadow-2xl animate-pulse-rainbow ${
                project.status === 'Live' 
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white neon-green-2025' 
                  : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
              }`}>
                {project.status}
              </span>
            </div>
            
            {/* Enhanced Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-gradient-2025 transition-all duration-500 drop-shadow-2xl holographic">
                {project.name}
              </h3>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                {project.description}
              </p>
              
              {/* Enhanced Platforms */}
              <div className="flex flex-wrap gap-3">
                {project.platforms.map((platform, platformIndex) => (
                  <span 
                    key={platformIndex}
                    className="px-4 py-2 glass-2025 text-white rounded-2xl text-sm font-semibold border border-white/20 shadow-2xl hover-glow-2025 transition-all duration-300"
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
        <div className="group relative overflow-hidden rounded-2xl shadow-xl hover-lift-2025 hover-glow-2025 transition-all duration-500">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            {/* Enhanced Eye Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 glass-2025 rounded-full flex items-center justify-center border border-white/30 animate-pulse-rainbow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-white text-xl font-bold truncate drop-shadow-2xl mb-3 group-hover:text-gradient-2025 transition-all duration-300">{project.name}</h4>
              <div className="flex flex-wrap gap-2">
                {project.platforms.map((platform, platformIndex) => (
                  <span 
                    key={platformIndex}
                    className="px-3 py-1 glass-2025 text-white rounded-xl text-xs font-medium border border-white/20"
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

  // Default grid variant with 2025 enhancements
  return (
    <Link href={`/portfolio/${project.slug}`} className="block cursor-pointer">
      <div className="group card-2025 rounded-3xl shadow-2xl overflow-hidden hover-lift-2025 hover-glow-2025 transition-all duration-700 border border-white/10">
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Enhanced Eye Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20">
            <div className="w-18 h-18 glass-2025 rounded-full flex items-center justify-center border border-white/50 shadow-2xl animate-pulse-rainbow">
              <svg className="w-9 h-9 text-white animate-float-complex" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          
          {/* Enhanced Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-4 py-2 rounded-2xl text-sm font-bold shadow-xl animate-pulse-rainbow ${
              project.status === 'Live' 
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white neon-green-2025' 
                : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
            }`}>
              {project.status}
            </span>
          </div>
          
          {/* Enhanced Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[#1BC47D] to-[#3B82F6] text-white rounded-2xl text-sm font-bold shadow-xl neon-green-2025">
              {project.category}
            </span>
          </div>
        </div>

        {/* Enhanced Project Content */}
        <div className="p-8 text-center bg-gradient-to-b from-gray-900/50 to-black/50">
          <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gradient-2025 transition-all duration-500 holographic">{project.name}</h3>
          
          <p className="text-gray-400 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            {project.description}
          </p>
          
          {/* Enhanced Platforms */}
          <div className="flex flex-wrap gap-3 justify-center">
            {project.platforms.map((platform, index) => (
              <span 
                key={index}
                className="px-4 py-2 glass-2025 text-[#1BC47D] rounded-2xl text-sm font-medium border border-[#1BC47D]/30 hover-glow-2025 transition-all duration-300"
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