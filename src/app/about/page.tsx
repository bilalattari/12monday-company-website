'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutVision from '@/components/about/AboutVision';
import AboutTeam from '@/components/about/AboutTeam';
import AboutTools from '@/components/about/AboutTools';
import AboutValues from '@/components/about/AboutValues';
import AboutCTA from '@/components/about/AboutCTA';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <AboutHero />

      <AboutMission />

      <AboutVision />

      <AboutTeam />

      <AboutTools />

      <AboutValues />
      <AboutCTA />

      <Footer />
    </div>
  );
}

