'use client';

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
  ChevronRight,
  Layout,
  Globe,
  Smartphone,
  Star
} from 'lucide-react';

const TopBar = () => (
  <div className="bg-[#04644A] text-white hidden md:block">
    <div className="max-w-7xl mx-auto flex justify-between items-center relative overflow-hidden">
      <div className="flex items-center space-x-6 py-2 px-4 text-[13px] font-medium">
        <div className="flex items-center space-x-2">
          <Phone size={14} fill="white" className="text-[#04644A]" />
          <span>456456464654</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail size={14} fill="white" className="text-[#04644A]" />
          <span>12monday@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={14} fill="white" className="text-[#04644A]" />
          <span>Dashityar Pride Apartment - Karachi Office 11</span>
        </div>
      </div>

      <div className="flex items-center h-full">
        <div className="bg-white h-[40px] px-8 flex items-center space-x-4 ml-auto" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <Link href="#" className="text-[#04644A] hover:text-[#18C77E] transition-colors">
            <Linkedin size={18} fill="currentColor" strokeWidth={0} />
          </Link>
          <Link href="#" className="text-[#04644A] hover:text-[#18C77E] transition-colors">
            <Instagram size={18} />
          </Link>
          <Link href="#" className="text-[#04644A] hover:text-[#18C77E] transition-colors">
            <Facebook size={18} fill="currentColor" strokeWidth={0} />
          </Link>
          <Link href="#" className="text-[#04644A] hover:text-[#18C77E] transition-colors">
            <Github size={18} fill="currentColor" strokeWidth={0} />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="12Monday" width={140} height={40} className="object-contain" />
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          {['About', 'Services', 'Portfolio', 'Case Study'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[15px] font-medium text-[#333333] hover:text-[#04644A] transition-colors">
              {item}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="bg-[#04644A] text-white px-6 py-2.5 rounded-full flex items-center space-x-2 group transition-all hover:bg-opacity-90">
          <span className="text-[15px] font-medium">Get Started</span>
          <div className="bg-white rounded-full p-1 text-[#04644A]">
            <ArrowUpRight size={16} />
          </div>
        </Link>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-24 pb-20 overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative w-6 h-6">
              <Image src="/GroupTriangle.png" alt="icon" fill className="object-contain" />
            </div>
            <span className="text-[15px] font-medium text-[#555555] tracking-wide">Your AI-First Development Partner</span>
          </div>
          <h1 className="text-5xl md:text-[64px] font-bold text-[#111111] leading-[1.1] mb-8">
            Turn Your Idea Into a <br /> Live Product in <span className="font-black text-black">Just <br /> 15 Days</span>
          </h1>
          <p className="text-lg text-[#666666] leading-relaxed max-w-xl mb-10">
            We turn early-stage ideas into real products using a rapid, structured workflow. 
            Get a polished MVP that's ready to test, pitch, or scale — all within just 15 days.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#04644A] text-white px-8 py-4 rounded-full flex items-center space-x-3 group hover:bg-opacity-95 transition-all">
              <span className="text-base font-semibold">Start Your MVP</span>
              <div className="bg-white rounded-full p-1 text-[#04644A]">
                <ArrowUpRight size={20} />
              </div>
            </Link>
            <Link href="/contact" className="border border-[#04644A] text-[#04644A] px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-[#04644A] hover:text-white transition-all group">
              <span className="text-base font-semibold">Get a Free Consultation</span>
              <div className="bg-[#04644A] rounded-full p-1 text-white group-hover:bg-white group-hover:text-[#04644A] transition-all">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-[600px] h-[600px]">
          <div className="relative w-full h-full">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-[45%] z-20 shadow-2xl rounded-3xl overflow-hidden">
              <Image src="/hero1.png" alt="Mobile App" width={300} height={500} className="w-full h-auto" />
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[15%] left-0 w-[55%] z-10 shadow-2xl rounded-2xl overflow-hidden">
              <Image src="/hero2.png" alt="Development" width={400} height={300} className="w-full h-auto" />
            </motion.div>
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-0 right-[5%] w-[50%] z-10 shadow-2xl rounded-2xl overflow-hidden">
              <Image src="/hero3.png" alt="Dashboard" width={350} height={250} className="w-full h-auto" />
            </motion.div>
            <motion.div animate={{ x: [0, -5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-[5%] left-[5%] w-[50%] z-20 shadow-2xl rounded-2xl overflow-hidden">
              <Image src="/hero4.png" alt="Statistics" width={350} height={250} className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Marquee = () => (
  <div className="bg-[#04644A] py-8 overflow-hidden whitespace-nowrap">
    <div className="animate-marquee inline-block">
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-white text-2xl font-bold mx-12 flex items-center gap-6">
            <Image src="/Vector.png" alt="star" width={24} height={24} />
            Web & App Development
          </span>
          <span className="text-white text-2xl font-bold mx-12 flex items-center gap-6">
            <Image src="/Vector.png" alt="star" width={24} height={24} />
            Brand Development
          </span>
          <span className="text-white text-2xl font-bold mx-12 flex items-center gap-6">
            <Image src="/Vector.png" alt="star" width={24} height={24} />
            Data Science
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const Stats = () => (
  <section className="bg-[#F3F3F3] py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {[
          { v: '102+', l: 'Completed Projects' },
          { v: '150+', l: 'Satisfied or Happy Customers' },
          { v: '99%', l: 'Satisfaction Rate' },
          { v: '24/7', l: 'Maintenance / Support' }
        ].map((s, i, arr) => (
          <React.Fragment key={i}>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-black mb-2">{s.v}</h3>
              <p className="text-[15px] font-medium text-[#666666]">{s.l}</p>
            </div>
            {i < arr.length - 1 && (
              <div className="hidden md:block relative w-6 h-6 rotate-180">
                <Image src="/GroupTriangle.png" alt="arrow" fill className="object-contain" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        <h2 className="text-[42px] font-bold text-black leading-tight max-w-lg">Why businesses trust us to build their products</h2>
        <p className="text-[18px] text-[#666666] max-w-md leading-relaxed">
          We combine speed, clarity, and modern engineering to deliver MVPs that are ready to scale.
        </p>
      </div>
      <div className="bg-white rounded-[40px] p-16 shadow-[0_0_50px_rgba(0,0,0,0.05)] border border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-black">We Start With Understanding</h3>
            <p className="text-lg text-[#666666] leading-relaxed">
              Every product begins by deeply understanding the idea, the user, and the business goal. We listen first, then shape solutions that align with real needs.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-square">
              <Image src="/Union.png" alt="Puzzle" fill className="object-contain" />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-black">Progress Over Perfection</h3>
            <p className="text-lg text-[#666666] leading-relaxed">
              We believe in momentum. By breaking ideas into focused sprints, we deliver meaningful progress early and improve continuously.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-2xl font-medium text-black max-w-xl">Our interfaces are not just visually appealing they communicate...</p>
        <Link href="/contact" className="bg-[#04644A] text-white px-10 py-5 rounded-full flex items-center space-x-3 hover:bg-opacity-95 transition-all shadow-xl shadow-[#04644A]/10">
          <span className="text-lg font-bold">Want to Connect</span>
          <div className="bg-white rounded-full p-1 text-[#04644A]">
            <ArrowUpRight size={24} />
          </div>
        </Link>
      </div>
    </div>
  </section>
);

const ServicesOverview = () => (
  <section className="py-24 bg-[#FDFDFD]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        <h2 className="text-[42px] font-bold text-black leading-tight max-w-xl">Turning Ideas into Intelligent, Scalable Digital Products</h2>
        <p className="text-[18px] text-[#666666] max-w-md leading-relaxed">
          We combine strategy, design, and engineering to build products that perform, scale, and evolve — crafted for real users and real business goals.
        </p>
      </div>
      <div className="space-y-0 border-t border-gray-100">
        {[
          { t: 'UI/UX Designing', d: 'We craft user-centric interfaces and experiences that are visually refined, intuitive to use, and aligned with user behavior.' },
          { t: 'Web Development', d: 'We create fast, responsive, and secure web experiences tailored to your product vision. From landing pages to complex web platforms, our builds are optimized for performance, usability, and long-term growth.' },
          { t: 'Mobile App Development', d: 'We develop intuitive mobile applications that feel smooth, engaging, and reliable across platforms, designed to keep users coming back.' }
        ].map((s, i) => (
          <div key={i} className="group border-b border-gray-100 py-12 flex items-center justify-between hover:bg-gray-50/50 transition-all px-4">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-[#04644A] transition-colors">{s.t}</h3>
              <p className="text-lg text-[#666666] leading-relaxed">{s.d}</p>
            </div>
            <div className="text-black group-hover:text-[#04644A] transition-colors translate-x-0 group-hover:translate-x-2">
              <ArrowUpRight size={48} strokeWidth={1} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/services" className="bg-[#04644A] text-white px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-opacity-95 transition-all">
          <span className="text-base font-semibold">View All Services</span>
          <div className="bg-white rounded-full p-1 text-[#04644A]">
            <ArrowUpRight size={20} />
          </div>
        </Link>
        <Link href="/contact" className="border border-gray-300 text-[#333333] px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-[#04644A] hover:text-white transition-all group">
          <span className="text-base font-semibold">Get a Free Consultation</span>
          <div className="bg-[#04644A] rounded-full p-1 text-white group-hover:bg-white group-hover:text-[#04644A] transition-all">
            <ArrowUpRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  </section>
);

const PortfolioGrid = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-[42px] font-bold text-black mb-4">Real-world examples</h2>
        <p className="text-xl text-[#666666]">of how we have helped companies achieve their marketing objectives.</p>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
        {[1, 10, 3, 11, 5, 12, 7, 8, 9, 2, 4, 6].map((i) => (
          <div key={i} className="relative rounded-3xl overflow-hidden group border border-gray-100 break-inside-avoid">
            <Image src={`/assets/portfolio/portfolio-${i}.${i > 9 ? 'jpg' : 'jpeg'}`} alt={`Project ${i}`} width={500} height={500} className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
               <h4 className="text-white text-xl font-bold mb-4">Project Excellence</h4>
               <Link href="/portfolio" className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">View Case Study</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Image src="/logo.png" alt="12Monday" width={140} height={40} className="mb-8" />
          <p className="text-[#666666] leading-relaxed mb-8">We turn early-stage ideas into real products using a rapid, structured workflow. Get a polished MVP in 15 days.</p>
          <div className="flex space-x-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#333333] hover:bg-[#04644A] hover:text-white transition-all"><Linkedin size={20} /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#333333] hover:bg-[#04644A] hover:text-white transition-all"><Instagram size={20} /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#333333] hover:bg-[#04644A] hover:text-white transition-all"><Facebook size={20} /></Link>
          </div>
        </div>
        <div>
          <h4 className="text-black font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-[#666666]">
            <li><Link href="/about" className="hover:text-[#04644A]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#04644A]">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#04644A]">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-[#04644A]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-black font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-[#666666]">
            <li><Link href="#" className="hover:text-[#04644A]">Web Development</Link></li>
            <li><Link href="#" className="hover:text-[#04644A]">Mobile Apps</Link></li>
            <li><Link href="#" className="hover:text-[#04644A]">UI/UX Design</Link></li>
            <li><Link href="#" className="hover:text-[#04644A]">AI Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-black font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-[#666666]">
            <li className="flex items-center gap-3"><Phone size={18} /> 456456464654</li>
            <li className="flex items-center gap-3"><Mail size={18} /> info@12monday.net</li>
            <li className="flex items-center gap-3"><MapPin size={18} /> Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[#999999] text-sm font-medium">
        <p>© {new Date().getFullYear()} 12Monday Technologies. All Rights Reserved.</p>
        <div className="flex space-x-8">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-serotiva selection:bg-[#18C77E] selection:text-white">
      <TopBar />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <TrustSection />
      <ServicesOverview />
      <PortfolioGrid />
      <Footer />
    </main>
  );
}
