import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-primary-dark)] text-[#A0ABC0] pt-16 pb-8 border-t border-[var(--color-brand-accent)]/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Navi Mumbai Realty" 
                width={180} 
                height={50} 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div className="font-heading font-bold text-2xl text-white leading-none">
                Navi Mumbai <br />
                <span className="text-[var(--color-brand-accent)]">Realty</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Your trusted partner in finding premium, affordable, and legally verified homes in Panvel and Navi Mumbai.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-accent)] hover:text-white transition-all text-white/70">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-accent)] hover:text-white transition-all text-white/70">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-accent)] hover:text-white transition-all text-white/70">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-[var(--color-brand-accent)] transition-colors inline-block">Home</Link></li>
              <li><Link href="#why-us" className="hover:text-[var(--color-brand-accent)] transition-colors inline-block">About Us</Link></li>
              <li><Link href="#projects" className="hover:text-[var(--color-brand-accent)] transition-colors inline-block">Projects in Panvel</Link></li>
              <li><Link href="#why-panvel" className="hover:text-[var(--color-brand-accent)] transition-colors inline-block">Why Invest</Link></li>
              <li><Link href="#faq" className="hover:text-[var(--color-brand-accent)] transition-colors inline-block">FAQs</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6 text-lg">Featured Projects</h4>
            <ul className="space-y-3">
              <li><Link href="/projects/vistara-world" className="hover:text-[var(--color-brand-accent)] transition-colors inline-block">Vistara World</Link></li>
              <li><Link href="/projects/dream-city" className="hover:text-[var(--color-brand-accent)] transition-colors inline-block">Dream City</Link></li>
              <li><Link href="/projects/vrundavan-residency" className="hover:text-[var(--color-brand-accent)] transition-colors inline-block">Vrundavan Residency</Link></li>
              <li><Link href="/projects/nandanvan-heights" className="hover:text-[var(--color-brand-accent)] transition-colors inline-block">Nandanvan Heights</Link></li>
              <li><Link href="/projects/urban-rain-forest" className="hover:text-[var(--color-brand-accent)] transition-colors inline-block">Urban Rain Forest</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--color-brand-accent)] shrink-0 mt-1" size={18} />
                <span className="text-sm leading-relaxed">2443+H6M, Sector 17, Khanda Colony, Panvel, Maharashtra 410206</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[var(--color-brand-accent)] shrink-0" size={18} />
                <a href="tel:+918692951226" className="hover:text-white transition-colors">+91 86929 51226</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[var(--color-brand-accent)] shrink-0" size={18} />
                <a href="mailto:info@navimumbairealty.com" className="hover:text-white transition-colors">info@navimumbairealty.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm">
          <p>&copy; {new Date().getFullYear()} Navi Mumbai Realty. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
