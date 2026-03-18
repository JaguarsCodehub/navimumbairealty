"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { cn } from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/#why-us" },
    { name: "Why Panvel", href: "/#why-panvel" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3"
          : "bg-white py-5 border-gray-100"
      )}
    >
      <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-[1600px]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Navi Mumbai Realty" 
              width={180} 
              height={50} 
              className="h-10 w-auto object-contain"
            />
            <div className="font-heading font-bold text-xl md:text-2xl leading-none text-[var(--color-brand-primary)] transition-colors">
              Navi Mumbai {" "}
              <span className="text-xl md:text-2xl text-[var(--color-brand-accent)] transition-colors">Realty</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isScrolled ? "text-gray-700 hover:text-[var(--color-brand-accent)]" : "text-gray-700 hover:text-[var(--color-brand-accent)]"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a href="tel:+918692951226" className={cn(
                "flex items-center gap-2 transition-colors text-sm font-medium",
                isScrolled ? "text-[var(--color-brand-primary)] hover:text-[var(--color-brand-accent)]" : "text-[var(--color-brand-primary)] hover:text-[var(--color-brand-accent)]"
              )}>
                <Phone size={16} />
                <span>+91 86929 51226</span>
              </a>
              <Link href="/#contact">
                <Button size="sm">Book Visit</Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
            <button
            className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-[var(--color-brand-primary)]" : "text-[var(--color-brand-primary)]")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 border-t border-gray-100 flex flex-col px-4">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-gray-800 font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
             <a href="tel:+918692951226" className="flex items-center gap-2 justify-center py-2 text-[var(--color-brand-primary)] font-medium">
                <Phone size={18} />
                <span>+91 86929 51226</span>
              </a>
            <Link href="/#contact" className="w-full block" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full">Book Site Visit</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
