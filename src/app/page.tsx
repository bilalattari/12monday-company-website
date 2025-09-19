import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#1BC47D]/20 to-[#3B82F6]/20 rounded-full animate-float animate-morphing-blob"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[#8B5CF6]/20 to-[#1BC47D]/20 rounded-full animate-float animate-morphing-blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-full animate-float animate-morphing-blob" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1BC47D] via-[#3B82F6] to-[#8B5CF6] text-white py-32 overflow-hidden">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(144)].map((_, i) => (
              <div
                key={i}
                className="border border-white/20 animate-pulse"
                style={{animationDelay: `${i * 0.1}s`}}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-slide-in-up glass">
              <span className="w-2 h-2 bg-[#1BC47D] rounded-full mr-3 animate-pulse-glow"></span>
              <span className="text-sm font-medium">🚀 Building the Future Since 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-8 animate-slide-in-up animate-stagger-1">
              <span className="block text-gradient font-display">We Build</span>
              <span className="block animate-slide-in-up animate-stagger-2">Startups</span>
              <span className="block text-[#1BC47D] animate-slide-in-up animate-stagger-3 text-glow">From Scratch</span>
            </h1>
            
            <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto text-gray-100 animate-slide-in-up animate-stagger-4 leading-relaxed">
              Specializing in <span className="text-gradient font-semibold">AI-powered mobile apps</span>, 
              <span className="text-gradient font-semibold"> React Native</span>, 
              <span className="text-gradient font-semibold"> Flutter</span>, and 
              <span className="text-gradient font-semibold"> full-stack solutions</span> that bring your innovative ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-up animate-stagger-5">
              <Link
                href="/contact"
                className="group relative px-10 py-4 bg-white text-[#01624B] rounded-2xl font-bold text-lg hover-lift hover-glow transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1BC47D] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-300"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Your Project</span>
              </Link>
              
              <Link
                href="/portfolio"
                className="group px-10 py-4 border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover-lift glass backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                <span className="flex items-center">
                  View Our Work
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-in-up animate-stagger-5">
              <div className="text-center glass rounded-2xl p-6 hover-lift">
                <div className="text-4xl font-bold text-gradient mb-2">14+</div>
                <div className="text-gray-200">Projects Delivered</div>
              </div>
              <div className="text-center glass rounded-2xl p-6 hover-lift">
                <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                <div className="text-gray-200">Client Satisfaction</div>
              </div>
              <div className="text-center glass rounded-2xl p-6 hover-lift">
                <div className="text-4xl font-bold text-gradient mb-2">2025</div>
                <div className="text-gray-200">Modern Tech Stack</div>
              </div>
              <div className="text-center glass rounded-2xl p-6 hover-lift">
                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-gray-200">Support Available</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-white/20 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#1BC47D]/10 rounded-full mb-6 animate-fade-in">
              <span className="text-[#01624B] font-semibold">⚡ Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-in-up font-display">
              <span className="text-gradient">Cutting-Edge</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-up animate-stagger-1">
              From concept to launch, we provide comprehensive development services 
              tailored to your startup&apos;s unique needs with the latest 2025 technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile App Development */}
            <div className="group card-modern p-8 hover-lift hover-tilt animate-scale-in">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1BC47D] to-[#3B82F6] rounded-2xl flex items-center justify-center mb-6 animate-pulse-glow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#8B5CF6] rounded-full animate-bounce"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-all duration-300">
                AI-Powered Mobile Apps
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Next-generation mobile applications with AI integration, React Native, and Flutter 
                for iOS and Android platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1BC47D]/10 text-[#01624B] rounded-full text-sm font-medium">React Native</span>
                <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm font-medium">Flutter</span>
                <span className="px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-sm font-medium">AI/ML</span>
              </div>
            </div>

            {/* Full-Stack Development */}
            <div className="group card-modern p-8 hover-lift hover-tilt animate-scale-in animate-stagger-1">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#1BC47D] rounded-2xl flex items-center justify-center mb-6 animate-pulse-glow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#3B82F6] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-all duration-300">
                Modern MERN Stack
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete web applications using MongoDB, Express.js, React, and Node.js 
                with cloud-native architecture and microservices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1BC47D]/10 text-[#01624B] rounded-full text-sm font-medium">MongoDB</span>
                <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-sm font-medium">Node.js</span>
              </div>
            </div>

            {/* Startup Development */}
            <div className="group card-modern p-8 hover-lift hover-tilt animate-scale-in animate-stagger-2">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6 animate-pulse-glow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1BC47D] rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-all duration-300">
                2025 Startup Solutions
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end development services from MVP to full-scale applications, 
                helping startups launch successfully with modern tech stacks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1BC47D]/10 text-[#01624B] rounded-full text-sm font-medium">MVP</span>
                <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm font-medium">Scaling</span>
                <span className="px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-sm font-medium">Launch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#8B5CF6]/10 rounded-full mb-6 animate-fade-in">
              <span className="text-[#8B5CF6] font-semibold">🎯 Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-in-up font-display">
              <span className="text-gradient">Portfolio</span> Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-up animate-stagger-1">
              Explore some of our recent work and see how we&apos;ve helped startups 
              transform their ideas into successful applications with cutting-edge technology.
            </p>
          </div>

          {/* Large Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {portfolioData.slice(0, 3).map((project, index) => (
              <div key={project.id} className={`animate-scale-in animate-stagger-${index + 1}`}>
                <PortfolioCard project={project} variant="featured" />
              </div>
            ))}
          </div>

          {/* Additional Projects Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {portfolioData.slice(3, 7).map((project, index) => (
              <div key={project.id} className={`animate-scale-in animate-stagger-${index + 1}`}>
                <PortfolioCard project={project} variant="compact" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center animate-slide-in-up">
            <div className="card-modern p-12 md:p-16 hover-lift">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1BC47D] to-[#8B5CF6] rounded-full mx-auto flex items-center justify-center animate-pulse-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                Ready to See <span className="text-gradient">More?</span>
              </h3>
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                Explore our complete portfolio of {portfolioData.length} projects across mobile apps, 
                web applications, and innovative AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1BC47D] to-[#3B82F6] text-white rounded-2xl font-bold hover-lift hover-glow transition-all duration-300 text-lg"
                >
                  View All Projects
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-8 py-4 border-2 border-[#1BC47D] text-[#01624B] rounded-2xl font-bold hover-lift transition-all duration-300 hover:bg-[#1BC47D] hover:text-white text-lg"
                >
                  Start Your Project
                  <svg className="ml-3 w-6 h-6 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#01624B] via-[#1BC47D] to-[#3B82F6] text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-mesh opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 glass">
              <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm font-medium">🚀 Ready to Launch?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display animate-slide-in-up animate-stagger-1">
              Ready to Build Your <span className="text-glow">Startup?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 animate-slide-in-up animate-stagger-2 leading-relaxed">
              Let&apos;s discuss your project and turn your innovative idea into a successful 
              <span className="text-white font-semibold"> AI-powered mobile application</span>.
            </p>
            
            <div className="animate-slide-in-up animate-stagger-3">
              <Link
                href="/contact"
                className="group inline-flex items-center px-12 py-5 bg-white text-[#01624B] rounded-2xl font-bold text-xl hover-lift hover-glow transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <svg className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1BC47D] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-in-up animate-stagger-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">⚡</div>
                <div className="text-gray-200 text-sm">Lightning Fast</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">🔒</div>
                <div className="text-gray-200 text-sm">Secure & Reliable</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">🎯</div>
                <div className="text-gray-200 text-sm">Results Driven</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 border border-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      <Footer />
    </div>
  );
}