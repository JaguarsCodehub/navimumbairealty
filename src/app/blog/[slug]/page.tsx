import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogs } from "@/data/blogs";
import { Clock, Calendar } from 'lucide-react';
import BlogFAQAccordion from '@/components/ui/BlogFAQAccordion';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const blog = blogs.find((b) => b.slug === params.slug);
  
  if (!blog) return { title: 'Not Found' };
  
  return {
    title: `${blog.title} | Navi Mumbai Realty Blog`,
    description: blog.excerpt,
    keywords: blog.keywords,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
      type: 'article',
    }
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const blog = blogs.find((b) => b.slug === params.slug);
  
  if (!blog) {
    notFound();
  }

  // Generate AEO Schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "image": [blog.coverImage],
    "datePublished": new Date(blog.publishDate).toISOString(),
    "author": [{
        "@type": "Person",
        "name": blog.author.name
    }]
  };

  const faqSchema = blog.faqs?.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* AEO Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      
      <main className="flex-grow pt-[104px] bg-gray-50">
        
        {/* Article Hero */}
        <div className="relative w-full bg-[var(--color-brand-primary-dark)] pt-16 pb-48 lg:pb-64 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src={blog.coverImage} alt="Background" fill className="object-cover blur-sm" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary-dark)] to-transparent" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold tracking-wide uppercase mb-6 text-brand-light border border-white/20">
              {blog.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-gray-300 font-medium">
              <span className="flex items-center gap-2"><Calendar size={18} className="text-[var(--color-brand-accent)]" /> {blog.publishDate}</span>
              <span className="flex items-center gap-2"><Clock size={18} className="text-[var(--color-brand-accent)]" /> {blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] -mt-32 lg:-mt-48 relative z-20 pb-24">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            
            {/* Main Cover Image */}
            <div className="relative h-72 md:h-[500px] lg:h-[650px] w-full object-cover">
              <Image src={blog.coverImage} alt={blog.title} fill className="object-cover" priority />
            </div>

            <div className="p-6 md:p-12 lg:p-20 xl:px-32">
              
              {/* Hook text (AEO target for snippets) */}
              <div className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed mb-12 border-l-4 border-[var(--color-brand-accent)] pl-6">
                {blog.excerpt}
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12 border border-gray-100">
                <h3 className="font-heading font-bold text-[var(--color-brand-primary)] text-xl mb-4">Table of Contents</h3>
                <ul className="space-y-3">
                  {blog.tableOfContents.map((toc, index) => (
                    <li key={toc.id}>
                      <a href={`#${toc.id}`} className="text-gray-600 hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-3 font-medium">
                        <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm text-gray-400">{index + 1}</span>
                        {toc.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#faq" className="text-gray-600 hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-3 font-medium">
                        <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm text-gray-400">FA</span>
                        Frequently Asked Questions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Content Sections */}
              <div className="space-y-12">
                {blog.contentSections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--color-brand-primary)] mb-6">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-[var(--color-brand-primary)] prose-a:text-[var(--color-brand-accent)] prose-strong:text-gray-900">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>

              {/* AEO FAQ Section */}
              {blog.faqs?.length > 0 && (
                <section id="faq" className="mt-16 pt-12 border-t border-gray-100 scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--color-brand-primary)] mb-8">
                    Frequently Asked Questions
                  </h2>
                  <BlogFAQAccordion faqs={blog.faqs} />
                </section>
              )}

              {/* Author Bio (E-E-A-T) */}
              <div className="mt-16 bg-[var(--color-brand-primary-dark)] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg">
                <Image src={blog.author.image} alt={blog.author.name} width={80} height={80} className="rounded-full border-2 border-white/20 object-cover" />
                <div className="text-center md:text-left">
                  <div className="text-xs font-bold text-[var(--color-brand-accent)] uppercase tracking-wider mb-1">Written By</div>
                  <h4 className="text-xl font-bold font-heading mb-1">{blog.author.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{blog.author.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                    Our team of verified real estate analysts brings you data-backed insights into the Navi Mumbai property market to help you make secure and highly profitable investment decisions.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA Block */}
          <div className="mt-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-[var(--color-brand-accent)]/30 relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--color-brand-accent)]/10 to-transparent rounded-full -mr-32 -mt-32 pointer-events-none" />
             <div className="p-8 md:p-12 text-center relative z-10">
               <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--color-brand-primary)] mb-4">
                 Ready to Find Your Home in Navi Mumbai?
               </h2>
               <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                 Don't just read about it. Explore our verified, premium property listings directly from top developers in Panvel, Kharghar, and Ulwe.
               </p>
               <Link href="/#projects" className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-accent)] text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
                 Browse Featured Projects
               </Link>
             </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
