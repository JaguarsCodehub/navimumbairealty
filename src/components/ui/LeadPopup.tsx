"use client";

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2, Download, TrendingUp } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import * as motion from 'framer-motion/client';
import { submitToGoogleSheets } from '@/utils/formSubmit';

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  useEffect(() => {
    // Show after 5 seconds of user being on the site
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mapping 2 minimal fields into the existing robust Google Sheet schema
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'N/A';
    
    const result = await submitToGoogleSheets({
      firstName,
      lastName,
      phone: formData.phone,
      interest: '2026 Investment Guide PDF Download', // benefit promised in the popup
      source: 'Lead Generation Popup'
    });

    if (result.success) {
      setIsSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[var(--color-brand-primary-dark)]/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white overflow-hidden shadow-2xl w-full max-w-[540px] relative border border-gray-100"
            >
              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/10 hover:bg-black/20 text-white rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Header section with gradient */}
              <div className="relative pt-10 pb-8 px-8 bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-primary-dark)] text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-brand-accent)] rounded-full filter blur-[50px] opacity-40 translate-x-10 -translate-y-10" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-400 rounded-full filter blur-[50px] opacity-20 -translate-x-10 translate-y-10" />
                
                <div className="relative z-10 w-16 h-16 mx-auto bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/20">
                  <TrendingUp className="text-[var(--color-brand-accent)]" size={32} />
                </div>
                
                <h3 className="relative z-10 text-2xl font-bold font-heading text-white mb-2 leading-tight">
                  Unlock the 2026 Property Growth Secrets
                </h3>
                <p className="relative z-10 text-brand-light/90 text-sm font-light leading-relaxed">
                  Discover which Navi Mumbai nodes will double in value over the next 5 years.
                </p>
              </div>

              {/* Form Section */}
              <div className="bg-white relative">
                {/* Benefit Ribbon */}
                <div className="w-full bg-amber-50 border-b border-amber-200/60 py-3.5 text-center">
                  <span className="text-[10px] sm:text-[11px] md:text-xs font-bold text-amber-700 uppercase flex items-center justify-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-600"></span>
                    </span>
                    FREE ACCESS to our PROPERTY BROCHURES IN NAVI MUMBAI
                  </span>
                </div>

                <div className="p-8 pt-6 relative">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 text-green-600"
                  >
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
                    <p className="text-gray-600 text-sm">Our experts will contact you shortly with the exclusive guide.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="popup-name" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                      <input
                        id="popup-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/50 focus:border-[var(--color-brand-accent)] transition-all bg-gray-50/50"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="popup-phone" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                      <input
                        id="popup-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/50 focus:border-[var(--color-brand-accent)] transition-all bg-gray-50/50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full !mt-6 px-6 py-4 bg-[var(--color-brand-accent)] text-white font-bold rounded-xl hover:bg-orange-600 transition-all flex justify-center items-center shadow-lg shadow-orange-500/20 active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Unlocking...
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-5 w-5" />
                          Get Free Access Now
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-gray-400 text-center mt-4">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
