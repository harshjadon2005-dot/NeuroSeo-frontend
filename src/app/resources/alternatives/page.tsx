import type { Metadata } from 'next';
import { ResourcePageClient } from '@/components/resources/resource-page-client';
import { getPostsByCategory, getFeaturedPost } from '@/lib/resource-data';
import { Replace, Zap, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Alternatives — Seobox Platform',
  description: 'Find the best alternatives to legacy SEO and content tools.',
};

export default function AlternativesPage() {
  const posts = getPostsByCategory('alternatives');
  const featured = getFeaturedPost('alternatives');
  const remainingPosts = posts.filter(p => p.id !== featured.id);

  const categories = ['All Alternatives', 'SEO Tools', 'AI Writers', 'Content Briefs'];

  // Custom UI Mockup for Featured Card (Alternatives list)
  const AlternativesMockup = (
    <div className="relative w-full max-w-sm rounded-xl border border-border/80 bg-white shadow-xl overflow-hidden">
      <div className="border-b border-border/50 bg-muted/20 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-bold text-foreground">
          <Replace className="h-4 w-4 text-emerald-500" />
          <span>Switching to Seobox</span>
        </div>
      </div>
      <div className="p-2 space-y-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`flex items-center justify-between rounded-lg p-3 ${i === 1 ? 'bg-emerald-50/50 border border-emerald-500/20' : 'hover:bg-muted/30'}`}>
            <div className="flex items-center gap-3">
              <div className={`flex h-8 w-8 items-center justify-center rounded-md ${i === 1 ? 'bg-[#103938] text-white' : 'bg-muted text-muted-foreground'}`}>
                {i === 1 ? <Zap className="h-4 w-4" /> : <div className="h-4 w-4 rounded-sm bg-border" />}
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">{i === 1 ? 'Seobox' : 'Legacy Tool'}</div>
                <div className="text-[10px] text-muted-foreground">{i === 1 ? 'Autonomous Pipeline' : 'Manual Briefs'}</div>
              </div>
            </div>
            {i === 1 && <Check className="h-4 w-4 text-emerald-600" />}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <ResourcePageClient
      baseRoute="/resources/alternatives"
      hero={{
        title: "Find Better Alternatives",
        description: "Outgrown your current tech stack? Discover the most powerful modern alternatives to legacy content generation and SEO platforms.",
        stats: [
          { label: 'Tools Analyzed', value: '30+' },
          { label: 'In-Depth Reviews', value: '15' },
          { label: 'Switching Guides', value: '100%' }
        ]
      }}
      sidebar={{
        categories: [
          { name: 'Surfer SEO Alts', count: 5, href: '#' },
          { name: 'Jasper Alts', count: 4, href: '#' },
          { name: 'Frase Alts', count: 3, href: '#' },
        ],
        trending: remainingPosts.slice(0, 3).map(p => ({ title: p.title, href: `/resources/alternatives/${p.slug}` }))
      }}
      featured={{ post: featured, visual: AlternativesMockup }}
      posts={remainingPosts}
      filterCategories={categories}
    />
  );
}
