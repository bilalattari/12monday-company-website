'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle,
  Rocket,
  Star,
  CheckCircle
} from 'lucide-react';

export default function PortfolioCTA() {
  const testimonials = [
    {
      quote: "Twelve Monday delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      rating: 5
    },
    {
      quote: "The web application they built for us has been running flawlessly for over a year. Highly recommend their services!",
      author: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      rating: 5
    },
    {
      quote: "Professional, reliable, and innovative. They transformed our idea into a successful product that our users love.",
      author: "Emily Rodriguez",
      role: "Founder, EduTech Platform",
      rating: 5
    }
  ];

  const features = [
    "Custom Mobile App Development",
    "Modern Web Applications",
    "AI-Powered Solutions",
    "Cross-Platform Development",
    "24/7 Technical Support",
    "Scalable Architecture"
  ];

  return (
    <>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#02654F] via-[#17C381] to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Build Your
              <span className="block">Next Big Project?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Join the ranks of successful startups and businesses who trust us to bring their 
              innovative ideas to life with cutting-edge technology and expert development.
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
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#02654F] transition-all flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Services
              </Link>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold mb-2">Email Us</div>
                <div className="opacity-90">hello@twelvemonday.com</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold mb-2">Call Us</div>
                <div className="opacity-90">+1 (555) 123-4567</div>
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#02654F] mb-2">14+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#17C381] mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
