"use client";

import React from 'react';
import * as motion from 'framer-motion/client';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-start pt-48 pb-32 overflow-hidden bg-[var(--color-brand-primary-dark)]">
      {/* Immersive Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Royal Blue Gradient Overlay for Text Readability & Mood */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-primary)]/90 via-[var(--color-brand-primary)]/40 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary-dark)]/80 via-transparent to-transparent z-20" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-12 lg:px-20 max-w-[1600px]">
        <div className="max-w-3xl text-white">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-px w-16 bg-[var(--color-brand-accent)]" />
              <span className="text-[var(--color-brand-accent)] font-semibold tracking-[0.2em] uppercase text-sm">
                Navi Mumbai Realty
              </span>
            </div> */}
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight mb-8">
              Your Dream Home in <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-light)] to-gray-400">
                Navi Mumbai — Navigated Perfectly
              </span>
            </h1>

            <div className="pl-6 border-l-2 border-[var(--color-brand-accent)] mb-10">
              <p className="text-base md:text-lg text-gray-200 font-light leading-relaxed max-w-2xl text-shadow-sm">
                From the vibrant energy of Kharghar to the growing horizons of Panvel, we guide you to the perfect address that fits your life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 items-center"
          >
            <Button size="lg" className="w-full sm:w-auto text-base group px-8 shadow-[0_0_40px_rgba(232,124,36,0.2)]">
              Find Your Home
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-white/5 border-white/20 text-white hover:bg-white hover:text-[var(--color-brand-primary)] border-2 backdrop-blur-sm">
              Schedule a Visit
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Buyer" className="w-10 h-10 rounded-full border-2 border-[var(--color-brand-primary-dark)] object-cover" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Buyer" className="w-10 h-10 rounded-full border-2 border-[var(--color-brand-primary-dark)] object-cover" />
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Buyer" className="w-10 h-10 rounded-full border-2 border-[var(--color-brand-primary-dark)] object-cover" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Buyer" className="w-10 h-10 rounded-full border-2 border-[var(--color-brand-primary-dark)] object-cover" />
                  
                  <div className="w-10 h-10 rounded-full border-2 border-[var(--color-brand-primary-dark)] bg-[var(--color-brand-accent)] flex items-center justify-center text-[10px] font-bold text-white z-10">
                    +10k
                  </div>
                </div>
                <div>
                  <div className="flex text-yellow-400 text-lg tracking-widest">★★★★★</div>
                  <div className="text-xs text-gray-300 font-medium tracking-wide">Trusted by 10,000+ Families</div>
                </div>
              </div>

              <div className="h-10 w-px bg-white/20 hidden md:block" />

              <div className="flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold text-white leading-tight">100%</div>
                  <div className="text-xs text-[var(--color-brand-accent)] tracking-wider uppercase font-medium mt-1">RERA Approved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white leading-tight">30+</div>
                  <div className="text-xs text-[var(--color-brand-accent)] tracking-wider uppercase font-medium mt-1">Top Builders</div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
