import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhyPanvel from "@/components/sections/WhyPanvel";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import BlogPreview from "@/components/sections/BlogPreview";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "name": "Navi Mumbai Realty",
        "image": "https://navimumbairealty.com/logo.png",
        "priceRange": "₹45 Lakhs - ₹3.5 Crores",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 17, Khanda Colony",
          "addressLocality": "Panvel, Navi Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "410206",
          "addressCountry": "IN"
        },
        "telephone": "+918692951226",
        "url": "https://navimumbairealty.com"
      },
      {
        "@type": "WebSite",
        "url": "https://navimumbairealty.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://navimumbairealty.com/projects?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />


      <main className="flex-grow">
        <Hero />
        <Process />
        <WhyChooseUs />
        <FeaturedProjects />
        <WhyPanvel />
        <FAQ />
        <BlogPreview />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] flex items-center justify-center hover:-translate-y-1 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
