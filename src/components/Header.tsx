'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'glass-2025 shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="12Monday Technologies"
                width={160}
                height={55}
                className="object-contain group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute -inset-3 bg-gradient-to-r from-[#1BC47D]/20 via-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm animate-pulse-rainbow"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {[
              { href: '/', label: 'Home', icon: '🏠' },
              { href: '/services', label: 'Services', icon: '⚡' },
              { href: '/portfolio', label: 'Portfolio', icon: '🎯' },
              { href: '/about', label: 'About', icon: '🚀' },
              { href: '/contact', label: 'Contact', icon: '💬' }
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-6 py-3 text-sm font-heading font-medium transition-all duration-500 rounded-2xl overflow-hidden ${
                  isActive(item.href) 
                    ? 'text-[#1BC47D] font-bold glass-2025 neon-green-2025' 
                    : isScrolled 
                      ? 'text-white hover:text-[#1BC47D] hover-glow-2025' 
                      : 'text-white hover:text-[#1BC47D] hover:glass-2025'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2 text-xs">{item.icon}</span>
                  {item.label}
                </span>
                {isActive(item.href) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#1BC47D] rounded-full animate-pulse-rainbow"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1BC47D]/10 via-[#3B82F6]/10 to-[#8B5CF6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 animate-shimmer-2025 opacity-0 group-hover:opacity-100"></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative px-8 py-3 bg-gradient-to-r from-[#1BC47D] via-[#3B82F6] to-[#8B5CF6] text-white rounded-2xl hover-lift-2025 hover-glow-2025 transition-all duration-500 font-medium text-sm overflow-hidden animate-gradient-wave"
            >
              <span className="relative z-10 flex items-center">
                <span className="mr-2">🚀</span>
                Get Started
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 animate-shimmer-2025"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 rounded-2xl glass-2025 hover-glow-2025 transition-all duration-300 focus:outline-none"
          >
            <svg
              className={`h-6 w-6 text-white transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}
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
          <div className="md:hidden animate-slide-in-3d">
            <div className="px-4 pt-4 pb-6 space-y-2 glass-2025 border-t border-white/10 rounded-b-3xl">
              {[
                { href: '/', label: 'Home', icon: '🏠' },
                { href: '/services', label: 'Services', icon: '⚡' },
                { href: '/portfolio', label: 'Portfolio', icon: '🎯' },
                { href: '/about', label: 'About', icon: '🚀' },
                { href: '/contact', label: 'Contact', icon: '💬' }
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium transition-all duration-500 rounded-2xl ${
                    isActive(item.href) 
                      ? 'text-[#1BC47D] font-bold glass-2025 neon-green-2025' 
                      : 'text-white hover:text-[#1BC47D] hover:glass-2025 hover-glow-2025'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full bg-gradient-to-r from-[#1BC47D] to-[#3B82F6] text-white px-6 py-4 rounded-2xl hover-lift-2025 hover-glow-2025 transition-all duration-500 font-medium text-center animate-gradient-wave"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">🚀</span>
                  Get Started
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}