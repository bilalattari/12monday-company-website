'use client';

import { 
  Code, 
  Smartphone, 
  Brain,
  Server,
  Palette,
  Cloud,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  Smartphone: Smartphone,
  Code: Code,
  Brain: Brain,
  Server: Server,
  Palette: Palette,
  Cloud: Cloud
};

interface ServiceDetailHeroProps {
  service: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    icon: string;
    features: string[];
    technologies: string[];
    pricing: {
      basic: string;
      professional: string;
      enterprise: string;
    };
  };
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Floating Tech Icons */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <IconComponent className="w-6 h-6 text-[#02654F]" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float delay-1000">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <Code className="w-6 h-6 text-[#17C381]" />
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
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-8">
              <IconComponent className="w-4 h-4 text-[#02654F] mr-2" />
              <span className="text-sm font-medium text-gray-700">{service.title} Services</span>
            </div>
            
            <h1 className="text-2xl md:text-4xl font-bold text-gray-200 mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-[#02654F] via-[#17C381] to-pink-600 bg-clip-text text-transparent">
                {service.title}
              </span>
            </h1>
            
            <p className="text-md text-white mb-8 leading-relaxed">
              {service.longDescription}
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {service.features.slice(0, 6).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#13b57a] flex-shrink-0" />
                  <span className="text-gray-100 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="bg-[#02654F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#17C381] transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#pricing"
                className=" text-[#13b57a] border px-8 py-4 rounded-full font-semibold hover:border-[#13b57a] hover:text-[#13b57a] transition-all flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#13b57a] mb-2">93+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#17C381] mb-2">100%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className=" rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">{service.title}</h3>
                <p className="text-[#13b57a]">{service.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Technologies We Use</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 8).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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

        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}
