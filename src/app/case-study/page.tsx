import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudyHero from '@/components/caseStudy/CaseStudyHero';
import CaseStudyOverview from '@/components/caseStudy/CaseStudyOverview';
import CaseStudyResearch from '@/components/caseStudy/CaseStudyResearch';
import CaseStudyFeatures from '@/components/caseStudy/CaseStudyFeatures';
import CaseStudyCTA from '@/components/caseStudy/CaseStudyCTA';
import CaseStudyMoreProjects from '@/components/caseStudy/CaseStudyMoreProjects';

export const metadata: Metadata = {
  title: 'Seerat Ki Duniya - Case Study | Twelve Monday',
  description: 'Explore our comprehensive case study of Seerat Ki Duniya, an educational application designed to help users learn about the life and teachings of Prophet Muhammad (PBUH).',
  keywords: [
    'case study',
    'Seerat Ki Duniya',
    'mobile app development',
    'React Native',
    'Android development',
    'Islamic education app',
    'portfolio',
    'Twelve Monday'
  ],
  openGraph: {
    title: 'Seerat Ki Duniya - Case Study | Twelve Monday',
    description: 'Explore our comprehensive case study of Seerat Ki Duniya, an educational application designed to help users learn about the life and teachings of Prophet Muhammad (PBUH).',
    type: 'website',
    url: 'https://www.12monday.net/case-study',
    images: [
      {
        url: '/assets/portfolio/portfolio-15.jpeg',
        width: 1200,
        height: 630,
        alt: 'Seerat Ki Duniya Case Study'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seerat Ki Duniya - Case Study | Twelve Monday',
    description: 'Explore our comprehensive case study of Seerat Ki Duniya.',
    images: ['/assets/portfolio/portfolio-15.jpeg']
  },
  alternates: {
    canonical: 'https://www.12monday.net/case-study'
  }
};

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      
      <CaseStudyHero />

      <CaseStudyOverview />

      <CaseStudyResearch />

      <CaseStudyFeatures />

      <CaseStudyCTA />

      <CaseStudyMoreProjects />

      <Footer />
    </div>
  );
}

