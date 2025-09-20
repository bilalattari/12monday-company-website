'use client';

import { 
  Code, 
  Smartphone, 
  Globe, 
  Brain,
  Sparkles,
  ArrowRight,
  Play,
  Rocket,
  Award,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

interface ServicesHeroProps {
  totalServices: number;
  totalProjects: number;
  clientSatisfaction: number;
  yearsExperience: number;
}

export default function ServicesHero({ 
  totalServices, 
  totalProjects, 
  clientSatisfaction, 
  yearsExperience 
}: ServicesHeroProps) {
  const stats = [
    { number: `${totalServices}+`, label: "Services Offered", icon: <Rocket className="w-6 h-6" /> },
    { number: `${totalProjects}+`, label: "Projects Delivered", icon: <Award className="w-6 h-6" /> },
    { number: `${clientSatisfaction}%`, label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: `${yearsExperience}+`, label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const highlights = [
    "Custom Mobile App Development",
    "Modern Web Applications", 
    "AI-Powered Solutions",
    "24/7 Technical Support",
    "Scalable Architecture",
    "Cross-Platform Expertise"
  ];

  return (
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
            <Globe className="w-6 h-6 text-orange-600" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float delay-2000">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <Rocket className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-8">
            <Sparkles className="w-4 h-4 text-[#02654F] mr-2" />
            <span className="text-sm font-medium text-gray-700">Comprehensive Development Services</span>
          </div>
          
          <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Professional
            <span className="block bg-gradient-to-r from-[#02654F] via-[#17C381] to-pink-600 bg-clip-text text-transparent">
              Development Services
            </span>
          </h1>
          
          <p className="text-md md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into reality with our comprehensive suite of development services. 
            From mobile apps to AI-powered solutions, we deliver exceptional results that drive business growth.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                <CheckCircle className="w-4 h-4 text-[#02654F] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-8 py-4 rounded-full font-semibold hover:shadow-sm transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#services"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[#02654F] hover:text-[#02654F] transition-all flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              View Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-sm transition-all">
                <div className="flex items-center justify-center mb-2 text-[#02654F]">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1500 {
          animation-delay: 1.5s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}
