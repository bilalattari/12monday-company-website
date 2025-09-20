'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Server, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';


export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="absolute inset-0">
            {/* Floating Elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Code className="w-6 h-6 text-[#02654F]" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-float delay-1000">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Brain className="w-6 h-6 text-[#17C381]" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float delay-500">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Smartphone className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-float delay-1500">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Server className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-8">
              <Star className="w-4 h-4 text-[#02654F] mr-2" />
              <span className="text-sm font-medium text-gray-700">Your AI-First Development Partner</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              About
              <span className="block bg-gradient-to-r from-[#02654F] via-[#17C381] to-pink-600 bg-clip-text text-transparent">
                Twelve Monday
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We&apos;re passionate about building startups from scratch, specializing in mobile app development,
              web applications, and AI-powered solutions that drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-8 py-4 rounded-full font-semibold hover:shadow-sm transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[#02654F] hover:text-[#02654F] transition-all flex items-center justify-center"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Twelve Monday was founded with a simple mission: to help innovative
              entrepreneurs and startups bring their ideas to life through cutting-edge 
              mobile app development and full-stack solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that every great startup begins with a great idea and the right 
                technology foundation. Our mission is to provide comprehensive development 
                services that transform innovative concepts into successful mobile applications 
                and digital solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From initial concept to market launch, we work closely with our clients to 
                ensure their vision becomes a reality that users love and businesses can scale.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#02654F] to-[#17C381] rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be the leading technology partner for startups worldwide, known for 
                delivering exceptional mobile applications and digital solutions that 
                drive business growth and user engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#02654F] mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#17C381] mb-2">25+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#02654F] mb-2">99%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#17C381] mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in modern technologies and development practices that 
              ensure scalable, maintainable, and high-performance applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile Development */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#02654F] to-[#17C381] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mobile App Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#02654F] mr-3" />
                  React Native Development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#02654F] mr-3" />
                  Flutter Applications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#02654F] mr-3" />
                  iOS & Android Native
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#02654F] mr-3" />
                  Cross-platform Solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#02654F] mr-3" />
                  App Store Optimization
                </li>
              </ul>
            </div>

            {/* Full-Stack Development */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#17C381] to-[#02654F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">MERN Stack</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#17C381] mr-3" />
                  MongoDB Database Design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#17C381] mr-3" />
                  Express.js Backend APIs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#17C381] mr-3" />
                  React Frontend Development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#17C381] mr-3" />
                  Node.js Server Solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#17C381] mr-3" />
                  RESTful API Development
                </li>
              </ul>
            </div>

            {/* AI & Machine Learning */}
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#02654F] to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#02654F] mr-3" />
                  Custom AI Solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#02654F] mr-3" />
                  Machine Learning Models
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#02654F] mr-3" />
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#02654F] mr-3" />
                  Computer Vision
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#02654F] mr-3" />
                  AI Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#b1f0e2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              Passionate developers dedicated to bringing your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bilal Attari */}
            <div className="bg-white rounded-3xl shadow-sm p-8 text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gradient-to-br from-[#02654F] to-[#17C381]">
                <img 
                  src="/Bilal-Attari.jpg" 
                  alt="Bilal Attari" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-[#02654F] to-[#17C381] flex items-center justify-center hidden">
              <span className="text-white text-4xl font-bold">BA</span>
            </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Bilal Attari</h3>
              <p className="text-xl text-[#02654F] font-semibold mb-6">Founder & Lead Developer</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A passionate MERN stack developer with expertise in React Native, Flutter, 
              and full-stack development. Currently expanding skills in AI technologies 
              and continuously learning to stay at the forefront of mobile app development.
            </p>
            
              <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Specializations</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#02654F] mr-2" />
                      React Native Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#02654F] mr-2" />
                      Flutter Applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#02654F] mr-2" />
                      MERN Stack Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#02654F] mr-2" />
                      Mobile App Architecture
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#02654F] mr-2" />
                      Startup Development
                    </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/bilalattari"
                target="_blank"
                rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:attari1235@gmail.com"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-[#02654F] to-[#17C381] text-white rounded-full hover:shadow-sm transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </a>
              </div>
            </div>

            {/* Muhammad Ahmed */}
            <div className="bg-white rounded-3xl shadow-sm p-8 text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gradient-to-br from-[#17C381] to-[#02654F]">
                <img 
                  src="/muhammad-ahmed.jpg" 
                  alt="Muhammad Ahmed" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-[#17C381] to-[#02654F] flex items-center justify-center hidden">
                  <span className="text-white text-4xl font-bold">MA</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Muhammad Ahmed</h3>
              <p className="text-xl text-[#17C381] font-semibold mb-6">Full Stack Developer</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A skilled full-stack developer with expertise in modern web technologies,
                mobile app development, and cloud solutions. Passionate about creating
                scalable applications and delivering exceptional user experiences.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Specializations</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#17C381] mr-2" />
                      React Native Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#17C381] mr-2" />
                      Flutter Applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#17C381] mr-2" />
                      MERN Stack Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#17C381] mr-2" />
                      Mobile App Architecture
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#17C381] mr-2" />
                      Startup Development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">We embrace cutting-edge technologies and creative solutions</p>
            </div>

            <div className="text-center p-8">
              <div className="bg-gradient-to-r from-[#17C381] to-[#02654F] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">We deliver exceptional results with attention to detail</p>
            </div>

            <div className="text-center p-8">
              <div className="bg-gradient-to-r from-[#02654F] to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">We work closely with clients as partners in success</p>
            </div>

            <div className="text-center p-8">
              <div className="bg-gradient-to-r from-[#17C381] to-[#02654F] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">We deliver on time and exceed expectations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PortfolioCTA />

      <Footer />
    </div>
  );
}

