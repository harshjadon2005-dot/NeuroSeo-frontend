import type { Metadata } from 'next';
import { ResourcePageClient } from '@/components/resources/resource-page-client';
import { getPostsByCategory, getFeaturedPost } from '@/lib/resource-data';
import { Settings2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free SEO Tools — Seobox Platform',
  description: 'Free utilities for keyword difficulty, schema generation, and technical SEO.',
};

export default function ToolsPage() {
  const posts = getPostsByCategory('tools');
  const featured = getFeaturedPost('tools') || {
    id: 't1', title: 'Keyword Difficulty & Intent Checker', excerpt: 'Instantly analyze the SERP competition and semantic intent for any keyword query before you write a single word.', tags: ['Free Tool', 'Research'], category: 'tools', date: '2026-07-01', readTime: 'Interactive', slug: 'keyword-difficulty-checker'
  };
  const remainingPosts = posts.filter(p => p.id !== featured.id);

  const categories = ['All Tools', 'Keyword Research', 'Technical SEO', 'Content Analysis'];

  // Custom UI Mockup for Featured Card (Interactive Tool Widget)
  const ToolsMockup = (
    <div className="relative w-full max-w-sm rounded-xl border border-border/80 bg-white p-5 shadow-xl">
      <div className="mb-4 flex items-center justify-between border-b border-border/50 pb-3">
        <div className="flex items-center gap-2 font-bold text-foreground">
          <Settings2 className="h-4 w-4 text-[#103938]" />
          <span>Intent Analyzer</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Target Keyword</label>
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-md border border-border/80 bg-muted/30 px-3 py-2 text-xs text-foreground">
              "best b2b saas tools"
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-md bg-[#103938] text-white">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-50/50 p-3">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-bold text-emerald-800">Commercial Intent</span>
            <span className="font-black text-emerald-600">85%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-emerald-500/20 overflow-hidden">
            <div className="h-full w-[85%] bg-emerald-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ResourcePageClient
      baseRoute="/resources/tools"
      hero={{
        title: "Free SEO Utilities",
        description: "A suite of free tools to help you analyze SERPs, generate technical snippets, and audit your content faster.",
        stats: [
          { label: 'Free Tools', value: '12' },
          { label: 'Queries Run', value: '1M+' },
          { label: 'Cost', value: '$0' }
        ]
      }}
      sidebar={{
        categories: [
          { name: 'Keyword Research', count: 4, href: '#' },
          { name: 'Technical SEO', count: 5, href: '#' },
          { name: 'Content Analysis', count: 3, href: '#' },
        ],
        trending: remainingPosts.slice(0, 3).map(p => ({ title: p.title, href: `/resources/tools/${p.slug}` }))
      }}
      featured={{ post: featured as any, visual: ToolsMockup }}
      posts={remainingPosts}
      filterCategories={categories}
    />
  );
}
