'use client';

import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ServicesTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      quote: "Twelve Monday delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
      author: "Khizer Ahmed Siddiqui",
      role: "Founder Of Kaacib",
      rating: 5,
      project: "Web And Mobile App Development For Kaacib",
      duration: "3 months",
    },
    {
      id: 1,
      quote: "Twelve Monday delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and technical expertise is unmatched. The app has been running flawlessly for over a year with zero downtime.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      rating: 5,
      project: "Mobile E-commerce App",
      duration: "6 months",
      image: "/assets/portfolio/portfolio-13.jpeg"
    },
    {
      id: 2,
      quote: "The web application they built for us has been running flawlessly for over a year. Highly recommend their services! The team was professional, responsive, and delivered exactly what we needed.",
      author: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      company: "DataFlow Solutions",
      rating: 5,
      project: "Analytics Dashboard",
      duration: "4 months",
      image: "/assets/portfolio/portfolio-11.jpg"
    },
    {
      id: 3,
      quote: "Professional, reliable, and innovative. They transformed our idea into a successful product that our users love. The AI integration they implemented has significantly improved our user engagement.",
      author: "Emily Rodriguez",
      role: "Founder, EduTech Platform",
      company: "EduTech Platform",
      rating: 5,
      project: "AI-Powered Learning Platform",
      duration: "8 months",
      image: "/assets/portfolio/portfolio-8.jpeg"
    },
    {
      id: 4,
      quote: "Outstanding work! They helped us scale from MVP to a full-featured platform serving thousands of users. Their technical expertise and business understanding made all the difference.",
      author: "David Kim",
      role: "Product Manager, HealthTech",
      company: "HealthTech Solutions",
      rating: 5,
      project: "Healthcare Management System",
      duration: "10 months",
      image: "/assets/portfolio/portfolio-12.jpg"
    },
    {
      quote: "Great communication, patience, professional and fast response is the experience I received from seller. I recommend this seller to anyone looking for a competent developer. Great experience. Thank you!",
      author: "Preina United States",
      role: "CEO, Preina",
      rating: 5
    },
    {
      quote: "Excellent service ! Easy to deal with. Definitely recommend to anyone who needs a mock up app exactly match to the design !",
      author: "One Dash New Zealand",
      role: "CEO Of DashStore",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  const achievements = [
    "100% Client Satisfaction Rate",
    "50+ Successful Projects",
    "24/7 Technical Support",
    "Cross-Platform Expertise",
    "Modern Technology Stack",
    "Scalable Architecture"
  ];


  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(id);
  }, [isPaused, testimonials.length]);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div
          className="card-gradient-border rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10">
            <div className="flex items-center mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <Quote className="w-12 h-12 text-white/20 mb-6" />

            <blockquote className="text-xl md:text-2xl mb-8 italic leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <div className="font-semibold text-xl">{current.author}</div>
                <div className="text-white/80">{current.role}</div>
                <div className="text-sm text-white/60">{current.project} • {current.duration}</div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, _) => (
            <div
              key={testimonial.id}
              className="card-gradient-border p-8 shadow-sm hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
                <div className="text-xs text-gray-500 mt-1">{testimonial.project}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="card-gradient-border p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Clients Choose Us
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We deliver exceptional results through our proven expertise and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#02654F]" />
                </div>
                <span className="text-gray-300 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
