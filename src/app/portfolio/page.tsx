import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioFilter from '@/components/portfolio/PortfolioFilter';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import PortfolioStats from '@/components/portfolio/PortfolioStats';
import PortfolioCTA from '@/components/portfolio/PortfolioCTA';
import { portfolioData } from '@/data/portfolioData';

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
    url: 'https://twelvemonday.com/portfolio',
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
    canonical: 'https://twelvemonday.com/portfolio'
  }
};

// Get unique categories for filtering
const categories = Array.from(new Set(portfolioData.map(item => item.category)));

// Get unique platforms for filtering
const platforms = Array.from(new Set(portfolioData.flatMap(item => item.platforms)));

// Calculate stats
const totalProjects = portfolioData.length;
const liveProjects = portfolioData.filter(item => item.status === 'Live').length;
const mobileApps = portfolioData.filter(item => item.platforms.includes('iOS') || item.platforms.includes('Android')).length;
const webApps = portfolioData.filter(item => item.platforms.includes('Web')).length;

const stats = {
  totalProjects,
  liveProjects,
  mobileApps,
  webApps,
  categories: categories.length,
  platforms: platforms.length
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <PortfolioHero 
        totalProjects={totalProjects}
        liveProjects={liveProjects}
        mobileApps={mobileApps}
        webApps={webApps}
      />

      {/* Stats Section */}
      <PortfolioStats stats={stats} />

      {/* Filter Section */}
      <PortfolioFilter 
        categories={categories}
        platforms={platforms}
      />

      {/* Portfolio Grid */}
      <PortfolioGrid projects={portfolioData} />

      {/* CTA Section */}
      <PortfolioCTA />

      <Footer />
    </div>
  );
}