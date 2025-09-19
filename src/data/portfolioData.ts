export interface PortfolioLink {
  url: string;
  icon: string;
  alt: string;
  platform: string;
}

export interface PortfolioItem {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  features: string[];
  links: PortfolioLink[];
  status: string;
  platforms: string[];
  screenshots?: string[];
  launchDate?: string;
  teamSize?: string;
  client?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    name: "Rez AI",
    slug: "rez-ai",
    image: "/assets/portfolio/portfolio-13.jpeg",
    description: "AI-powered application with modern user interface and intelligent features.",
    longDescription: "Rez AI is a cutting-edge artificial intelligence application that leverages advanced machine learning algorithms to provide intelligent solutions. The app features a modern, intuitive interface designed specifically for iOS, offering users seamless AI-powered experiences across various use cases.",
    category: "AI & Technology",
    technologies: ["React Native", "iOS", "AI/ML", "Swift", "Core ML", "TensorFlow"],
    features: [
      "AI-powered intelligent responses",
      "Modern iOS-optimized interface",
      "Real-time AI processing",
      "User-friendly interaction design",
      "Advanced machine learning integration",
      "Seamless performance optimization"
    ],
    links: [
      {
        url: "https://apps.apple.com/us/app/rez-ai/id6743659597",
        icon: "/assets/icons/appstore-icon.png",
        alt: "App Store",
        platform: "iOS"
      }
    ],
    status: "Live",
    platforms: ["iOS"],
    launchDate: "2024",
    teamSize: "2-3 developers",
    challenges: [
      "Implementing complex AI algorithms",
      "Optimizing performance for mobile devices",
      "Creating intuitive user interface"
    ],
    solutions: [
      "Used Core ML for efficient AI processing",
      "Implemented lazy loading for better performance",
      "Designed user-centric interface with clear feedback"
    ],
    results: [
      "Successfully launched on App Store",
      "Positive user feedback on AI accuracy",
      "Smooth performance across iOS devices"
    ]
  },
  {
    id: 2,
    name: "QRInsight",
    slug: "qrinsight",
    image: "/assets/portfolio/portfolio-11.jpg",
    description: "Advanced QR code analytics platform with real-time insights and user engagement tracking.",
    longDescription: "QRInsight is a comprehensive analytics platform that helps businesses track, analyze, and optimize their QR code campaigns. The platform provides real-time insights into user engagement, scan patterns, and conversion rates. Built with modern web technologies, it offers businesses powerful tools to understand their QR code performance and make data-driven decisions.",
    category: "Web Application",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Real-time Analytics", "Chart.js"],
    features: [
      "Real-time QR code scanning analytics",
      "User engagement tracking",
      "Campaign performance metrics",
      "Interactive dashboard with charts",
      "Export capabilities for reports",
      "Multi-campaign management"
    ],
    links: [
      {
        url: "https://www.qrinsight.co/",
        icon: "/assets/icons/web-icon.png",
        alt: "Website",
        platform: "Web"
      }
    ],
    status: "Live",
    platforms: ["Web"],
    launchDate: "2024",
    teamSize: "3-4 developers",
    client: "Business Analytics Company",
    challenges: [
      "Handling real-time data processing",
      "Creating intuitive analytics dashboard",
      "Optimizing for large-scale data"
    ],
    solutions: [
      "Implemented WebSocket for real-time updates",
      "Used Chart.js for interactive visualizations",
      "Optimized database queries and caching"
    ],
    results: [
      "Successfully launched web platform",
      "Real-time analytics working smoothly",
      "Positive client feedback on insights accuracy"
    ]
  },
  {
    id: 3,
    name: "Lift Learn",
    slug: "lift-learn",
    image: "/assets/portfolio/portfolio-8.jpeg",
    description: "Learning and educational platform with interactive modules and engaging content.",
    longDescription: "Lift Learn is an innovative educational platform designed to make learning engaging and effective. The app provides interactive learning modules, progress tracking, and personalized content delivery. Built specifically for iOS, it offers students and professionals a comprehensive learning experience with modern UI/UX design.",
    category: "Education",
    technologies: ["React Native", "iOS", "Swift", "Core Data", "AVFoundation"],
    features: [
      "Interactive learning modules",
      "Progress tracking and analytics",
      "Personalized content delivery",
      "Offline learning capabilities",
      "User-friendly interface",
      "Achievement system"
    ],
    links: [
      {
        url: "https://apps.apple.com/us/app/lift-learn/id6470154996",
        icon: "/assets/icons/appstore-icon.png",
        alt: "App Store",
        platform: "iOS"
      }
    ],
    status: "Live",
    platforms: ["iOS"],
    launchDate: "2024",
    teamSize: "2-3 developers",
    challenges: [
      "Creating engaging learning content",
      "Implementing offline functionality",
      "Designing intuitive progress tracking"
    ],
    solutions: [
      "Used Core Data for offline storage",
      "Implemented gamification elements",
      "Created modular content structure"
    ],
    results: [
      "Successfully launched on App Store",
      "Positive user engagement metrics",
      "High ratings for educational content"
    ]
  },
  {
    id: 4,
    name: "Rec-cess",
    slug: "rec-cess",
    image: "/assets/portfolio/portfolio-12.jpg",
    description: "Recreation and leisure application with engaging activities and user interaction features.",
    longDescription: "Rec-cess is a comprehensive recreation and leisure application designed to help users discover and engage in various recreational activities. The app features an intuitive interface, activity recommendations, and social features that encourage users to explore new hobbies and connect with like-minded individuals.",
    category: "Lifestyle",
    technologies: ["React Native", "iOS", "Swift", "MapKit", "Social Integration"],
    features: [
      "Activity discovery and recommendations",
      "Social features and user connections",
      "Location-based activity suggestions",
      "User profiles and preferences",
      "Event creation and management",
      "Interactive user interface"
    ],
    links: [
      {
        url: "https://apps.apple.com/us/app/rec-cess/id6517371290",
        icon: "/assets/icons/appstore-icon.png",
        alt: "App Store",
        platform: "iOS"
      }
    ],
    status: "Live",
    platforms: ["iOS"],
    launchDate: "2024",
    teamSize: "2-3 developers",
    challenges: [
      "Creating engaging recreational content",
      "Implementing social features",
      "Designing intuitive activity discovery"
    ],
    solutions: [
      "Used MapKit for location services",
      "Implemented social integration APIs",
      "Created recommendation algorithms"
    ],
    results: [
      "Successfully launched on App Store",
      "Active user community",
      "High user engagement rates"
    ]
  },
  {
    id: 5,
    name: "My Guilty Dogs",
    slug: "my-guilty-dogs",
    image: "/assets/portfolio/portfolio-7.jpeg",
    description: "Pet management and care application with comprehensive pet tracking and care features.",
    longDescription: "My Guilty Dogs is a comprehensive pet management application designed to help pet owners track their pets' health, activities, and care routines. The app provides features for scheduling vet appointments, tracking feeding times, monitoring exercise, and maintaining health records. Available on both Android and iOS platforms.",
    category: "Pet Care",
    technologies: ["React Native", "Android", "iOS", "Firebase", "Push Notifications"],
    features: [
      "Pet health tracking and records",
      "Vet appointment scheduling",
      "Feeding time reminders",
      "Exercise and activity monitoring",
      "Photo gallery for pets",
      "Health reminder notifications"
    ],
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.myguiltydog",
        icon: "/assets/icons/playstore-icon.png",
        alt: "Play Store",
        platform: "Android"
      },
      {
        url: "https://apps.apple.com/dk/app/my-guilty-dogs/id6464316408",
        icon: "/assets/icons/appstore-icon.png",
        alt: "App Store",
        platform: "iOS"
      }
    ],
    status: "Live",
    platforms: ["Android", "iOS"],
    launchDate: "2024",
    teamSize: "3-4 developers",
    challenges: [
      "Cross-platform compatibility",
      "Implementing notification system",
      "Creating user-friendly pet management"
    ],
    solutions: [
      "Used React Native for cross-platform development",
      "Implemented Firebase for notifications",
      "Created intuitive pet profile management"
    ],
    results: [
      "Successfully launched on both platforms",
      "Positive user feedback on pet care features",
      "Active user base with regular engagement"
    ]
  },
  {
    id: 6,
    name: "Sarfk ki Dunya",
    slug: "sarfk-ki-dunya",
    image: "/assets/portfolio/portfolio-1.jpeg",
    description: "Educational app focused on Arabic grammar (Sarf) learning with interactive lessons.",
    longDescription: "Sarfk ki Dunya is an educational application dedicated to teaching Arabic grammar (Sarf) in an interactive and engaging way. The app provides comprehensive lessons on Arabic morphology, word formation, and grammatical structures. Available on both Android and iOS, it serves as a valuable resource for Arabic language learners.",
    category: "Education",
    technologies: ["React Native", "Android", "iOS", "Arabic Text Processing", "Offline Storage"],
    features: [
      "Interactive Arabic grammar lessons",
      "Comprehensive Sarf (morphology) content",
      "Progress tracking and assessments",
      "Offline learning capabilities",
      "Audio pronunciation guides",
      "Cross-platform availability"
    ],
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.sarfkidunya",
        icon: "/assets/icons/playstore-icon.png",
        alt: "Play Store",
        platform: "Android"
      },
      {
        url: "https://apps.apple.com/us/app/sarfk-ki-dunya/id6449247765",
        icon: "/assets/icons/appstore-icon.png",
        alt: "App Store",
        platform: "iOS"
      }
    ],
    status: "Live",
    platforms: ["Android", "iOS"],
    launchDate: "2023",
    teamSize: "2-3 developers",
    challenges: [
      "Handling Arabic text and RTL layout",
      "Creating comprehensive grammar content",
      "Implementing offline functionality"
    ],
    solutions: [
      "Used specialized Arabic text processing",
      "Implemented comprehensive content management",
      "Created offline-first architecture"
    ],
    results: [
      "Successfully launched on both platforms",
      "Positive feedback from Arabic learners",
      "High user retention rates"
    ]
  },
  {
    id: 7,
    name: "Nahw ki Dunya",
    slug: "nahw-ki-dunya",
    image: "/assets/portfolio/portfolio-2.jpeg",
    description: "Arabic syntax (Nahw) learning application with comprehensive grammar lessons.",
    longDescription: "Nahw ki Dunya is an educational application focused on teaching Arabic syntax (Nahw) to learners of all levels. The app provides detailed lessons on Arabic sentence structure, grammatical rules, and syntax patterns. With interactive exercises and comprehensive content, it serves as an essential tool for Arabic language education.",
    category: "Education",
    technologies: ["React Native", "Android", "iOS", "Arabic Linguistics", "Interactive Learning"],
    features: [
      "Comprehensive Arabic syntax lessons",
      "Interactive learning modules",
      "Grammar exercises and quizzes",
      "Progress tracking system",
      "Audio pronunciation support",
      "Cross-platform accessibility"
    ],
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.nahwkidunya",
        icon: "/assets/icons/playstore-icon.png",
        alt: "Play Store",
        platform: "Android"
      },
      {
        url: "https://apps.apple.com/us/app/nahw-ki-dunya-learn-arabic/id1575739040",
        icon: "/assets/icons/appstore-icon.png",
        alt: "App Store",
        platform: "iOS"
      }
    ],
    status: "Live",
    platforms: ["Android", "iOS"],
    launchDate: "2023",
    teamSize: "2-3 developers",
    challenges: [
      "Complex Arabic grammar implementation",
      "Creating engaging educational content",
      "Cross-platform Arabic text handling"
    ],
    solutions: [
      "Developed specialized Arabic grammar engine",
      "Created interactive content delivery system",
      "Implemented robust cross-platform text handling"
    ],
    results: [
      "Successfully launched on both platforms",
      "High user satisfaction ratings",
      "Strong educational impact"
    ]
  },
  {
    id: 8,
    name: "Gufhtugu Urdu Books Library",
    slug: "gufhtugu-urdu-books",
    image: "/assets/portfolio/portfolio-3.jpeg",
    description: "Digital library for Urdu books and literature with extensive collection and reading features.",
    longDescription: "Gufhtugu Urdu Books Library is a comprehensive digital platform that provides access to a vast collection of Urdu literature, poetry, and educational content. The app offers features for reading, bookmarking, and organizing Urdu books, making it a valuable resource for Urdu language enthusiasts and learners.",
    category: "Education",
    technologies: ["React Native", "Android", "iOS", "Urdu Text Rendering", "Digital Library"],
    features: [
      "Extensive collection of Urdu books",
      "Digital reading experience",
      "Bookmarking and note-taking",
      "Search and categorization",
      "Offline reading capabilities",
      "Cross-platform accessibility"
    ],
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.gufhtugupublication",
        icon: "/assets/icons/playstore-icon.png",
        alt: "Play Store",
        platform: "Android"
      },
      {
        url: "https://apps.apple.com/us/app/gufhtugu-urdu-books-library/id1614142319",
        icon: "/assets/icons/appstore-icon.png",
        alt: "App Store",
        platform: "iOS"
      }
    ],
    status: "Live",
    platforms: ["Android", "iOS"],
    launchDate: "2023",
    teamSize: "3-4 developers",
    challenges: [
      "Urdu text rendering and display",
      "Managing large digital library",
      "Creating smooth reading experience"
    ],
    solutions: [
      "Implemented specialized Urdu text rendering",
      "Created efficient content management system",
      "Optimized reading interface for mobile"
    ],
    results: [
      "Successfully launched on both platforms",
      "Large collection of Urdu literature",
      "Positive feedback from Urdu readers"
    ]
  },
  {
    id: 9,
    name: "Qari User",
    slug: "qari-user",
    image: "/assets/portfolio/portfolio-4.jpeg",
    description: "App for Quran recitation and learning with proper pronunciation and audio features.",
    longDescription: "Qari User is a specialized application designed to help users learn proper Quran recitation with correct pronunciation and Tajweed rules. The app provides audio guidance, recitation practice tools, and comprehensive learning modules for Quranic studies.",
    category: "Religious Education",
    technologies: ["React Native", "Android", "Audio Processing", "Tajweed Rules"],
    features: [
      "Quran recitation tools",
      "Audio pronunciation guides",
      "Tajweed rules learning",
      "Recitation practice modules",
      "Progress tracking",
      "User-friendly interface"
    ],
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.qariuser",
        icon: "/assets/icons/playstore-icon.png",
        alt: "Play Store",
        platform: "Android"
      }
    ],
    status: "Live",
    platforms: ["Android"],
    launchDate: "2023",
    teamSize: "2-3 developers",
    challenges: [
      "Implementing proper Arabic pronunciation",
      "Creating audio processing features",
      "Designing Tajweed learning modules"
    ],
    solutions: [
      "Used advanced audio processing libraries",
      "Implemented Tajweed rule engine",
      "Created intuitive learning interface"
    ],
    results: [
      "Successfully launched on Google Play",
      "Positive feedback on pronunciation accuracy",
      "Active user base for Quran learning"
    ]
  },
  {
    id: 10,
    name: "Zeeshan Usmani",
    slug: "zeeshan-usmani",
    image: "/assets/portfolio/portfolio-5.jpeg",
    description: "Educational app by Zeeshan Usmani with comprehensive learning content and features.",
    longDescription: "Zeeshan Usmani is an educational application that provides comprehensive learning content and resources. The app features interactive lessons, educational materials, and user-friendly interface designed to enhance the learning experience for students and professionals.",
    category: "Education",
    technologies: ["React Native", "Android", "iOS", "Educational Content"],
    features: [
      "Educational content and lessons",
      "Interactive learning modules",
      "Progress tracking",
      "Cross-platform availability",
      "User-friendly interface",
      "Comprehensive resource library"
    ],
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.zeeshanusmani",
        icon: "/assets/icons/playstore-icon.png",
        alt: "Play Store",
        platform: "Android"
      },
      {
        url: "https://apps.apple.com/sn/app/zeeshan-usmani/id1642532228",
        icon: "/assets/icons/appstore-icon.png",
        alt: "App Store",
        platform: "iOS"
      }
    ],
    status: "Live",
    platforms: ["Android", "iOS"],
    launchDate: "2023",
    teamSize: "2-3 developers",
    challenges: [
      "Creating comprehensive educational content",
      "Implementing cross-platform features",
      "Designing engaging learning interface"
    ],
    solutions: [
      "Developed modular content system",
      "Used React Native for cross-platform development",
      "Created intuitive user experience"
    ],
    results: [
      "Successfully launched on both platforms",
      "Positive educational impact",
      "High user engagement rates"
    ]
  },
  {
    id: 11,
    name: "Pip Pip Yalah - Covoiturage",
    slug: "pip-pip-yalah",
    image: "/assets/portfolio/portfolio-6.jpeg",
    description: "Carpooling app connecting drivers and passengers in Morocco for shared rides.",
    longDescription: "Pip Pip Yalah is a comprehensive carpooling application that connects drivers and passengers in Morocco, facilitating shared rides to save time and money. The app features profile verification, user reviews, and a user-friendly interface for both drivers and passengers to create a safe and reliable transportation solution.",
    category: "Transportation",
    technologies: ["React Native", "Android", "iOS", "Maps Integration", "Real-time Tracking"],
    features: [
      "Easy ride posting and booking",
      "Profile verification and user reviews",
      "Real-time location tracking",
      "Cost-effective transportation",
      "User-friendly interface",
      "Safety features and reporting"
    ],
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.pippipyalah",
        icon: "/assets/icons/playstore-icon.png",
        alt: "Play Store",
        platform: "Android"
      },
      {
        url: "https://apps.apple.com/us/app/pip-pip-yalah-covoiturage/id1459525543",
        icon: "/assets/icons/appstore-icon.png",
        alt: "App Store",
        platform: "iOS"
      }
    ],
    status: "Live",
    platforms: ["Android", "iOS"],
    launchDate: "2023",
    teamSize: "4-5 developers",
    challenges: [
      "Implementing real-time tracking",
      "Creating secure user verification",
      "Building reliable matching algorithm"
    ],
    solutions: [
      "Used real-time location services",
      "Implemented comprehensive user verification",
      "Created efficient ride matching system"
    ],
    results: [
      "Successfully launched on both platforms",
      "Active user community in Morocco",
      "Positive feedback on safety features"
    ]
  },
  {
    id: 12,
    name: "CountAsset",
    slug: "countasset",
    image: "/assets/portfolio/portfolio-9.jpeg",
    description: "Online platform for asset management with comprehensive tracking and reporting features.",
    longDescription: "CountAsset is a comprehensive web-based platform designed for asset management, allowing businesses and individuals to track, manage, and analyze their assets efficiently. The platform provides detailed reporting, inventory management, and user-friendly interface for comprehensive asset oversight.",
    category: "Business Management",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Chart.js", "Reporting"],
    features: [
      "Comprehensive asset tracking",
      "Inventory management system",
      "Detailed reporting and analytics",
      "User-friendly web interface",
      "Real-time updates",
      "Export capabilities"
    ],
    links: [
      {
        url: "http://countasset.com/",
        icon: "/assets/icons/web-icon.png",
        alt: "Website",
        platform: "Web"
      }
    ],
    status: "Live",
    platforms: ["Web"],
    launchDate: "2023",
    teamSize: "3-4 developers",
    client: "Asset Management Company",
    challenges: [
      "Creating comprehensive asset tracking",
      "Implementing real-time reporting",
      "Designing intuitive management interface"
    ],
    solutions: [
      "Developed robust asset management system",
      "Implemented real-time data processing",
      "Created user-friendly dashboard"
    ],
    results: [
      "Successfully launched web platform",
      "Positive client feedback on functionality",
      "Efficient asset management capabilities"
    ]
  },
  {
    id: 13,
    name: "Seerat ki Dunya",
    slug: "seerat-ki-dunya",
    image: "/assets/portfolio/portfolio-15.jpeg",
    description: "Educational app about the life and teachings of Prophet Muhammad (PBUH) with interactive content.",
    longDescription: "Seerat ki Dunya is a comprehensive educational application designed to help users learn about the life, teachings, and noble character of Prophet Muhammad (PBUH). The app features interactive Seerah courses, maps of major events, Shama'il (traits and habits), daily Sunnah tasks, and Durood reminders, making it a valuable resource for Islamic education.",
    category: "Religious Education",
    technologies: ["React Native", "Android", "Islamic Content", "Interactive Learning"],
    features: [
      "Interactive Seerah courses with quizzes",
      "Seerah maps highlighting major events",
      "Shama'il (traits and habits of the Prophet)",
      "Daily Sunnah tasks",
      "Daily Durood reminders",
      "Achievements and badges system"
    ],
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.seeratemustufa&hl=en",
        icon: "/assets/icons/playstore-icon.png",
        alt: "Play Store",
        platform: "Android"
      }
    ],
    status: "Live",
    platforms: ["Android"],
    launchDate: "2023",
    teamSize: "2-3 developers",
    challenges: [
      "Creating comprehensive Islamic content",
      "Implementing interactive learning features",
      "Designing engaging educational interface"
    ],
    solutions: [
      "Developed comprehensive content management system",
      "Implemented gamification elements",
      "Created user-friendly Islamic learning interface"
    ],
    results: [
      "Successfully launched on Google Play",
      "Positive feedback from Islamic community",
      "High user engagement with educational content"
    ]
  },
  {
    id: 14,
    name: "Kaacib",
    slug: "kaacib",
    image: "/assets/portfolio/portfolio-14.jpeg",
    description: "On-demand service app providing various assistance including mechanics, plumbing, and more.",
    longDescription: "Kaacib is a comprehensive on-demand service application that provides various types of assistance at users' locations. The app connects users with service providers for car mechanics, generator mechanics, bike mechanics, plumbing, electrical work, carpentry, car key making, towing services, battery charging, vehicle inspection, and scanning services.",
    category: "Service & Utility",
    technologies: ["React Native", "Android", "iOS", "Location Services", "Real-time Matching"],
    features: [
      "Wide range of on-demand services",
      "Real-time service provider tracking",
      "User-friendly service request interface",
      "Professional service provider network",
      "Location-based service matching",
      "Cross-platform availability"
    ],
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.hukumjanab&hl=en",
        icon: "/assets/icons/playstore-icon.png",
        alt: "Play Store",
        platform: "Android"
      },
      {
        url: "https://apps.apple.com/pk/app/kaacib/id6747888720",
        icon: "/assets/icons/appstore-icon.png",
        alt: "App Store",
        platform: "iOS"
      }
    ],
    status: "Live",
    platforms: ["Android", "iOS"],
    launchDate: "2024",
    teamSize: "4-5 developers",
    challenges: [
      "Managing diverse service categories",
      "Implementing real-time location tracking",
      "Creating reliable service provider network"
    ],
    solutions: [
      "Developed comprehensive service categorization",
      "Implemented real-time location services",
      "Created robust provider verification system"
    ],
    results: [
      "Successfully launched on both platforms",
      "Active service provider network",
      "Positive user feedback on service quality"
    ]
  }
];

export default portfolioData;
