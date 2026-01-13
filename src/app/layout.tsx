import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Twelve Monday - AI-First Web, Mobile & SaaS Development",
    template: "%s | Twelve Monday"
  },
  description: "We build high-performance web apps, mobile apps, and AI-powered solutions using React, Next.js, React Native, Node.js and cloud-native architectures.",
  keywords: "twelve monday, 12monday, software development, web development, mobile app development, React Native, Next.js, MERN stack, AI development, machine learning, SaaS, startup MVP, UI/UX design, cloud devops, boundless technologies, cluster valley, saylani, saylani tech limited, system limited",
  authors: [{ name: "Twelve Monday", url: "https://www.12monday.net" }],
  creator: "Twelve Monday",
  publisher: "Twelve Monday",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.12monday.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.12monday.net',
    title: 'Twelve Monday - AI-First Web, Mobile & SaaS Development',
    description: 'We build high-performance web apps, mobile apps, and AI-powered solutions using React, Next.js, React Native, Node.js and cloud-native architectures.',
    siteName: 'Twelve Monday',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: '12Monday Technologies Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twelve Monday - AI-First Web, Mobile & SaaS Development',
    description: 'We build high-performance web apps, mobile apps, and AI-powered solutions using React, Next.js, React Native, Node.js and cloud-native architectures.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1BC47D" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="12Monday Technologies" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
