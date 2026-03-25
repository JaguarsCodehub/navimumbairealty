"use client";

import React, { useState } from 'react';
import * as motion from 'framer-motion/client';
import Image from 'next/image';
import { Search, Crosshair, SlidersHorizontal, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Panvel");

  const tabs = [
    { name: "Panvel", icon: <MapPin size={14} className="text-[#db9932]" /> },
    { name: "Kharghar" },
    { name: "Vashi" },
    { name: "Nerul" },
    { name: "Belapur" },
    { name: "Airoli", badge: "Hot" },
  ];

  const locations = [
    "Navi Mumbai", "Panvel", "Kharghar", "Vashi", "Nerul", 
    "Belapur", "Seawoods", "Airoli", "Ghansoli", "Kopar Khairane", 
    "Sanpada", "Ulwe", "Taloja", "Kamothe", "Kalamboli"
  ];

  return (
    <section className="relative w-full h-[600px] md:h-[70vh] min-h-[500px] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.jpg"
          alt="Minimalist abstract background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-4 w-full max-w-5xl text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-8"
        >
          <h1 className="text-xl md:text-4xl lg:text-4xl font-bold text-white mb-4 drop-shadow-md flex items-center justify-center flex-wrap gap-2">
            Find Your Dream Home on Navi Mumbai Realty
          </h1>
          <p className="text-white/90 font-medium md:text-lg drop-shadow">
            Over <span className="font-bold text-white">40K+</span> properties worth 3 Billion Dollars sold with <span className="font-bold text-white">0%</span> brokerage!
          </p>
        </motion.div>

        {/* Search Component */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="w-full bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar border-b border-gray-100 bg-white">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-1.5 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab.name 
                  ? "text-[#1a1a1a] border-b-2 border-[#1a1a1a]" 
                  : "text-gray-600 hover:text-black"
                }`}
              >
                {tab.icon}
                {tab.name}
                {tab.badge && (
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] bg-[#db9932] font-bold text-white rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search Inputs */}
          <div className="flex flex-col md:flex-row items-center p-2 gap-2 bg-white">
            
            {/* City Dropdown */}
            <div className="w-full md:w-auto md:min-w-[160px] flex items-center relative px-2 bg-white rounded-lg md:border-r border-gray-100">
              <select className="w-full h-12 px-3 text-sm font-medium text-gray-700 bg-transparent outline-none appearance-none cursor-pointer relative z-10">
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <svg className="w-4 h-4 text-gray-500 absolute right-4 z-0 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>

            {/* Input Field */}
            <div className="flex-1 w-full flex items-center px-4 h-14 bg-white rounded-md">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input 
                type="text"
                placeholder="Search a Locality, Property or Developer"
                className="w-full text-[15px] bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 font-medium"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 px-4 w-full md:w-auto justify-between md:justify-end">
              
              <Button className="w-full md:w-auto bg-[#18181b] hover:bg-black text-white px-8 h-12 rounded-lg text-[15px] font-semibold transition-all">
                Find Property
              </Button>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
