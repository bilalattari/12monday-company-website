'use client';

import Link from 'next/link';

export default function PortfolioCTA() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Let's Create With
          </h2>
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
