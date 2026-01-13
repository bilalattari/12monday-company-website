'use client';

import React, { useState } from 'react';
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
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const TopBar = () => (
  <div className="bg-[#04644A] text-white hidden md:block">
    <div className="container mx-auto flex justify-between items-center relative overflow-hidden h-[50px]">
      <div className="flex items-center space-x-8 text-[14px] font-medium py-2">
        <div className="flex items-center space-x-2.5 hover:text-[#18C77E] transition-colors cursor-pointer">
          <Phone size={16} fill="currentColor" strokeWidth={0} />
          <a href='tel:03132933803'>03132933803</a>
        </div>
        <div className="flex items-center space-x-2.5 hover:text-[#18C77E] transition-colors cursor-pointer">
          <Mail size={16} fill="currentColor" strokeWidth={0} />
          <a href='mailto:twelvemonday12@gmail.com'>twelvemonday12@gmail.com</a>
        </div>
        <div className="flex items-center space-x-2.5 hover:text-[#18C77E] transition-colors cursor-pointer">
          <MapPin size={16} fill="currentColor" strokeWidth={0} />
          <span>Dashityar Pride Apartment - Karachi Office 11</span>
        </div>
      </div>

      <div className="flex items-center h-full">
        <div className="bg-white h-full px-14 flex items-center space-x-6 ml-auto relative" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <Link href="https://www.linkedin.com/company/twelve-monday-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#04644A] hover:text-[#18C77E] transition-all hover:scale-110">
            <Linkedin size={20} fill="currentColor" strokeWidth={0} />
          </Link>
          <Link href="#" className="text-[#04644A] hover:text-[#18C77E] transition-all hover:scale-110">
            <Instagram size={20} />
          </Link>
          <Link href="https://www.facebook.com/people/Twelve-Monday-Technologies/61585959862216/" target="_blank" rel="noopener noreferrer" className="text-[#04644A] hover:text-[#18C77E] transition-all hover:scale-110">
            <Facebook size={20} fill="currentColor" strokeWidth={0} />
          </Link>
          <Link href="https://github.com/twelveMonday" target="_blank" rel="noopener noreferrer" className="text-[#04644A] hover:text-[#18C77E] transition-all hover:scale-110">
            <Github size={20} fill="currentColor" strokeWidth={0} />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center h-20">
          <Link href="#" className="flex items-center transform hover:scale-105 transition-transform">
            <Image src="/logo.png" alt="12Monday" width={160} height={46} className="object-contain w-32 md:w-40" />
          </Link>
          <div className="hidden md:flex items-center space-x-14">
            {['About', 'Services', 'Portfolio', 'Case Study'].map((item) => (
              <Link key={item} href="#" className="text-[16px] font-semibold text-[#444444] hover:text-[#04644A] transition-colors relative group">
                {item}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#04644A] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex">
            <Link href="#" className="bg-[#04644A] text-white px-8 py-3.5 rounded-full flex items-center space-x-3 group transition-all hover:bg-[#03523d]">
              <span className="text-[16px] font-bold">Get Started</span>
              <div className="bg-white rounded-full p-1.5 text-[#04644A] transition-transform group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#444444] p-2"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-8 md:hidden px-4"
          >
            <div className="flex flex-col space-y-6">
              {['About', 'Services', 'Portfolio', 'Case Study'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-[#444444] hover:text-[#04644A]"
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="bg-[#04644A] text-white px-8 py-4 rounded-full flex items-center justify-center space-x-3 group transition-all"
              >
                <span className="text-lg font-bold">Get Started</span>
                <div className="bg-white rounded-full p-1.5 text-[#04644A]">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-10 container mx-auto md:pt-12 pb-20 md:pb-32 overflow-hidden bg-white">
    <div className="px-4 md:px-0">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 mb-6 md:mb-8"
          >
            <div className="relative w-6 h-6 md:w-7 md:h-7">
              <Image src="/GroupTriangle.png" alt="icon" fill className="object-contain" />
            </div>
            <span className="text-[13px] md:text-[15px] font-bold text-[#555555] tracking-wide uppercase">Your AI-First Development Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[72px] font-bold text-[#111111] leading-[1.1] mb-8 md:mb-10"
          >
            Turn Your Idea<br />
            Into a Live Product<br />
            in <span className="text-[#04644A]">Just 15 Days</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-[19px] text-[#666666] leading-relaxed max-w-xl mb-10 md:mb-12 font-medium"
          >
            We turn early-stage ideas into real products using a rapid, structured workflow.
            Get a polished MVP that&apos;s ready to test, pitch, or scale — all within just 15 days.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5"
          >
            <Link href="#" className="bg-[#04644A] text-white px-8 md:px-9 py-4 rounded-full flex items-center justify-center sm:justify-start space-x-3.5 group hover:bg-[#03523d] transition-all shadow-xl shadow-[#04644A]/10">
              <span className="text-[16px] md:text-[17px] font-bold">Start Your MVP</span>
              <div className="bg-white rounded-full p-1.5 text-[#04644A] transition-transform group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </div>
            </Link>
            <Link href="#" className="border-2 border-[#E5E7EB] text-[#444444] px-8 md:px-9 py-4 rounded-full flex items-center justify-center sm:justify-start space-x-3.5 hover:border-[#04644A] hover:text-[#04644A] transition-all group font-bold">
              <span className="text-[16px] md:text-[17px]">Get a Free Consultation</span>
              <div className="bg-[#04644A] rounded-full p-1.5 text-white transition-all transform scale-90 group-hover:scale-100 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="flex-1 relative w-full h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[750px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full h-full"
          >
            <Image
              src="/hero.png"
              alt="Hero Illustration"
              fill
              className="object-contain lg:object-center"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Marquee = () => (
  <div className="bg-[#04644A] py-8 md:py-12 overflow-hidden whitespace-nowrap">
    <div className="animate-marquee inline-block">
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-white text-xl md:text-[32px] font-bold mx-8 md:mx-20 inline-flex items-center gap-4 md:gap-10">
            <div className="relative w-6 h-6 md:w-8 md:h-8">
              <Image src="/Vector.png" alt="star" fill className="opacity-80 object-contain" />
            </div>
            Web & App Development
          </span>
          <span className="text-white text-xl md:text-[32px] font-bold mx-8 md:mx-20 inline-flex items-center gap-4 md:gap-10">
            <div className="relative w-6 h-6 md:w-8 md:h-8">
              <Image src="/Vector.png" alt="star" fill className="opacity-80 object-contain" />
            </div>
            Brand Development
          </span>
          <span className="text-white text-xl md:text-[32px] font-bold mx-8 md:mx-20 inline-flex items-center gap-4 md:gap-10">
            <div className="relative w-6 h-6 md:w-8 md:h-8">
              <Image src="/Vector.png" alt="star" fill className="opacity-80 object-contain" />
            </div>
            Data Science
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const Stats = () => (
  <section className="bg-[#F8F8F8] py-16 md:py-32">
    <div className="container mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-12 md:gap-16">
        {[
          { v: '102+', l: 'Completed Projects' },
          { v: '150+', l: 'Satisfied Customers' },
          { v: '99%', l: 'Satisfaction Rate' },
          { v: '24/7', l: 'Maintenance Support' }
        ].map((s, i, arr) => (
          <React.Fragment key={i}>
            <div className="text-center group flex-1">
              <h3 className="text-5xl md:text-[72px] font-bold text-black mb-2 md:mb-4 transition-transform group-hover:scale-105 duration-300">{s.v}</h3>
              <p className="text-[14px] md:text-[18px] font-bold text-[#666666] uppercase tracking-wide">{s.l}</p>
            </div>
            {i < arr.length - 1 && (
              <div className="hidden lg:block opacity-30">
                <Image src="/GroupTriangle.png" alt="arrow" width={32} height={32} className="rotate-180" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      name: "Khizer Ahmed",
      role: "Founder, Kaacib",
      content: "12Monday turned our vision for Kaacib into a functional, beautiful reality in record time. Their 15-day MVP process is truly revolutionary for startups looking to validate fast.",
      title: "Revolutionizing Startup Launches",
      avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6a53c1b5-a5e5-4550-bd98-8b65c8d1872a/image-1768296657326.png"
    },
    {
      name: "Bilal Raza",
      role: "Seerat Ki Dunya",
      content: "The team at 12Monday understands the balance between speed and quality. Seerat Ki Dunya has grown significantly thanks to their strategic tech implementation and design expertise.",
      title: "Strategic Tech Partnership",
      avatar: "https://i.pravatar.cc/150?u=bilal"
    },
    {
      name: "Zeeshan-ul-Hassan Usmani",
      role: "Author, Guftugu App",
      content: "As a data scientist, I appreciate the structured workflow 12Monday brings to the table. They don't just build apps; they build intelligent solutions that solve real problems.",
      title: "Intelligent Engineering Solutions",
      avatar: "https://i.pravatar.cc/150?u=zeeshan"
    },
    {
      name: "Nabil",
      role: "Salesforce Freelancer",
      content: "NexaAI has revolutionized our operations—in just weeks, we slashed manual workload by 60% and gained clarity into performance metrics we never had before.",
      title: "Transformative Automation Impact",
      avatar: "https://i.pravatar.cc/150?u=nabil"
    },
    {
      name: "Sarah Chen",
      role: "CEO, FinTech Solutions",
      content: "The agility and expertise 12Monday provides is unmatched. We were able to pitch our idea to investors with a live, polished product in just two weeks.",
      title: "Unmatched Speed to Market",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-40 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 mb-16 md:mb-32">
          <h2 className="text-3xl md:text-[54px] font-bold text-[#111111] leading-tight max-w-2xl">
            Trusted by Founders, Teams, and Growing Businesses
          </h2>
          <p className="text-lg md:text-[22px] text-[#666666] lg:max-w-sm leading-relaxed font-medium">
            Real experiences from people who turned their ideas into working products with us.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-1/2 -left-12 lg:-left-24 transform -translate-y-1/2 z-10 hidden sm:block">
            <button
              onClick={prev}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#04644A] hover:text-white hover:border-[#04644A] transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-12 lg:-right-24 transform -translate-y-1/2 z-10 hidden sm:block">
            <button
              onClick={next}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#04644A] hover:text-white hover:border-[#04644A] transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center px-4 md:px-8"
          >
            <h3 className="text-xl md:text-3xl font-bold text-[#111111] mb-6 md:mb-10">{testimonials[current].title}</h3>
            <p className="text-lg md:text-[26px] text-[#555555] leading-relaxed max-w-5xl mx-auto mb-10 md:mb-16 font-medium italic">
              &quot;{testimonials[current].content}&quot;
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-[#04644A]/10 shadow-lg bg-gray-50">
                <Image src={testimonials[current].avatar} alt={testimonials[current].name} fill className="object-cover" />
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-[#111111] text-xl md:text-2xl">
                  {testimonials[current].name} <span className="hidden md:inline text-[#BBBBBB] font-normal mx-2">,</span> <br className="md:hidden" /> <span className="text-[#777777] font-semibold text-base md:text-lg">{testimonials[current].role}</span>
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-[#04644A]' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => (
  <section className="py-20 md:py-40 bg-white overflow-hidden">
    <div className="container mx-auto px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 mb-16 md:mb-28">
        <h2 className="text-3xl md:text-[54px] font-bold text-[#111111] leading-tight max-w-2xl">Why businesses trust us to build their products</h2>
        <p className="text-lg md:text-[22px] text-[#666666] max-w-lg leading-relaxed font-medium">
          We combine speed, clarity, and modern engineering to deliver MVPs that are ready to scale.
        </p>
      </div>
      <div className="bg-[#FFFFFF] rounded-[40px] md:rounded-[70px] p-8 md:p-24 shadow-[0_50px_120px_rgba(0,0,0,0.04)] border border-gray-100 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#04644A]/[0.01] rounded-[40px] md:rounded-[70px]"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-24 items-center relative z-10">
          <div className="space-y-6 md:space-y-10">
            <h3 className="text-2xl md:text-[40px] font-bold text-[#111111] leading-tight">We Start With Understanding</h3>
            <p className="text-base md:text-[21px] text-[#666666] leading-relaxed font-medium">
              Every product begins by deeply understanding the idea, the user, and the business goal. We listen first, then shape solutions that align with real needs.
            </p>
          </div>
          <div className="flex justify-center transform group-hover:scale-105 transition-transform duration-1000 order-first lg:order-none">
            <div className="relative w-full max-w-[300px] md:max-w-[550px] aspect-square">
              <Image src="/Union.png" alt="Puzzle" fill className="object-contain" />
            </div>
          </div>
          <div className="space-y-6 md:space-y-10">
            <h3 className="text-2xl md:text-[40px] font-bold text-[#111111] leading-tight">Progress Over Perfection</h3>
            <p className="text-base md:text-[21px] text-[#666666] leading-relaxed font-medium">
              We believe in momentum. By breaking ideas into focused sprints, we deliver meaningful progress early and improve continuously.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-24 flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-16 bg-[#F9F9F9] p-8 md:p-16 rounded-[30px] md:rounded-[50px]">
        <p className="text-xl md:text-[32px] font-bold text-[#111111] lg:max-w-3xl leading-snug text-center lg:text-left">
          Our interfaces are not just visually appealing they <span className="text-[#04644A]">communicate...</span>
        </p>
        <Link href="#" className="bg-[#04644A] text-white px-10 md:px-14 py-5 md:py-7 rounded-full flex items-center space-x-5 hover:bg-[#03523d] transition-all shadow-2xl shadow-[#04644A]/25 whitespace-nowrap w-full lg:w-auto justify-center">
          <span className="text-xl md:text-2xl font-bold">Want to Connect</span>
          <div className="bg-white rounded-full p-2 text-[#04644A]">
            <ArrowUpRight size={28} />
          </div>
        </Link>
      </div>
    </div>
  </section>
);

const ServicesOverview = () => (
  <section className="py-20 md:py-40 bg-[#FCFCFC]">
    <div className="container mx-auto px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 mb-16 md:mb-28">
        <h2 className="text-3xl md:text-[54px] font-bold text-[#111111] leading-tight max-w-3xl">Turning Ideas into Intelligent, Scalable Digital Products</h2>
        <p className="text-lg md:text-[22px] text-[#666666] max-w-lg leading-relaxed font-medium">
          We combine strategy, design, and engineering to build products that perform, scale, and evolve — crafted for real users and real business goals.
        </p>
      </div>
      <div className="space-y-0 border-t border-gray-100">
        {[
          { t: 'UI/UX Designing', d: 'We craft user-centric interfaces and experiences that are visually refined, intuitive to use, and aligned with user behavior.' },
          { t: 'Web Development', d: 'We create fast, responsive, and secure web experiences tailored to your product vision. From landing pages to complex web platforms, our builds are optimized for performance, usability, and long-term growth.' },
          { t: 'Mobile App Development', d: 'We develop intuitive mobile applications that feel smooth, engaging, and reliable across platforms, designed to keep users coming back.' }
        ].map((s, i) => (
          <div key={i} className="group border-b border-gray-100 py-10 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-white transition-all px-4 md:px-12 cursor-pointer gap-6 md:gap-12">
            <div className="max-w-5xl">
              <h3 className="text-3xl md:text-[42px] font-bold text-[#111111] mb-4 md:mb-8 group-hover:text-[#04644A] transition-colors">{s.t}</h3>
              <p className="text-base md:text-[21px] text-[#666666] leading-relaxed font-medium">{s.d}</p>
            </div>
            <div className="text-black group-hover:text-[#04644A] transition-all duration-700 transform group-hover:rotate-45 group-hover:scale-110 self-end md:self-auto">
              <ArrowUpRight size={48} className="md:w-[72px] md:h-[72px]" strokeWidth={0.8} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 md:mt-20 flex flex-col sm:flex-row gap-6 md:gap-8">
        <Link href="#" className="bg-[#04644A] text-white px-10 md:px-12 py-5 md:py-6 rounded-full flex items-center justify-center space-x-4 hover:bg-[#03523d] transition-all shadow-xl">
          <span className="text-lg md:text-xl font-bold">View All Services</span>
          <div className="bg-white rounded-full p-2 text-[#04644A]">
            <ArrowUpRight size={24} />
          </div>
        </Link>
        <Link href="#" className="border-2 border-gray-200 text-[#333333] px-10 md:px-12 py-5 md:py-6 rounded-full flex items-center justify-center space-x-4 hover:border-[#04644A] hover:text-[#04644A] transition-all group font-bold">
          <span className="text-lg md:text-xl">Get a Free Consultation</span>
          <div className="bg-[#04644A] rounded-full p-2 text-white transition-all transform scale-90 group-hover:scale-100 group-hover:rotate-45">
            <ArrowUpRight size={24} />
          </div>
        </Link>
      </div>
    </div>
  </section>
);

const PortfolioGrid = () => (
  <section className="py-20 md:py-40 bg-white">
    <div className="container mx-auto px-4 md:px-0">
      <div className="text-center mb-16 md:mb-32">
        <h2 className="text-3xl md:text-[54px] font-bold text-[#111111] mb-4 md:mb-8">Real-world examples</h2>
        <p className="text-lg md:text-[24px] text-[#666666] font-medium lg:max-w-3xl mx-auto">of how we have helped companies achieve their marketing objectives.</p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 md:gap-8 space-y-4 md:space-y-8">
        {[14, 1, 7, 11, 5, 12, 15, 8, 9, 2, 4, 6].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group border border-gray-50 break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer"
          >
            <Image src={`/assets/portfolio/portfolio-${i}.${[11, 12].includes(i) ? 'jpg' : 'jpeg'}`} alt={`Project ${i}`} width={600} height={600} className="w-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 md:p-8 text-center backdrop-blur-[2px]">
              <div className="bg-white rounded-full px-6 md:px-8 py-2.5 md:py-3.5 flex items-center space-x-2 md:space-x-3 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                <span className="text-[#111111] font-bold text-sm md:text-base uppercase tracking-widest">View Project</span>
                <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-20 md:py-40 bg-[#F8F8F8]">
    <div className="container mx-auto px-4 md:px-0">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-[58px] font-bold text-[#111111] leading-[1.1] mb-8 md:mb-14">
            Let&apos;s turn your idea into a product that users love and businesses trust.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
            <Link href="#" className="bg-[#04644A] text-white px-10 md:px-12 py-5 md:py-6 rounded-full flex items-center justify-center space-x-4 hover:bg-[#03523d] transition-all shadow-2xl shadow-[#04644A]/20">
              <span className="text-lg md:text-xl font-bold">Let&apos;s Build Together</span>
              <div className="bg-white rounded-full p-2 text-[#04644A]">
                <ArrowUpRight size={24} />
              </div>
            </Link>
            <Link href="#" className="border-2 border-gray-300 text-[#333333] px-10 md:px-12 py-5 md:py-6 rounded-full flex items-center justify-center space-x-4 hover:border-[#04644A] hover:text-[#04644A] transition-all group font-bold">
              <span className="text-lg md:text-xl">Get a Free Consultation</span>
              <div className="bg-[#04644A] rounded-full p-2 text-white transition-all transform scale-90 group-hover:scale-100 group-hover:rotate-45">
                <ArrowUpRight size={24} />
              </div>
            </Link>
          </div>
        </div>
        <div className="max-w-lg lg:pt-6">
          <p className="text-xl md:text-[23px] text-[#666666] leading-relaxed font-medium">
            From early concepts to scalable digital solutions, we help you move forward with clarity, speed, and purpose.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 pt-16 md:pt-32 pb-12 md:pb-16">
    <div className="container mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 mb-16 md:mb-24">
        <div className="col-span-1">
          <Image src="/logo.png" alt="12Monday" width={180} height={52} className="mb-8 md:mb-12 transform hover:scale-105 transition-transform cursor-pointer w-40 md:w-auto" />
          <p className="text-[#666666] leading-relaxed mb-8 md:mb-12 font-medium text-lg md:text-xl">We turn early-stage ideas into real products using a rapid, structured workflow. Get a polished MVP in 15 days.</p>
          <div className="flex space-x-4 md:space-x-6">
            <Link href="https://www.linkedin.com/company/twelve-monday-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#333333] hover:bg-[#04644A] hover:text-white transition-all hover:-translate-y-2 shadow-sm"><Linkedin size={20} className="md:w-6 md:h-6" /></Link>
            <Link href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#333333] hover:bg-[#04644A] hover:text-white transition-all hover:-translate-y-2 shadow-sm"><Instagram size={20} className="md:w-6 md:h-6" /></Link>
            <Link href="https://www.facebook.com/people/Twelve-Monday-Technologies/61585959862216/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#333333] hover:bg-[#04644A] hover:text-white transition-all hover:-translate-y-2 shadow-sm"><Facebook size={20} className="md:w-6 md:h-6" /></Link>
            <Link href="https://github.com/twelveMonday" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#333333] hover:bg-[#04644A] hover:text-white transition-all hover:-translate-y-2 shadow-sm"><Github size={20} className="md:w-6 md:h-6" /></Link>
          </div>
        </div>
        <div>
          <h4 className="text-black font-bold text-xl md:text-2xl mb-6 md:mb-10">Services</h4>
          <ul className="space-y-4 md:space-y-6 text-[#666666] font-semibold text-base md:text-lg">
            <li><Link href="#" className="hover:text-[#04644A] transition-colors">Web Development</Link></li>
            <li><Link href="#" className="hover:text-[#04644A] transition-colors">Mobile Apps</Link></li>
            <li><Link href="#" className="hover:text-[#04644A] transition-colors">UI/UX Design</Link></li>
            <li><Link href="#" className="hover:text-[#04644A] transition-colors">AI Solutions</Link></li>
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-black font-bold text-xl md:text-2xl mb-6 md:mb-10">Contact</h4>
          <ul className="space-y-6 md:space-y-8 text-[#666666] font-semibold text-base md:text-lg">
            <li className="flex items-center gap-4 md:gap-5 hover:text-[#04644A] transition-colors cursor-pointer"><Phone size={20} className="text-[#04644A] md:w-6 md:h-6" /><a href="tel:03132933803"> 03132933803</a></li>
            <li className="flex items-center gap-4 md:gap-5 hover:text-[#04644A] transition-colors cursor-pointer"><Mail size={20} className="text-[#04644A] md:w-6 md:h-6" /> <a href="mailto:twelvemonday12@gmail.com">twelvemonday12@gmail.com</a></li>
            <li className="flex items-center gap-4 md:gap-5 hover:text-[#04644A] transition-colors cursor-pointer"><MapPin size={20} className="text-[#04644A] md:w-6 md:h-6" /> Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 md:pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[#999999] text-base md:text-lg font-semibold text-center md:text-left">
        <p>© {new Date().getFullYear()} 12Monday Technologies. All Rights Reserved.</p>
        <div className="flex space-x-8 md:space-x-12">
          <Link href="#" className="hover:text-[#04644A] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#04644A] transition-colors">Terms of Service</Link>
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
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
