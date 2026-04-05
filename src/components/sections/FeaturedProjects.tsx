"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { ShieldCheck, Heart, Share2, Square, ChevronRight, ChevronLeft, Phone, Play } from 'lucide-react';
import { Button } from '../ui/Button';

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getPrice = (highlights: string[]) => {
    const priceHighlight = highlights.find(h => h.includes('₹') || h.toLowerCase().includes('lakhs') || h.toLowerCase().includes('cr'));
    if (priceHighlight) {
      const match = priceHighlight.match(/₹[\d\.]+\s*(Lakhs|Cr)?/i);
      return match ? match[0] : 'on Request';
    }
    return 'on Request';
  };

  const handleProjectClick = (project: typeof projects[0]) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
  };

  const activeImages = [activeProject.image, ...(activeProject.gallery || [])];

  useEffect(() => {
    if (activeImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % activeImages.length);
    }, 3500); // Auto-slide every 3.5 seconds
    return () => clearInterval(interval);
  }, [activeImages.length, activeProject.id]);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activeImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  };

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight mb-2">Featured Projects in Navi Mumbai</h2>
          <div className="text-gray-500 text-[15px] flex items-center gap-2">
            Best Projects in Mumbai to explore <button className="text-[#ea580c] font-medium hover:underline text-[14px]">View All</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Thumbnails Sidebar */}
          <div className="w-full lg:w-[22%] flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:h-[480px] snap-x lg:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {projects.slice(0, 5).map((project) => (
              <button
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`snap-start shrink-0 flex flex-col items-start w-[160px] lg:w-full text-left transition-all duration-300 group ${activeProject.id === project.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
              >
                <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 mb-2 ${activeProject.id === project.id ? 'ring-2 ring-offset-2 ring-gray-200' : ''}`}>
                  <Image fill src={project.image} alt={project.name} className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className={`text-[14px] px-1 ${activeProject.id === project.id ? 'font-bold text-gray-900' : 'font-medium text-gray-500'}`}>
                  {project.name}
                </h4>
              </button>
            ))}
          </div>

          {/* Master View */}
          <div className="w-full lg:w-[78%] bg-[#FDF7F4] rounded-2xl p-2.5 flex flex-col md:flex-row relative lg:h-[480px]">
            
            {/* Display Image Container */}
            <div className="relative w-full md:w-[63%] h-[300px] md:h-full rounded-[12px] overflow-hidden group/image">
               <Image fill src={activeImages[currentImageIndex]} alt={activeProject.name} className="object-cover" />
               {/* Controls overlaid */}
               <div className="absolute top-4 left-4 z-10 w-9 h-9 bg-white/30 backdrop-blur-md flex items-center justify-center rounded-md cursor-pointer hover:bg-white/50 transition border border-white/40 shadow-sm">
                  <Play size={16} className="text-white ml-0.5" fill="white" />
               </div>
               
               {/* Carousel Arrows Inside Image bounds */}
               {activeImages.length > 1 && (
                 <div className="absolute inset-y-0 w-full flex justify-between items-center px-4 pointer-events-none z-10 opacity-0 group-hover/image:opacity-100 transition-opacity">
                   <button onClick={handlePrevImage} className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto hover:bg-black transition shadow-sm border border-black/20">
                      <ChevronLeft size={20} />
                   </button>
                   <button onClick={handleNextImage} className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto hover:bg-black transition shadow-sm border border-black/20">
                      <ChevronRight size={20} />
                   </button>
                 </div>
               )}
            </div>

            {/* Info Panel Container */}
            <div className="w-full md:w-[37%] bg-white rounded-[12px] flex flex-col relative h-full">
               
               {/* Arrow protruding Right */}
               <button className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-100 text-gray-800 z-20 hover:text-[#ea580c] transition-colors hidden lg:flex">
                 <ChevronRight size={22} />
               </button>

               <div className="p-6 md:p-8 flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center p-1.5 overflow-hidden">
                       <Image src="/logo.png" width={40} height={40} className="object-contain opacity-70" alt="logo" />
                    </div>
                    <div>
                      <h5 className="text-[12px] font-bold text-gray-800 leading-tight">Navi Mumbai Realty</h5>
                      <p className="text-[11px] text-[#ea580c] cursor-pointer hover:underline">View All Projects</p>
                    </div>
                 </div>

                 <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-1.5 pr-2">{activeProject.name}</h3>
                 <p className="text-[12px] text-gray-500 mb-5 leading-relaxed">at {activeProject.configurations.join(', ')}</p>

                 <span className="inline-flex items-center text-[10px] font-bold text-gray-800 bg-white px-2.5 py-1 rounded-full border border-gray-200 uppercase tracking-wide w-max mb-8 shadow-sm">
                    <ShieldCheck size={12} className="mr-1 text-black" /> RERA Verified
                 </span>

                 <div className="space-y-4 mb-4 flex-grow">
                    {activeProject.configurations.length > 0 && (
                       <p className="text-[13px] text-gray-700">{activeProject.configurations.join(', ')} Apartment</p>
                    )}
                    {activeProject.highlights.slice(0, 2).map((h, i) => (
                      <p key={i} className="text-[13px] text-gray-700">{h.replace(/Starting From ₹[\d\.]+\s*(Lakhs|Cr)?/i, "").trim()}</p>
                    ))}
                 </div>

                 <div className="mt-auto">
                    <div className="flex items-baseline gap-1.5 mb-5 flex-wrap">
                       <span className="text-[14px] text-gray-500 font-semibold">INR</span>
                       <strong className="text-[22px] font-bold text-gray-900 tracking-tight">{getPrice(activeProject.highlights).replace('₹', '').trim()}</strong>
                       <span className="text-[14px] text-gray-500">Onwards</span>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                       <Button className="flex-1 bg-gray-900 hover:bg-black text-white rounded-full h-[46px] font-semibold text-[14px]">
                          <Phone size={16} className="mr-2" /> Contact Now
                       </Button>
                       <button className="w-[46px] h-[46px] rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 hover:bg-red-50 transition-colors shrink-0">
                          <Heart size={20} />
                       </button>
                    </div>

                    <div className="flex items-center justify-between px-1">
                       <button className="flex items-center text-[12px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
                          <Square size={14} className="mr-1.5" /> Add to compare
                       </button>
                       <button className="flex items-center text-[12px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
                          <Share2 size={14} className="mr-1.5" /> Share Details
                       </button>
                    </div>
                 </div>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
