import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Twelve Monday - Start Your Project',
  description: 'Get in touch to discuss your web, mobile, or AI project. We typically respond within 24 hours.',
  keywords: ['contact twelve monday', 'hire developers', 'web app developers', 'mobile app developers', 'ai developers', 'boundless technologies', 'cluster valley', 'saylani', 'system limited'],
  alternates: { canonical: 'https://www.12monday.net/contact' },
  openGraph: {
    title: 'Contact Twelve Monday - Start Your Project',
    description: 'Get in touch to discuss your web, mobile, or AI project.',
    url: 'https://www.12monday.net/contact',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Twelve Monday' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Twelve Monday - Start Your Project',
    description: 'Get in touch to discuss your web, mobile, or AI project.',
    images: ['/logo.png'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}


