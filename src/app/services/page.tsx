"use client"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Bot, 
  BarChart3, 
  MessageCircle,
  Zap,
  Shield,
  Globe,
  Rocket,
  Target,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Users,
  TrendingUp,
  Layers,
  Sparkles,
  Brain,
  Server,
  Monitor,
  Phone,
  Palette,
  Cpu,
  Wrench
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        "React Native Development",
        "Flutter Applications",
        "iOS & Android Native Apps",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Performance Optimization"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "JavaScript", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "MERN Stack Development",
      description: "Complete web applications using MongoDB, Express.js, React, and Node.js",
      icon: <Code className="w-8 h-8" />,
      features: [
        "MongoDB Database Design",
        "Express.js Backend APIs",
        "React Frontend Development",
        "Node.js Server Solutions",
        "RESTful API Development",
        "Real-time Applications"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "REST APIs"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      id: 3,
      title: "Startup Development",
      description: "End-to-end development services from MVP to full-scale applications",
      icon: <Rocket className="w-8 h-8" />,
      features: [
        "MVP Development",
        "Product Strategy",
        "Technical Consulting",
        "Scalability Planning",
        "Launch Support",
        "Growth Optimization"
      ],
      technologies: ["Product Strategy", "Technical Architecture", "MVP Development", "Scalability", "Launch Planning"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Modern, intuitive user interfaces and user experience design",
      icon: <Palette className="w-8 h-8" />,
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Responsive Design",
        "Accessibility Compliance"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design Systems", "Responsive Design"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      id: 5,
      title: "AI & Machine Learning",
      description: "Intelligent systems powered by advanced AI algorithms",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "Custom AI Solutions",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Integration"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "NLP", "Python"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      id: 6,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and deployment solutions",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "Cloud Architecture",
        "CI/CD Pipelines",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Security Implementation"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your vision, goals, and requirements to create a comprehensive project plan."
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Our team designs the user experience and creates the technical architecture for your application."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your application using modern technologies and rigorous testing practices."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We help you launch your application and provide ongoing support for growth and optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
          <div className="absolute top-1/3 right-1/3 animate-float delay-2000">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Cloud className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-float delay-3000">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <Palette className="w-6 h-6 text-pink-600" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-8">
              <Sparkles className="w-4 h-4 text-[#02654F] mr-2" />
              <span className="text-sm font-medium text-gray-700">Comprehensive Development Services</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-[#02654F] via-[#17C381] to-pink-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              From mobile apps to AI-powered solutions, we provide comprehensive development services 
              that transform your ideas into successful digital products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-8 py-4 rounded-full font-semibold hover:shadow-sm transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[#02654F] hover:text-[#02654F] transition-all flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of services covers every aspect of modern application development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-2xl ${service.bgColor} ${service.textColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#02654F] mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    {service.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  </div>

                  <Link
                    href="/contact"
                  className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-sm transition-all flex items-center justify-center"
                  >
                    Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#b1f0e2]">
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
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 -right-4 w-8 h-8 bg-emerald-100 rounded-full items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[#02654F]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#02654F] via-[#17C381] to-pink-600 text-white relative overflow-hidden">
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
            <Link
              href="/contact"
              className="bg-white text-[#02654F] px-8 py-4 rounded-full font-semibold hover:shadow-sm transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#02654F] transition-all flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Email</div>
              <div className="opacity-90">hello@twelvemonday.com</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Phone</div>
              <div className="opacity-90">+1 (555) 123-4567</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Location</div>
              <div className="opacity-90">Global Remote Team</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1500 {
          animation-delay: 1.5s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        .delay-3000 {
          animation-delay: 3s;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}

