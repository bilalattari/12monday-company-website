import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  MessageCircle,
  Zap,
  Shield,
  Globe,
  Rocket,
  Target,
  ArrowRight,
  Play,
  Award,
  Users,
  TrendingUp,
  Sparkles,
  Brain,
  Server
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/home/FAQ';

export const metadata: Metadata = {
  title: {
    default: "Twelve Monday | AI-First Web, Mobile & SaaS Development Company",
    template: "%s | Twelve Monday"
  },
  description:
    "We build high-performance web apps, mobile apps, and AI-powered solutions. Expert in React, Next.js, React Native, Node.js, and cloud-native architectures.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "React Native",
    "Next.js",
    "MERN stack",
    "AI development",
    "machine learning",
    "SaaS",
    "startup MVP",
    "UI/UX design",
    "cloud devops",
    "Pakistan software company",
    "Twelve Monday",
    "boundless technologies",
    "cluster valley",
    "saylani",
    "saylani tech limited",
    "system limited",
  ],
  openGraph: {
    title: "Twelve Monday | AI-First Web, Mobile & SaaS Development Company",
    description:
      "We build high-performance web apps, mobile apps, and AI-powered solutions. Expert in React, Next.js, React Native, Node.js, and cloud-native architectures.",
    type: 'website',
    url: 'https://www.12monday.net/',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Twelve Monday - AI-First Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Twelve Monday | AI-First Web, Mobile & SaaS Development Company",
    description:
      "We build high-performance web apps, mobile apps, and AI-powered solutions. Expert in React, Next.js, React Native, Node.js, and cloud-native architectures.",
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.12monday.net/',
  },
};

function App() {

  const services = [
    {
      id: 0,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-[#02654F]",
      technologies: ["React", "Next.js", "Vue.js", "TypeScript"]
    },
    {
      id: 1,
      title: "Backend Development",
      description: "Scalable server-side solutions and robust API architectures",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      technologies: ["Node.js", "Python", "PostgreSQL", "AWS"]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-[#17C381]",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      id: 3,
      title: "SaaS Applications",
      description: "Cloud-based software solutions with subscription models",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      technologies: ["Microservices", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      description: "Intelligent systems powered by advanced AI algorithms",
      icon: <Brain className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"]
    },
    {
      id: 5,
      title: "Data Science",
      description: "Data analytics, visualization, and business intelligence solutions",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      technologies: ["Python", "R", "Pandas", "Tableau"]
    },
    {
      id: 6,
      title: "Chatbots & AI Agents",
      description: "Conversational AI and automated customer support systems",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      technologies: ["NLP", "DialogFlow", "Rasa", "GPT"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Rocket className="w-6 h-6" /> },
    { number: "25+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Shield className="w-6 h-6" /> }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "React Native", category: "Mobile" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "Next.js", category: "Framework" },
    { name: "GraphQL", category: "API" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Our team creates detailed wireframes, UI/UX designs, and technical architecture for your project.",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your application with clean, scalable code and rigorous testing throughout the development cycle.",
      duration: "4-12 weeks"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your application and provide ongoing maintenance, updates, and technical support.",
      duration: "Ongoing"
    }
  ];

    const faqData = [
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity and scope. A standard web application might take 3-6 months, while a more complex AI platform could take longer. We'll provide a detailed timeline after our initial consultation."
        },
        {
            question: "What is your process for developing a new application?",
            answer: "Our process begins with a discovery phase to understand your vision, followed by planning, design, development, testing, and deployment. We maintain open communication and provide regular updates throughout the entire process."
        },
        {
            question: "Do you offer ongoing technical support after launch?",
            answer: "Yes, we offer flexible support and maintenance packages to ensure your application remains secure, up-to-date, and performs at its best."
        },
        {
            question: "How do we get started?",
            answer: "Simply click the 'Book a Call' button in the navigation bar or the 'Get a Free Consultation' button in the hero section. We'll schedule a time to discuss your project in detail."
        }
    ];
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Twelve Monday',
            url: 'https://twelvemonday.com',
            logo: 'https://twelvemonday.com/assets/portfolio/portfolio-13.jpeg',
            sameAs: [
              'https://github.com/bilalattari',
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: 'info@12monday.net',
              availableLanguage: ['English'],
            }],
          }),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Twelve Monday',
            url: 'https://twelvemonday.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://twelvemonday.com/?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      {/* Navigation */}
    <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="absolute inset-0">
            {/* Floating Elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Code className="w-6 h-6 text-[#02654F]" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-float delay-1000">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Brain className="w-6 h-6 text-[#17C381]" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float delay-500">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Smartphone className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-float delay-1500">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Database className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-8">
              <Sparkles className="w-4 h-4 text-[#02654F] mr-2" />
              <span className="text-sm font-medium text-gray-700">Your AI-First Development Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Building Tomorrow&apos;s
              <span className="block bg-gradient-to-r from-[#02654F] via-[#17C381] to-pink-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We craft exceptional web applications, mobile apps, and AI-powered solutions that drive business growth and user engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-8 py-4 rounded-full font-semibold hover:shadow-sm transition-all transform hover:scale-105 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[#02654F] hover:text-[#02654F] transition-all flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-sm transition-all">
                  <div className="flex items-center justify-center mb-2 text-[#02654F]">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital solutions to transform your ideas into successful products
            </p>
          </div>

          {/* Interactive Service Showcase */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"> */}
            {/* Service Navigation */}
            {/* <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? 'bg-white shadow-sm border-l-4 border-[#02654F]'
                      : 'bg-white/60 hover:bg-white'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${service.bgColor} ${service.textColor}`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Service Details */}
            {/* <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className={`inline-flex p-4 rounded-2xl ${services[activeService].bgColor} ${services[activeService].textColor} mb-6`}>
                {services[activeService].icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {services[activeService].description}
              </p>
              
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Technologies We Use:</h4>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-sm transition-all flex items-center">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div> */}
          {/* </div> */}

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, _) => (
              <div
                key={service.id}
                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-2xl ${service.bgColor} ${service.textColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="relative py-20 bg-white">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] pointer-events-none">
          <div className="absolute -top-24 left-0 w-80 h-80 bg-gradient-to-tr from-[#b1f0e2] to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-24 right-0 w-96 h-96 bg-gradient-to-bl from-[#86efd8] to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Our Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A selection of products we’ve designed, engineered, and shipped.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.slice(0, 9).map((item) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-sm transition-all duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/90 text-gray-800 backdrop-blur">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#02654F] transition-colors">{item.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  <div className="mt-4 flex items-center text-[#02654F] font-medium">
                    View case study
                    <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/portfolio" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#02654F] to-[#17C381] text-white font-semibold shadow-xs hover:shadow-sm">
              View All Projects
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technology <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build scalable and robust solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-emerald-50 hover:shadow-sm transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="font-semibold text-gray-900 mb-2">{tech.name}</div>
                <div className="text-sm text-gray-600">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-[#b1f0e2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 relative"
              >
                <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white text-2xl font-bold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                <div className="text-sm text-[#02654F] font-medium">{step.duration}</div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[#02654F]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-[#02654F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Optimized performance and quick delivery times</p>
            </div>

            <div className="text-center p-8">
              <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and reliability</p>
            </div>

            <div className="text-center p-8">
              <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-[#17C381]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Scale</h3>
              <p className="text-gray-600">Built to scale worldwide with millions of users</p>
            </div>

            <div className="text-center p-8">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Goal-Oriented</h3>
              <p className="text-gray-600">Focused on achieving your business objectives</p>
            </div>

            <div className="text-center p-8">
              <div className="bg-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals dedicated to your success</p>
            </div>

            <div className="text-center p-8">
              <div className="bg-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Focused</h3>
              <p className="text-gray-600">Solutions designed to grow with your business</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        <p className="mt-2 text-lg text-gray-500">Everything you need to know about our process and services.</p>
                    </div>
                    <FAQ items={faqData} />
                </section>

      {/* CTA Section */}
      {/* <section id="contact" className="py-20 bg-gradient-to-br from-[#02654F] via-[#17C381] to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss your project and turn your vision into reality with our expert team
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-white text-[#02654F] px-8 py-4 rounded-full font-semibold hover:shadow-sm transition-all transform hover:scale-105 flex items-center justify-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#02654F] transition-all flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Email</div>
              <div className="opacity-90">info@12monday.net</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Phone</div>
              <div className="opacity-90">+92 313 2933803</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Location</div>
              <div className="opacity-90">Global Remote Team</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
            <Footer />

    </div>
  );
}

export default App;
