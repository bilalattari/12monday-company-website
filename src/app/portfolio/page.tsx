import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import FeaturedWorks from '@/components/portfolio/FeaturedWorks';
import MarketingObjectives from '@/components/portfolio/MarketingObjectives';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';

export const metadata: Metadata = {
  title: 'Portfolio - Mobile Apps, Web Applications & AI Solutions | Twelve Monday',
  description: 'Explore our portfolio of 14+ successful projects including mobile apps, web applications, and AI-powered solutions. See how we\'ve helped startups transform ideas into reality with React Native, MERN stack, and cutting-edge technologies.',
  keywords: [
    'portfolio',
    'mobile app development',
    'web application development',
    'React Native apps',
    'MERN stack development',
    'AI solutions',
    'startup development',
    'iOS apps',
    'Android apps',
    'web applications',
    'software development portfolio',
    'app development company',
    'custom software development',
    'digital solutions',
    'technology portfolio'
  ],
  openGraph: {
    title: 'Portfolio - Mobile Apps, Web Applications & AI Solutions | Twelve Monday',
    description: 'Explore our portfolio of 14+ successful projects including mobile apps, web applications, and AI-powered solutions.',
    type: 'website',
    url: 'https://www.12monday.net/portfolio',
    images: [
      {
        url: '/assets/portfolio/portfolio-13.jpeg',
        width: 1200,
        height: 630,
        alt: 'Twelve Monday Portfolio - Mobile Apps and Web Applications'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Mobile Apps, Web Applications & AI Solutions | Twelve Monday',
    description: 'Explore our portfolio of 14+ successful projects including mobile apps, web applications, and AI-powered solutions.',
    images: ['/assets/portfolio/portfolio-13.jpeg']
  },
  alternates: {
    canonical: 'https://www.12monday.net/portfolio'
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <PortfolioHero />

      {/* Featured Works Section */}
      <FeaturedWorks />

      {/* Marketing Objectives Section */}
      <MarketingObjectives />

      {/* CTA Section */}
      <PortfolioCTA />

      <Footer />
    </div>
  );
}