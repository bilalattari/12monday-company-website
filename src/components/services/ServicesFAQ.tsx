'use client';

import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Clock,
  Users,
  Shield,
  Zap
} from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleFAQ: () => void;
};

const FAQItem = ({ question, answer, isOpen, toggleFAQ }: FAQItemProps) => (
  <div className="faq-item bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <button 
      onClick={toggleFAQ} 
      className="faq-toggle w-full flex justify-between items-center text-left text-lg font-medium text-gray-900"
    >
      {question}
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-[#02654F] flex-shrink-0" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
      )}
    </button>
    <div className={`faq-content overflow-hidden transition-all duration-500 ease-in-out ${
      isOpen ? 'max-h-96' : 'max-h-0'
    }`}>
      <p className="pt-4 text-gray-600">{answer}</p>
    </div>
  </div>
);

export default function ServicesFAQ() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex mobile app with backend could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
      category: "Timeline"
    },
    {
      question: "What is your development process?",
      answer: "Our process includes: 1) Discovery & Strategy (1-2 weeks), 2) Design & Architecture (2-3 weeks), 3) Development & Testing (4-12 weeks), and 4) Launch & Support (ongoing). We maintain regular communication and provide weekly progress updates.",
      category: "Process"
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We offer flexible support packages including bug fixes, updates, maintenance, and feature additions. Our support plans range from basic maintenance to comprehensive ongoing development. We also provide 24/7 technical support for critical issues.",
      category: "Support"
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, Next.js, Vue.js, Node.js, Python, React Native, Flutter, AWS, Docker, and more. We choose the best technology stack based on your project requirements and long-term goals.",
      category: "Technology"
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We can integrate seamlessly with your existing development team, provide consultation and guidance, or take over specific parts of your project. We&apos;re experienced in collaborative development environments.",
      category: "Collaboration"
    },
    {
      question: "What if I need changes during development?",
      answer: "We understand that requirements can evolve. We have a flexible change management process that allows for modifications while keeping the project on track. Minor changes are usually accommodated, while major changes may require timeline adjustments.",
      category: "Changes"
    },
    {
      question: "Do you provide design services?",
      answer: "Yes! Our team includes experienced UI/UX designers who create modern, user-friendly interfaces. We offer everything from wireframes and mockups to complete design systems and style guides.",
      category: "Design"
    },
    {
      question: "What about project ownership and source code?",
      answer: "You own 100% of the project and source code upon final payment. We provide complete documentation, deployment instructions, and knowledge transfer sessions to ensure your team can maintain and extend the project independently.",
      category: "Ownership"
    },
    {
      question: "How do you ensure quality and security?",
      answer: "We follow industry best practices including code reviews, automated testing, security audits, and performance optimization. All projects go through rigorous QA testing before delivery, and we implement security measures appropriate for your application type.",
      category: "Quality"
    },
    {
      question: "What are your payment terms?",
      answer: "We typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we use milestone-based payments. We accept various payment methods and can discuss custom payment terms for enterprise projects.",
      category: "Payment"
    }
  ];

  const categories = [
    { name: "All", icon: <HelpCircle className="w-4 h-4" />, count: faqData.length },
    { name: "Timeline", icon: <Clock className="w-4 h-4" />, count: faqData.filter(faq => faq.category === "Timeline").length },
    { name: "Process", icon: <Zap className="w-4 h-4" />, count: faqData.filter(faq => faq.category === "Process").length },
    { name: "Support", icon: <Shield className="w-4 h-4" />, count: faqData.filter(faq => faq.category === "Support").length },
    { name: "Technology", icon: <Users className="w-4 h-4" />, count: faqData.filter(faq => faq.category === "Technology").length }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our services, process, and how we work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all ${
                selectedCategory === category.name
                  ? 'bg-[#02654F] text-white border-[#02654F]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#02654F] hover:text-[#02654F]'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openFAQIndex === index}
              toggleFAQ={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help! Contact us for personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-[#02654F] to-[#17C381] text-white px-8 py-3 rounded-full font-semibold hover:shadow-sm transition-all flex items-center justify-center"
              >
                Contact Us
              </a>
              <a
                href="mailto:info@12monday.net"
                className="border-2 border-[#02654F] text-[#02654F] px-8 py-3 rounded-full font-semibold hover:bg-[#02654F] hover:text-white transition-all flex items-center justify-center"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
