import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Header />
      
      {/* Advanced Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Holographic Mesh Background */}
        <div className="absolute inset-0 gradient-mesh-2025 opacity-20"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-[#1BC47D]/30 to-[#3B82F6]/30 rounded-full animate-float-complex animate-morphing-blob-advanced blur-sm"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-gradient-to-r from-[#8B5CF6]/30 to-[#EC4899]/30 rounded-lg animate-float-complex animate-morphing-blob-advanced blur-sm" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-r from-[#EC4899]/30 to-[#F59E0B]/30 rounded-full animate-float-complex animate-morphing-blob-advanced blur-sm" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-[#F59E0B]/30 to-[#1BC47D]/30 rounded-lg animate-float-complex animate-morphing-blob-advanced blur-sm" style={{animationDelay: '6s'}}></div>
        
        {/* Advanced Particle System */}
        <div className="particles-2025">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`particle-2025 ${
                i % 3 === 0 ? 'particle-triangle' : 
                i % 3 === 1 ? 'particle-square' : ''
              } animate-particle-orbit`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
                background: `linear-gradient(45deg, 
                  hsl(${Math.random() * 360}, 70%, 60%), 
                  hsl(${Math.random() * 360}, 70%, 60%))`
              }}
            />
          ))}
        </div>
        
        {/* Matrix-style Digital Rain */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[#1BC47D] text-xs font-mono"
              style={{
                left: `${i * 5}%`,
                animation: `matrix-rain ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {Array.from({length: 20}, () => Math.random() > 0.5 ? '1' : '0').join('')}
            </div>
          ))}
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-40 overflow-hidden">
        {/* Advanced Gradient Mesh */}
        <div className="absolute inset-0 gradient-mesh-2025 opacity-40"></div>
        
        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 gap-1 h-full">
            {[...Array(400)].map((_, i) => (
              <div
                key={i}
                className="border border-[#1BC47D]/20 animate-pulse-rainbow"
                style={{
                  animationDelay: `${i * 0.01}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-8 py-4 glass-2025 rounded-full border border-white/20 mb-12 animate-bounce-in-elastic hover-glow-2025">
              <span className="w-3 h-3 bg-[#1BC47D] rounded-full mr-4 animate-pulse-rainbow"></span>
              <span className="text-sm font-medium holographic animate-text-shimmer">🚀 Building the Future Since 2024 - AI Powered</span>
            </div>
            
            {/* Main Heading with Advanced Effects */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-9xl font-bold mb-8 font-display">
                <span className="block text-gradient-2025 animate-slide-in-3d animate-stagger-1 holographic animate-holographic">We Build</span>
                <span className="block animate-slide-in-3d animate-stagger-2 text-white animate-neon-flicker">Startups</span>
                <span className="block text-gradient-2025 animate-slide-in-3d animate-stagger-3 text-glow-2025 holographic animate-holographic">From Scratch</span>
              </h1>
              
              {/* Typewriter Effect Subtitle */}
              <div className="text-2xl md:text-4xl text-[#1BC47D] font-mono animate-typewriter mb-8">
                <span>AI • Mobile • Web • Future</span>
              </div>
            </div>
            
            <p className="text-xl md:text-3xl mb-16 max-w-5xl mx-auto text-gray-300 animate-slide-in-3d animate-stagger-4 leading-relaxed">
              Specializing in <span className="text-gradient-2025 font-bold holographic">AI-powered mobile apps</span>, 
              <span className="text-gradient-2025 font-bold holographic"> React Native</span>, 
              <span className="text-gradient-2025 font-bold holographic"> Flutter</span>, and 
              <span className="text-gradient-2025 font-bold holographic"> cutting-edge solutions</span> that transform ideas into digital reality.
            </p>
            
            {/* CTA Buttons with Advanced Effects */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-slide-in-3d animate-stagger-5 mb-20">
              <Link
                href="/contact"
                className="group relative px-12 py-5 bg-gradient-to-r from-[#1BC47D] to-[#3B82F6] text-white rounded-3xl font-bold text-xl hover-lift-2025 hover-glow-2025 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <svg className="ml-3 w-7 h-7 group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 animate-shimmer-2025"></div>
              </Link>
              
              <Link
                href="/portfolio"
                className="group px-12 py-5 glass-2025 text-white rounded-3xl font-bold text-xl hover-lift-2025 hover-holographic transition-all duration-500 border border-white/30"
              >
                <span className="flex items-center">
                  View Our Work
                  <svg className="ml-3 w-7 h-7 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-in-3d animate-stagger-6">
              {[
                { number: "14+", label: "Projects Delivered", icon: "🚀" },
                { number: "100%", label: "Client Satisfaction", icon: "⭐" },
                { number: "2025", label: "Modern Tech Stack", icon: "🔮" },
                { number: "24/7", label: "AI Support", icon: "🤖" }
              ].map((stat, index) => (
                <div key={index} className={`text-center card-2025 p-8 hover-lift-2025 hover-glow-2025 animate-bounce-in-elastic animate-stagger-${index + 1}`}>
                  <div className="text-4xl mb-3 animate-float-complex">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient-2025 mb-3 holographic animate-holographic">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Advanced Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-[#1BC47D]/30 rounded-full animate-float-complex neon-green-2025"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-[#8B5CF6]/30 rounded-lg animate-float-complex neon-purple-2025" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-[#EC4899]/20 to-[#F59E0B]/20 rounded-full animate-float-complex" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-[#3B82F6]/20 rounded-lg animate-float-complex" style={{animationDelay: '3s'}}></div>
      </section>

      {/* Services Section */}
      <section className="py-40 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 glass-2025 rounded-full mb-8 animate-bounce-in-elastic hover-glow-2025">
              <span className="text-[#1BC47D] font-semibold holographic animate-text-shimmer">⚡ Our 2025 Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-slide-in-3d font-display">
              <span className="text-gradient-2025 holographic animate-holographic">Cutting-Edge</span> Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto animate-slide-in-3d animate-stagger-1 leading-relaxed">
              From concept to launch, we provide comprehensive development services 
              tailored to your startup&apos;s unique needs with the latest 2025 technologies and AI integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* AI-Powered Mobile Development */}
            <div className="group card-2025 p-10 hover-lift-2025 hover-glow-2025 animate-bounce-in-elastic border border-[#1BC47D]/20">
              <div className="relative mb-10">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1BC47D] to-[#3B82F6] rounded-3xl flex items-center justify-center mb-8 animate-pulse-rainbow group-hover:animate-cyber-glitch">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full animate-bounce flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-gradient-2025 transition-all duration-300 holographic">
                AI-Powered Mobile Apps
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Next-generation mobile applications with AI integration, machine learning capabilities, 
                React Native, and Flutter for iOS and Android platforms.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['React Native', 'Flutter', 'AI/ML', 'TensorFlow', 'Core ML'].map((tech, index) => (
                  <span key={index} className="px-4 py-2 glass-2025 text-[#1BC47D] rounded-full text-sm font-medium hover-glow-2025 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-[#1BC47D] font-semibold text-cyber animate-neon-flicker">
                &gt; FUTURE_READY_MOBILE_SOLUTIONS
              </div>
            </div>

            {/* Advanced Full-Stack Development */}
            <div className="group card-2025 p-10 hover-lift-2025 hover-glow-2025 animate-bounce-in-elastic animate-stagger-1 border border-[#8B5CF6]/20">
              <div className="relative mb-10">
                <div className="w-20 h-20 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-3xl flex items-center justify-center mb-8 animate-pulse-rainbow group-hover:animate-cyber-glitch">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-[#3B82F6] to-[#1BC47D] rounded-full animate-bounce flex items-center justify-center">
                  <span className="text-white text-xs font-bold">⚡</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-gradient-2025 transition-all duration-300 holographic">
                Modern MERN Stack
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Complete web applications using MongoDB, Express.js, React, and Node.js 
                with cloud-native architecture, microservices, and serverless deployment.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['MongoDB', 'React', 'Node.js', 'GraphQL', 'Docker'].map((tech, index) => (
                  <span key={index} className="px-4 py-2 glass-2025 text-[#8B5CF6] rounded-full text-sm font-medium hover-glow-2025 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-[#8B5CF6] font-semibold text-cyber animate-neon-flicker">
                &gt; SCALABLE_WEB_ARCHITECTURE
              </div>
            </div>

            {/* 2025 Startup Solutions */}
            <div className="group card-2025 p-10 hover-lift-2025 hover-glow-2025 animate-bounce-in-elastic animate-stagger-2 border border-[#EC4899]/20">
              <div className="relative mb-10">
                <div className="w-20 h-20 bg-gradient-to-r from-[#EC4899] to-[#F59E0B] rounded-3xl flex items-center justify-center mb-8 animate-pulse-rainbow group-hover:animate-cyber-glitch">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-[#F59E0B] to-[#1BC47D] rounded-full animate-bounce flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🚀</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-gradient-2025 transition-all duration-300 holographic">
                2025 Startup Solutions
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                End-to-end development services from MVP to full-scale applications, 
                helping startups launch successfully with modern tech stacks and AI integration.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['MVP', 'Scaling', 'Launch', 'Analytics', 'Growth'].map((tech, index) => (
                  <span key={index} className="px-4 py-2 glass-2025 text-[#EC4899] rounded-full text-sm font-medium hover-glow-2025 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-[#EC4899] font-semibold text-cyber animate-neon-flicker">
                &gt; STARTUP_SUCCESS_GUARANTEED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-40 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 glass-2025 rounded-full mb-8 animate-bounce-in-elastic hover-glow-2025">
              <span className="text-[#8B5CF6] font-semibold holographic animate-text-shimmer">🎯 Featured Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-slide-in-3d font-display">
              <span className="text-gradient-2025 holographic animate-holographic">Portfolio</span> Showcase
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto animate-slide-in-3d animate-stagger-1 leading-relaxed">
              Explore some of our recent work and see how we&apos;ve helped startups 
              transform their ideas into successful applications with cutting-edge technology and AI integration.
            </p>
          </div>

          {/* Large Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
            {portfolioData.slice(0, 3).map((project, index) => (
              <div key={project.id} className={`animate-bounce-in-elastic animate-stagger-${index + 1}`}>
                <PortfolioCard project={project} variant="featured" />
              </div>
            ))}
          </div>

          {/* Additional Projects Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {portfolioData.slice(3, 7).map((project, index) => (
              <div key={project.id} className={`animate-bounce-in-elastic animate-stagger-${index + 1}`}>
                <PortfolioCard project={project} variant="compact" />
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center animate-slide-in-3d">
            <div className="card-2025 p-16 md:p-20 hover-lift-2025 hover-glow-2025 border border-white/10">
              <div className="mb-12">
                <div className="w-24 h-24 bg-gradient-to-r from-[#1BC47D] via-[#3B82F6] to-[#8B5CF6] rounded-full mx-auto flex items-center justify-center animate-pulse-rainbow">
                  <svg className="w-12 h-12 text-white animate-float-complex" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-display">
                Ready to See <span className="text-gradient-2025 holographic animate-holographic">More?</span>
              </h3>
              <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
                Explore our complete portfolio of {portfolioData.length} projects across mobile apps, 
                web applications, and innovative AI-powered solutions that are shaping the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#1BC47D] to-[#3B82F6] text-white rounded-3xl font-bold hover-lift-2025 hover-glow-2025 transition-all duration-500 text-xl"
                >
                  View All Projects
                  <svg className="ml-3 w-7 h-7 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-10 py-5 glass-2025 text-white rounded-3xl font-bold hover-lift-2025 hover-holographic transition-all duration-500 border border-[#1BC47D]/30 text-xl"
                >
                  Start Your Project
                  <svg className="ml-3 w-7 h-7 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-gradient-to-br from-[#01624B] via-[#1BC47D] to-[#3B82F6] text-white relative overflow-hidden">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 gradient-mesh-2025 opacity-30 animate-gradient-wave"></div>
        
        {/* Holographic Elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-particle-orbit opacity-30"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + i}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-in-3d">
            <div className="inline-flex items-center px-8 py-4 glass-2025 rounded-full border border-white/20 mb-12 hover-glow-2025">
              <span className="w-3 h-3 bg-white rounded-full mr-4 animate-pulse-rainbow"></span>
              <span className="text-sm font-medium holographic animate-text-shimmer">🚀 Ready to Launch Into 2025?</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-12 font-display animate-slide-in-3d animate-stagger-1">
              Ready to Build Your <span className="text-glow-2025 holographic animate-holographic">Future?</span>
            </h2>
            <p className="text-xl md:text-3xl mb-16 text-gray-200 animate-slide-in-3d animate-stagger-2 leading-relaxed max-w-4xl mx-auto">
              Let&apos;s discuss your project and turn your innovative idea into a successful 
              <span className="text-white font-bold holographic"> AI-powered digital solution</span> that defines the future.
            </p>
            
            <div className="animate-slide-in-3d animate-stagger-3 mb-16">
              <Link
                href="/contact"
                className="group inline-flex items-center px-16 py-6 bg-white text-[#01624B] rounded-3xl font-bold text-2xl hover-lift-2025 hover-glow-2025 transition-all duration-500 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <svg className="ml-4 w-8 h-8 group-hover:translate-x-3 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1BC47D] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 animate-shimmer-2025"></div>
              </Link>
            </div>
            
            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-3 gap-12 animate-slide-in-3d animate-stagger-4">
              {[
                { icon: "⚡", title: "Lightning Fast", desc: "AI-Optimized Performance" },
                { icon: "🔒", title: "Secure & Reliable", desc: "Enterprise-Grade Security" },
                { icon: "🎯", title: "Results Driven", desc: "Data-Backed Success" }
              ].map((item, index) => (
                <div key={index} className="text-center hover-lift-2025">
                  <div className="text-5xl font-bold text-white mb-4 animate-float-complex" style={{animationDelay: `${index * 0.5}s`}}>
                    {item.icon}
                  </div>
                  <div className="text-gray-200 text-lg font-semibold mb-2">{item.title}</div>
                  <div className="text-gray-300 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Advanced Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-float-complex neon-green-2025"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border-2 border-white/20 rounded-lg animate-float-complex neon-blue-2025" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-20 w-20 h-20 bg-white/10 rounded-full animate-float-complex neon-purple-2025" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-white/10 rounded-lg animate-float-complex neon-pink-2025" style={{animationDelay: '3s'}}></div>
      </section>

      <Footer />
    </div>
  );
}