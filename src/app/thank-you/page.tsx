"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, MessageCircle, Home, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#050F1D] text-white font-sans flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#E87C24] py-2 px-4 text-center text-sm font-semibold tracking-wide">
        🎉 We&apos;ve received your request! Our expert will call you shortly.
      </div>

      {/* Minimal Header */}
      <header className="py-4 px-4 md:px-12 border-b border-white/10 bg-[#050F1D]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Navi Mumbai Realty" width={140} height={40} className="h-9 w-auto" />
            <div className="font-bold text-lg text-white hidden sm:block">
              Navi Mumbai <span className="text-[#E87C24]">Realty</span>
            </div>
          </Link>
          <a
            href="tel:+918692951226"
            className="flex items-center gap-2 bg-[#E87C24] hover:bg-[#D66D1B] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all"
          >
            <Phone size={15} />
            <span>+91 86929 51226</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E87C24]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#16325B]/40 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl w-full mx-auto text-center">
          {/* Animated Success Icon */}
          <div className="flex justify-center mb-7">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#E87C24]/10 border-2 border-[#E87C24]/30 flex items-center justify-center animate-pulse">
                <CheckCircle size={48} className="text-[#E87C24]" />
              </div>
              {/* Ripple rings */}
              <div className="absolute inset-0 rounded-full border border-[#E87C24]/20 scale-110 animate-ping" />
            </div>
          </div>

          {/* Headline */}
          <div className="inline-flex items-center gap-2 bg-[#E87C24]/10 border border-[#E87C24]/30 text-[#E87C24] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5">
            🏠 Request Received
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] tracking-tight mb-5">
            Thank You!{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E87C24] to-[#F59B4E]">
              We&apos;ll Be in Touch
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-3 font-light max-w-xl mx-auto">
            Your site visit request has been received. One of our expert property advisors 
            will call you <strong className="text-white font-semibold">within the next 5–10 minutes</strong>.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            In a hurry? Reach us directly right now 👇
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+918692951226"
              className="inline-flex items-center justify-center gap-2 bg-[#E87C24] hover:bg-[#D66D1B] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 text-base"
            >
              <Phone size={18} />
              Call Us Now
            </a>
            <a
              href="https://wa.me/918692951226?text=Hi%2C%20I%20just%20submitted%20my%20request%20on%20your%20website.%20Please%20call%20me%20back."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1aad54] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-green-500/20 hover:-translate-y-0.5 text-base"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* What Happens Next */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 mb-10 text-left">
            <h2 className="text-white font-semibold text-lg mb-5 text-center">What Happens Next?</h2>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Expert Callback",
                  desc: "Our property advisor will call you within 5–10 minutes to understand your needs.",
                },
                {
                  step: "02",
                  title: "Personalised Property Shortlist",
                  desc: "We'll handpick the best projects matching your budget, location, and requirements.",
                },
                {
                  step: "03",
                  title: "Free Site Visit",
                  desc: "We'll schedule a visit at your convenience — completely free with no pressure.",
                },
                {
                  step: "04",
                  title: "Your Dream Home",
                  desc: "Once you love it, we assist with paperwork, loan, and registration end-to-end.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#E87C24]/15 border border-[#E87C24]/30 flex items-center justify-center text-[#E87C24] text-xs font-bold shrink-0">
                    {step}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{title}</div>
                    <div className="text-gray-400 text-sm mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Main Site */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
          >
            <Home size={15} />
            Back to Main Website
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#050F1D] border-t border-white/10 py-6 px-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Navi Mumbai Realty · RERA Registered ·{" "}
          2443+H6M, Sector 17, Khanda Colony, Panvel
        </p>
      </footer>
    </div>
  );
}
