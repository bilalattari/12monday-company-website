'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CaseStudyCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-900/50 via-green-800/50 to-green-900">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
          Interested in Similar Work?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          Let's discuss how we can help bring your project to life with our expert development team.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-transparent text-white border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-600/50 transition-all duration-300"
        >
          Start Your project
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

