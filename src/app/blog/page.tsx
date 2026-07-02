import type { Metadata } from 'next';
import { ResourceCta } from '@/components/resource-cta';
import { BlogList } from '@/components/blog-list';

export const metadata: Metadata = {
  title: 'Blog — NeuroSEO Platform',
  description: 'Insights, strategies, and updates on AI SEO and Generative Engine Optimization.',
};

export default function BlogPage() {
  return (
    <>
      <BlogList />
      <ResourceCta />
    </>
  );
}
