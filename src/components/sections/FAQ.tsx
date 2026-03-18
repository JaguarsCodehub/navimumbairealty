"use client";

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import * as motion from 'framer-motion/client';
import { cn } from '../ui/Button';
import Link from 'next/link';

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
    },
    {
      question: 'What is the average property price in Navi Mumbai?',
      answer: 'The average property price in Navi Mumbai currently ranges from ₹6,500 to ₹18,000 per sq. ft. depending on factors like proximity to upcoming infrastructure such as the airport and metro.'
    },
    {
      question: 'Is Navi Mumbai a good place to invest?',
      answer: 'Navi Mumbai is considered one of the best investment hubs in Maharashtra. With the operational Navi Mumbai International Airport and Atal Setu, property values are appreciating steadily by up to 15% YoY.'
    },
    {
      question: 'Which areas in Navi Mumbai are developing fastest?',
      answer: 'Ulwe, Pushpak Nagar, and New Panvel are the fastest-developing areas due to massive CIDCO infrastructure development and direct proximity to the new International Airport.'
    },
    {
      question: 'How do you protect buyers against fraud?',
      answer: 'We only list properties that have active MahaRERA registrations, clear legal titles verified by our advocates, and official CIDCO allotment letters. You get 100% legal security.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--color-brand-accent)]/5 rounded-full blur-3xl pointer-events-none" />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column - Sticky Info */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-800 font-semibold rounded-full text-sm mb-6 border border-orange-200">
                  <HelpCircle size={16} /> Support & Guidance
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[var(--color-brand-primary)] mb-6 leading-[1.15]">
                  Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-accent)] to-orange-400">Questions</span>
                </h2>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-md font-light">
                  Everything you need to know about the properties, locations, and the buying process in Navi Mumbai.
                </p>
                
                <div className="bg-[var(--color-brand-primary-dark)] text-white p-8 md:p-10 rounded-3xl shadow-xl shadow-brand-primary/10 border border-white/10 hidden lg:block relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-accent)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-heading mb-3">Still have questions?</h3>
                    <p className="text-gray-300 text-base mb-8 leading-relaxed font-light">
                      Can't find the exact answer you're looking for? Talk to our real estate advisors directly.
                    </p>
                    <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-brand-primary)] font-bold rounded-xl hover:bg-[var(--color-brand-accent)] hover:text-white transition-all w-full shadow-lg hover:shadow-orange-500/30">
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "group rounded-3xl overflow-hidden transition-all duration-500 relative bg-white",
                      isOpen 
                        ? "shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-[var(--color-brand-accent)]/30" 
                        : "shadow-sm ring-1 ring-gray-100 hover:ring-gray-300 hover:shadow-md"
                    )}
                  >
                    {/* Active Gradient Bar */}
                    <div className={cn(
                      "absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-500",
                      isOpen ? "bg-[var(--color-brand-accent)]" : "bg-transparent"
                    )} />

                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-6 py-6 md:px-8 md:py-8 text-left flex justify-between items-start focus:outline-none gap-6 relative bg-transparent z-10"
                    >
                      <span className={cn(
                        "font-heading font-bold text-lg md:text-xl transition-colors duration-300 pr-4",
                        isOpen ? "text-[var(--color-brand-accent)]" : "text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-accent)]"
                      )}>
                        {faq.question}
                      </span>
                      <div className={cn(
                        "shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out mt-0.5 shadow-sm",
                        isOpen 
                          ? "bg-[var(--color-brand-accent)] text-white rotate-180" 
                          : "bg-gray-50 border border-gray-200 text-gray-500 group-hover:border-[var(--color-brand-accent)] group-hover:text-[var(--color-brand-accent)] group-hover:bg-orange-50"
                      )}>
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </button>
                    
                    <div 
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-in-out bg-transparent relative z-0",
                        isOpen ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0 pb-0"
                      )}
                    >
                      <div className="px-6 md:px-8 text-gray-600 text-base md:text-lg leading-relaxed font-light ml-2 md:ml-4 border-l-2 border-gray-100 pl-4 md:pl-6">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Mobile Contact Button */}
            <div className="mt-10 lg:hidden text-center">
               <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-primary)] text-white font-bold rounded-xl hover:bg-[var(--color-brand-accent)] transition-all w-full shadow-lg">
                  Reach Out to Us
               </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
