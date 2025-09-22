"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="faq-item bg-white p-6 rounded-2xl shadow-xs border border-gray-100"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="faq-toggle w-full flex justify-between items-center text-left text-lg font-medium text-gray-900"
          >
            {item.question}
            <i
              className={`fas fa-chevron-down text-gray-500 transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            ></i>
          </button>
          <div
            className={`faq-content overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="pt-4 text-gray-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


