import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Twelve Monday - Professional Development Team',
  description: 'Learn about Twelve Monday, your AI-first development partner specializing in mobile apps, web applications, and AI solutions. Meet our expert team and mission.',
  keywords: ['twelve monday about', 'development team', 'react native experts', 'mern developers', 'ai-first company', 'boundless technologies', 'cluster valley', 'saylani', 'system limited'],
  alternates: {
    canonical: 'https://www.12monday.net/about'
  },
  openGraph: {
    title: 'About Twelve Monday - Professional Development Team',
    description: 'AI-first development partner for mobile and web.',
    url: 'https://www.12monday.net/about',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Twelve Monday' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Twelve Monday - Professional Development Team',
    description: 'AI-first development partner for mobile and web.',
    images: ['/logo.png']
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}


