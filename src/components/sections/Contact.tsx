"use client";

import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import * as motion from 'framer-motion/client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <SectionTitle 
              title="Find Your Dream Home Today"
              subtitle="Contact Us"
              alignment="left"
            />
            <p className="text-gray-600 mb-10 text-lg leading-relaxed font-light max-w-md">
              Let our experts guide you to the perfect property investment in Navi Mumbai and Panvel. Reach out to us for any queries or to schedule a site visit.
            </p>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="flex items-center p-4 rounded-xl border border-gray-100 shadow-sm bg-gray-50/50 hover:border-[var(--color-brand-accent)]/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-brand-accent)] group-hover:bg-[var(--color-brand-accent)] group-hover:text-white transition-colors mr-4 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium mb-1">Call Us Directly</div>
                  <a href="tel:+918692951226" className="text-[var(--color-brand-primary)] font-semibold text-lg hover:text-[var(--color-brand-accent)] transition-colors">+91 86929 51226</a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center p-4 rounded-xl border border-gray-100 shadow-sm bg-gray-50/50 hover:border-[var(--color-brand-accent)]/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-brand-accent)] group-hover:bg-[var(--color-brand-accent)] group-hover:text-white transition-colors mr-4 shrink-0">
                   <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium mb-1">Email Us</div>
                  <a href="mailto:info@navimumbairealty.com" className="text-[var(--color-brand-primary)] font-semibold text-lg hover:text-[var(--color-brand-accent)] transition-colors">info@navimumbairealty.com</a>
                </div>
              </motion.div>

               <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-start p-4 rounded-xl border border-gray-100 shadow-sm bg-gray-50/50 hover:border-[var(--color-brand-accent)]/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-brand-accent)] group-hover:bg-[var(--color-brand-accent)] group-hover:text-white transition-colors mr-4 shrink-0 mt-1">
                   <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium mb-1">Office Address</div>
                  <div className="text-[var(--color-brand-primary)] font-semibold leading-relaxed">2443+H6M, Sector 17,<br/>Khanda Colony, Panvel, Maharashtra 410206</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-accent)]/5 rounded-bl-[100px] -z-10" />
            
            <h3 className="text-2xl font-heading font-semibold text-[var(--color-brand-primary)] mb-6">Book a Site Visit</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/50 focus:border-[var(--color-brand-accent)] transition-all bg-gray-50/50" placeholder="John" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/50 focus:border-[var(--color-brand-accent)] transition-all bg-gray-50/50" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/50 focus:border-[var(--color-brand-accent)] transition-all bg-gray-50/50" placeholder="+91 86929 51226" />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="interest" className="text-sm font-medium text-gray-700">Project of Interest</label>
                <select id="interest" defaultValue="" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/50 focus:border-[var(--color-brand-accent)] transition-all bg-gray-50/50 text-gray-600">
                  <option value="" disabled>Select a project</option>
                  <option value="vistara-world">Vistara World</option>
                  <option value="vistara-garden">Vistara Garden</option>
                  <option value="dream-city">Dream City</option>
                  <option value="vrundavan-residency">Vrundavan Residency</option>
                  <option value="nandanvan-heights">Nandanvan Heights</option>
                  <option value="urban-rain-forest">Urban Rain Forest</option>
                  <option value="jai-malhar-apartments">Jai Malhar Apartments</option>
                  <option value="gokul-heights">Gokul Heights</option>
                  <option value="bright-enclave">Bright Enclave</option>
                  <option value="shanmukhi">Shanmukhi</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <Button size="lg" className="w-full mt-4">
                Request Callback
              </Button>

              <div className="flex items-center justify-center pt-2 gap-2 text-sm text-gray-500">
                <span>Or chat with us directly via</span>
                <a href="#" className="flex items-center gap-1 text-[#25D366] font-medium hover:underline">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
