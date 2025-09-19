import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1BC47D] to-[#01624B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We Build Startups
              <span className="block text-[#1BC47D]">From Scratch</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
              Specializing in mobile app development with React Native, Flutter, 
              and full-stack solutions that bring your innovative ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#01624B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#01624B] transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to launch, we provide comprehensive development services 
              tailored to your startup&apos;s unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile App Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#1BC47D] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile App Development</h3>
              <p className="text-gray-600">
                Native and cross-platform mobile applications using React Native and Flutter 
                for iOS and Android platforms.
              </p>
            </div>

            {/* Full-Stack Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#01624B] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">MERN Stack</h3>
              <p className="text-gray-600">
                Complete web applications using MongoDB, Express.js, React, and Node.js 
                for scalable and robust solutions.
              </p>
            </div>

            {/* Startup Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#1BC47D] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Startup Development</h3>
              <p className="text-gray-600">
                End-to-end development services from MVP to full-scale applications, 
                helping startups launch successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore some of our recent work and see how we&apos;ve helped startups 
              transform their ideas into successful applications.
            </p>
          </div>

          {/* Large Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {portfolioData.slice(0, 3).map((project) => (
              <PortfolioCard key={project.id} project={project} variant="featured" />
            ))}
          </div>

          {/* Additional Projects Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {portfolioData.slice(3, 7).map((project) => (
              <PortfolioCard key={project.id} project={project} variant="compact" />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to See More?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore our complete portfolio of {portfolioData.length} projects across mobile apps, 
                web applications, and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-3 bg-[#1BC47D] text-white rounded-lg font-semibold hover:bg-[#01624B] transition-colors duration-200 shadow-lg"
                >
                  View All Projects
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-[#1BC47D] text-[#01624B] rounded-lg font-semibold hover:bg-[#1BC47D] hover:text-white transition-colors duration-200"
                >
                  Start Your Project
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#01624B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Startup?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let&apos;s discuss your project and turn your innovative idea into a successful mobile application.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-[#1BC47D] text-white rounded-lg font-semibold hover:bg-white hover:text-[#01624B] transition-colors duration-200"
          >
            Get Started Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
