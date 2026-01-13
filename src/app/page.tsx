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
      <div className="flex items-center gap-2 text-xs md:text-sm">
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
      <Image src="/logo.png" alt="12 Monday Technologies" width={180} height={50} className="object-contain" />
    </div>
    <div className="hidden md:flex items-center gap-10 text-gray-700 font-bold text-lg">
      <Link href="/about" className="hover:text-[#04644A] transition-colors">About</Link>
      <Link href="/services" className="hover:text-[#04644A] transition-colors">Services</Link>
      <Link href="/portfolio" className="hover:text-[#04644A] transition-colors">Portfolio</Link>
      <Link href="/case-study" className="hover:text-[#04644A] transition-colors">Case Study</Link>
    </div>
    <Link
      href="/contact"
      className="bg-[#04644A] text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-[#18C77E] transition-all group shadow-xl font-bold"
    >
      Get Started
      <div className="bg-white text-[#04644A] rounded-full p-1 group-hover:bg-[#04644A] group-hover:text-white transition-colors">
        <ArrowUpRight size={18} />
      </div>
    </Link>
  </nav>
);

const Hero = () => (
  <section className="relative px-4 md:px-12 py-12 md:py-24 overflow-hidden">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-8"
      >
        <div className="flex items-center gap-3 text-gray-800 font-bold tracking-wide text-lg">
          <Image src="/GroupTriangle.png" alt="icon" width={28} height={28} className="object-contain" />
          Your AI-First Development Partner
        </div>
        <h1 className="text-6xl md:text-[5.5rem] font-extrabold leading-[1.05] text-[#111]">
          Turn Your Idea Into a <br /> Live Product in <span className="text-[#000] block mt-4">Just 15 Days</span>
        </h1>
        <p className="text-gray-500 text-xl md:text-2xl max-w-xl font-medium leading-relaxed">
          We turn early-stage ideas into real products using a rapid, structured workflow.
          Get a polished MVP that's ready to test, pitch, or scale — all within just 15 days.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          <Link
            href="/contact"
            className="bg-[#04644A] text-white px-10 py-5 rounded-full flex items-center gap-4 hover:bg-[#18C77E] transition-all group shadow-2xl font-black text-lg"
          >
            Start Your MVP
            <div className="bg-white text-[#04644A] rounded-full p-1.5 group-hover:bg-[#04644A] group-hover:text-white transition-colors">
              <ArrowUpRight size={22} />
            </div>
          </Link>
          <Link
            href="/contact"
            className="border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-full flex items-center gap-4 hover:border-[#04644A] hover:text-[#04644A] transition-all group font-black text-lg"
          >
            Get a Free Consultation
            <div className="bg-[#04644A] text-white rounded-full p-1.5 group-hover:bg-[#18C77E] transition-colors">
              <ArrowUpRight size={22} />
            </div>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[700px] w-full"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[280px] h-[380px] z-30"
        >
          <Image src="/hero4.png" alt="Mobile UI" fill className="object-contain rounded-[2.5rem] drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] left-[5%] w-[450px] h-[380px] z-10"
        >
          <Image src="/hero3.png" alt="Laptop UI" fill className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)]" />
        </motion.div>

        <motion.div
          animate={{ x: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 left-0 w-[400px] h-[320px] z-20"
        >
          <Image src="/hero2.png" alt="Dashboard" fill className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[5%] w-[320px] h-[220px] z-40"
        >
          <Image src="/hero1.png" alt="Insight UI" fill className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)]" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Marquee = () => (
  <div className="bg-[#04644A] py-12 overflow-hidden whitespace-nowrap border-y border-white/10">
    <div className="animate-marquee inline-block">
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-white text-3xl md:text-4xl font-black mx-16 flex items-center gap-8">
            <Image src="/Vector.png" alt="star" width={40} height={40} className="object-contain" />
            Web & App Development
          </span>
          <span className="text-white text-3xl md:text-4xl font-black mx-16 flex items-center gap-8">
            <Image src="/Vector.png" alt="star" width={40} height={40} className="object-contain" />
            Brand Development
          </span>
          <span className="text-white text-3xl md:text-4xl font-black mx-16 flex items-center gap-8">
            <Image src="/Vector.png" alt="star" width={40} height={40} className="object-contain" />
            Data Science
          </span>
          <span className="text-white text-3xl md:text-4xl font-black mx-16 flex items-center gap-8">
            <Image src="/Vector.png" alt="star" width={40} height={40} className="object-contain" />
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
    <section className="py-24 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {statItems.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <h2 className="text-6xl font-black text-[#04644A] tracking-tighter">{stat.number}</h2>
              <div className="flex flex-col">
                <Image src="/GroupTriangle.png" alt="arrow" width={24} height={24} className="mb-2" />
                <p className="text-gray-900 font-bold text-lg leading-tight">{stat.label}</p>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
          Why businesses trust us to build<br />their products
        </h2>
        <p className="text-gray-500 text-xl font-medium leading-relaxed">
          We combine speed, clarity and modern engineering to deliver MVPs that are ready to scale.
          Our iterative approach ensures you get the highest quality product in record time.
        </p>
      </div>

      <div className="bg-[#F8F9FA] rounded-[4rem] p-10 md:p-20 border border-gray-100 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h3 className="text-4xl font-black text-gray-900">We Start With Understanding</h3>
            <p className="text-gray-500 text-lg leading-relaxed font-semibold">
              Every product begins by deeply understanding the idea, the user, and the business goal.
              We listen first, then shape solutions that align with real needs.
            </p>
          </div>

          <div className="flex justify-center">
            <motion.div
              animate={{
                rotate: [0, 2, 0, -2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="relative w-full h-[400px] md:h-[500px]"
            >
              <Image src="/Union.png" alt="Puzzle Landscape" fill className="object-contain drop-shadow-2xl" />
            </motion.div>
          </div>

          <div className="space-y-8">
            <h3 className="text-4xl font-black text-gray-900">Progress Over Perfection</h3>
            <p className="text-gray-500 text-lg leading-relaxed font-semibold">
              We believe in momentum. By breaking ideas into focused sprints, we deliver meaningful progress early and improve continuously.
            </p>
            <div className="flex items-center gap-5 bg-white p-5 rounded-[2rem] shadow-lg w-fit border border-gray-100 cursor-pointer hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-full bg-[#04644A] flex items-center justify-center text-white shadow-inner">
                <Play fill="white" size={20} />
              </div>
              <span className="font-black text-[#04644A] text-lg">Watch Our Process</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row justify-between items-center gap-12">
        <p className="text-3xl md:text-4xl font-black text-gray-900 max-w-3xl leading-[1.2] tracking-tight">
          Our interfaces are not just visually appealing they communicate...
        </p>
        <Link
          href="/contact"
          className="bg-[#04644A] text-white px-12 py-6 rounded-full flex items-center gap-4 hover:bg-[#18C77E] transition-all group shadow-2xl font-black text-xl whitespace-nowrap"
        >
          Want to Connect
          <div className="bg-white text-[#04644A] rounded-full p-1.5 group-hover:bg-[#04644A] group-hover:text-white transition-colors">
            <ArrowUpRight size={24} />
          </div>
        </Link>
      </div>
    </div>
  </section>
);

const ServicesDetail = () => {
  const items = [
    {
      title: "UI/UX Designing",
      desc: "We craft user-centric interfaces and experiences that are visually intuitive, intuitive to use, and aligned with user behavior.",
      icon: <Layout className="text-[#04644A]" size={40} />
    },
    {
      title: "Web Development",
      desc: "We create fast, responsive, and secure web experiences tailored to your product vision. Optimized for performance and long-term growth.",
      icon: <Globe className="text-[#04644A]" size={40} />
    },
    {
      title: "Mobile App Development",
      desc: "We develop intuitive mobile applications that feel smooth, engaging and reliable across platforms. Designed to keep users coming back.",
      icon: <Smartphone className="text-[#04644A]" size={40} />
    }
  ];

  return (
    <section className="py-32 px-4 md:px-12 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
            Turning Ideas into Intelligent,<br />Scalable Digital Products
          </h2>
          <div className="flex flex-wrap gap-6 mt-10">
            <Link href="/services" className="bg-[#04644A] text-white px-10 py-4 rounded-full flex items-center gap-3 hover:bg-[#18C77E] transition-all font-bold text-lg">
              View All Services <ChevronRight size={22} />
            </Link>
            <Link href="/contact" className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full flex items-center gap-3 hover:bg-white hover:border-[#04644A] hover:text-[#04644A] transition-all font-bold text-lg">
              Get a Free Consultation
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl flex flex-col gap-8 group"
            >
              <div className="w-20 h-20 rounded-3xl bg-[#F0FDF4] flex items-center justify-center group-hover:bg-[#04644A] transition-colors duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-3xl font-black text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">{item.desc}</p>
              <Link href="#" className="flex items-center gap-3 text-[#04644A] font-black text-lg mt-4 group/link">
                Learn More <ArrowUpRight size={22} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioGrid = () => (
  <section className="py-32 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Real-world examples</h2>
        <p className="text-gray-500 text-2xl font-semibold">of how we have helped companies achieve their marketing objectives.</p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
        {[1, 10, 3, 11, 5, 12, 7, 8, 9, 2, 4, 6].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl break-inside-avoid border-4 border-transparent hover:border-[#04644A] transition-all duration-300"
          >
            <Image
              src={`/assets/portfolio/portfolio-${item}.${item > 9 ? 'jpg' : 'jpeg'}`}
              alt={`Project ${item}`}
              width={500}
              height={500}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#04644A]/80 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
              <h4 className="text-white text-2xl font-black mb-4">Project Excellence</h4>
              <Link href="/portfolio" className="bg-white text-[#04644A] px-8 py-3 rounded-full font-black shadow-xl">View Details</Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link href="/portfolio" className="bg-[#04644A] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-[#18C77E] transition-all shadow-2xl">
          View All Case Studies
        </Link>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 bg-[#04644A] text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#18C77E] rounded-full blur-[120px] opacity-20"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#18C77E] rounded-full blur-[150px] opacity-10"></div>

    <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-20 relative z-10">
      <div className="w-full lg:w-[40%]">
        <div className="relative w-full h-[500px] md:h-[600px] rounded-[3.5rem] overflow-hidden border-8 border-white/10 shadow-2xl">
          <Image src="/bilal_raza.webp" alt="Client" fill className="object-cover" />
        </div>
      </div>
      <div className="w-full lg:w-[60%]">
        <div className="flex gap-3 mb-10">
          {[...Array(5)].map((_, i) => <Star key={i} fill="#18C77E" color="#18C77E" size={28} />)}
        </div>
        <h3 className="text-4xl md:text-5xl font-black mb-12 leading-[1.3] italic tracking-tight">
          "Transformative impact with NeonAI's Automation Suite. NexalAI revolutionized our operations - in just weeks, we slashed manual workload by 60% and gained clarity into performance metrics we never had before."
        </h3>
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-3xl overflow-hidden border-4 border-[#18C77E]">
            <Image src="/samar-raza.jpg" alt="Samar Raza" width={80} height={80} className="object-cover" />
          </div>
          <div>
            <p className="font-black text-3xl">Samar Raza</p>
            <p className="text-[#18C77E] text-xl font-bold">Salesforce Freelancer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto bg-[#F8F9FA] rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl border border-gray-100">
      <div className="relative z-10 lg:w-[60%]">
        <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 leading-[1.1] tracking-tighter">
          Let's turn your idea into a product
        </h2>
        <p className="text-2xl text-gray-500 mb-14 font-semibold leading-relaxed">
          From early concepts to scalable digital solutions, we help you move forward with clarity, speed, and purpose.
        </p>
        <div className="flex flex-wrap gap-6">
          <Link href="/contact" className="bg-[#04644A] text-white px-12 py-6 rounded-full flex items-center gap-4 hover:bg-[#18C77E] transition-all font-black text-xl shadow-2xl">
            Let's Build Together <ArrowUpRight size={24} />
          </Link>
          <Link href="/contact" className="border-2 border-gray-300 text-gray-700 px-12 py-6 rounded-full flex items-center gap-4 hover:bg-white hover:border-[#04644A] hover:text-[#04644A] transition-all font-black text-xl">
            Free Consultation
          </Link>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[45%] h-full hidden lg:block">
        <Image src="/intrested.png" alt="Build" fill className="object-contain translate-x-12 translate-y-12 scale-110" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-24 px-4 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-1">
          <Image src="/logo.png" alt="12 Monday" width={180} height={50} className="mb-10" />
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            We turn early-stage ideas into real products using a rapid, structured workflow.
            Get a polished MVP that's ready to test, pitch, or scale — all within just 15 days.
          </p>
          <div className="flex gap-5 mt-10">
            <Link href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#04644A] hover:text-white transition-all shadow-sm"><Linkedin size={22} /></Link>
            <Link href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#04644A] hover:text-white transition-all shadow-sm"><Instagram size={22} /></Link>
            <Link href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#04644A] hover:text-white transition-all shadow-sm"><Facebook size={22} /></Link>
          </div>
        </div>
        <div>
          <h4 className="font-black text-gray-900 text-xl mb-8">Quick Links</h4>
          <ul className="flex flex-col gap-5 text-gray-500 text-lg font-semibold">
            <li><Link href="/about" className="hover:text-[#04644A] transition-colors">About us</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#04644A] transition-colors">Portfolio Showcase</Link></li>
            <li><Link href="/services" className="hover:text-[#04644A] transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#04644A] transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-gray-900 text-xl mb-8">Services</h4>
          <ul className="flex flex-col gap-5 text-gray-500 text-lg font-semibold">
            <li><Link href="#" className="hover:text-[#04644A] transition-colors">Web Development</Link></li>
            <li><Link href="#" className="hover:text-[#04644A] transition-colors">Mobile App Development</Link></li>
            <li><Link href="#" className="hover:text-[#04644A] transition-colors">UI/UX Design</Link></li>
            <li><Link href="#" className="hover:text-[#04644A] transition-colors">AI Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-gray-900 text-xl mb-8">Contact Us</h4>
          <ul className="flex flex-col gap-5 text-gray-500 text-lg font-semibold">
            <li className="flex items-center gap-3"><Phone size={20} className="text-[#04644A]" /> +92 313 2933803</li>
            <li className="flex items-center gap-3"><Mail size={20} className="text-[#04644A]" /> info@12monday.net</li>
            <li className="flex items-center gap-3"><MapPin size={20} className="text-[#04644A]" /> Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 font-bold">
        <p>Copyright © {new Date().getFullYear()} 12 Monday Technologies. All Rights Reserved.</p>
        <div className="flex gap-10">
          <Link href="#" className="hover:text-[#04644A]">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#04644A]">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen font-serotiva overflow-x-hidden bg-white selection:bg-[#18C77E] selection:text-white">
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

      {/* High-impact decorative text */}
      <div className="bg-[#04644A] py-20 flex justify-center items-center overflow-hidden relative">
        <motion.h2
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[15rem] md:text-[25rem] font-black text-white opacity-5 whitespace-nowrap tracking-tighter select-none"
        >
          LEVEL UP YOUR BUSINESS WITH 12 MONDAY
        </motion.h2>
      </div>
    </main>
  );
}
