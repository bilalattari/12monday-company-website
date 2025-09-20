'use client';

import { 
  Check, 
  X, 
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface ServiceDetailPricingProps {
  service: {
    id: string;
    title: string;
    pricing: {
      basic: string;
      professional: string;
      enterprise: string;
    };
  };
}

export default function ServiceDetailPricing({ service }: ServiceDetailPricingProps) {
  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      price: service.pricing.basic,
      duration: "per project",
      popular: false,
      features: [
        "Basic features implementation",
        "Standard UI/UX design",
        "1 platform support",
        "Basic backend API",
        "2-4 weeks delivery",
        "30 days support",
        "Source code included",
        "Basic documentation"
      ],
      limitations: [
        "Limited customization",
        "Basic hosting setup",
        "No advanced features"
      ]
    },
    {
      id: 2,
      name: "Professional",
      description: "Ideal for growing businesses",
      price: service.pricing.professional,
      duration: "per project",
      popular: true,
      features: [
        "Advanced features implementation",
        "Custom UI/UX design",
        "Cross-platform support",
        "Advanced backend API",
        "Database integration",
        "User authentication",
        "4-8 weeks delivery",
        "90 days support",
        "Source code included",
        "Comprehensive documentation",
        "Deployment assistance",
        "Performance optimization"
      ],
      limitations: [
        "No AI/ML features",
        "Limited third-party integrations"
      ]
    },
    {
      id: 3,
      name: "Enterprise",
      description: "For large-scale applications",
      price: service.pricing.enterprise,
      duration: "per project",
      popular: false,
      features: [
        "Unlimited features",
        "Custom design system",
        "Multi-platform support",
        "Microservices architecture",
        "Advanced database design",
        "AI/ML integration",
        "Third-party integrations",
        "Real-time features",
        "Advanced security",
        "8-16 weeks delivery",
        "6 months support",
        "Source code included",
        "Full deployment & maintenance",
        "Dedicated project manager",
        "Priority support",
        "24/7 monitoring"
      ],
      limitations: []
    }
  ];

  const addOns = [
    {
      name: "Additional Features",
      price: "Custom",
      description: "Extra features beyond the base package"
    },
    {
      name: "Extended Support",
      price: "$500/month",
      description: "Additional support and maintenance"
    },
    {
      name: "Priority Development",
      price: "+50%",
      description: "Faster delivery with dedicated resources"
    },
    {
      name: "Training & Documentation",
      price: "$1,000",
      description: "Team training and comprehensive documentation"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transparent <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your {service.title} project. All plans include source code and deployment assistance.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-[#02654F] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What&apos;s Included</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-[#02654F] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Not Included</h4>
                    <ul className="space-y-3">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-start">
                          <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center ${
                    plan.popular
                      ? 'bg-[#02654F] text-white hover:bg-[#17C381]'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your {service.title} project with our additional services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-all bg-white">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">{addOn.name}</h4>
                  <span className="text-lg font-bold text-[#02654F]">{addOn.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-[#02654F] rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Every project is unique. Contact us for a personalized quote tailored to your specific {service.title} requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#02654F] px-8 py-3 rounded-full font-semibold hover:shadow-sm transition-all flex items-center justify-center"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#02654F] transition-all flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
