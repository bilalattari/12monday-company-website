'use client';

import { 
  Smartphone, 
  Code, 
  Palette,
  Server,
  Cloud,
  Brain
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: "Mobile App Development",
      slug: "mobile-app-development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      tags: ["Custom dev", "Payments integration", "User Management"]
    },
    {
      id: 2,
      title: "Web Application Development",
      slug: "web-application-development",
      description: "We build responsive, high performance websites that drive business growth.",
      icon: <Code className="w-8 h-8" />,
      tags: ["Custom dev", "CMS integration", "E-commerce"]
    },
    {
      id: 3,
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description: "We build responsive, high performance websites that drive business growth.",
      icon: <Palette className="w-8 h-8" />,
      tags: ["Custom dev", "CMS integration", "E-commerce"]
    },
    {
      id: 4,
      title: "Backend Development",
      slug: "backend-development",
      description: "Scalable server-side solutions and robust API architectures",
      icon: <Server className="w-8 h-8" />,
      tags: ["Custom dev", "CMS integration", "E-commerce"]
    },
    {
      id: 5,
      title: "Cloud & DevOps",
      slug: "cloud-devops",
      description: "Scalable server-side solutions and robust API architectures",
      icon: <Cloud className="w-8 h-8" />,
      tags: ["Custom dev", "CMS integration", "E-commerce"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What we Offer
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              Transform your data and expertise into agentic solutions that continuously improve with human interaction.
            </p>
          </div>
        </div>

        {/* Low Opacity Background Container */}
        <div className="relative bg-gradient-to-b from-green-600/40 to-black/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-7xl mx-auto">
          {/* Services Grid - Modern Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* First 2 cards in 2 columns (each spans 3 columns) */}
            {services.slice(0, 2).map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-black p-6 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] md:col-span-3"
              >
                {/* Icon */}
                <div className="text-white mb-4">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}

            {/* Next 3 cards in 3 columns (each spans 2 columns) */}
            {services.slice(2, 5).map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-black p-6 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] md:col-span-2"
              >
                {/* Icon */}
                <div className="text-white mb-4">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
