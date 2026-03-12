"use client";

import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ShieldCheck, Scale, Users, Star } from 'lucide-react';
import * as motion from 'framer-motion/client';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={40} className="text-[var(--color-brand-accent)]" />,
      title: 'Trusted Properties',
      description: 'Handpicked residential projects in Navi Mumbai and Panvel ensuring high construction quality and excellent location advantages.',
    },
    {
      icon: <Scale size={40} className="text-[var(--color-brand-accent)]" />,
      title: 'Legal Assurance',
      description: 'Every property listed is 100% verified and legally approved, ensuring safe and secure investments.',
    },
    {
      icon: <Users size={40} className="text-[var(--color-brand-accent)]" />,
      title: 'Dedicated Support',
      description: 'Our real estate advisors guide you through the entire buying journey — from project selection to final registration.',
    },
    {
      icon: <Star size={40} className="text-[var(--color-brand-accent)]" />,
      title: 'Trusted by Homebuyers',
      description: 'Thousands of satisfied homebuyers trust Navi Mumbai Realty to find their perfect home and investment opportunities.',
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-brand-primary)]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <SectionTitle 
          title="Trusted Real Estate Experts in Panvel & Navi Mumbai"
          subtitle="Why Choose Navi Mumbai Realty"
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-primary)]/5 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-[var(--color-brand-primary)] mb-4 group-hover:text-[var(--color-brand-accent)] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
