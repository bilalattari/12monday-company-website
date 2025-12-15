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
    );
  }

  if (variant === 'compact') {
    return (
      <Link href={`/portfolio/${project.slug}`} className="block cursor-pointer">
        <div className="group relative overflow-hidden rounded-2xl shadow-xl hover-lift-2025 hover-glow-2025 transition-all duration-500">
          <div className="relative aspect-video overflow-hidden">
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
  );
}