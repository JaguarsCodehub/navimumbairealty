import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { blogs } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://navimumbairealty.co.in';

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projectUrls,
    ...blogUrls,
  ];
}
