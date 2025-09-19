"use client"
import React, { useState, useEffect } from 'react';
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
  Phone
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type FAQItemProps = {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleFAQ: () => void;
};


const FAQItem = ({ question, answer, isOpen, toggleFAQ }: FAQItemProps) => (
    <div className="faq-item bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <button onClick={toggleFAQ} className="faq-toggle w-full flex justify-between items-center text-left text-lg font-medium text-gray-900">
            {question}
            <i className={`fas fa-chevron-down text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
        </button>
        <div className={`faq-content overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <p className="pt-4 text-gray-600">{answer}</p>
        </div>
    </div>
);

function App() {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

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

    const toggleFAQ = (index: number) => {
        setOpenFAQIndex(openFAQIndex === index ? null : index);
    };
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
            <div className="bg-white p-3 rounded-xl shadow-lg">
              <Code className="w-6 h-6 text-[#02654F]" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-float delay-1000">
            <div className="bg-white p-3 rounded-xl shadow-lg">
              <Brain className="w-6 h-6 text-[#17C381]" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float delay-500">
            <div className="bg-white p-3 rounded-xl shadow-lg">
              <Smartphone className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-float delay-1500">
            <div className="bg-white p-3 rounded-xl shadow-lg">
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
              Building Tomorrow's
              <span className="block bg-gradient-to-r from-[#02654F] via-[#17C381] to-pink-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We craft exceptional web applications, mobile apps, and AI-powered solutions that drive business growth and user engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center">
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
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Service Navigation */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? 'bg-white shadow-xl border-l-4 border-[#02654F]'
                      : 'bg-white/60 hover:bg-white hover:shadow-lg'
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
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
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

              <button className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={service.id}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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
                className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-emerald-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 relative"
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
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openFAQIndex === index}
                                toggleFAQ={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
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
            <button className="bg-white text-[#02654F] px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center">
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
      </section> */}

      {/* Footer */}
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

        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}

export default App;




















// 'use client';

// import Header from '@/components/Header';
// import { useState } from 'react';
// import Link from 'next/link';
// import { portfolioData } from '@/data/portfolioData';

// type ServiceCardProps = {
//     title: string;
//     description: string;
//     icon: string;
//     color: string;
//     tags: string[];
// };

// type WhyUsCardProps = {
//     title: string;
//     description: string;
//     icon: string;
//     color: string;
// };

// type FAQItemProps = {
//     question: string;
//     answer: string;
//     isOpen: boolean;
//     toggleFAQ: () => void;
// };

// const ServiceCard = ({ title, description, icon, color, tags }: ServiceCardProps) => (
//     <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 transform transition-transform hover:scale-105">
//         <div className="flex items-center space-x-4 mb-4">
//             <div className={`w-12 h-12 flex items-center justify-center bg-${color}-100 text-${color}-600 rounded-full`}>
//                 <i className={`${icon} text-xl`}></i>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//         </div>
//         <p className="text-gray-500 mt-4">{description}</p>
//         <div className="flex flex-wrap mt-4 text-xs font-medium text-gray-600">
//             {tags.map((tag: string, index: number) => (
//                 <span key={index} className="bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">{tag}</span>
//             ))}
//         </div>
//     </div>
// );

// const WhyUsCard = ({ title, description, icon, color }: WhyUsCardProps) => (
//     <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
//         <div className={`w-12 h-12 flex items-center justify-center bg-gray-100 text-${color}-500 rounded-full mb-4`}>
//             <i className={`${icon} text-xl`}></i>
//         </div>
//         <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//         <p className="text-gray-500 mt-2">{description}</p>
//     </div>
// );

// const FAQItem = ({ question, answer, isOpen, toggleFAQ }: FAQItemProps) => (
//     <div className="faq-item bg-white p-6 rounded-2xl shadow-md border border-gray-100">
//         <button onClick={toggleFAQ} className="faq-toggle w-full flex justify-between items-center text-left text-lg font-medium text-gray-900">
//             {question}
//             <i className={`fas fa-chevron-down text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
//         </button>
//         <div className={`faq-content overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
//             <p className="pt-4 text-gray-600">{answer}</p>
//         </div>
//     </div>
// );

// export default function App() {
//     const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

//     const faqData = [
//         {
//             question: "How long does a typical project take?",
//             answer: "Project timelines vary based on complexity and scope. A standard web application might take 3-6 months, while a more complex AI platform could take longer. We'll provide a detailed timeline after our initial consultation."
//         },
//         {
//             question: "What is your process for developing a new application?",
//             answer: "Our process begins with a discovery phase to understand your vision, followed by planning, design, development, testing, and deployment. We maintain open communication and provide regular updates throughout the entire process."
//         },
//         {
//             question: "Do you offer ongoing technical support after launch?",
//             answer: "Yes, we offer flexible support and maintenance packages to ensure your application remains secure, up-to-date, and performs at its best."
//         },
//         {
//             question: "How do we get started?",
//             answer: "Simply click the 'Book a Call' button in the navigation bar or the 'Get a Free Consultation' button in the hero section. We'll schedule a time to discuss your project in detail."
//         }
//     ];

//     const toggleFAQ = (index: number) => {
//         setOpenFAQIndex(openFAQIndex === index ? null : index);
//     };

//     return (
//         <div className="bg-gray-50 text-gray-800 font-inter">
//             <style jsx global>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
//                 body {
//                     font-family: 'Inter', sans-serif;
//                     overflow-x: hidden;
//                     background-color: #F9FAFB;
//                 }
//                 .text-gradient {
//                     background-image: linear-gradient(to right, #10B981, #06B6D4);
//                     -webkit-background-clip: text;
//                     -webkit-text-fill-color: transparent;
//                 }
//                 /* simple animated backgrounds */
//                 @keyframes float {
//                     0% { transform: translateY(0px) translateX(0px); }
//                     50% { transform: translateY(-10px) translateX(5px); }
//                     100% { transform: translateY(0px) translateX(0px); }
//                 }
//                 @keyframes pulseSoft {
//                     0%,100% { opacity: 0.6; }
//                     50% { opacity: 0.85; }
//                 }
//                 .blob {
//                     filter: blur(40px);
//                     animation: float 10s ease-in-out infinite;
//                 }
//                 .pulse-soft { animation: pulseSoft 6s ease-in-out infinite; }
//                 .bob { animation: float 7s ease-in-out infinite; }
//                 .bob.delay-1 { animation-delay: -1s; }
//                 .bob.delay-2 { animation-delay: -2s; }
//                 .bob.delay-3 { animation-delay: -3s; }
//                 .tilt { transform: rotate(10deg); }
//                 .decor-grid { position: absolute; inset: 0; opacity: 0.08; background-image: radial-gradient(currentColor 1px, transparent 1px); background-size: 20px 20px; color: #0f766e; }
//                 .decor-blob { position: absolute; border-radius: 9999px; filter: blur(40px); opacity: .3; }
//             `}</style>
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

//             {/* Navbar */}
//             <Header />

//             <main className="container mx-auto px-4 md:px-8">

//                 {/* Hero Section */}
//                 <section className="relative overflow-hidden text-center py-16 md:py-24">
//                     {/* full-width animated background */}
//                     <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw]">
//                         <div aria-hidden className="decor-grid"></div>
//                         <div aria-hidden className="blob pulse-soft absolute -top-10 -left-10 w-64 h-64 bg-teal-300/40 rounded-full"></div>
//                         <div aria-hidden className="blob pulse-soft absolute top-20 right-0 w-72 h-72 bg-cyan-300/40 rounded-full" style={{animationDelay:'-2s'}}></div>
//                     </div>

//                     {/* floating framework/library tiles - left */}
//                     <div aria-hidden className="pointer-events-none hidden md:flex flex-col items-start space-y-10 absolute left-2 lg:left-6 top-10">
//                         <div className="bob tilt delay-1 bg-white shadow-2xl border border-gray-100 rounded-2xl p-3">
//                             <img src="/next.svg" alt="Next.js" className="h-8 w-8" />
//                         </div>
//                         <div className="bob tilt delay-2 bg-white shadow-2xl border border-gray-100 rounded-2xl p-3">
//                             <i className="fa-brands fa-react text-sky-500 text-2xl"></i>
//                         </div>
//                         <div className="bob tilt delay-3 bg-white shadow-2xl border border-gray-100 rounded-2xl p-3">
//                             <i className="fa-brands fa-node text-green-600 text-2xl"></i>
//                         </div>
//                         <div className="bob tilt bg-white shadow-2xl border border-gray-100 rounded-2xl p-3">
//                             <span className="text-xs font-bold text-gray-800">TS</span>
//                         </div>
//                     </div>
//                     {/* floating framework/library tiles - right */}
//                     <div aria-hidden className="pointer-events-none hidden md:flex flex-col items-end space-y-10 absolute right-2 lg:right-6 top-14">
//                         <div className="bob tilt delay-2 bg-white shadow-2xl border border-gray-100 rounded-2xl p-3">
//                             <img src="/vercel.svg" alt="Vercel" className="h-8 w-8" />
//                         </div>
//                         <div className="bob tilt bg-white shadow-2xl border border-gray-100 rounded-2xl p-3">
//                             <i className="fas fa-database text-[#17C381] text-2xl"></i>
//                         </div>
//                         <div className="bob tilt delay-1 bg-white shadow-2xl border border-gray-100 rounded-2xl p-3">
//                             <i className="fas fa-server text-teal-600 text-2xl"></i>
//                         </div>
//                         <div className="bob tilt delay-3 bg-white shadow-2xl border border-gray-100 rounded-2xl p-3">
//                             <i className="fas fa-robot text-cyan-600 text-2xl"></i>
//                         </div>
//                     </div>
//                     <div className="relative max-w-5xl mx-auto">
//                         <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-teal-50 text-teal-700 border border-teal-100">
//                             Twelve Monday — Your AI‑First Product Team
//                         </span>
//                         <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
//                             <span className="block text-gray-900">The Technical Co‑Founder</span>
//                             <span className="block text-gradient">You've Been Looking For</span>
//                         </h1>
//                         <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
//                             We build production‑ready web, mobile, and AI systems that scale. From
//                             MVP to enterprise, we architect robust backends, sleek frontends, and
//                             intelligent agents that deliver real business value.
//                         </p>
//                         <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//                             <a href="#contact" className="px-8 py-3 text-base font-semibold text-white bg-teal-500 hover:bg-teal-600 rounded-full shadow-lg transition-transform transform hover:scale-105">Book a Strategy Call</a>
//                             <a href="#services" className="px-8 py-3 text-base font-semibold text-gray-700 bg-transparent border-2 border-gray-300 hover:bg-gray-200 rounded-full transition-transform transform hover:scale-105">Explore Services</a>
//                         </div>
//                         {/* Tech logos row */}
//                         <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-6 items-center opacity-80">
//                             <img src="/next.svg" alt="Next.js" className="h-8 mx-auto" />
//                             <img src="/vercel.svg" alt="Vercel" className="h-8 mx-auto" />
//                             <img src="/assets/icons/web-icon.png" alt="Web" className="h-8 mx-auto hidden" />
//                             <img src="/assets/icons/appstore-icon.png" alt="App" className="h-8 mx-auto" />
//                             <i className="fa-brands fa-react text-sky-500 text-3xl"></i>
//                             <i className="fa-brands fa-node text-green-600 text-3xl"></i>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Services Section */}
//                 <section id="services" className="py-16 md:py-20">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Do</h2>
//                         <p className="mt-2 text-lg text-gray-500">End‑to‑end product engineering for founders and teams.</p>
//                     </div>
//                     {/* Three large tiles inspired by reference */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
//                             <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6">
//                                 <i className="fas fa-robot"></i>
//                             </div>  
//                             <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Agents & Automations</h3>
//                             <p className="text-gray-600 mb-6">n8n workflows, RAG pipelines, custom LLM systems for business.</p>
//                             <div className="flex items-center gap-6 text-gray-800">
//                                 <span className="flex items-center gap-2"><i className="fas fa-sparkles"></i>OpenAI</span>
//                                 <span className="flex items-center gap-2"><i className="fas fa-link"></i>LangChain</span>
//                                 <span className="flex items-center gap-2"><i className="fas fa-database"></i>Vector DB</span>
//                             </div>
//                             <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-teal-700 font-semibold">Learn More <i className="fas fa-arrow-right"></i></a>
//                         </div>
//                         <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
//                             <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
//                                 <i className="fas fa-code"></i>
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-900 mb-2">Full‑Stack Development</h3>
//                             <p className="text-gray-600 mb-6">End‑to‑end web applications with production‑grade backends.</p>
//                             <div className="flex items-center gap-6 text-gray-800">
//                                 <span className="flex items-center gap-2"><i className="fa-brands fa-react"></i>React</span>
//                                 <span className="flex items-center gap-2"><i className="fa-brands fa-node"></i>Node.js</span>
//                                 <span className="flex items-center gap-2"><i className="fas fa-database"></i>PostgreSQL</span>
//                             </div>
//                             <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-teal-700 font-semibold">Learn More <i className="fas fa-arrow-right"></i></a>
//                         </div>
//                         <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
//                             <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-6">
//                                 <i className="fas fa-triangle-exclamation"></i>
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Rescue</h3>
//                             <p className="text-gray-600 mb-6">Fix and scale fragile MVPs from no‑code tools to production‑ready systems.</p>
//                             <div className="flex items-center gap-6 text-gray-800">
//                                 <span className="flex items-center gap-2"><i className="fas fa-heart"></i>Lovable</span>
//                                 <span className="flex items-center gap-2"><i className="fas fa-bolt"></i>Bolt.new</span>
//                                 <span className="flex items-center gap-2"><i className="fas fa-mouse-pointer"></i>Cursor</span>
//                             </div>
//                             <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-teal-700 font-semibold">Learn More <i className="fas fa-arrow-right"></i></a>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Capabilities Section */}
//                 <section className="py-16 md:py-20" id="capabilities">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built For Production</h2>
//                         <p className="mt-2 text-lg text-gray-500">Quality engineering, observable systems, and strong UX—every time.</p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
//                             <div className="flex items-center space-x-3">
//                                 <span className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center"><i className="fas fa-shield-alt"></i></span>
//                                 <h3 className="text-lg font-semibold text-gray-900">Security & Compliance</h3>
//                             </div>
//                             <p className="mt-3 text-gray-600">OWASP best practices, auth hardening, and privacy‑first data handling. SSO, RBAC, audit trails.</p>
//                         </div>
//                         <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
//                             <div className="flex items-center space-x-3">
//                                 <span className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center"><i className="fas fa-gauge-high"></i></span>
//                                 <h3 className="text-lg font-semibold text-gray-900">Performance & Scale</h3>
//                             </div>
//                             <p className="mt-3 text-gray-600">Caching, queues, and edge delivery for fast, reliable experiences. CDN, Redis, and background jobs.</p>
//                         </div>
//                         <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
//                             <div className="flex items-center space-x-3">
//                                 <span className="w-10 h-10 rounded-full bg-purple-100 text-[#17C381] flex items-center justify-center"><i className="fas fa-repeat"></i></span>
//                                 <h3 className="text-lg font-semibold text-gray-900">CI/CD & Observability</h3>
//                             </div>
//                             <p className="mt-3 text-gray-600">Automated testing, deployments, logging, metrics, and alerting. Ship confidently every week.</p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Portfolio Section */}
//                 <section id="portfolio" className="relative py-16 md:py-20">
//                     <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw]">
//                         <div aria-hidden className="decor-grid"></div>
//                         <div aria-hidden className="decor-blob bg-teal-300 w-64 h-64 -top-16 -left-16"></div>
//                         <div aria-hidden className="decor-blob bg-cyan-300 w-72 h-72 -bottom-16 -right-16"></div>
//                     </div>
//                     <div className="relative text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Work</h2>
//                         <p className="mt-2 text-lg text-gray-500">A few projects we’ve built and shipped.</p>
//                     </div>
//                     <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {portfolioData.slice(0, 6).map((project) => (
//                             <Link href={`/portfolio/${project.slug}`} key={project.id} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-all">
//                                 <div className="h-44 w-full overflow-hidden">
//                                     <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
//                                 </div>
//                                 <div className="p-5">
//                                     <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
//                                     <p className="text-gray-600 text-sm mt-1 line-clamp-2">{project.description}</p>
//                                     <div className="mt-4 flex flex-wrap gap-2">
//                                         {project.technologies.slice(0, 4).map((tech, i) => (
//                                             <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{tech}</span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                     <div className="relative text-center mt-10">
//                         <Link href="/portfolio" className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold shadow-lg">View All Projects</Link>
//                     </div>
//                 </section>

//                 {/* Why Us Section */}
//                 <section id="why-us" className="py-16 md:py-20">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Twelve Monday?</h2>
//                         <p className="mt-2 text-lg text-gray-500">We craft high‑quality applications with a focus on performance, security, and user experience.</p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         <WhyUsCard title="Enterprise‑Level Security" description="AES‑256 encryption, secure APIs, and end‑to‑end protection to keep your data safe." icon="fas fa-lock" color="teal"/>
//                         <WhyUsCard title="Globally Scalable" description="Global‑first mindset to ensure seamless performance for users anywhere." icon="fas fa-globe" color="cyan"/>
//                         <WhyUsCard title="Privacy‑Driven Architecture" description="We follow GDPR/CCPA and build privacy without compromising on UX." icon="fas fa-user-shield" color="purple"/>
//                         <WhyUsCard title="Unmatched Performance" description="Fast, reliable, and built to scale—no speed or usage limits." icon="fas fa-gauge-high" color="teal"/>
//                         <WhyUsCard title="Multi‑Platform Expertise" description="React, Next.js, Node.js, React Native, and more across web and mobile." icon="fas fa-layer-group" color="cyan"/>
//                         <WhyUsCard title="Reliable Support" description="24/7 monitoring, regular updates, and post‑launch support that grows with you." icon="fas fa-headset" color="purple"/>
//                     </div>
//                 </section>

//                 {/* Process Section */}
//                 <section className="py-16 md:py-20" id="process">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our 4‑Step Process</h2>
//                         <p className="mt-2 text-lg text-gray-500">Transparent, collaborative, and focused on outcomes.</p>
//                     </div>
//                     {/* Diagram with animated connector */}
//                     <div className="relative max-w-6xl mx-auto">
//                         <svg className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-24" viewBox="0 0 1200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path id="processPath" d="M0 50 C 150 0, 300 100, 450 50 S 750 0, 900 50 S 1050 100, 1200 50" stroke="url(#grad)" strokeWidth="6" strokeLinecap="round" opacity="0.35"/>
//                             <defs>
//                                 <linearGradient id="grad" x1="0" x2="1200" y1="0" y2="0" gradientUnits="userSpaceOnUse">
//                                     <stop offset="0%" stopColor="#14b8a6"/>
//                                     <stop offset="50%" stopColor="#06b6d4"/>
//                                     <stop offset="100%" stopColor="#8b5cf6"/>
//                                 </linearGradient>
//                             </defs>
//                             <circle r="7" fill="#14b8a6">
//                                 <animateMotion dur="10s" repeatCount="indefinite" path="M0 50 C 150 0, 300 100, 450 50 S 750 0, 900 50 S 1050 100, 1200 50" />
//                             </circle>
//                         </svg>
//                         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
//                             <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform md:-translate-y-3">
//                                 <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold">1</span>
//                                 <h3 className="mt-3 font-semibold text-gray-900">Discover</h3>
//                                 <p className="text-gray-600 mt-2">Clarify goals, users, and constraints. Align on success metrics.</p>
//                             </div>
//                             <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform md:translate-y-3">
//                                 <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 font-semibold">2</span>
//                                 <h3 className="mt-3 font-semibold text-gray-900">Design</h3>
//                                 <p className="text-gray-600 mt-2">UX flows, architecture, and milestones. We plan for scale.</p>
//                             </div>
//                             <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform md:-translate-y-3">
//                                 <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-semibold">3</span>
//                                 <h3 className="mt-3 font-semibold text-gray-900">Build</h3>
//                                 <p className="text-gray-600 mt-2">Iterative development with weekly demos and QA.</p>
//                             </div>
//                             <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform md:translate-y-3">
//                                 <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold">4</span>
//                                 <h3 className="mt-3 font-semibold text-gray-900">Launch & Support</h3>
//                                 <p className="text-gray-600 mt-2">Deploy, monitor, and continuously improve with you.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Testimonials Section */}
//                 <section className="py-16 md:py-20">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Clients Say</h2>
//                         <p className="mt-2 text-lg text-gray-500">Real outcomes, trusted partnerships.</p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
//                             <p className="text-gray-700">“Twelve Monday shipped a reliable MVP in weeks and scaled it without hiccups.”</p>
//                             <div className="mt-4 text-sm text-gray-500">Founder, Fintech Startup</div>
//                         </div>
//                         <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
//                             <p className="text-gray-700">“Their AI expertise turned our manual process into a fully automated workflow.”</p>
//                             <div className="mt-4 text-sm text-gray-500">Operations Lead, SaaS Company</div>
//                         </div>
//                         <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
//                             <p className="text-gray-700">“Clean code, clear communication, and a product our users love.”</p>
//                             <div className="mt-4 text-sm text-gray-500">CTO, HealthTech</div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Stats & Badges */}
//                 <section className="py-12">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//                         <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
//                             <div className="text-3xl font-extrabold text-gray-900">30+</div>
//                             <div className="text-gray-500">Projects Delivered</div>
//                         </div>
//                         <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
//                             <div className="text-3xl font-extrabold text-gray-900">99.9%</div>
//                             <div className="text-gray-500">Uptime Targets</div>
//                         </div>
//                         <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
//                             <div className="text-3xl font-extrabold text-gray-900">10x</div>
//                             <div className="text-gray-500">Performance Gains</div>
//                         </div>
//                         <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
//                             <div className="text-3xl font-extrabold text-gray-900">24/7</div>
//                             <div className="text-gray-500">Monitoring</div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* FAQ Section */}
                // <section id="faq" className="py-16 md:py-20">
                //     <div className="text-center mb-12">
                //         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                //         <p className="mt-2 text-lg text-gray-500">Everything you need to know about our process and services.</p>
                //     </div>
                //     <div className="max-w-3xl mx-auto space-y-4">
                //         {faqData.map((item, index) => (
                //             <FAQItem
                //                 key={index}
                //                 question={item.question}
                //                 answer={item.answer}
                //                 isOpen={openFAQIndex === index}
                //                 toggleFAQ={() => toggleFAQ(index)}
                //             />
                //         ))}
                //     </div>
                // </section>
                
//                 {/* Contact/CTA Section */}
//                 <section id="contact" className="relative overflow-hidden py-16 md:py-20 text-center rounded-3xl my-16 shadow-xl bg-gradient-to-br from-teal-700 to-cyan-700 text-white">
//                     <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw]">
//                         <div aria-hidden className="absolute inset-0 opacity-30" style={{backgroundImage:"radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 35%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.25), transparent 35%)"}}></div>
//                         <div aria-hidden className="blob absolute -top-12 -left-12 w-64 h-64 bg-white/20 rounded-full"></div>
//                         <div aria-hidden className="blob absolute -bottom-12 -right-12 w-72 h-72 bg-white/10 rounded-full" style={{animationDelay:'-1.5s'}}></div>
//                     </div>
//                     <h2 className="relative text-3xl md:text-4xl font-extrabold">Ready to Build Your Application That Scales?</h2>
//                     <p className="relative mt-4 text-lg text-teal-50/90 max-w-2xl mx-auto">
//                         Stop losing users to limitations. Start building production‑grade applications investors and users love.
//                     </p>
//                     <div className="relative mt-8 flex flex-col sm:flex-row justify-center gap-4">
//                         <a href="#" className="inline-block px-10 py-4 text-lg font-semibold text-teal-900 bg-white hover:bg-teal-50 rounded-full shadow-lg transition-transform transform hover:scale-105">Book a Strategy Call</a>
//                         <a href="#services" className="inline-block px-10 py-4 text-lg font-semibold border-2 border-white/80 text-white hover:bg-white/10 rounded-full transition-colors">See How We Work</a>
//                     </div>
//                 </section>

//                 {/* Contact Form Section */}
//                 {/* <section className="py-16 md:py-20">
//                     <div className="max-w-3xl mx-auto bg-white border border-gray-100 shadow-xl rounded-2xl p-8 md:p-10">
//                         <h3 className="text-2xl font-bold text-gray-900 text-center">Tell Us About Your Project</h3>
//                         <p className="text-gray-600 text-center mt-2">We’ll get back to you within 24 hours.</p>
//                         <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input required placeholder="Your Name" className="col-span-1 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
//                             <input required type="email" placeholder="Email" className="col-span-1 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
//                             <input placeholder="Company" className="col-span-1 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
//                             <input placeholder="Budget (USD)" className="col-span-1 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
//                             <textarea required placeholder="Project Brief" className="md:col-span-2 rounded-xl border border-gray-200 px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
//                             <button type="submit" className="md:col-span-2 mt-2 inline-flex justify-center px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold shadow-lg transition-transform transform hover:scale-[1.01]">Send Message</button>
//                         </form>
//                     </div>
//                 </section> */}

//             </main>

//             {/* Footer */}
//             <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200">
//                 <p>&copy; 2024 Twelve Monday Technologies. All Rights Reserved.</p>
//             </footer>
//         </div>
//     );
// }






// // import Header from '@/components/Header';
// // import Footer from '@/components/Footer';
// // import PortfolioCard from '@/components/PortfolioCard';
// // import Link from 'next/link';
// // import { portfolioData } from '@/data/portfolioData';

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen bg-white">
// //       <Header />
      
// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-br from-[#1BC47D] to-[#01624B] text-white py-20">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center">
// //             <h1 className="text-4xl md:text-6xl font-bold mb-6">
// //               We Build Startups
// //               <span className="block text-[#1BC47D]">From Scratch</span>
// //             </h1>
// //             <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
// //               Specializing in mobile app development with React Native, Flutter, 
// //               and full-stack solutions that bring your innovative ideas to life.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Link
// //                 href="/contact"
// //                 className="bg-white text-[#01624B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
// //               >
// //                 Start Your Project
// //               </Link>
// //               <Link
// //                 href="/portfolio"
// //                 className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#01624B] transition-colors duration-200"
// //               >
// //                 View Our Work
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Section */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-16">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               Our Expertise
// //             </h2>
// //             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //               From concept to launch, we provide comprehensive development services 
// //               tailored to your startup&apos;s unique needs.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {/* Mobile App Development */}
// //             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// //               <div className="w-12 h-12 bg-[#1BC47D] rounded-lg flex items-center justify-center mb-6">
// //                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
// //                 </svg>
// //               </div>
// //               <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile App Development</h3>
// //               <p className="text-gray-600">
// //                 Native and cross-platform mobile applications using React Native and Flutter 
// //                 for iOS and Android platforms.
// //               </p>
// //             </div>

// //             {/* Full-Stack Development */}
// //             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// //               <div className="w-12 h-12 bg-[#01624B] rounded-lg flex items-center justify-center mb-6">
// //                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
// //                 </svg>
// //               </div>
// //               <h3 className="text-xl font-semibold text-gray-900 mb-4">MERN Stack</h3>
// //               <p className="text-gray-600">
// //                 Complete web applications using MongoDB, Express.js, React, and Node.js 
// //                 for scalable and robust solutions.
// //               </p>
// //             </div>

// //             {/* Startup Development */}
// //             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// //               <div className="w-12 h-12 bg-[#1BC47D] rounded-lg flex items-center justify-center mb-6">
// //                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// //                 </svg>
// //               </div>
// //               <h3 className="text-xl font-semibold text-gray-900 mb-4">Startup Development</h3>
// //               <p className="text-gray-600">
// //                 End-to-end development services from MVP to full-scale applications, 
// //                 helping startups launch successfully.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Portfolio Preview */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-16">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               Featured Projects
// //             </h2>
// //             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //               Explore some of our recent work and see how we&apos;ve helped startups 
// //               transform their ideas into successful applications.
// //             </p>
// //           </div>

// //           {/* Large Featured Projects */}
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
// //             {portfolioData.slice(0, 3).map((project) => (
// //               <PortfolioCard key={project.id} project={project} variant="featured" />
// //             ))}
// //           </div>

// //           {/* Additional Projects Preview */}
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
// //             {portfolioData.slice(3, 7).map((project) => (
// //               <PortfolioCard key={project.id} project={project} variant="compact" />
// //             ))}
// //           </div>

// //           {/* CTA Section */}
// //           <div className="text-center">
// //             <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
// //               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
// //                 Ready to See More?
// //               </h3>
// //               <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
// //                 Explore our complete portfolio of {portfolioData.length} projects across mobile apps, 
// //                 web applications, and innovative solutions.
// //               </p>
// //               <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                 <Link
// //                   href="/portfolio"
// //                   className="inline-flex items-center px-8 py-3 bg-[#1BC47D] text-white rounded-lg font-semibold hover:bg-[#01624B] transition-colors duration-200 shadow-lg"
// //                 >
// //                   View All Projects
// //                   <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                   </svg>
// //                 </Link>
// //                 <Link
// //                   href="/contact"
// //                   className="inline-flex items-center px-8 py-3 border-2 border-[#1BC47D] text-[#01624B] rounded-lg font-semibold hover:bg-[#1BC47D] hover:text-white transition-colors duration-200"
// //                 >
// //                   Start Your Project
// //                   <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// //                   </svg>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-20 bg-[#01624B] text-white">
// //         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-6">
// //             Ready to Build Your Startup?
// //           </h2>
// //           <p className="text-xl mb-8 text-gray-200">
// //             Let&apos;s discuss your project and turn your innovative idea into a successful mobile application.
// //           </p>
// //           <Link
// //             href="/contact"
// //             className="inline-flex items-center px-8 py-3 bg-[#1BC47D] text-white rounded-lg font-semibold hover:bg-white hover:text-[#01624B] transition-colors duration-200"
// //           >
// //             Get Started Today
// //             <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //             </svg>
// //           </Link>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // }
