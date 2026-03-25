"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ChevronRight, Heart, Phone, Download, TrendingUp, ShieldCheck, ArrowUp } from 'lucide-react';
import { Button } from '../ui/Button';

export default function Process() {
  const localities = ["Panvel", "Kharghar", "Andheri West", "Kandivali East"];
  const [activeLocality, setActiveLocality] = useState("Panvel");
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1300px]">
        
        {/* Top Filter Section */}
        <div className="flex gap-4 md:items-center justify-end mb-6 overflow-x-auto hide-scrollbar">
          <div className="flex flex-wrap items-center gap-2 md:gap-3 shrink-0">
            <div className="flex items-center text-gray-400 text-sm font-medium mr-2">
              <TrendingUp size={16} className="mr-1.5" /> Popular Localities
            </div>
            {localities.map(loc => (
              <button
                key={loc}
                onClick={() => setActiveLocality(loc)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all border ${
                  activeLocality === loc 
                  ? "border-[#ea580c] text-gray-900 border" 
                  : "border-gray-200 text-gray-500 hover:border-gray-300"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Heading Section */}
        <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col">
              <div className="text-[13px] text-gray-500 font-medium tracking-wide mb-2 uppercase">
                Home <span className="text-gray-300 mx-1">/</span> <span className="text-gray-900">Mumbai</span>
              </div>
              <h2 className="text-2xl md:text-[32px] font-medium text-gray-900 tracking-tight">Trending Projects in Navi Mumbai</h2>
            </div>
          <Link href="/projects" className="text-[#ea580c] font-medium text-sm hover:text-orange-600 transition-colors hidden sm:block mt-8">
            View All
          </Link>
        </div>

        {/* Horizontal Scroll / Carousel */}
        <div className="relative group/carousel">
          <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x snap-mandatory scroll-smooth">
            {projects.slice(0, 6).map((project) => (
              <div 
                key={project.id} 
                className="snap-start shrink-0 w-[85vw] sm:w-[360px] flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-[240px] w-full bg-gray-100 rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  {/* Heart Icon top right */}
                  <div className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors cursor-pointer drop-shadow-md">
                    <Heart size={22} strokeWidth={2} />
                  </div>
                  {/* Price Tag bottom left */}
                  <div className="absolute bottom-3 left-3 bg-white text-gray-900 px-3 py-1.5 rounded-md text-[15px] font-bold shadow-sm flex items-center">
                    {getPrice(project.highlights)} <span className="w-1.5 h-1.5 rounded-full bg-gray-300 ml-2 inline-block -translate-y-px"></span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-4 pb-2 px-1 flex flex-col flex-grow">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center text-[11px] font-semibold text-gray-700 bg-gray-50 px-2 py-1 rounded-md border border-gray-200 uppercase tracking-tighter shadow-sm">
                      <ShieldCheck size={12} className="mr-1 text-black" /> RERA Verified
                    </span>
                    <span className="flex items-center text-[11px] font-semibold text-blue-600 bg-blue-50/50 px-2 py-1 rounded-md border border-blue-100 uppercase tracking-tighter">
                      <TrendingUp size={12} className="mr-1" /> Trending
                    </span>
                  </div>

                  <h3 className="text-[18px] font-semibold text-gray-900 mb-1 line-clamp-1">{project.name}</h3>
                  <p className="text-[13.5px] text-gray-600 mb-6 line-clamp-1 leading-relaxed">
                    {project.configurations.join(', ')} Apartment for Sale in Mumbai
                  </p>

                  {/* Buttons */}
                  <div className="mt-auto space-y-2.5">
                    <Button variant="outline" className="w-full justify-center text-[#ea580c] border-[#ea580c]/30 hover:bg-orange-50 hover:text-[#ea580c] h-11 rounded-md font-medium text-sm">
                      <Phone size={15} className="mr-2" /> Quick Call
                    </Button>
                    <Button className="w-full justify-center bg-[#f06e49] hover:bg-[#d95e3a] text-white h-11 border-none shadow-none rounded-md font-medium text-sm">
                      <Download size={15} className="mr-2" /> Download Brochure
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

      {/* Back to top button as in the image */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-10 right-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center text-orange-500 hover:text-orange-600 transition-colors z-50 hidden md:flex"
      >
        <ArrowUp size={24} />
      </button>
    </section>
  );
}
