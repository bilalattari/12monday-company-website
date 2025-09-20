'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle,
  Rocket,
  Star,
  CheckCircle,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

interface ServiceDetailCTAProps {
  service: {
    id: string;
    title: string;
    features: string[];
  };
}

export default function ServiceDetailCTA({ service }: ServiceDetailCTAProps) {
  const features = [
    "Custom Development Solutions",
    "Modern Technology Stack", 
    "Expert Development Team",
    "24/7 Technical Support",
    "Scalable Architecture",
    "Quality Assurance"
  ];


  return (
    <>
      {/* Main CTA Section */}
      <section className="py-20 bg-[#02654F] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Start Your
              <span className="block">{service.title} Project?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Join the ranks of successful businesses who trust us to deliver exceptional {service.title} solutions 
              that drive growth and innovation.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/contact"
                className="bg-white text-[#02654F] px-8 py-4 rounded-full font-semibold hover:shadow-sm transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#02654F] transition-all flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Our Work
              </Link>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold mb-2">Email Us</div>
                <div className="opacity-90">info@12monday.net</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold mb-2">Call Us</div>
                <div className="opacity-90">+92 313 2933803</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold mb-2">Live Chat</div>
                <div className="opacity-90">Available 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Twelve Monday?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional {service.title} results that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-sm transition-all">
              <div className="bg-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[#02654F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals dedicated to your success with proven track records in {service.title}</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-sm transition-all">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Optimized processes and agile methodologies for quick, quality {service.title} delivery</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-sm transition-all">
              <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assured</h3>
              <p className="text-gray-600">Rigorous testing and quality assurance processes ensure flawless {service.title} results</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-sm transition-all">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">Built to grow with your business and handle increasing user loads</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-sm transition-all">
              <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance for your peace of mind</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-sm transition-all">
              <div className="bg-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">Track record of successful {service.title} projects and satisfied clients across industries</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
