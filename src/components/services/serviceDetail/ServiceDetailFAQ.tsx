'use client';

import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle
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

interface ServiceDetailFAQProps {
  service: {
    id: string;
    title: string;
    faq: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export default function ServiceDetailFAQ({ service }: ServiceDetailFAQProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#02654F] to-[#17C381] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our {service.title} services and how we work
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {service.faq.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openFAQIndex === index}
              toggleFAQ={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Additional FAQ Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-[#02654F] w-10 h-10 rounded-xl flex items-center justify-center mr-4">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">General Questions</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Common questions about our development process, timelines, and project management approach.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-[#17C381] w-10 h-10 rounded-xl flex items-center justify-center mr-4">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Technical Questions</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Technical details about our {service.title} services, technologies, and implementation methods.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-pink-600 w-10 h-10 rounded-xl flex items-center justify-center mr-4">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Support Questions</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Information about ongoing support, maintenance, and post-launch services we provide.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help! Contact us for personalized answers to your specific {service.title} questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#02654F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#17C381] transition-all flex items-center justify-center"
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
