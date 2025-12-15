'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer: "Webflow is a visual development platform that allows you to build responsive websites without writing code. It combines the flexibility of custom development with the ease of use of a visual editor, making it the best website builder for designers and developers who want full control over their designs."
    },
    {
      question: "Why is BRIX Templates the best Webflow agency?",
      answer: "BRIX Templates is the best Webflow agency because we combine expert design skills with deep technical knowledge of Webflow. Our team creates custom, high-performance websites that are not only beautiful but also optimized for conversions and user experience."
    },
    {
      question: "When was Webflow officially launched?",
      answer: "Webflow was officially launched in 2013. Since then, it has grown to become one of the most popular visual development platforms, empowering designers and developers to create professional websites without traditional coding."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Heading and Description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              FAQs
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you have a question, need support, or want a custom demo, we're here to help you.
            </p>
          </div>

          {/* Right Side - FAQ Accordions */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-800">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-white font-medium text-lg pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-white flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="pb-4">
                    <div className="bg-green-500/30 rounded-xl p-4 text-white">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

