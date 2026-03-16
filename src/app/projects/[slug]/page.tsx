"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button, cn } from '@/components/ui/Button';
import { MapPin, ArrowLeft, CheckCircle2, Phone, Download, ChevronRight, ChevronLeft, ZoomIn, ZoomOut, RotateCcw, Loader2, CheckCircle } from 'lucide-react';
import * as motion from 'framer-motion/client';
import Image from 'next/image';
import { submitToGoogleSheets } from '@/utils/formSubmit';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [activeImage, setActiveImage] = React.useState(0);
  const [scale, setScale] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value, placeholder } = e.target;
    const field = type === 'text' ? 'name' : type === 'tel' ? 'phone' : 'email';
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await submitToGoogleSheets({
      ...formData,
      interest: project?.name,
      source: `Project Detail: ${project?.name}`
    });

    if (result.success) {
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      alert("Something went wrong. Please try again or call us directly.");
    }
    
    setIsSubmitting(false);
  };

  React.useEffect(() => {
    if (project?.image) {
      setActiveImage(0);
      setScale(1);
    }
  }, [project]);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 1));
  const handleResetZoom = () => setScale(1);

  const onImageChange = (index: number) => {
    setActiveImage(index);
    setScale(1);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center flex-col pt-24">
          <h1 className="text-3xl font-heading font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--color-brand-accent)] transition-colors mb-6 group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Left Column - Image & Details */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="h-[400px] md:h-[600px] relative group bg-gray-900 overflow-hidden">
                  <motion.div 
                    className="w-full h-full relative"
                    animate={{ scale }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Image 
                      src={project.gallery && project.gallery.length > 0 ? (activeImage === 0 ? project.image : project.gallery[activeImage - 1]) : project.image} 
                      alt={project.name} 
                      fill
                      className={cn(
                        "object-contain transition-transform duration-500",
                        project.rotateGallery && "-rotate-90 scale-[1.4]"
                      )}
                    />
                  </motion.div>
                  
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <button 
                      onClick={handleZoomIn}
                      className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg border border-white/10"
                      title="Zoom In"
                    >
                      <ZoomIn size={20} />
                    </button>
                    <button 
                      onClick={handleZoomOut}
                      className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg border border-white/10"
                      title="Zoom Out"
                    >
                      <ZoomOut size={20} />
                    </button>
                    <button 
                      onClick={handleResetZoom}
                      className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg border border-white/10"
                      title="Reset Zoom"
                    >
                      <RotateCcw size={20} />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                     <span className="px-4 py-1.5 bg-[var(--color-brand-primary)] text-[#fcd34d] text-sm font-semibold rounded-full shadow-lg border border-[#fcd34d]/20 uppercase tracking-widest">
                      Premium
                    </span>
                  </div>

                  {project.gallery && project.gallery.length > 0 && (
                    <>
                      <button 
                        onClick={() => onImageChange(activeImage === 0 ? project.gallery!.length : activeImage - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={() => onImageChange(activeImage === project.gallery!.length ? 0 : activeImage + 1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>

                {project.gallery && project.gallery.length > 0 && (
                   <div className="p-4 bg-gray-50 flex gap-3 overflow-x-auto border-b border-gray-100 scrollbar-hide">
                      <button 
                        onClick={() => onImageChange(0)}
                        className={cn(
                          "relative min-w-[100px] h-[70px] rounded-lg overflow-hidden border-2 transition-all shrink-0",
                          activeImage === 0 ? "border-[var(--color-brand-accent)] shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                        )}
                      >
                        <Image src={project.image} alt="Preview 0" fill className="object-cover" />
                      </button>
                      {project.gallery.map((img, idx) => (
                        <button 
                          key={idx}
                          onClick={() => onImageChange(idx + 1)}
                          className={cn(
                            "relative min-w-[100px] h-[70px] rounded-lg overflow-hidden border-2 transition-all shrink-0",
                            activeImage === idx + 1 ? "border-[var(--color-brand-accent)] shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                          )}
                        >
                          <Image src={img} alt={`Preview ${idx + 1}`} fill className="object-cover" />
                        </button>
                      ))}
                   </div>
                )}
                
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <h1 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-brand-primary)] mb-3">
                        {project.name}
                      </h1>
                      <div className="flex items-center text-gray-500 font-medium">
                        <MapPin size={18} className="mr-2 text-[var(--color-brand-accent)]" /> 
                        Panvel, Navi Mumbai
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-[var(--color-brand-primary)] mb-4">Configurations Available</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.configurations.map(conf => (
                          <span key={conf} className="px-4 py-2 bg-gray-50 border border-gray-100 text-[var(--color-brand-primary)] text-sm rounded-lg font-medium">
                            {conf}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-[var(--color-brand-primary)] mb-4">Project Highlights</h3>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <CheckCircle2 size={18} className="text-[var(--color-brand-accent)] mr-3 mt-0.5 shrink-0" />
                            <span className="leading-snug">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-[var(--color-brand-accent)]/20 sticky top-28"
              >
                <h3 className="text-2xl font-heading font-semibold text-[var(--color-brand-primary)] mb-2">Interested in {project.name}?</h3>
                <p className="text-gray-500 text-sm mb-6">Drop your details below and our experts will get in touch with you shortly.</p>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/50 focus:border-[var(--color-brand-accent)] bg-gray-50/50" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/50 focus:border-[var(--color-brand-accent)] bg-gray-50/50" 
                      placeholder="+91 86929 51226" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/50 focus:border-[var(--color-brand-accent)] bg-gray-50/50" 
                      placeholder="Email Address" 
                    />
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full mt-2"
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Request Sent!
                      </>
                    ) : (
                      "Request Pricing & Details"
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                  <a href="tel:+918692951226" className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-[var(--color-brand-primary)]/5 text-[var(--color-brand-primary)] font-medium hover:bg-[var(--color-brand-primary)]/10 transition-colors">
                    <Phone size={18} /> Call Us Now
                  </a>
                  <button className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-600 font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors">
                    <Download size={18} /> Download Brochure
                  </button>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
