'use client';

import { 
  Search, 
  Palette, 
  Code, 
  Rocket, 
  ArrowRight,
  Clock,
  Users,
  Target,
  Award
} from 'lucide-react';

interface ServiceDetailProcessProps {
  service: {
    id: string;
    title: string;
    process: Array<{
      step: string;
      title: string;
      description: string;
      duration: string;
    }>;
  };
}

export default function ServiceDetailProcess({ service }: ServiceDetailProcessProps) {
  const processIcons = [
    <Search key="search" className="w-8 h-8" />,
    <Palette key="palette" className="w-8 h-8" />,
    <Code key="code" className="w-8 h-8" />,
    <Rocket key="rocket" className="w-8 h-8" />
  ];


  const processBgColors = [
    'bg-blue-50',
    'bg-green-50',
    'bg-purple-50', 
    'bg-orange-50'
  ];

  const processTextColors = [
    'text-blue-600',
    'text-green-600',
    'text-purple-600',
    'text-orange-600'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">{service.title}</span> Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery through structured development phases
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {service.process.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl hover:shadow-sm transition-all duration-300 relative group"
            >
              <div className={`inline-flex p-4 rounded-2xl ${processBgColors[index]} ${processTextColors[index]} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {processIcons[index]}
              </div>
              
              <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white text-2xl font-bold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {step.step}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
              
              <div className="flex items-center text-sm text-[#02654F] font-medium">
                <Clock className="w-4 h-4 mr-2" />
                {step.duration}
              </div>
              
              {index < service.process.length - 1 && (
                <div className="hidden lg:flex absolute top-12 -right-4 w-8 h-8 bg-emerald-100 rounded-full items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#02654F]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures quality, transparency, and successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">On-Time</div>
              <div className="text-gray-600">Delivery</div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Quality</div>
              <div className="text-gray-600">Assured</div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Expert</div>
              <div className="text-gray-600">Team</div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Goal</div>
              <div className="text-gray-600">Focused</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and create a custom plan for your {service.title} project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#02654F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#17C381] transition-all flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#pricing"
                className="border-2 border-[#02654F] text-[#02654F] px-8 py-3 rounded-full font-semibold hover:bg-[#02654F] hover:text-white transition-all flex items-center justify-center"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
