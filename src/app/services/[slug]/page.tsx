import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailHero from '@/components/services/serviceDetail/ServiceDetailHero';
import ServiceDetailFeatures from '@/components/services/serviceDetail/ServiceDetailFeatures';
import ServiceDetailProcess from '@/components/services/serviceDetail/ServiceDetailProcess';
import ServiceDetailPortfolio from '@/components/services/serviceDetail/ServiceDetailPortfolio';
import ServiceDetailFAQ from '@/components/services/serviceDetail/ServiceDetailFAQ';
import ServiceDetailCTA from '@/components/services/serviceDetail/ServiceDetailCTA';
import { portfolioData } from '@/data/portfolioData';

// Service data
const servicesData = {
  'mobile-app-development': {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    longDescription: 'We specialize in creating high-performance mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our team combines the latest technologies with proven development practices to build scalable, secure, and feature-rich mobile solutions.',
    icon: 'Smartphone',
    features: [
      'React Native Development',
      'Flutter Applications', 
      'iOS & Android Native Apps',
      'Cross-platform Solutions',
      'App Store Optimization',
      'Performance Optimization',
      'Push Notifications',
      'Offline Functionality',
      'Real-time Synchronization',
      'Advanced UI/UX Design'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'JavaScript', 'TypeScript', 'Redux', 'Firebase', 'AWS', 'Docker'],
    process: [
      {
        step: '01',
        title: 'Discovery & Planning',
        description: 'We analyze your requirements, target audience, and business goals to create a comprehensive mobile app strategy.',
        duration: '1-2 weeks'
      },
      {
        step: '02', 
        title: 'Design & Prototyping',
        description: 'Our designers create intuitive user interfaces and interactive prototypes for your mobile application.',
        duration: '2-3 weeks'
      },
      {
        step: '03',
        title: 'Development & Testing',
        description: 'We build your mobile app using modern frameworks and conduct rigorous testing across all devices.',
        duration: '6-12 weeks'
      },
      {
        step: '04',
        title: 'Launch & Support',
        description: 'We help you publish your app to app stores and provide ongoing maintenance and updates.',
        duration: 'Ongoing'
      }
    ],
    pricing: {
      basic: '$5,000',
      professional: '$12,000', 
      enterprise: '$25,000+'
    },
    portfolio: portfolioData.filter(p => 
      p.platforms.includes('iOS') || 
      p.platforms.includes('Android') || 
      p.technologies.some(tech => 
        ['React Native', 'Flutter', 'Swift', 'Kotlin'].includes(tech)
      )
    ),
    faq: [
      {
        question: 'How long does it take to develop a mobile app?',
        answer: 'The development timeline depends on complexity. A simple app takes 2-3 months, while complex applications can take 6-12 months. We provide detailed timelines during our initial consultation.'
      },
      {
        question: 'Do you develop for both iOS and Android?',
        answer: 'Yes! We develop for both platforms using React Native for cross-platform apps or native development for platform-specific features. We can also create separate native apps if needed.'
      },
      {
        question: 'What is the cost of mobile app development?',
        answer: 'Costs vary based on features and complexity. Basic apps start at $5,000, while enterprise-level applications can cost $25,000+. We provide detailed quotes after understanding your requirements.'
      }
    ]
  },
  'web-application-development': {
    id: 'web-application-development',
    title: 'Web Application Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies',
    longDescription: 'We create powerful, scalable web applications that provide seamless user experiences across all devices. Our full-stack development expertise ensures your web application is fast, secure, and built to grow with your business.',
    icon: 'Code',
    features: [
      'React & Next.js Development',
      'Vue.js Applications',
      'Full-Stack Solutions',
      'E-commerce Platforms',
      'Progressive Web Apps',
      'API Development',
      'Database Integration',
      'User Authentication',
      'Payment Processing',
      'SEO Optimization'
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Express.js', 'AWS', 'Vercel'],
    process: [
      {
        step: '01',
        title: 'Requirements Analysis',
        description: 'We gather detailed requirements and create a comprehensive project roadmap for your web application.',
        duration: '1-2 weeks'
      },
      {
        step: '02',
        title: 'UI/UX Design',
        description: 'Our designers create modern, responsive designs that provide excellent user experiences.',
        duration: '2-3 weeks'
      },
      {
        step: '03',
        title: 'Development & Integration',
        description: 'We build your web application with clean code and integrate all necessary third-party services.',
        duration: '4-8 weeks'
      },
      {
        step: '04',
        title: 'Testing & Deployment',
        description: 'Rigorous testing ensures quality, followed by deployment to production with monitoring setup.',
        duration: '1-2 weeks'
      }
    ],
    pricing: {
      basic: '$3,000',
      professional: '$8,000',
      enterprise: '$15,000+'
    },
    portfolio: portfolioData.filter(p => 
      p.platforms.includes('Web') || 
      p.technologies.some(tech => 
        ['React', 'Next.js', 'Vue.js', 'Node.js', 'Express.js'].includes(tech)
      )
    ),
    faq: [
      {
        question: 'What technologies do you use for web development?',
        answer: 'We use modern technologies like React, Next.js, Vue.js, Node.js, and various databases. We choose the best stack based on your specific requirements and scalability needs.'
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes! We offer comprehensive maintenance packages including updates, security patches, performance optimization, and feature additions.'
      },
      {
        question: 'Can you integrate with existing systems?',
        answer: 'Absolutely! We have extensive experience integrating web applications with existing systems, APIs, and third-party services.'
      }
    ]
  },
  'ai-machine-learning': {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    description: 'Intelligent systems powered by advanced AI algorithms',
    longDescription: 'We develop cutting-edge AI and machine learning solutions that transform your business processes. From custom AI models to intelligent automation, we help you leverage artificial intelligence to gain competitive advantages.',
    icon: 'Brain',
    features: [
      'Custom AI Solutions',
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Integration',
      'Chatbot Development',
      'Data Analysis',
      'Automation Workflows',
      'AI Consulting'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Computer Vision', 'NLP', 'Python', 'Scikit-learn', 'Pandas', 'NumPy', 'AWS AI'],
    process: [
      {
        step: '01',
        title: 'AI Strategy & Planning',
        description: 'We analyze your data and business processes to identify AI opportunities and create a strategic roadmap.',
        duration: '2-3 weeks'
      },
      {
        step: '02',
        title: 'Data Preparation & Analysis',
        description: 'We clean, prepare, and analyze your data to ensure it\'s ready for AI model training.',
        duration: '2-4 weeks'
      },
      {
        step: '03',
        title: 'Model Development & Training',
        description: 'We develop and train custom AI models tailored to your specific use case and requirements.',
        duration: '4-8 weeks'
      },
      {
        step: '04',
        title: 'Integration & Deployment',
        description: 'We integrate AI solutions into your existing systems and deploy them with monitoring and maintenance.',
        duration: '2-4 weeks'
      }
    ],
    pricing: {
      basic: '$8,000',
      professional: '$20,000',
      enterprise: '$50,000+'
    },
    portfolio: portfolioData.filter(p => 
      p.technologies.some(tech => 
        ['AI/ML', 'TensorFlow', 'PyTorch', 'OpenAI', 'Computer Vision', 'NLP', 'Python'].includes(tech)
      ) || p.category === 'AI & Technology'
    ),
    faq: [
      {
        question: 'What types of AI solutions can you build?',
        answer: 'We can build chatbots, recommendation systems, predictive models, computer vision applications, natural language processing tools, and custom AI solutions for specific business needs.'
      },
      {
        question: 'Do I need a lot of data for AI development?',
        answer: 'The amount of data needed depends on the complexity of your AI solution. We can work with various data sizes and help you collect additional data if needed.'
      },
      {
        question: 'How accurate will my AI model be?',
        answer: 'Accuracy depends on data quality and model complexity. We aim for high accuracy and provide detailed performance metrics during development.'
      }
    ]
  },
  'backend-development': {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Scalable server-side solutions and robust API architectures',
    longDescription: 'We build robust, scalable backend systems that power your applications. Our backend development services ensure your APIs are fast, secure, and capable of handling high traffic loads.',
    icon: 'Server',
    features: [
      'RESTful API Development',
      'GraphQL APIs',
      'Microservices Architecture',
      'Database Design',
      'Cloud Infrastructure',
      'DevOps & Deployment',
      'Authentication & Security',
      'Real-time Features',
      'Caching Solutions',
      'Performance Optimization'
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Redis', 'Express.js', 'FastAPI'],
    process: [
      {
        step: '01',
        title: 'Architecture Design',
        description: 'We design scalable backend architecture that meets your current and future requirements.',
        duration: '1-2 weeks'
      },
      {
        step: '02',
        title: 'Database Design',
        description: 'We create optimized database schemas and implement efficient data management strategies.',
        duration: '1-2 weeks'
      },
      {
        step: '03',
        title: 'API Development',
        description: 'We build robust APIs with comprehensive documentation and testing.',
        duration: '3-6 weeks'
      },
      {
        step: '04',
        title: 'Deployment & Monitoring',
        description: 'We deploy your backend to production with monitoring, logging, and maintenance setup.',
        duration: '1-2 weeks'
      }
    ],
    pricing: {
      basic: '$4,000',
      professional: '$10,000',
      enterprise: '$20,000+'
    },
    portfolio: portfolioData.filter(p => 
      p.technologies.some(tech => 
        ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express.js', 'FastAPI'].includes(tech)
      ) || p.category === 'Business Management'
    ),
    faq: [
      {
        question: 'What backend technologies do you use?',
        answer: 'We use Node.js, Python, PostgreSQL, MongoDB, and various cloud platforms. We choose the best technology stack based on your specific requirements.'
      },
      {
        question: 'Can you integrate with existing systems?',
        answer: 'Yes! We have extensive experience integrating backend systems with existing applications, databases, and third-party services.'
      },
      {
        question: 'Do you provide API documentation?',
        answer: 'Absolutely! We provide comprehensive API documentation and can also create interactive documentation portals.'
      }
    ]
  },
  'ui-ux-design': {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Modern, intuitive user interfaces and user experience design',
    longDescription: 'We create beautiful, user-centered designs that engage your audience and drive conversions. Our UI/UX design process focuses on understanding your users and creating experiences that delight them.',
    icon: 'Palette',
    features: [
      'User Interface Design',
      'User Experience Research',
      'Wireframing & Prototyping',
      'Design Systems',
      'Responsive Design',
      'Accessibility Compliance',
      'User Testing',
      'Brand Identity',
      'Interactive Prototypes',
      'Design Handoff'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Design Systems', 'Responsive Design', 'Framer', 'Principle', 'InVision', 'Zeplin'],
    process: [
      {
        step: '01',
        title: 'Research & Discovery',
        description: 'We research your users, competitors, and business goals to inform our design decisions.',
        duration: '1-2 weeks'
      },
      {
        step: '02',
        title: 'Wireframing & Prototyping',
        description: 'We create wireframes and interactive prototypes to visualize the user experience.',
        duration: '2-3 weeks'
      },
      {
        step: '03',
        title: 'Visual Design',
        description: 'We develop the visual design system and create high-fidelity mockups.',
        duration: '2-4 weeks'
      },
      {
        step: '04',
        title: 'Testing & Handoff',
        description: 'We conduct user testing and provide detailed design specifications for development.',
        duration: '1-2 weeks'
      }
    ],
    pricing: {
      basic: '$2,500',
      professional: '$6,000',
      enterprise: '$12,000+'
    },
    portfolio: portfolioData.filter(p => 
      p.technologies.some(tech => 
        ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Design Systems'].includes(tech)
      ) || p.category === 'Lifestyle' || p.category === 'Education'
    ),
    faq: [
      {
        question: 'What design tools do you use?',
        answer: 'We use Figma, Adobe XD, Sketch, and other industry-standard tools. We also create interactive prototypes using Framer and Principle.'
      },
      {
        question: 'Do you conduct user research?',
        answer: 'Yes! We conduct user interviews, surveys, and usability testing to ensure our designs meet user needs and business goals.'
      },
      {
        question: 'Can you create design systems?',
        answer: 'Absolutely! We create comprehensive design systems that ensure consistency across all your digital products.'
      }
    ]
  },
  'cloud-devops': {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and deployment solutions',
    longDescription: 'We help you build, deploy, and maintain scalable cloud infrastructure that grows with your business. Our DevOps expertise ensures reliable, secure, and efficient deployment pipelines.',
    icon: 'Cloud',
    features: [
      'Cloud Architecture',
      'CI/CD Pipelines',
      'Container Orchestration',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Security Implementation',
      'Auto-scaling',
      'Disaster Recovery',
      'Performance Optimization',
      'Cost Optimization'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Azure', 'GCP', 'Ansible', 'Prometheus'],
    process: [
      {
        step: '01',
        title: 'Infrastructure Planning',
        description: 'We design cloud architecture that meets your scalability, security, and performance requirements.',
        duration: '1-2 weeks'
      },
      {
        step: '02',
        title: 'Environment Setup',
        description: 'We set up development, staging, and production environments with proper security configurations.',
        duration: '1-2 weeks'
      },
      {
        step: '03',
        title: 'CI/CD Implementation',
        description: 'We implement automated deployment pipelines and monitoring systems.',
        duration: '2-4 weeks'
      },
      {
        step: '04',
        title: 'Monitoring & Maintenance',
        description: 'We set up comprehensive monitoring and provide ongoing maintenance and optimization.',
        duration: 'Ongoing'
      }
    ],
    pricing: {
      basic: '$3,500',
      professional: '$8,000',
      enterprise: '$15,000+'
    },
    portfolio: portfolioData.filter(p => 
      p.technologies.some(tech => 
        ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Azure', 'GCP'].includes(tech)
      ) || p.category === 'Service & Utility' || p.category === 'Transportation'
    ),
    faq: [
      {
        question: 'Which cloud platforms do you work with?',
        answer: 'We work with AWS, Azure, and Google Cloud Platform. We can help you choose the best platform for your specific needs.'
      },
      {
        question: 'Do you provide 24/7 monitoring?',
        answer: 'Yes! We can set up comprehensive monitoring and alerting systems, and provide 24/7 support for critical issues.'
      },
      {
        question: 'Can you help with cost optimization?',
        answer: 'Absolutely! We analyze your cloud usage and implement cost optimization strategies to reduce your infrastructure costs.'
      }
    ]
  }
};

// Generate static params for all services
export async function generateStaticParams() {
  return [
    { slug: 'mobile-app-development' },
    { slug: 'web-application-development' },
    { slug: 'ai-machine-learning' },
    { slug: 'backend-development' },
    { slug: 'ui-ux-design' },
    { slug: 'cloud-devops' }
  ];
}

// Generate metadata for each service
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData[params.slug as keyof typeof servicesData];
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - Professional Development Services | Twelve Monday`,
    description: service.longDescription,
    keywords: [
      service.title.toLowerCase(),
      'development services',
      'professional development',
      'custom software',
      'mobile app development',
      'web application development',
      'AI solutions',
      'backend development',
      'UI/UX design',
      'cloud development',
      'DevOps services',
      'software consulting',
      'Twelve Monday',
      ...service.technologies.map(tech => tech.toLowerCase()),
      ...service.features.map(feature => feature.toLowerCase())
    ],
    openGraph: {
      title: `${service.title} - Professional Development Services | Twelve Monday`,
      description: service.longDescription,
      type: 'website',
      url: `https://twelvemonday.com/services/${params.slug}`,
      images: [
        {
          url: '/assets/portfolio/portfolio-13.jpeg',
          width: 1200,
          height: 630,
          alt: `${service.title} - Twelve Monday Development Services`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} - Professional Development Services | Twelve Monday`,
      description: service.longDescription,
      images: ['/assets/portfolio/portfolio-13.jpeg']
    },
    alternates: {
      canonical: `https://twelvemonday.com/services/${params.slug}`
    }
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  // Schema markup for SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.longDescription,
    "provider": {
      "@type": "Organization",
      "name": "Twelve Monday",
      "url": "https://twelvemonday.com",
      "logo": "https://twelvemonday.com/logo.png"
    },
    "serviceType": service.title,
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": service.features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    },
    "offers": {
      "@type": "Offer",
      "priceRange": service.pricing.basic + " - " + service.pricing.enterprise,
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        
        <ServiceDetailHero service={service} />
        <ServiceDetailFeatures service={service} />
        <ServiceDetailProcess service={service} />
        <ServiceDetailPortfolio service={service} />
        {/* <ServiceDetailPricing service={service} /> */}
        <ServiceDetailFAQ service={service} />
        <ServiceDetailCTA service={service} />

        <Footer />
      </div>
    </>
  );
}
