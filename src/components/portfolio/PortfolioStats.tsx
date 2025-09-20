'use client';

import { 
  Rocket, 
  Award, 
  Smartphone, 
  Globe, 
  Code, 
  Users,
  CheckCircle
} from 'lucide-react';

interface PortfolioStatsProps {
  stats: {
    totalProjects: number;
    liveProjects: number;
    mobileApps: number;
    webApps: number;
    categories: number;
    platforms: number;
  };
}

export default function PortfolioStats({ stats }: PortfolioStatsProps) {
  const achievements = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Projects Delivered",
      value: `${stats.totalProjects}+`,
      description: "Successful projects across various industries",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Live Applications",
      value: `${stats.liveProjects}`,
      description: "Currently active and serving users",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      value: `${stats.mobileApps}`,
      description: "iOS and Android applications",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Applications",
      value: `${stats.webApps}`,
      description: "Modern web platforms and SaaS solutions",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technologies",
      value: `${stats.platforms}+`,
      description: "Different platforms and technologies used",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Categories",
      value: `${stats.categories}`,
      description: "Diverse industry verticals served",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600"
    }
  ];

  const highlights = [
    "100% Client Satisfaction Rate",
    "24/7 Technical Support",
    "Cross-Platform Expertise",
    "Modern Technology Stack",
    "Scalable Architecture",
    "User-Centric Design"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak for our expertise and commitment to delivering exceptional results
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-2xl ${achievement.bgColor} ${achievement.textColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.value}</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Our Clients Choose Us
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through our proven expertise and commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#02654F]" />
                </div>
                <span className="text-gray-700 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
