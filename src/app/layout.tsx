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
    default: "12Monday Technologies - Mobile App Development",
    template: "%s | 12Monday Technologies"
  },
  description: "We build startups from scratch. Specializing in mobile app development, React Native, Flutter, and full-stack solutions.",
  keywords: "mobile app development, React Native, Flutter, startup development, MERN stack, mobile applications, iOS, Android, web development",
  authors: [{ name: "12Monday Technologies", url: "https://12mondaytechnologies.com" }],
  creator: "12Monday Technologies",
  publisher: "12Monday Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://12mondaytechnologies.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://12mondaytechnologies.com',
    title: '12Monday Technologies - Mobile App Development',
    description: 'We build startups from scratch. Specializing in mobile app development, React Native, Flutter, and full-stack solutions.',
    siteName: '12Monday Technologies',
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
    title: '12Monday Technologies - Mobile App Development',
    description: 'We build startups from scratch. Specializing in mobile app development, React Native, Flutter, and full-stack solutions.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
