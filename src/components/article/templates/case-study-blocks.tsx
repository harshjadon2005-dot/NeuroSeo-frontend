import { BarChart3, Target, Lightbulb, Zap } from 'lucide-react';
import type { ResourcePost } from '@/lib/resource-data';

export function CaseStudyBlocks({ post }: { post: ResourcePost }) {
  if (post.category !== 'case-studies') return null;

  return (
    <div className="mt-12 space-y-12">
      {/* Metrics Grid */}
      {post.metrics && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {post.metrics.map((metric, i) => (
            <div key={i} className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-6 text-center">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-emerald-800/70">{metric.label}</div>
              <div className="text-3xl font-black text-emerald-700">{metric.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Challenge & Solution */}
      <div className="grid md:grid-cols-2 gap-8">
        {post.challenge && (
          <div className="rounded-2xl border border-border/80 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-muted-foreground">
              <Target className="h-5 w-5" />
              <h3 className="font-bold">The Challenge</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              {post.challenge}
            </p>
          </div>
        )}
        
        {post.solution && (
          <div className="rounded-2xl border border-[#103938]/10 bg-[#103938] p-8 text-white shadow-xl">
            <div className="mb-4 flex items-center gap-3 text-emerald-400">
              <Lightbulb className="h-5 w-5" />
              <h3 className="font-bold">The Solution</h3>
            </div>
            <p className="text-emerald-50/90 leading-relaxed">
              {post.solution}
            </p>
          </div>
        )}
      </div>

      {/* Company Info */}
      {post.company && (
        <div className="rounded-2xl border border-border/50 bg-muted/20 p-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm font-black text-[#103938]">
              {post.company.name.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-foreground">{post.company.name}</div>
              <div className="text-xs text-muted-foreground">{post.company.industry}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <Zap className="h-4 w-4" />
            <span>{post.company.size}</span>
          </div>
        </div>
      )}
    </div>
  );
}
