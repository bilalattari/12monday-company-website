"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Github, 
  ArrowUpRight,
  MoveRight,
  Star,
  ChevronRight,
  Layout,
  Globe,
  Smartphone,
  Play
} from 'lucide-react';

const TopBar = () => (
  <div className="bg-[#04644A] text-white py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
      <div className="flex items-center gap-2">
        <Phone size={14} className="text-white" />
        <span>+92 313 2933803</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail size={14} className="text-white" />
        <span>info@12monday.net</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin size={14} className="text-white" />
        <span>Karachi, Pakistan</span>
      </div>
    </div>
    <div className="flex items-center gap-4 mt-2 md:mt-0">
      <Link href="#" className="hover:opacity-80 transition-opacity"><Linkedin size={18} /></Link>
      <Link href="#" className="hover:opacity-80 transition-opacity"><Instagram size={18} /></Link>
      <Link href="#" className="hover:opacity-80 transition-opacity"><Facebook size={18} /></Link>
      <Link href="#" className="hover:opacity-80 transition-opacity"><Github size={18} /></Link>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-4 md:px-12 bg-white sticky top-0 z-50 shadow-sm">
    <div className="flex items-center">
      <Image src="/logo.png" alt="12 Monday Technologies" width={150} height={40} className="object-contain" />
    </div>
    <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
      <Link href="/about" className="hover:text-[#04644A] transition-colors">About</Link>
      <Link href="/services" className="hover:text-[#04644A] transition-colors">Services</Link>
      <Link href="/portfolio" className="hover:text-[#04644A] transition-colors">Portfolio</Link>
      <Link href="/case-study" className="hover:text-[#04644A] transition-colors">Case Study</Link>
    </div>
    <Link 
      href="/contact" 
      className="bg-[#04644A] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#18C77E] transition-all group shadow-lg"
    >
      Get Started 
      <div className="bg-white text-[#04644A] rounded-full p-1 group-hover:bg-[#04644A] group-hover:text-white transition-colors">
        <ArrowUpRight size={16} />
      </div>
    </Link>
  </nav>
);

const Hero = () => (
  <section className="relative px-4 md:px-12 py-12 md:py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6"
      >
        <div className="flex items-center gap-2 text-[#18C77E] font-bold tracking-wide uppercase text-sm">
          <MoveRight size={20} />
          Your AI-First Development Partner
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#000]">
          Turn Your Idea Into a <br /> Live Product in <span className="text-[#04644A]">Just 15 Days</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl">
          We turn early-stage ideas into real products using a rapid, structured workflow. 
          Get a polished MVP that's ready to test, pitch, or scale — all within just 15 days.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <Link 
            href="/contact" 
            className="bg-[#04644A] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#18C77E] transition-all group shadow-xl"
          >
            Start Your MVP 
            <div className="bg-white text-[#04644A] rounded-full p-1 group-hover:bg-[#04644A] group-hover:text-white transition-colors">
              <ArrowUpRight size={18} />
            </div>
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-[#04644A] text-[#04644A] px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#04644A] hover:text-white transition-all group"
          >
            Get a Free Consultation
            <div className="bg-[#04644A] text-white rounded-full p-1 group-hover:bg-white group-hover:text-[#04644A] transition-colors">
              <ArrowUpRight size={18} />
            </div>
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative grid grid-cols-2 gap-4 h-[500px] md:h-[600px]"
      >
        <div className="flex flex-col gap-4 mt-12">
          <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="/hero3.png" alt="Product Demo" fill className="object-cover" />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative h-[200px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="/hero1.png" alt="App Preview" fill className="object-cover" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-4">
          <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative h-[250px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="/hero4.png" alt="Mobile UI" fill className="object-cover" />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="/hero2.png" alt="Dashboard" fill className="object-cover" />
          </motion.div>
        </div>
        
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10">
          <Image src="/Union.png" alt="Background shape" fill className="object-contain" />
        </div>
      </motion.div>
    </div>
  </section>
);

const Marquee = () => (
  <div className="bg-[#04644A] py-8 overflow-hidden whitespace-nowrap border-y border-white/10">
    <div className="animate-marquee inline-block">
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-white text-2xl md:text-3xl font-bold mx-8 flex items-center gap-4">
            <Star className="text-[#18C77E] fill-[#18C77E]" size={24} />
            Web & App Development
          </span>
          <span className="text-white text-2xl md:text-3xl font-bold mx-8 flex items-center gap-4">
            <Star className="text-[#18C77E] fill-[#18C77E]" size={24} />
            Brand Development
          </span>
          <span className="text-white text-2xl md:text-3xl font-bold mx-8 flex items-center gap-4">
            <Star className="text-[#18C77E] fill-[#18C77E]" size={24} />
            Data Science
          </span>
          <span className="text-white text-2xl md:text-3xl font-bold mx-8 flex items-center gap-4">
            <Star className="text-[#18C77E] fill-[#18C77E]" size={24} />
            AI Solutions
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const Stats = () => {
  const statItems = [
    { number: "102+", label: "Completed Projects" },
    { number: "150+", label: "Satisfied Happy Customers" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Maintenance / Support" }
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {statItems.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <h2 className="text-5xl font-bold text-[#04644A] whitespace-nowrap">{stat.number}</h2>
              <div className="flex flex-col">
                <MoveRight size={24} className="text-[#18C77E] mb-1" />
                <p className="text-gray-600 font-medium leading-tight">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why businesses trust us to build their products
          </h2>
        </div>
        <div>
          <p className="text-gray-600 text-lg leading-relaxed">
            We combine speed, clarity and modern engineering to deliver MVPs that are ready to scale. 
            Our iterative approach ensures you get the highest quality product in record time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-[#F8F9FA] p-8 rounded-3xl relative overflow-hidden group"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-[#04644A]">We Start With Understanding</h3>
            <p className="text-gray-600">
              Every product begins by deeply understanding the idea, the user, and the business goal. 
              We listen first, then shape solutions that align with real needs.
            </p>
          </div>
          <div className="mt-8 relative h-[300px] rounded-2xl overflow-hidden">
            <Image src="/whychooseus.png" alt="Process" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-[#04644A] p-8 rounded-3xl text-white flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Progress Over Perfection</h3>
            <p className="opacity-80">
              We believe in momentum. By breaking ideas into focused sprints, we deliver meaningful progress 
              early and improve continuously.
            </p>
          </div>
          <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#18C77E] flex items-center justify-center">
                <Play fill="white" size={20} />
              </div>
              <span className="font-bold">Watch Our Process</span>
            </div>
            <p className="text-sm opacity-70">See how we take an idea from concept to a live product in 15 days.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServicesDetail = () => {
  const items = [
    {
      title: "UI/UX Designing",
      desc: "We craft user-centric interfaces and experiences that are visually intuitive, intuitive to use, and aligned with user behavior.",
      icon: <Layout className="text-[#04644A]" size={32} />
    },
    {
      title: "Web Development",
      desc: "We create fast, responsive, and secure web experiences tailored to your product vision. Optimized for performance and long-term growth.",
      icon: <Globe className="text-[#04644A]" size={32} />
    },
    {
      title: "Mobile App Development",
      desc: "We develop intuitive mobile applications that feel smooth, engaging and reliable across platforms. Designed to keep users coming back.",
      icon: <Smartphone className="text-[#04644A]" size={32} />
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Turning Ideas into Intelligent,<br />Scalable Digital Products
          </h2>
          <div className="flex gap-4 mt-8">
            <Link href="/services" className="bg-[#04644A] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#18C77E] transition-all">
              View All Services <ChevronRight size={18} />
            </Link>
            <Link href="/contact" className="border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-all">
              Get a Free Consultation
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F0FDF4] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              <Link href="#" className="flex items-center gap-2 text-[#04644A] font-bold mt-4 group">
                Learn More <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioGrid = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Real-world examples</h2>
        <p className="text-gray-600">of how we have helped companies achieve their marketing objectives.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <motion.div 
            key={item}
            whileHover={{ scale: 1.05 }}
            className={`relative rounded-3xl overflow-hidden shadow-lg ${item % 3 === 0 ? 'md:row-span-2 h-[400px]' : 'h-[250px]'}`}
          >
            <Image 
              src={`/assets/portfolio/portfolio-${item}.jpeg`} 
              alt={`Project ${item}`} 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link href="/portfolio" className="bg-white text-black px-6 py-2 rounded-full font-bold">View Project</Link>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/portfolio" className="text-[#04644A] font-bold text-lg underline underline-offset-8">
          See all projects
        </Link>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-[#04644A] text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/3">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden border-4 border-white/20">
          <Image src="/bilal_raza.webp" alt="Client" fill className="object-cover" />
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <div className="flex gap-2 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} fill="#18C77E" color="#18C77E" size={20} />)}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-8 italic">
          "Transformative impact with NeonAI's Automation Suite. NexalAI revolutionized our operations - in just weeks, we slashed manual workload by 60% and gained clarity into performance metrics we never had before."
        </h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <Image src="/samar-raza.jpg" alt="Samar Raza" width={48} height={48} className="object-cover" />
          </div>
          <div>
            <p className="font-bold text-xl">Samar Raza</p>
            <p className="opacity-70">Salesforce Freelancer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto bg-[#F8F9FA] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Let's turn your idea into a product
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          From early concepts to scalable digital solutions, we help you move forward with clarity, speed, and purpose.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="bg-[#04644A] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#18C77E] transition-all">
            Let's Build Together <ArrowUpRight size={18} />
          </Link>
          <Link href="/contact" className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-all">
            Get a Free Consultation
          </Link>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <Image src="/intrested.png" alt="Build" fill className="object-contain translate-x-10" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-20 px-4 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-1">
          <Image src="/logo.png" alt="12 Monday" width={150} height={40} className="mb-6" />
          <p className="text-gray-500 text-sm leading-relaxed">
            We turn early-stage ideas into real products using a rapid, structured workflow. 
            Get a polished MVP that's ready to test, pitch, or scale — all within just 15 days.
          </p>
          <div className="flex gap-4 mt-8">
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#04644A] hover:text-white transition-all"><Linkedin size={18} /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#04644A] hover:text-white transition-all"><Instagram size={18} /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#04644A] hover:text-white transition-all"><Facebook size={18} /></Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-gray-500">
            <li><Link href="/about" className="hover:text-[#04644A]">About us</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#04644A]">Portfolio Showcase</Link></li>
            <li><Link href="/services" className="hover:text-[#04644A]">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#04644A]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-6">Services</h4>
          <ul className="flex flex-col gap-4 text-gray-500">
            <li><Link href="#" className="hover:text-[#04644A]">Web Development</Link></li>
            <li><Link href="#" className="hover:text-[#04644A]">Mobile App Development</Link></li>
            <li><Link href="#" className="hover:text-[#04644A]">UI/UX Design</Link></li>
            <li><Link href="#" className="hover:text-[#04644A]">AI Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-gray-500">
            <li className="flex items-center gap-2"><Phone size={16} /> +92 313 2933803</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@12monday.net</li>
            <li className="flex items-center gap-2 text-sm"><MapPin size={16} /> Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
        <p>Copyright © {new Date().getFullYear()} 12 Monday Technologies. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen font-serotiva overflow-x-hidden">
      <TopBar />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <TrustSection />
      <ServicesDetail />
      <PortfolioGrid />
      <Testimonials />
      <FinalCTA />
      <Footer />
      
      {/* Decorative text at the bottom like in video */}
      <div className="bg-[#04644A] py-12 flex justify-center items-center overflow-hidden">
        <h2 className="text-8xl md:text-[15rem] font-bold text-white opacity-5 whitespace-nowrap tracking-tighter">
          LEVEL UP YOUR BUSINESS
        </h2>
      </div>
    </main>
  );
}
