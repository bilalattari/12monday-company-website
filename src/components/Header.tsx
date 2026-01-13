'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Github, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full font-serotiva">
      {/* Top Bar */}
      <div className="bg-dark-green text-white hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative overflow-hidden">
          <div className="flex items-center space-x-6 py-2 px-4 text-[13px] font-medium">
            <div className="flex items-center space-x-2">
              <Phone size={14} fill="white" className="text-dark-green" />
              <span>456456464654</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} fill="white" className="text-dark-green" />
              <span>12monday@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} fill="white" className="text-dark-green" />
              <span>Dashityar Pride Apartment - Karachi Office 11</span>
            </div>
          </div>

          {/* Social Icons with Slanted Background */}
          <div className="flex items-center h-full">
            <div className="bg-white h-[40px] px-8 flex items-center space-x-4 ml-auto" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
              <Link href="#" className="text-dark-green hover:text-primary-green transition-colors">
                <Linkedin size={18} fill="currentColor" strokeWidth={0} />
              </Link>
              <Link href="#" className="text-dark-green hover:text-primary-green transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="text-dark-green hover:text-primary-green transition-colors">
                <Facebook size={18} fill="currentColor" strokeWidth={0} />
              </Link>
              <Link href="#" className="text-dark-green hover:text-primary-green transition-colors">
                <Github size={18} fill="currentColor" strokeWidth={0} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="12Monday Technologies"
                width={140}
                height={40}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <Link
                href="/about"
                className={`text-[15px] font-medium transition-colors ${isActive('/about') ? 'text-dark-green' : 'text-[#333333] hover:text-dark-green'}`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`text-[15px] font-medium transition-colors ${isActive('/services') ? 'text-dark-green' : 'text-[#333333] hover:text-dark-green'}`}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className={`text-[15px] font-medium transition-colors ${isActive('/portfolio') ? 'text-dark-green' : 'text-[#333333] hover:text-dark-green'}`}
              >
                Portfolio
              </Link>
              <Link
                href="/case-study"
                className={`text-[15px] font-medium transition-colors ${isActive('/case-study') ? 'text-dark-green' : 'text-[#333333] hover:text-dark-green'}`}
              >
                Case Study
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="bg-dark-green text-white px-6 py-2.5 rounded-full flex items-center space-x-2 group transition-all hover:bg-opacity-90"
              >
                <span className="text-[15px] font-medium">Get Started</span>
                <div className="bg-white rounded-full p-1 text-dark-green">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-dark-green"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dark-green">About</Link>
              <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dark-green">Services</Link>
              <Link href="/portfolio" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dark-green">Portfolio</Link>
              <Link href="/case-study" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dark-green">Case Study</Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dark-green">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
