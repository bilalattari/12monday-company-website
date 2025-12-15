'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';

export default function ServicesIdeasCTA() {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-lg md:text-xl font-medium">
            Let's talk about your ideas.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <Calendar className="w-5 h-5" />
            Book a call
          </Link>
        </div>
      </div>
    </section>
  );
}


