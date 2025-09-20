'use client';

import { 
  Check, 
  X, 
  Zap, 
  Crown, 
  Rocket,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPricing() {
  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      price: "$3,000",
      duration: "per project",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      popular: false,
      features: [
        "Up to 5 pages/screens",
        "Basic UI/UX Design",
        "Responsive Design",
        "1 Platform (Web or Mobile)",
        "Basic Backend API",
        "2 weeks delivery",
        "30 days support",
        "Source code included"
      ],
      limitations: [
        "No advanced features",
        "Limited customization",
        "Basic hosting setup"
      ]
    },
    {
      id: 2,
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "$8,000",
      duration: "per project",
      icon: <Crown className="w-8 h-8" />,
      color: "from-[#02654F] to-[#17C381]",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      popular: true,
      features: [
        "Up to 15 pages/screens",
        "Advanced UI/UX Design",
        "Cross-platform Development",
        "2 Platforms (Web + Mobile)",
        "Advanced Backend API",
        "Database Integration",
        "User Authentication",
        "Payment Integration",
        "4-6 weeks delivery",
        "90 days support",
        "Source code included",
        "Deployment assistance"
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
      price: "$15,000+",
      duration: "per project",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      popular: false,
      features: [
        "Unlimited pages/screens",
        "Custom UI/UX Design",
        "Multi-platform Development",
        "All Platforms (Web + Mobile + Desktop)",
        "Microservices Architecture",
        "Advanced Database Design",
        "AI/ML Integration",
        "Third-party Integrations",
        "Real-time Features",
        "Advanced Security",
        "8-12 weeks delivery",
        "6 months support",
        "Source code included",
        "Full deployment & maintenance",
        "Dedicated project manager",
        "Priority support"
      ],
      limitations: []
    }
  ];

  const addOns = [
    {
      name: "UI/UX Design Only",
      price: "$1,500",
      description: "Professional design mockups and prototypes"
    },
    {
      name: "Backend API Development",
      price: "$2,500",
      description: "RESTful API or GraphQL development"
    },
    {
      name: "AI/ML Integration",
      price: "$5,000",
      description: "Custom AI features and machine learning models"
    },
    {
      name: "E-commerce Features",
      price: "$3,000",
      description: "Payment processing, inventory management, orders"
    },
    {
      name: "Real-time Features",
      price: "$2,000",
      description: "Live chat, notifications, real-time updates"
    },
    {
      name: "Additional Support",
      price: "$500/month",
      description: "Extended support and maintenance"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transparent <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your project. All plans include source code and deployment assistance.
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
                <div className={`inline-flex p-4 rounded-2xl ${plan.bgColor} ${plan.textColor} mb-6`}>
                  {plan.icon}
                </div>
                
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
                      ? 'bg-gradient-to-r from-[#02654F] to-[#17C381] text-white hover:shadow-sm'
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
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your project with our additional services and features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addOn, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-all">
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
          <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Every project is unique. Contact us for a personalized quote tailored to your specific requirements.
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
