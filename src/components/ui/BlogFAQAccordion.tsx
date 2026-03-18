"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from './Button';
import * as motion from 'framer-motion/client';

interface BlogFAQAccordionProps {
  faqs: { question: string; answer: string }[];
}

export default function BlogFAQAccordion({ faqs }: BlogFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4 md:space-y-5">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "group rounded-2xl overflow-hidden transition-all duration-500 relative bg-white",
              isOpen 
                ? "shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-[var(--color-brand-accent)]/30" 
                : "shadow-sm ring-1 ring-gray-100 hover:ring-gray-300 hover:shadow-md"
            )}
          >
            {/* Active Gradient Bar */}
            <div className={cn(
              "absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-500 z-10",
              isOpen ? "bg-[var(--color-brand-accent)]" : "bg-transparent"
            )} />

            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-start focus:outline-none gap-6 relative bg-transparent z-10"
            >
              <span className={cn(
                "font-heading font-bold text-base md:text-lg transition-colors duration-300 pr-4",
                isOpen ? "text-[var(--color-brand-accent)]" : "text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-accent)]"
              )}>
                {faq.question}
              </span>
              <div className={cn(
                "shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out shadow-sm",
                isOpen 
                  ? "bg-[var(--color-brand-accent)] text-white rotate-180" 
                  : "bg-gray-50 border border-gray-200 text-gray-400 group-hover:border-[var(--color-brand-accent)] group-hover:text-[var(--color-brand-accent)] group-hover:bg-orange-50"
              )}>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            
            <div 
              className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out bg-transparent relative z-0",
                isOpen ? "max-h-[500px] opacity-100 pb-6 md:pb-8" : "max-h-0 opacity-0 pb-0"
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
  );
}
