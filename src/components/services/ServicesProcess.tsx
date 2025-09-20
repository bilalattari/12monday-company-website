'use client';

import { 
  Search, 
  Palette, 
  Code, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  Target,
  Award
} from 'lucide-react';

export default function ServicesProcess() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
      duration: "1-2 weeks",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      deliverables: [
        "Project Requirements Analysis",
        "Technical Architecture Planning",
        "Timeline & Milestone Definition",
        "Resource Allocation Strategy"
      ]
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Our team creates detailed wireframes, UI/UX designs, and technical architecture for your project.",
      duration: "2-3 weeks",
      icon: <Palette className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      deliverables: [
        "UI/UX Design Mockups",
        "Interactive Prototypes",
        "Technical Architecture",
        "Design System Guidelines"
      ]
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your application with clean, scalable code and rigorous testing throughout the development cycle.",
      duration: "4-12 weeks",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      deliverables: [
        "Core Feature Development",
        "Quality Assurance Testing",
        "Performance Optimization",
        "Security Implementation"
      ]
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your application and provide ongoing maintenance, updates, and technical support.",
      duration: "Ongoing",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      deliverables: [
        "Production Deployment",
        "Performance Monitoring",
        "Regular Updates",
        "24/7 Technical Support"
      ]
    }
  ];

  const stats = [
    { number: "100%", label: "On-Time Delivery", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "25+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-[#b1f0e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that delivers exceptional results through structured development phases
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 relative group"
            >
              <div className={`inline-flex p-4 rounded-2xl ${step.bgColor} ${step.textColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              
              <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white text-2xl font-bold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {step.step}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
              
              <div className="text-sm text-[#02654F] font-medium mb-6">{step.duration}</div>
              
              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Deliverables</h4>
                <ul className="space-y-2">
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#02654F] mr-2 flex-shrink-0" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-12 -right-4 w-8 h-8 bg-emerald-100 rounded-full items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#02654F]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures quality, transparency, and successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-[#02654F] to-[#17C381] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
