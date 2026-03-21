"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Phone, CheckCircle, Loader2, Shield, Star, Home, MessageCircle, Award, TrendingUp, Zap } from "lucide-react";
import { submitToGoogleSheets } from "@/utils/formSubmit";
import { motion } from "framer-motion";

const TRUST_BADGES = [
  { icon: Shield, label: "RERA Approved", sub: "100% Verified Projects" },
  { icon: Star, label: "4.9★ Rating", sub: "1,000+ Happy Families" },
  { icon: Award, label: "10+ Years", sub: "Trusted Experience" },
  { icon: Home, label: "30+ Projects", sub: "Across Navi Mumbai" },
];

const HIGHLIGHTS = [
  "Free Site Visit — No Obligation",
  "Best Price Guarantee",
  "End-to-End Home Loan Assistance",
  "RERA Verified Projects Only",
  "Personal Relationship Manager",
];

const FOMO_MESSAGES = [
  { icon: Zap, text: "🎉 100% RERA Approved Projects + Free Site Visit & Home Loan Assistance!", color: "text-white" },
  { icon: TrendingUp, text: "🔥 Only 4 Units Left! Price Hike of ₹2 Lakhs from April 1st. Book Now!", color: "text-white" },
];

export default function LandingPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    interest: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Push GTM event on form submit attempt
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "lead_form_submit",
        form_location: "landing_page",
        project_interest: formData.interest,
      });
    }

    const result = await submitToGoogleSheets({
      ...formData,
      source: "Landing Page",
    });

    if (result.success) {
      // Push GTM conversion event on success
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "lead_form_success",
          form_location: "landing_page",
        });
      }
      router.push("/thank-you");
    } else {
      alert("Something went wrong. Please call us directly at +91 86929 51226");
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-[#050F1D] text-white font-sans">
      {/* ── Top Bar Marquee ── */}
      <div className="bg-[#2476E8] py-4 overflow-hidden relative border-b border-black/10 shadow-lg z-[60]">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {/* First set */}
          {FOMO_MESSAGES.map((msg, i) => (
            <div key={`top1-${i}`} className="flex items-center gap-4 px-20">
              <msg.icon size={24} className="text-white fill-white/20" />
              <span className="text-white text-lg md:text-xl drop-shadow-sm">
                {msg.text}
              </span>
            </div>
          ))}
          {/* Second set */}
          {FOMO_MESSAGES.map((msg, i) => (
            <div key={`top2-${i}`} className="flex items-center gap-4 px-20">
              <msg.icon size={24} className="text-white fill-white/20" />
              <span className="text-white text-lg md:text-xl drop-shadow-sm">
                {msg.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Navbar (minimal) ── */}
      <header className="sticky top-0 z-50 bg-[#050F1D]/95 backdrop-blur-md border-b border-white/10 py-4 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Navi Mumbai Realty" width={140} height={40} className="h-9 w-auto" />
            <div className="font-bold text-lg text-white hidden sm:block">
              Navi Mumbai <span className="text-[#E87C24]">Realty</span>
            </div>
          </div>
          <a
            href="tel:+918692951226"
            className="flex items-center gap-2 bg-[#E87C24] hover:bg-[#D66D1B] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg shadow-orange-500/20"
          >
            <Phone size={15} />
            <span className="hidden sm:inline">+91 86929 51226</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero + Form Section ── */}
        <section className="relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#050F1D] to-[#0B1F3A]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#E87C24]/5 blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#16325B]/60 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Copy */}
            <motion.div 
              className="order-2 lg:order-1"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Badge */}
              <motion.div 
                variants={itemVariants}
                animate={{
                  scale: [1, 1.02, 1],
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="inline-flex items-center gap-2 bg-[#E87C24]/10 border border-[#E87C24]/30 text-[#E87C24] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(232,124,36,0.1)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87C24] animate-pulse" />
                New Launches — Panvel, Kharghar &amp; Ulwe
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight mb-5"
              >
                Find Your Dream Home in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E87C24] to-[#F59B4E]">
                  Navi Mumbai
                </span>{" "}
                — Before It&apos;s Gone
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-gray-300 text-lg leading-relaxed mb-8 font-light"
              >
                Premium 1, 2 &amp; 3 BHK flats starting at just <strong className="text-white font-semibold">₹45 Lakhs</strong>. RERA approved. 
                Limited units. Get a personalised callback from our expert within minutes.
              </motion.p>

              {/* Highlights */}
              <motion.ul variants={itemVariants} className="space-y-3 mb-10">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-200">
                    <CheckCircle size={17} className="text-[#E87C24] shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>

              {/* Trust badges */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 text-center hover:border-[#E87C24]/40 transition-colors"
                  >
                    <Icon size={22} className="text-[#E87C24] mx-auto mb-1.5" />
                    <div className="text-white font-semibold text-xs leading-tight">{label}</div>
                    <div className="text-gray-400 text-[10px] mt-0.5">{sub}</div>
                  </div>
                ))}
              </motion.div>

              {/* Social proof */}
              <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=70",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=60&q=70",
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=60&q=70",
                  ].map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt="Happy buyer"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-[#050F1D] object-cover"
                    />
                  ))}
                </div>
                <span>
                  Joined by <strong className="text-white">10,000+ families</strong> who found their dream home
                </span>
              </motion.div>
            </motion.div>

            {/* Right: Form Card */}
            <motion.div 
              className="order-1 lg:order-2 lg:sticky lg:top-28"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative bg-white rounded-2xl p-7 md:p-8 shadow-2xl shadow-black/40 overflow-hidden">
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E87C24] to-[#F59B4E]" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#E87C24]/5 rounded-bl-[100px] -z-0" />

                <div className="relative z-10">
                  <div className="mb-5">
                    <h2 className="text-2xl font-bold text-[#0B1F3A] leading-tight">
                      Get a Free Callback
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      Our property expert will call you within 5 minutes.
                    </p>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="firstName" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Rahul"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E87C24]/40 focus:border-[#E87C24] transition-all text-[#0B1F3A] text-sm bg-gray-50"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lastName" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Sharma"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E87C24]/40 focus:border-[#E87C24] transition-all text-[#0B1F3A] text-sm bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">+91</span>
                        <input
                          type="tel"
                          id="phone"
                          required
                          pattern="[6-9][0-9]{9}"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="86929 51226"
                          className="w-full pl-14 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E87C24]/40 focus:border-[#E87C24] transition-all text-[#0B1F3A] text-sm bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="interest" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Project of Interest *
                      </label>
                      <select
                        id="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E87C24]/40 focus:border-[#E87C24] transition-all text-[#0B1F3A] text-sm bg-gray-50"
                      >
                        <option value="" disabled>— Select a project —</option>
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

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#E87C24] hover:bg-[#D66D1B] disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          🏠 Book My Free Site Visit
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400 leading-relaxed">
                      By submitting, you agree to be contacted by our team.
                      <br />No spam. No obligation. 100% free.
                    </p>
                  </form>

                  {/* WhatsApp CTA */}
                  <div className="mt-5 pt-5 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-400 mb-3">Prefer to chat first?</p>
                    <a
                      href="https://wa.me/918692951226?text=Hi%2C%20I%20am%20interested%20in%20properties%20in%20Navi%20Mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#1a9e4a] hover:bg-[#25D366] hover:text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                    >
                      <MessageCircle size={16} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Why Us Strip ── */}
        <section className="py-14 bg-[#0B1F3A] border-t border-white/5 overflow-hidden">
          <motion.div 
            className="max-w-7xl mx-auto px-4 md:px-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-10">
              <p className="text-[#E87C24] font-semibold text-sm uppercase tracking-widest mb-2">Why Navi Mumbai Realty?</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">The Most Trusted Name in Panvel &amp; Navi Mumbai</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  emoji: "🔐",
                  title: "Zero Brokerage Disputes",
                  body: "We work directly with developers. No hidden fees, no middlemen, no surprises.",
                },
                {
                  emoji: "📋",
                  title: "RERA Compliant Projects Only",
                  body: "Every project we list is RERA registered. Your investment is fully protected by law.",
                },
                {
                  emoji: "🏦",
                  title: "End-to-End Loan Support",
                  body: "Pre-approved loans, lowest EMIs, and dedicated finance advisors at no extra cost.",
                },
              ].map(({ emoji, title, body }) => (
                <motion.div 
                  key={title} 
                  variants={itemVariants}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E87C24]/40 transition-colors"
                >
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-14 bg-[#050F1D] border-t border-white/5 overflow-hidden">
          <motion.div 
            className="max-w-7xl mx-auto px-4 md:px-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-10">
              <p className="text-[#E87C24] font-semibold text-sm uppercase tracking-widest mb-2">Testimonials</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Real Words from Real Homeowners</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Priya Kulkarni",
                  location: "Bought in Vistara Garden",
                  quote: "The team made our first home purchase so smooth. They handled everything from site visit to loan. Highly recommend!",
                  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=70",
                },
                {
                  name: "Rajesh Patil",
                  location: "Invested in Dream City",
                  quote: "Best investment decision I made. The advisors were transparent about pricing — no hidden surprises. The ROI has been excellent.",
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=70",
                },
                {
                  name: "Sneha Desai",
                  location: "Bought in Ulwe",
                  quote: "I was nervous about buying my first home but the relationship manager was patient and professional. They truly care.",
                  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=70",
                },
              ].map(({ name, location, quote, avatar }) => (
                <motion.div key={name} variants={itemVariants} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex text-[#E87C24] text-sm tracking-widest mb-4">★★★★★</div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">&ldquo;{quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <Image src={avatar} alt={name} width={40} height={40} className="w-10 h-10 rounded-full object-cover border-2 border-[#E87C24]/30" />
                    <div>
                      <div className="text-white font-semibold text-sm">{name}</div>
                      <div className="text-gray-500 text-xs">{location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Final CTA Banner ── */}
        <section className="py-14 bg-gradient-to-r from-[#E87C24] to-[#D66D1B] overflow-hidden">
          <motion.div 
            className="max-w-3xl mx-auto px-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Don&apos;t Miss Out — Limited Units Available
            </h2>
            <p className="text-white/80 mb-7 text-lg">
              Prices are rising. Secure your dream home today before it&apos;s too late.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+918692951226"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#E87C24] hover:bg-white/90 font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base"
              >
                <Phone size={18} />
                Call Now: +91 86929 51226
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/918692951226?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20site%20visit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1aad54] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── Footer (minimal) ── */}
      <footer className="bg-[#050F1D] border-t border-white/10 py-8 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Navi Mumbai Realty. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            2443+H6M, Sector 17, Khanda Colony, Panvel, Maharashtra 410206 &nbsp;|&nbsp;
            RERA Registered
          </p>
        </div>
      </footer>
    </div>
  );
}
