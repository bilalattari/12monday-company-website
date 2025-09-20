'use client';

import { 
  CheckCircle, 
  Shield,
  Zap,
  Target,
  Award
} from 'lucide-react';

interface ServiceDetailFeaturesProps {
  service: {
    id: string;
    title: string;
    features: string[];
    technologies: string[];
  };
}

export default function ServiceDetailFeatures({ service }: ServiceDetailFeaturesProps) {
  const featureCategories = [
    {
      title: 'Core Features',
      features: service.features.slice(0, 5),
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Advanced Capabilities',
      features: service.features.slice(5, 10),
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Quality Assurance',
      features: [
        'Rigorous Testing',
        'Performance Optimization',
        'Security Implementation',
        'Code Review',
        'Documentation'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What You Get with Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">{service.title}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive features and capabilities designed to deliver exceptional results for your project
          </p>
        </div>

        {/* Feature Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featureCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-sm transition-all duration-300">
              <div className={`inline-flex p-4 rounded-2xl ${category.bgColor} ${category.textColor} mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h3>
              
              <ul className="space-y-4">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#02654F] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies & Tools
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use industry-leading technologies and modern development tools to build your solution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {service.technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-4 text-center hover:bg-gray-100 transition-colors">
                <div className="text-sm font-medium text-gray-700">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Expertise</h4>
            <p className="text-gray-600 text-sm">Years of experience delivering successful projects</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h4>
            <p className="text-gray-600 text-sm">Efficient processes for quick project completion</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h4>
            <p className="text-gray-600 text-sm">Rigorous testing and quality control processes</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h4>
            <p className="text-gray-600 text-sm">Tailored to your specific business needs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
