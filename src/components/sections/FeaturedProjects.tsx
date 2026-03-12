"use client";

import React from 'react';
import Link from 'next/link';
import * as motion from 'framer-motion/client';
import { projects } from '@/data/projects';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { MapPin, ArrowRight, Expand, Zap, CheckCircle2 } from 'lucide-react';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle 
            title="New Residential Projects in Panvel"
            subtitle="Our Projects"
            alignment="left"
            className="mb-0"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md text-gray-600 font-light"
          >
            Explore premium yet affordable residential developments designed for modern families and smart investors.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary-dark)]/80 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="px-3 py-1 bg-[var(--color-brand-accent)] text-white text-xs font-semibold rounded-full shadow-lg tabular-nums tracking-wide">
                    New Launch
                  </span>
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-2xl font-heading font-semibold text-white mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <MapPin size={14} className="mr-1 text-[var(--color-brand-accent)]" /> 
                    Panvel, Navi Mumbai
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow bg-white relative">
                 <div className="absolute -top-6 right-6 z-30 w-12 h-12 bg-[var(--color-brand-primary)] text-[var(--color-brand-accent)] rounded-full flex items-center justify-center shadow-xl group-hover:bg-[var(--color-brand-accent)] group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                 </div>

                {/* Configurations */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                     <Expand size={16} className="text-gray-400" />
                     <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Configurations</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.configurations.map(conf => (
                      <span key={conf} className="px-3 py-1 bg-gray-50 border border-gray-100 text-[var(--color-brand-primary)] text-sm rounded-md font-medium">
                        {conf}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-8 flex-grow">
                   <div className="flex items-center gap-2 mb-3">
                     <Zap size={16} className="text-gray-400 focus:fill-[var(--color-brand-accent)]" />
                     <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Project Highlights</h4>
                  </div>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-[var(--color-brand-accent)] mr-2 mt-0.5 shrink-0" />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link href={`/projects/${project.slug}`} className="block mt-auto">
                  <Button variant="outline" className="w-full justify-between group/btn">
                    View Details
                    <ArrowRight size={18} className="text-[var(--color-brand-accent)] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <Button size="lg" className="px-10">View All Properties</Button>
        </div>
      </div>
    </section>
  );
}
