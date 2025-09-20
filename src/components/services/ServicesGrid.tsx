'use client';

import { 
  Code, 
  Smartphone, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Play,
  Brain,
  Server,
  Palette
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: "Mobile App Development",
      slug: "mobile-app-development",
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
      textColor: "text-blue-600",
      price: ""
    },
    {
      id: 2,
      title: "Web Application Development",
      slug: "web-application-development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      icon: <Code className="w-8 h-8" />,
      features: [
        "React & Next.js Development",
        "Vue.js Applications",
        "Full-Stack Solutions",
        "E-commerce Platforms",
        "Progressive Web Apps",
        "API Development"
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript", "PostgreSQL"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      price: ""
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      slug: "ai-machine-learning",
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
      textColor: "text-indigo-600",
      price: ""
    },
    {
      id: 4,
      title: "Backend Development",
      slug: "backend-development",
      description: "Scalable server-side solutions and robust API architectures",
      icon: <Server className="w-8 h-8" />,
      features: [
        "RESTful API Development",
        "GraphQL APIs",
        "Microservices Architecture",
        "Database Design",
        "Cloud Infrastructure",
        "DevOps & Deployment"
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      price: ""
    },
    {
      id: 5,
      title: "UI/UX Design",
      slug: "ui-ux-design",
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
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      price: ""
    },
    {
      id: 6,
      title: "Cloud & DevOps",
      slug: "cloud-devops",
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
      textColor: "text-teal-600",
      price: ""
    }
  ];

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, _) => (
            <div
              key={service.id}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-2xl ${service.bgColor} ${service.textColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <span className="text-sm font-bold text-[#02654F]">{service.price}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
                
              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
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

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/services/${service.slug}`}
                  className="flex-1 bg-[#02654F] text-white px-6 py-3 text-sm rounded-xl font-semibold hover:bg-[#17C381] transition-all flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-[#02654F] hover:text-[#02654F] transition-all"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
