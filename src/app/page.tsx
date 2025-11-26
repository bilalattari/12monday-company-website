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
  Server,
  Star,
  WandSparkles
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/home/FAQ';
import ServicesTestimonials from '@/components/services/ServicesTestimonials';
import {
  Phone,
  Mail,
  CheckCircle,
} from 'lucide-react';

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
    { number: "102+", label: "Projects Completed", icon: <Rocket className="w-6 h-6" /> },
    { number: "102+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Shield className="w-6 h-6" /> }
  ];

  const technologies = [
    { name: "JavaScript", key: "js", category: "Language", icon: "/assets/tech/js.svg" },
    { name: "TypeScript", key: "ts", category: "Language", icon: "/assets/tech/ts.svg" },
    { name: "Python", key: "python", category: "Language", icon: "/assets/tech/python.svg" },
    { name: "React", key: "react", category: "Frontend", icon: "/assets/tech/react.svg" },
    { name: "Next.js", key: "nextjs", category: "Framework", icon: "/assets/tech/nextjs.svg" },
    { name: "Node.js", key: "nodejs", category: "Backend", icon: "/assets/tech/nodejs.svg" },
    { name: "NestJS", key: "nest", category: "Backend", icon: "/assets/tech/nest.png" },
    { name: "Django", key: "django", category: "Backend", icon: "/assets/tech/django.svg" },
    { name: "GraphQL", key: "graphql", category: "API", icon: "/assets/tech/graphql.svg" },
    { name: "Flutter", key: "flutter", category: "Mobile", icon: "/assets/tech/flutter.svg" },
    { name: "React Native", key: "react-native", category: "Mobile", icon: "/assets/tech/react-native.svg" },
    { name: "Firebase", key: "firebase", category: "Backend", icon: "/assets/tech/firebase.svg" },
    { name: "Supabase", key: "supabase", category: "Backend", icon: "/assets/tech/supabase.svg" },
    { name: "AWS", key: "aws", category: "Cloud", icon: "/assets/tech/aws.svg" },
    { name: "GCP", key: "gcp", category: "Cloud", icon: "/assets/tech/gcp.svg" },
    { name: "Docker", key: "docker", category: "DevOps", icon: "/assets/tech/docker.svg" },
    { name: "MongoDB", key: "mongodb", category: "Database", icon: "/assets/tech/mongodb.svg" },
    { name: "PostgreSQL", key: "postgresql", category: "Database", icon: "/assets/tech/postgresql.svg" },
    { name: "NumPy", key: "numpy", category: "AI/ML", icon: "/assets/tech/numpy.svg" },
    { name: "Pandas", key: "pandas", category: "AI/ML", icon: "/assets/tech/pandas.svg" },
  ];

  const features = [
    "Custom Mobile App Development",
    "Modern Web Applications",
    "AI-Powered Solutions",
    "24/7 Technical Support",
    "Scalable Architecture",
    "Cross-Platform Expertise"
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Twelve Monday',
            url: 'https://www.12monday.net',
            logo: 'https://www.12monday.net/assets/portfolio/portfolio-13.jpeg',
            sameAs: [
              'https://github.com/bilalattari',
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: 'info@12monday.net',
              availableLanguage: ['English', 'Urdu', 'Arabic']
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
            url: 'https://www.12monday.net',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.12monday.net/?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className=" relative  min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 bg-black">
          <div className="absolute inset-0 bg-black">
            {/* Floating Elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-black rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-black rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-black rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-110 animate-float">
            <div className="p-3 rounded-xl shadow-sm">
              <Star className="w-5 h-5 text-white" fill='white' />
            </div>
          </div>
          <div className="absolute top-15 right-110 animate-float delay-1000">
            <div className="p-3 rounded-xl shadow-sm">
              <Star className="w-3 h-3 text-white" fill='white' />
            </div>
          </div>
          <div className="absolute bottom-50 left-50 animate-float delay-500">
            <div className="p-3 rounded-xl shadow-sm">
              <Star className="w-3 h-3 text-white" fill='white' />
            </div>
          </div>
          <div className="absolute bottom-50 right-40 animate-float delay-1500">
            <div className="p-3 rounded-xl shadow-sm">
              <Star className="w-5 h-5 text-white" fill='white' />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="animate-fadeInUp">
            <span className="text-lg font-medium text-white">Your AI-First Development Partner</span>

            <h1 className="text-4xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Turn Your Idea Into a Live MVP in
              <span className="block bg-[#02654F] from-[#02654F] bg-clip-text text-[#17C381]">
                Just 15 Days
              </span>
            </h1>

            <p className="text-lg md:text-md text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
              We turn early-stage ideas into real products using a rapid, structured workflow. Get a polished MVP that’s ready to test, pitch, or scale — all within just 15 days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-transparent cursor-pointer text-white px-4 py-2 border-2 border-white rounded-full font-semibold hover:shadow-sm transition-all transform hover:scale-105 flex items-center justify-center">
                Start Your Project
                <WandSparkles className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white bg-white cursor-pointer text-black px-4 rounded-full font-semibold hover:border-[#02654F] hover:text-[#02654F] transition-all flex items-center justify-center">
                Get a Free 15-Minute Consultation
              </button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-sm transition-all">
                  <div className="flex items-center justify-center mb-2 text-[#02654F]">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Projectile Semicircle Glow */}
        {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
    w-[500px] h-[300px] 
    bg-emerald-500 border-2 border-emerald-300
    blur-[80px] rounded-t-full pointer-events-none">
        </div> */}

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 
  w-[700px] h-[370px] 
  bg-emerald-400 
  blur-[15px] rounded-t-full pointer-events-none 
  backdrop-blur-10px] shadow-lg shadow-emerald-400/50 animate-floatUp">
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We provide comprehensive digital solutions to transform your ideas into successful products
            </p>
          </div>


          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, _) => (
              <div
                key={service.id}
                className="group card-gradient-border border-green-500 border-1 py-4 px-6 shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-2 rounded-2xl ${service.bgColor} ${service.textColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
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
      <section id="portfolio" className="relative py-20 bg-background">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] pointer-events-none">
          <div className="absolute -top-24 left-0 w-80 h-80 bg-gradient-to-tr from-[#b1f0e2] to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-24 right-0 w-96 h-96 bg-gradient-to-bl from-[#86efd8] to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Work</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">A selection of products we’ve designed, engineered, and shipped.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.slice(0, 9).map((item) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.slug}`}
                className="group relative overflow-hidden card-gradient-border shadow-sm hover:shadow-sm transition-all duration-300"
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
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#02654F] transition-colors">{item.name}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
                  <div className="mt-4 flex items-center text-[#02654F] font-medium">
                    View case study
                    <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/portfolio" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#02654F] to-[#17C381] text-white font-semibold shadow-xs hover:shadow-sm">
              View All Projects
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We use cutting-edge technologies to build scalable and robust solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.key}
                className="bg-white/5 p-6 rounded-2xl text-center hover:bg-white/10 hover:shadow-sm transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="font-semibold text-white mb-1">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="card-gradient-border p-8 shadow-sm hover:shadow-2xl transition-all duration-300 relative"
              >
                <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white text-2xl font-bold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{step.description}</p>
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

      <ServicesTestimonials />

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Us?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-[#02654F] to-black rounded-2xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-[#02654F]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-400">Optimized performance and quick delivery times</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#02654F] to-black rounded-2xl">
              <div className=" w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-400">Enterprise-grade security and reliability</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#02654F] to-black rounded-2xl">
              <div className=" w-15 h-15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-9 text-[#17C381]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Scale</h3>
              <p className="text-gray-400">Built to scale worldwide with millions of users</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#02654F] to-black rounded-2xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Goal-Oriented</h3>
              <p className="text-gray-400">Focused on achieving your business objectives</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#02654F] to-black rounded-2xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-400">Experienced professionals dedicated to your success</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#02654F] to-black rounded-2xl">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Growth Focused</h3>
              <p className="text-gray-400">Solutions designed to grow with your business</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className=" p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Build Your
              <span className="block">Next Big Project?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Join the ranks of successful startups and businesses who trust us to bring their
              innovative ideas to life with cutting-edge technology and expert development.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gradient-to-br from-[#02654F] to-black backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:shadow-sm transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#02654F] transition-all flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Our Work
              </Link>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold mb-2">Email Us</div>
                <div className="opacity-90">info@12monday.net</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold mb-2">Call Us</div>
                <div className="opacity-90">+92 313 2933803</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold mb-2">Live Chat</div>
                <div className="opacity-90">Available 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="mt-2 text-lg text-gray-400">Everything you need to know about our process and services.</p>
        </div>
        <FAQ items={faqData} />
      </section>


      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
