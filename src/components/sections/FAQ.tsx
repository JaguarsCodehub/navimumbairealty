"use client";

import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ChevronDown } from 'lucide-react';
import * as motion from 'framer-motion/client';
import { cn } from '../ui/Button';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Why should I buy property in Panvel?',
      answer: 'Panvel is rapidly developing with major infrastructure projects including the upcoming international airport and improved connectivity to Mumbai and Pune, ensuring high ROI and excellent lifestyle.'
    },
    {
      question: 'Are the properties legally verified?',
      answer: 'Yes, all projects listed by Navi Mumbai Realty are 100% verified and compliant with legal regulations including RERA approvals. We ensure complete transparency.'
    },
    {
      question: 'Are these homes suitable for first time buyers?',
      answer: 'Absolutely. Many of our projects are specifically designed to offer affordable luxury housing, making them the perfect entry point for first-time homebuyers and smart investors.'
    },
    {
      question: 'Can I schedule a site visit?',
      answer: 'Yes, you can easily book a site visit directly from our website or by contacting our property advisors via phone or WhatsApp. We arrange seamless property tours.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <SectionTitle 
          title="Usually Asked Questions From Clients"
          subtitle="Frequently Asked Questions"
          alignment="center"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={cn(
                  "font-heading font-semibold text-lg transition-colors",
                  openIndex === index ? "text-[var(--color-brand-accent)]" : "text-[var(--color-brand-primary)]"
                )}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={cn(
                    "shrink-0 transition-transform duration-300 text-gray-400",
                    openIndex === index ? "rotate-180 text-[var(--color-brand-accent)]" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
