"use client";

import React from 'react';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import BlogCard from '../ui/BlogCard';
import { SectionTitle } from '../ui/SectionTitle';

export default function BlogPreview() {
  const latestBlogs = blogs.slice(0, 3);
  
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-16 xl:px-24 max-w-[1920px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionTitle 
            title="Read Our Latest Publications" 
            subtitle="Real Estate Insights & Analytics" 
            alignment="left"
          />
          <Link 
            href="/blog" 
            className="hidden md:inline-flex items-center justify-center px-8 py-3.5 bg-white border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] font-bold rounded-xl hover:bg-[var(--color-brand-primary)] hover:text-white transition-all shadow-sm group"
          >
            View All Articles
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center px-6 py-4 border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] font-bold rounded-xl hover:bg-[var(--color-brand-primary)] hover:text-white transition-all w-full shadow-sm"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
