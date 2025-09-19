import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';
import { notFound } from 'next/navigation';

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

export async function generateMetadata({ params }: PortfolioDetailPageProps) {
  const project = portfolioData.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} - 12Monday Technologies Portfolio`,
    description: project.description,
    keywords: project.technologies.join(', '),
  };
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const project = portfolioData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1BC47D] to-[#01624B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mr-4">
                  {project.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Live' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.name}</h1>
              <p className="text-xl mb-8 text-gray-100">{project.description}</p>
              
              {/* Platforms */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Available On</h3>
                <div className="flex flex-wrap gap-3">
                  {project.platforms.map((platform, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-white bg-opacity-20 rounded-lg text-sm font-medium"
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
                    className="bg-white text-[#01624B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center"
                  >
                    View on {link.platform}
                  </a>
                ))}
                <Link
                  href="/portfolio"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#01624B] transition-colors duration-200 text-center"
                >
                  Back to Portfolio
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-8">{project.longDescription}</p>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-[#1BC47D] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-[#1BC47D] bg-opacity-10 text-[#01624B] rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Information</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Status</span>
                    <p className="text-gray-900 font-semibold">{project.status}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Category</span>
                    <p className="text-gray-900 font-semibold">{project.category}</p>
                  </div>
                  {project.launchDate && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">Launch Date</span>
                      <p className="text-gray-900 font-semibold">{project.launchDate}</p>
                    </div>
                  )}
                  {project.teamSize && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">Team Size</span>
                      <p className="text-gray-900 font-semibold">{project.teamSize}</p>
                    </div>
                  )}
                  {project.client && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">Client</span>
                      <p className="text-gray-900 font-semibold">{project.client}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Download Links */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Download Links</h3>
                <div className="space-y-3">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <Image
                          src={link.icon}
                          alt={link.alt}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                        <span className="font-medium text-gray-900">{link.platform}</span>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-[#01624B] rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Interested in Similar Work?</h3>
                <p className="text-gray-200 mb-6">
                  Let&apos;s discuss how we can help bring your project to life.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-[#1BC47D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#01624B] transition-colors duration-200 text-center"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      {(project.challenges || project.solutions || project.results) && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Project Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.challenges && (
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-600">• {challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.solutions && (
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions</h3>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="text-gray-600">• {solution}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.results && (
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="text-gray-600">• {result}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData
              .filter((p) => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <PortfolioCard key={relatedProject.id} project={relatedProject} variant="grid" />
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
