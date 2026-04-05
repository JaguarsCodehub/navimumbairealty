"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ChevronRight, Heart, Phone, Download, TrendingUp, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

export default function Process() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const getPrice = (highlights: string[]) => {
    const priceHighlight = highlights.find(h => h.includes('₹') || h.toLowerCase().includes('lakhs') || h.toLowerCase().includes('cr'));
    if (priceHighlight) {
      const match = priceHighlight.match(/₹[\d\.]+\s*(Lakhs|Cr)?/i);
      return match ? match[0] : 'on Request';
    }
    return 'on Request';
  };

  return (
    <section className="py-12 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1300px]">
        
        {/* Heading Section */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight">Trending Projects in Mumbai</h2>
          <Link href="/projects" className="text-[#ea580c] font-medium text-[15px] hover:text-orange-600 transition-colors hidden sm:block">
            View All
          </Link>
        </div>

        {/* Horizontal Scroll / Carousel */}
        <div className="relative group/carousel mt-4">
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {projects.slice(0, 6).map((project) => (
              <div 
                key={project.id} 
                className="snap-start shrink-0 w-[75vw] sm:w-[260px] flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-300 border border-gray-100"
              >
                {/* Image Container */}
                <Link href={`/projects/${project.slug}`} className="relative h-[190px] w-full bg-gray-100 rounded-t-xl overflow-hidden block">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 260px"
                  />
                  {/* Heart Icon top right */}
                  <div className="absolute top-3 right-3 text-white hover:text-red-500 transition-colors cursor-pointer drop-shadow-md z-20" onClick={(e) => e.preventDefault()}>
                    <Heart size={20} strokeWidth={2.5} />
                  </div>
                  {/* Price Tag bottom left */}
                  <div className="absolute bottom-3 left-3 bg-white text-gray-900 px-2.5 py-1 rounded-md text-[13px] font-extrabold shadow-sm z-20">
                    {getPrice(project.highlights)}
                  </div>
                  
                  {/* Carousel Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="w-1 h-1 rounded-full bg-white/50"></div>
                    <div className="w-1 h-1 rounded-full bg-white/50"></div>
                    <div className="w-1 h-1 rounded-full bg-white/50"></div>
                  </div>
                </Link>

                {/* Content */}
                <div className="pt-3 pb-4 px-3 flex flex-col flex-grow">
                  {/* Badges */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span className="flex items-center text-[9px] font-bold text-gray-700 bg-white px-2 py-0.5 rounded-full border border-gray-200 uppercase tracking-wider">
                      <ShieldCheck size={10} className="mr-1 text-black" /> RERA Verified
                    </span>
                    <span className="flex items-center text-[9px] font-bold text-gray-700 bg-white px-2 py-0.5 rounded-full border border-gray-200 uppercase tracking-wider">
                      <TrendingUp size={10} className="mr-1 text-blue-500" /> Trending
                    </span>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-1 line-clamp-1 hover:text-[#ea580c] transition-colors">{project.name}</h3>
                  </Link>
                  <p className="text-[13px] text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                    {project.configurations.join(', ')} Apartment for Sale in Mumbai
                  </p>

                  {/* Buttons */}
                  <div className="mt-auto">
                    <Button variant="outline" className="w-full justify-center text-[#ea580c] border-[#ea580c] hover:bg-orange-50 hover:text-[#ea580c] h-[38px] rounded-full font-semibold text-[13px]">
                      <Phone size={14} className="mr-1.5" /> Quick Call
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav Buttons (visible on hover for desktop) */}
          <button 
             onClick={scrollRight}
             className="hidden md:flex absolute -right-6 top-[35%] -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 items-center justify-center text-gray-800 hover:text-[#ea580c] transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
}
