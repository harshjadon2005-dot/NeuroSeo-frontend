import type { Metadata } from 'next';
import { ResourcePageClient } from '@/components/resources/resource-page-client';
import { getPostsByCategory, getFeaturedPost } from '@/lib/resource-data';
import { Scale, Zap, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compare — NeuroSEO Platform',
  description: 'Head-to-head product comparisons for modern SEO teams.',
};

export default function ComparePage() {
  const posts = getPostsByCategory('compare');
  const featured = getFeaturedPost('compare');
  const remainingPosts = posts.filter(p => p.id !== featured.id);

  const categories = ['All Comparisons', 'SEO Platforms', 'AI Writers', 'Content Optimization'];

  // Custom UI Mockup for Featured Card (Split comparison)
  const CompareMockup = (
    <div className="relative flex w-full max-w-md items-stretch gap-4 rounded-xl border border-border/80 bg-white p-6 shadow-xl">
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-2 text-[#103938]">
          <Database className="h-5 w-5" />
          <span className="font-black text-sm">NeuroSEO</span>
        </div>
        <div className="space-y-2">
          <div className="h-6 w-full rounded bg-emerald-500/20" />
          <div className="h-6 w-full rounded bg-emerald-500/20" />
          <div className="h-6 w-5/6 rounded bg-emerald-500/20" />
        </div>
      </div>
      
      <div className="flex w-12 flex-col items-center justify-center border-x border-border/50">
        <Scale className="h-5 w-5 text-muted-foreground/50" />
        <span className="mt-2 text-[10px] font-bold text-muted-foreground">VS</span>
      </div>

      <div className="flex-1 space-y-4 opacity-60">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Zap className="h-5 w-5" />
          <span className="font-bold text-sm">Legacy SEO</span>
        </div>
        <div className="space-y-2">
          <div className="h-6 w-full rounded bg-muted" />
          <div className="h-6 w-4/6 rounded bg-muted" />
          <div className="h-6 w-5/6 rounded bg-muted" />
        </div>
      </div>
    </div>
  );

  return (
    <ResourcePageClient
      baseRoute="/resources/compare"
      hero={{
        title: "Head-to-Head Comparisons",
        description: "See exactly how NeuroSEO stacks up against legacy platforms. Real data, objective feature comparisons, and clear verdicts.",
        stats: [
          { label: 'Platform Breakdowns', value: '18' },
          { label: 'Feature Matrices', value: '45+' },
          { label: 'Objective Verdicts', value: '100%' }
        ]
      }}
      sidebar={{
        categories: [
          { name: 'SEO Platforms', count: 8, href: '#' },
          { name: 'AI Writers', count: 6, href: '#' },
          { name: 'Content Optimizers', count: 4, href: '#' },
        ],
        trending: remainingPosts.slice(0, 3).map(p => ({ title: p.title, href: `/resources/compare/${p.slug}` }))
      }}
      featured={{ post: featured, visual: CompareMockup }}
      posts={remainingPosts}
      filterCategories={categories}
    />
  );
}
