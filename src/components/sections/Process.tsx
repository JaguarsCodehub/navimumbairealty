"use client";

import React from 'react';
import { Home, Phone, Key } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import * as motion from 'framer-motion/client';

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: <Home size={32} className="text-[var(--color-brand-accent)]" />,
      title: 'Explore Premium Homes',
      description: 'Discover the newest residential projects across Panvel and Navi Mumbai designed for modern living and long-term value.'
    },
    {
      number: '02',
      icon: <Phone size={32} className="text-[var(--color-brand-accent)]" />,
      title: 'Connect & Schedule Visit',
      description: 'Speak with our real estate experts and schedule a site visit to experience the property firsthand.'
    },
    {
      number: '03',
      icon: <Key size={32} className="text-[var(--color-brand-accent)]" />,
      title: 'Book Your Dream Home',
      description: 'Secure your home with a smooth and transparent booking process including documentation and financing guidance.'
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-brand-light)]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <SectionTitle 
          title="Your Journey to a Perfect Home"
          subtitle="Simple 3-Step Process"
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-accent)]/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center mb-8 relative z-10 border border-gray-100 group-hover:border-[var(--color-brand-accent)] transition-all">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--color-brand-primary)] text-white font-heading font-bold flex items-center justify-center text-sm shadow-md">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-[var(--color-brand-primary)] mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
