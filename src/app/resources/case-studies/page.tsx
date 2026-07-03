import type { Metadata } from 'next';
import { ResourcePageClient } from '@/components/resources/resource-page-client';
import { getPostsByCategory, getFeaturedPost } from '@/lib/resource-data';
import { TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies — NeuroSEO Platform',
  description: 'Read how leading brands scale organic growth with NeuroSEO.',
};

export default function CaseStudiesPage() {
  const posts = getPostsByCategory('case-studies');
  const featured = getFeaturedPost('case-studies');
  const remainingPosts = posts.filter(p => p.id !== featured.id);

  const categories = ['All Industries', 'SaaS', 'Agencies', 'Ecommerce', 'Enterprise'];

  // Custom UI Mockup for Featured Card (Growth Metrics)
  const CaseStudyMockup = (
    <div className="relative w-full max-w-sm rounded-xl border border-border/80 bg-white p-5 shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Organic Traffic</div>
            <div className="text-sm font-black text-foreground">AcmeCorp</div>
          </div>
        </div>
        <div className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
          +340%
        </div>
      </div>
      
      {/* Fake Bar Chart */}
      <div className="flex h-32 items-end justify-between gap-2 border-b border-border/50 pb-2">
        {[20, 35, 45, 60, 85, 110, 100].map((height, i) => (
          <div 
            key={i} 
            className={`w-full rounded-t-sm transition-all duration-1000 ${i === 6 ? 'bg-emerald-500' : 'bg-muted'}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
        <span>Jan</span>
        <span className="text-emerald-600">Jul</span>
      </div>
    </div>
  );

  return (
    <ResourcePageClient
      baseRoute="/resources/case-studies"
      hero={{
        title: "Customer Success Stories",
        description: "See how the fastest growing SaaS companies and agencies are using NeuroSEO's autonomous pipeline to dominate organic search.",
        stats: [
          { label: 'Published Studies', value: '50+' },
          { label: 'Avg Traffic Lift', value: '215%' },
          { label: 'Time Saved', value: '40h/wk' }
        ]
      }}
      sidebar={{
        categories: [
          { name: 'SaaS Companies', count: 24, href: '#' },
          { name: 'Marketing Agencies', count: 18, href: '#' },
          { name: 'Ecommerce Brands', count: 12, href: '#' },
        ],
        trending: remainingPosts.slice(0, 3).map(p => ({ title: p.title, href: `/resources/case-studies/${p.slug}` }))
      }}
      featured={{ post: featured, visual: CaseStudyMockup }}
      posts={remainingPosts}
      filterCategories={categories}
    />
  );
}
