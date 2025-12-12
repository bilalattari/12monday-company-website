'use client';

import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Build What's Next
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            From startups to enterprises, we engineer experiences, systems, and solutions that scale with your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

