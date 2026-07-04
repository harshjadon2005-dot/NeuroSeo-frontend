import type { Metadata } from 'next';
import { ResourcePageClient } from '@/components/resources/resource-page-client';
import { getPostsByCategory, getFeaturedPost } from '@/lib/resource-data';
import { Search, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Learn — Seobox Platform',
  description: 'Educational guides and resources for modern search optimization.',
};

export default function LearnPage() {
  const posts = getPostsByCategory('learn');
  const featured = getFeaturedPost('learn');
  const remainingPosts = posts.filter(p => p.id !== featured.id);

  const categories = ['All Guides', 'SEO Fundamentals', 'GEO', 'AI Writing', 'Technical SEO', 'Keyword Research'];

  // Custom UI Mockup for Featured Card
  const GeoMockup = (
    <div className="relative w-full max-w-sm rounded-xl border border-border/80 bg-white p-4 shadow-xl">
      <div className="mb-4 flex items-center gap-2 rounded-lg bg-muted/50 p-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <div className="h-2 w-32 rounded-full bg-border" />
      </div>
      <div className="rounded-lg border border-emerald-500/30 bg-emerald-50/50 p-4">
        <div className="mb-3 flex items-center gap-2 text-emerald-700">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-wider">AI Answer</span>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full rounded-full bg-emerald-500/20" />
          <div className="h-2 w-5/6 rounded-full bg-emerald-500/20" />
          <div className="h-2 w-4/6 rounded-full bg-emerald-500/20" />
        </div>
      </div>
    </div>
  );

  return (
    <ResourcePageClient
      baseRoute="/resources/learn"
      hero={{
        title: "SEO Education Hub",
        description: "Master the art of Generative Engine Optimization. From beginner fundamentals to advanced technical pipelines, learn how to dominate modern search.",
        stats: [
          { label: 'Comprehensive Guides', value: '24' },
          { label: 'Weekly Updates', value: '4' },
          { label: 'Beginner to Advanced', value: 'All Levels' }
        ]
      }}
      sidebar={{
        categories: [
          { name: 'SEO Fundamentals', count: 12, href: '#' },
          { name: 'Generative Engine Opt', count: 8, href: '#' },
          { name: 'Content Strategy', count: 15, href: '#' },
          { name: 'Technical SEO', count: 9, href: '#' },
        ],
        trending: remainingPosts.slice(0, 3).map(p => ({ title: p.title, href: `/resources/learn/${p.slug}` }))
      }}
      featured={{ post: featured, visual: GeoMockup }}
      posts={remainingPosts}
      filterCategories={categories}
    />
  );
}
