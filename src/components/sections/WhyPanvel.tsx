"use client";

import React from 'react';
import * as motion from 'framer-motion/client';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export default function WhyPanvel() {
  const advantages = [
    "Navi Mumbai International Airport",
    "Mumbai Pune Expressway",
    "Atal Setu Trans Harbour Link",
    "Educational Institutions",
    "Emerging Commercial Hubs",
    "Rapid Infrastructure Growth"
  ];

  return (
    <section id="why-panvel" className="py-24 bg-[var(--color-brand-primary-dark)] text-white relative overflow-hidden">
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-brand-primary)] rounded-full blur-[100px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-brand-accent)] rounded-full blur-[120px] opacity-10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-primary)]/40 to-transparent z-10" />
              <img 
                src="https://images.openai.com/static-rsc-3/Hx6KW-j3QDaKsQFfXEb4rgDMvIA6J7OL-15UZ24rTJAT0UctvW84tWfOa-cJqX_74eEOv4uEXKqawMRfit-dZJEm9ftfDyr21ysd2lmNR9Y?purpose=fullsize&v=1" 
                alt="Panvel Infrastructure" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating stats box */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.3 }}
               className="absolute -bottom-8 -right-8 md:-right-12 bg-white text-[var(--color-brand-primary)] p-6 md:p-8 rounded-2xl shadow-2xl max-w-[240px] z-20 border-l-4 border-[var(--color-brand-accent)]"
            >
                <div className="text-4xl font-heading font-bold text-[var(--color-brand-accent)] mb-2">35%</div>
                <div className="text-sm font-semibold leading-tight">Average Property Appreciation in last 5 years</div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pl-8 mt-12 lg:mt-0"
          >
            <span className="text-[var(--color-brand-accent)] font-semibold tracking-wider uppercase text-sm mb-4 block">
              Investment Hotspot
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Why Panvel is the Smartest Real Estate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-accent)] to-[#fcd34d]">Investment</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
              Panvel is emerging as one of the fastest-growing real estate destinations in India due to infrastructure, connectivity, and upcoming mega projects.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {advantages.map((adv, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  className="flex items-center text-gray-200"
                >
                  <div className="w-6 h-6 rounded-full bg-[var(--color-brand-accent)]/20 flex items-center justify-center mr-3 shrink-0">
                     <Check size={14} className="text-[var(--color-brand-accent)]" />
                  </div>
                  <span className="text-sm md:text-base font-medium">{adv}</span>
                </motion.li>
              ))}
            </ul>

            <Button size="lg" className="group">
              Contact Our Experts
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
