import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';
import {
  ExternalLink,
  Calendar,
  Users,
  Tag,
  CheckCircle,
  ArrowRight,
  Award,
  Target,
  Zap
} from 'lucide-react';
import InterestedSection from '@/components/portfolio/IntrestedSecton';

interface PortfolioDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
  const project = portfolioData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found - Twelve Monday',
    };
  }

  return {
    title: `${project.name} - Professional Development Portfolio | Twelve Monday`,
    description: project.longDescription,
    keywords: [
      project.name.toLowerCase(),
      'portfolio',
      'development',
      'mobile app',
      'web application',
      'software development',
      'Twelve Monday',
      'professional portfolio',
      'custom software',
      'app development',
      'web development',
      ...project.technologies.map(tech => tech.toLowerCase()),
      ...project.platforms.map(platform => platform.toLowerCase()),
      project.category.toLowerCase()
    ],
    openGraph: {
      title: `${project.name} - Professional Development Portfolio | Twelve Monday`,
      description: project.longDescription,
      type: 'website',
      url: `https://www.12monday.net/portfolio/${params.slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.name} - Twelve Monday Portfolio`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} - Professional Development Portfolio | Twelve Monday`,
      description: project.longDescription,
      images: [project.image]
    },
    alternates: {
      canonical: `https://www.12monday.net/portfolio/${params.slug}`
    }
  };
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const project = portfolioData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Schema markup for SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name,
    "description": project.longDescription,
    "creator": {
      "@type": "Organization",
      "name": "Twelve Monday",
      "url": "https://www.12monday.net"
    },
    "dateCreated": project.launchDate,
    "genre": project.category,
    "keywords": project.technologies.join(", "),
    "url": `https://www.12monday.net/portfolio/${params.slug}`,
    "image": project.image,
    "offers": {
      "@type": "Offer",
      "availability": project.status === 'Live' ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="min-h-screen bg-black overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
            
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          </div> */}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-gray-900">
                <div className="flex items-center mb-6">
                  <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium mr-4 border border-gray-200">
                    {project.category}
                  </span>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${project.status === 'Live'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    }`}>
                    {project.status}
                  </span>
                </div>

                <h1 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight text-white">
                  {project.name}
                </h1>
                {/* <p className="text-md md:text-xl mb-8 text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p> */}

                {/* Platforms */}
                <div className="mb-8">
                  <h3 className="text-lg mb-4 flex items-center text-white">
                    <Target className="w-5 h-5 mr-2 text-white" />
                    Available Platforms
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.platforms.map((platform, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm font-medium border border-gray-200 text-gray-700"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-4 py-4 rounded-full font-semibold hover:shadow-sm transition-all transform hover:scale-105 flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View on {link.platform}
                    </a>
                  ))}
                  {/* <Link
                    href="/portfolio"
                    className="border-2 border-gray-300 text-gray-700 px-3 py-4 rounded-full font-semibold hover:border-[#02654F] hover:text-[#02654F] transition-all flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Back to Portfolio
                  </Link> */}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Project Overview Card */}
            <div className="bg-gradient-to-br from-[#02654F] to-[#17C381] text-white rounded-3xl p-12 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

              <p className="text-lg leading-relaxed max-w-4xl">
                Seerat ki Dunya is a comprehensive educational application designed to help
                users learn about the life, teachings, and noble character of Prophet Muhammad (PBUH).
                The app features interactive Seerah courses, maps of major events, Shama'il (traits and habits),
                daily Sunnah tasks, and Durood reminders, making it a valuable resource for Islamic education.
              </p>
            </div>
          </div>
        </section>

        {/* Project Journey */}
        {(project.challenges || project.solutions || project.results) && (
          <section className="py-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Project <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Journey</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The challenges we faced, solutions we implemented, and results we achieved
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.challenges && (
                  <div className="bg-gradient-to-br from-[#02654F] to-[#17C381] text-white rounded-3xl p-8 shadow-sm hover:shadow-sm transition-all duration-300">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl text-white mb-6">Challenges</h3>
                    <ul className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-black">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.solutions && (
                  <div className="bg-gradient-to-br from-[#02654F] to-[#17C381] text-white rounded-3xl p-8 shadow-sm hover:shadow-sm transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl text-white mb-6">Solutions</h3>
                    <ul className="space-y-4">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-black">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.results && (
                  <div className="bg-gradient-to-br from-[#02654F] to-[#17C381] text-white rounded-3xl p-8 shadow-sm hover:shadow-sm transition-all duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl text-white mb-6">Results</h3>
                    <ul className="space-y-4">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-black">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <InterestedSection />
        {/* Related Projects */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Related <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore more of our work in similar categories and technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData
                // .filter((p) => p.id !== project.id && p.category === project.category)
                .slice(0, 3)
                .map((relatedProject) => (
                  <PortfolioCard key={relatedProject.id} project={relatedProject} variant="grid" />
                ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center bg-[#02654F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#17C381] transition-all transform hover:scale-105"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
