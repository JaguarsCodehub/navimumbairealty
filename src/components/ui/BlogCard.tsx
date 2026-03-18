import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogs';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden">
        <Image 
          src={blog.coverImage} 
          alt={blog.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
        />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[var(--color-brand-primary)] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
          {blog.category}
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-5 text-xs text-gray-500 mb-4 font-medium">
          <span className="flex items-center gap-1.5"><Calendar size={15} className="text-[var(--color-brand-accent)]" /> {blog.publishDate}</span>
          <span className="flex items-center gap-1.5"><Clock size={15} className="text-[var(--color-brand-accent)]" /> {blog.readTime}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold font-heading text-[var(--color-brand-primary)] mb-3 leading-tight group-hover:text-[var(--color-brand-accent)] transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base mb-6 flex-grow line-clamp-3 leading-relaxed">
          {blog.excerpt}
        </p>
        <Link 
          href={`/blog/${blog.slug}`} 
          className="inline-flex items-center text-[var(--color-brand-accent)] font-bold text-sm hover:gap-3 transition-all gap-2 mt-auto tracking-wide uppercase"
        >
          Read Article <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
