import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1BC47D] to-[#01624B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
              Explore our recent projects and see how we've helped startups 
              transform their ideas into successful applications.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project) => (
              <PortfolioCard key={project.id} project={project} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help bring your innovative idea to life with our 
            mobile app development expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#1BC47D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#01624B] transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/"
              className="border-2 border-[#1BC47D] text-[#01624B] px-8 py-3 rounded-lg font-semibold hover:bg-[#1BC47D] hover:text-white transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}