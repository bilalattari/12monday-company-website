'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50 border-b border-gray-700 w-full">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 p-1 fixed w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="12Monday Technologies"
              width={150}
              height={50}
              className="object-contain hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`relative px-3 py-2 text-sm font-heading font-medium transition-all duration-300 ${isActive('/')
                ? 'text-[#1BC47D] font-bold'
                : 'text-white hover:text-[#1BC47D]'
                }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1BC47D] to-[#01624B] rounded-full"></div>
              )}
            </Link>
            <Link
              href="/about"
              className={`relative px-3 py-2 text-sm font-heading font-medium transition-all duration-300 ${isActive('/about')
                ? 'text-[#1BC47D] font-bold'
                : 'text-white hover:text-[#1BC47D]'
                }`}
            >
              About
              {isActive('/about') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1BC47D] to-[#01624B] rounded-full"></div>
              )}
            </Link>
            <Link
              href="/services"
              className={`relative px-3 py-2 text-sm font-heading font-medium transition-all duration-300 ${isActive('/services')
                ? 'text-[#1BC47D] font-bold'
                : 'text-white hover:text-[#1BC47D]'
                }`}
            >
              Services
              {isActive('/services') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1BC47D] to-[#01624B] rounded-full"></div>
              )}
            </Link>

            <Link
              href="/portfolio"
              className={`relative px-3 py-2 text-sm font-heading font-medium transition-all duration-300 ${isActive('/portfolio')
                ? 'text-[#1BC47D] font-bold'
                : 'text-white hover:text-[#1BC47D]'
                }`}
            >
              Portfolio
              {isActive('/portfolio') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1BC47D] to-[#01624B] rounded-full"></div>
              )}
            </Link>

            <Link
              href="/case-study"
              className={`relative px-3 py-2 text-sm font-heading font-medium transition-all duration-300 ${isActive('/case-study')
                ? 'text-[#1BC47D] font-bold'
                : 'text-white hover:text-[#1BC47D]'
                }`}
            >
              Case Study
              {isActive('/case-study') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1BC47D] to-[#01624B] rounded-full"></div>
              )}
            </Link>

            <Link
              href="/contact"
              className={`relative px-3 py-2 text-sm font-heading font-medium transition-all duration-300 ${isActive('/contact')
                ? 'text-[#1BC47D] font-bold'
                : 'text-white hover:text-[#1BC47D]'
                }`}
            >
              Contact
              {isActive('/contact') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1BC47D] to-[#01624B] rounded-full"></div>
              )}
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-white text-[var(--background)] px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#1BC47D] focus:outline-none focus:ring-2 focus:ring-[#1BC47D]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive('/')
                  ? 'text-[#1BC47D] font-bold bg-[#1BC47D]/10 rounded-lg'
                  : 'text-gray-700 hover:text-[#1BC47D] hover:bg-gray-50 rounded-lg'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive('/services')
                  ? 'text-[#1BC47D] font-bold bg-[#1BC47D]/10 rounded-lg'
                  : 'text-gray-700 hover:text-[#1BC47D] hover:bg-gray-50 rounded-lg'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive('/portfolio')
                  ? 'text-[#1BC47D] font-bold bg-[#1BC47D]/10 rounded-lg'
                  : 'text-gray-700 hover:text-[#1BC47D] hover:bg-gray-50 rounded-lg'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/case-study"
                className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive('/case-study')
                  ? 'text-[#1BC47D] font-bold bg-[#1BC47D]/10 rounded-lg'
                  : 'text-gray-700 hover:text-[#1BC47D] hover:bg-gray-50 rounded-lg'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Case Study
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive('/about')
                  ? 'text-[#1BC47D] font-bold bg-[#1BC47D]/10 rounded-lg'
                  : 'text-gray-700 hover:text-[#1BC47D] hover:bg-gray-50 rounded-lg'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive('/contact')
                  ? 'text-[#1BC47D] font-bold bg-[#1BC47D]/10 rounded-lg'
                  : 'text-gray-700 hover:text-[#1BC47D] hover:bg-gray-50 rounded-lg'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-[#1BC47D] to-[#01624B] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-center text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
