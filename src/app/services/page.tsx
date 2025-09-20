import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesProcess from '@/components/services/ServicesProcess';
import ServicesTestimonials from '@/components/services/ServicesTestimonials';
import ServicesFAQ from '@/components/services/ServicesFAQ';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Professional Development Services - Mobile Apps, Web Applications & AI Solutions | Twelve Monday',
  description: 'Transform your ideas into reality with our comprehensive development services. Expert mobile app development, web applications, AI solutions, and custom software development. Starting from $3,000. 24/7 support included.',
  keywords: [
    'development services',
    'mobile app development',
    'web application development',
    'custom software development',
    'React Native development',
    'Next.js development',
    'AI solutions development',
    'UI/UX design services',
    'backend development',
    'cloud development',
    'DevOps services',
    'software consulting',
    'MVP development',
    'startup development',
    'enterprise software',
    'cross-platform development',
    'full-stack development',
    'MERN stack development',
    'Node.js development',
    'Python development',
    'AWS development',
    'Docker development',
    'Kubernetes development',
    'API development',
    'database design',
    'microservices architecture',
    'scalable applications',
    'professional development team',
    'software development company',
    'technology consulting'
  ],
  openGraph: {
    title: 'Professional Development Services - Mobile Apps, Web Applications & AI Solutions | Twelve Monday',
    description: 'Transform your ideas into reality with our comprehensive development services. Expert mobile app development, web applications, AI solutions, and custom software development.',
    type: 'website',
    url: 'https://twelvemonday.com/services',
    images: [
      {
        url: '/assets/portfolio/portfolio-13.jpeg',
        width: 1200,
        height: 630,
        alt: 'Twelve Monday Development Services - Mobile Apps and Web Applications'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Development Services - Mobile Apps, Web Applications & AI Solutions | Twelve Monday',
    description: 'Transform your ideas into reality with our comprehensive development services. Expert mobile app development, web applications, AI solutions, and custom software development.',
    images: ['/assets/portfolio/portfolio-13.jpeg']
  },
  alternates: {
    canonical: 'https://twelvemonday.com/services'
  }
};

// Service statistics
const serviceStats = {
  totalServices: 6,
  totalProjects: 50,
  clientSatisfaction: 100,
  yearsExperience: 5
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <ServicesHero 
        totalServices={serviceStats.totalServices}
        totalProjects={serviceStats.totalProjects}
        clientSatisfaction={serviceStats.clientSatisfaction}
        yearsExperience={serviceStats.yearsExperience}
      />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Process Section */}
      <ServicesProcess />

      {/* Testimonials Section */}
      <ServicesTestimonials />

      {/* Pricing Section */}
      {/* <ServicesPricing /> */}

      {/* FAQ Section */}
      <ServicesFAQ />

      {/* CTA Section */}
      <ServicesCTA />

      <Footer />
    </div>
  );
}