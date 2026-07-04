import { Check, X, Trophy } from 'lucide-react';
import type { ResourcePost } from '@/lib/resource-data';

export function CompareBlocks({ post }: { post: ResourcePost }) {
  return (
    <div className="mt-16 space-y-12">
      {/* Pros & Cons */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-6">
          <div className="mb-4 flex items-center gap-2 font-bold text-emerald-800">
            <Check className="h-5 w-5" />
            <h3>Pros of {post.winner || 'Seobox'}</h3>
          </div>
          <ul className="space-y-3">
            {post.pros?.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-emerald-900/80">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-red-500/20 bg-red-50/50 p-6">
          <div className="mb-4 flex items-center gap-2 font-bold text-red-800">
            <X className="h-5 w-5" />
            <h3>Cons</h3>
          </div>
          <ul className="space-y-3">
            {post.cons?.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-red-900/80">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Feature Comparison */}
      {post.features && (
        <div className="overflow-hidden rounded-2xl border border-border/80 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-bold">Feature</th>
                <th className="px-6 py-4 font-bold">Seobox</th>
                <th className="px-6 py-4 font-bold">Competitor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {post.features.map((feature, i) => (
                <tr key={i} className="transition-colors hover:bg-muted/20">
                  <td className="px-6 py-4 font-medium text-foreground">{feature.name}</td>
                  <td className="px-6 py-4">
                    {feature.seobox ? <Check className="h-5 w-5 text-emerald-500" /> : <X className="h-5 w-5 text-muted-foreground/30" />}
                  </td>
                  <td className="px-6 py-4">
                    {feature.competitor ? <Check className="h-5 w-5 text-emerald-500" /> : <X className="h-5 w-5 text-muted-foreground/30" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pricing */}
      {post.pricing && (
        <div className="grid md:grid-cols-2 gap-6">
          {post.pricing.map((plan, i) => (
            <div key={i} className="rounded-2xl border border-border/80 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-bold text-muted-foreground">{plan.name}</div>
              <div className="mb-4 text-3xl font-black text-foreground">{plan.price}</div>
              <div className="text-sm text-muted-foreground">{plan.details}</div>
            </div>
          ))}
        </div>
      )}

      {/* Winner Verdict */}
      {post.winner && (
        <div className="rounded-2xl bg-[#103938] p-8 text-white shadow-xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-emerald-400">Final Verdict</div>
              <h3 className="text-2xl font-black">Winner: {post.winner}</h3>
            </div>
          </div>
          <p className="text-emerald-50/80 leading-relaxed max-w-2xl">
            Based on our extensive testing of the content generation engine, intent mapping capabilities, and autonomous publishing workflows, {post.winner} is the clear choice for teams looking to scale SEO in 2026.
          </p>
        </div>
      )}
    </div>
  );
}
