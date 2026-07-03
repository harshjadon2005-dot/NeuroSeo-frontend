import type { Metadata } from 'next';
import { ResourcePageClient } from '@/components/resources/resource-page-client';
import { getPostsByCategory, getFeaturedPost } from '@/lib/resource-data';
import { Terminal, Code2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation — NeuroSEO Platform',
  description: 'API references, SDK guides, and integration documentation.',
};

export default function DocumentationPage() {
  const posts = getPostsByCategory('documentation');
  const featured = getFeaturedPost('documentation') || {
    id: 'd1', title: 'NeuroSEO REST API v2', excerpt: 'Build custom headless CMS integrations and trigger generation workflows programmatically.', tags: ['API', 'Reference'], category: 'documentation', date: '2026-07-01', readTime: '20 min', slug: 'rest-api-v2'
  };
  const remainingPosts = posts.filter(p => p.id !== featured.id);

  const categories = ['All Docs', 'API Reference', 'Webhooks', 'SDKs', 'Authentication'];

  // Custom UI Mockup for Featured Card (Code Editor)
  const DocsMockup = (
    <div className="relative w-full max-w-sm overflow-hidden rounded-xl border border-border/80 bg-[#0d1117] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#161b22] px-4 py-2">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-2 text-[10px] font-medium text-white/50">
          <Code2 className="h-3 w-3" />
          <span>publish.ts</span>
        </div>
      </div>
      <div className="p-4 text-xs font-mono leading-relaxed">
        <div className="text-pink-400">import <span className="text-white">NeuroSEO</span> from <span className="text-emerald-300">'@neuroseo/sdk'</span>;</div>
        <div className="mt-4 text-white/40">// Initialize client</div>
        <div><span className="text-blue-400">const</span> <span className="text-white">client</span> = <span className="text-pink-400">new</span> <span className="text-yellow-200">NeuroSEO</span>({'{'}</div>
        <div className="pl-4 text-blue-200">apiKey: <span className="text-white">process.env.NEURO_KEY</span></div>
        <div>{'});'}</div>
        <div className="mt-4 text-white/40">// Trigger generation</div>
        <div><span className="text-pink-400">await</span> <span className="text-white">client.pipeline.</span><span className="text-yellow-200">generate</span>({'{'}</div>
        <div className="pl-4 text-blue-200">keyword: <span className="text-emerald-300">"b2b saas seo"</span>,</div>
        <div className="pl-4 text-blue-200">autoPublish: <span className="text-purple-300">true</span></div>
        <div>{'});'}</div>
      </div>
    </div>
  );

  return (
    <ResourcePageClient
      baseRoute="/resources/documentation"
      hero={{
        title: "Developer Documentation",
        description: "Integrate NeuroSEO into your existing stack. Robust APIs, webhooks, and SDKs for completely headless workflows.",
        stats: [
          { label: 'API Endpoints', value: '45' },
          { label: 'Webhooks', value: '12' },
          { label: 'Official SDKs', value: 'Node, Python' }
        ]
      }}
      sidebar={{
        categories: [
          { name: 'API Reference', count: 12, href: '#' },
          { name: 'Webhooks', count: 5, href: '#' },
          { name: 'Node.js SDK', count: 8, href: '#' },
          { name: 'Authentication', count: 3, href: '#' },
        ],
        trending: remainingPosts.slice(0, 3).map(p => ({ title: p.title, href: `/resources/documentation/${p.slug}` }))
      }}
      featured={{ post: featured as any, visual: DocsMockup }}
      posts={remainingPosts}
      filterCategories={categories}
    />
  );
}
