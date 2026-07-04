import { Shield, Zap, TrendingUp } from 'lucide-react';
import type { ResourcePost } from '@/lib/resource-data';

export function AlternativesBlocks({ post }: { post: ResourcePost }) {
  if (post.category !== 'alternatives') return null;

  return (
    <div className="mt-12 mb-12">
      <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-muted/50 to-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#103938] text-white">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">The Verdict</div>
            <h3 className="text-2xl font-black text-foreground">Why switch to Seobox?</h3>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="mb-3 flex items-center gap-2 font-bold text-foreground">
              <Zap className="h-4 w-4 text-emerald-500" />
              For Speed & Scale
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Instead of manually generating outlines and waiting for writers, Seobox creates entire topical clusters autonomously. Teams scale output without hiring more writers.
            </p>
          </div>
          <div>
            <h4 className="mb-3 flex items-center gap-2 font-bold text-foreground">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              For Semantic Search
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Old tools optimize for TF-IDF. Seobox optimizes for LLMs and AI Overviews, ensuring your content is cited by the next generation of search engines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
