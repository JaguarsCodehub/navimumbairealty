"use client";

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2, PhoneCall, Car, IndianRupee, Phone } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import * as motion from 'framer-motion/client';
import { submitToGoogleSheets } from '@/utils/formSubmit';
import Image from 'next/image';

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
      interest: 'Offers & Call Back',
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-[700px] relative flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 lg:gap-12 w-full">
                
                {/* Left Column (Desktop) / Top Section (Mobile) */}
                <div className="w-full md:w-[220px] shrink-0 flex flex-col items-center">
                  {/* Logo above the box */}
                  <div className="mb-6 self-start w-full flex justify-center md:justify-start items-center gap-2">
                    <Image 
                      src="/logo.png" 
                      alt="Navi Mumbai Realty" 
                      width={60} 
                      height={45} 
                      className="h-10 w-auto object-contain"
                    />
                    <div className="font-heading font-bold text-lg leading-none text-gray-800">
                      Navi Mumbai {" "}
                      <span className="text-blue-600">Realty</span>
                    </div>
                  </div>
                  
                  {/* We Promise Box */}
                  <div className="bg-[#f8f9fa] rounded-2xl p-5 w-full flex-1 md:min-h-[250px]">
                    <h3 className="text-[17px] font-bold text-center text-blue-600 mb-6">We Promise</h3>
                    
                    <div className="space-y-6">
                       <div className="flex items-center gap-3 w-full">
                         <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                           <PhoneCall className="text-blue-600 w-7 h-7 stroke-[1.5]" />
                         </div>
                         <span className="font-semibold text-blue-600 text-[13.5px] leading-tight">Instant Call<br/>Back</span>
                       </div>
                       <div className="flex items-center gap-3 w-full">
                         <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                           <Car className="text-blue-600 w-7 h-7 stroke-[1.5]" />
                         </div>
                         <span className="font-semibold text-blue-600 text-[13.5px] leading-tight">Free Site<br/>Visit</span>
                       </div>
                       <div className="flex items-center gap-3 w-full">
                         <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                           <IndianRupee className="text-blue-600 w-7 h-7 stroke-[1.5]" />
                         </div>
                         <span className="font-semibold text-blue-600 text-[13.5px] leading-tight">Unmatched<br/>Price</span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="flex-1 pt-2 md:pt-14 relative w-full">
                  {isSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6 text-green-600 h-full flex flex-col justify-center"
                    >
                      <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
                      <p className="text-gray-600 text-sm">Our experts will contact you shortly.</p>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-[17px] sm:text-lg font-bold text-gray-800 mb-8 md:text-left text-center leading-snug">
                        Register Here And Avail The <span className="text-[#ef4444]">Best Offers!!</span>
                      </h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-6 max-w-[320px] mx-auto md:mx-0">
                        <div>
                          <input
                            id="popup-name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Name"
                            className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-gray-800 placeholder:text-gray-400 font-medium text-[15px]"
                          />
                        </div>
                        
                        <div className="flex items-center border-b border-gray-300 focus-within:border-blue-600 transition-colors">
                          <div className="flex items-center gap-1 pr-3 py-2 text-gray-700 font-medium whitespace-nowrap text-[15px]">
                            India (+91)
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 opacity-50">
                              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <input
                            id="popup-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="Phone number"
                            className="w-full py-2 bg-transparent text-gray-800 placeholder:text-gray-400 focus:outline-none font-medium text-[15px]"
                          />
                        </div>

                        <div className="!mt-8 flex justify-center md:justify-start">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-lg transition-all flex justify-center items-center active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mx-auto md:mx-0 w-full sm:w-auto"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              "Get Instant Call Back"
                            )}
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="bg-blue-600 text-white text-center py-4 flex items-center justify-center gap-2.5 mt-2">
                 <Phone size={20} className="fill-white" />
                 <span className="text-[17px] sm:text-xl font-bold tracking-wide">+91 8692951226</span>
              </div>
            </motion.div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
