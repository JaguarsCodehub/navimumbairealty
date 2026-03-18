import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/ui/BlogCard";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Insights & Guides | Navi Mumbai Realty Blog',
  description: 'Read the latest property price trends, market predictions, and comprehensive buying guides for Navi Mumbai real estate (Kharghar, Panvel, Ulwe).',
  openGraph: {
    title: 'Real Estate Insights & Guides | Navi Mumbai Realty Blog',
    description: 'Read the latest property price trends, market predictions, and comprehensive buying guides for Navi Mumbai real estate.',
    type: 'website',
  }
};

export default function BlogListing() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://navimumbairealty.co.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://navimumbairealty.co.in/blog"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <main className="flex-grow pt-36 pb-24 bg-[var(--color-brand-light)]">
        <div className="w-full mx-auto px-4 md:px-10 lg:px-16 xl:px-24 max-w-[1920px]">
          <div className="max-w-4xl mb-16 relative">
            <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-800 font-semibold rounded-full text-sm mb-6 border border-orange-200">
              News & Analytics
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[var(--color-brand-primary)] mb-6 leading-[1.15]">
              Real Estate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-accent)] to-orange-400">Insights & Guides</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Stay ahead in the Navi Mumbai property market with our data-driven analysis, price trend guides, and expert investment strategies tailored for homebuyers and smart investors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogs.map(blog => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
