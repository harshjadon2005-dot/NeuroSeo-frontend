import { ReactNode } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export function ResourceSidebar({ categories, trending }: { 
  categories: { name: string; count: number; href: string }[];
  trending: { title: string; href: string }[];
}) {
  return (
    <aside className="hidden lg:flex flex-col gap-10 sticky top-24 self-start">
      
      {/* Categories */}
      <div className="rounded-[20px] border border-border bg-white p-6 shadow-sm">
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-4">Categories</h3>
        <ul className="flex flex-col gap-2">
          {categories.map(cat => (
            <li key={cat.name}>
              <Link href={cat.href} className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/50 hover:text-[#103938]">
                <span>{cat.name}</span>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground group-hover:bg-[#103938]/10 group-hover:text-[#103938]">{cat.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Trending */}
      <div>
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-4 px-2">Trending</h3>
        <ul className="flex flex-col gap-3">
          {trending.map((trend, i) => (
            <li key={i}>
              <Link href={trend.href} className="group flex items-start gap-3 rounded-lg px-2 py-1.5 transition-colors">
                <span className="text-xl font-black text-border group-hover:text-emerald-500/40 transition-colors">0{i + 1}</span>
                <span className="text-sm font-semibold leading-snug text-foreground/80 group-hover:text-[#103938] transition-colors">{trend.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="rounded-[20px] bg-[#103938] p-6 text-white shadow-xl">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
          <Mail className="h-5 w-5 text-emerald-400" />
        </div>
        <h3 className="text-lg font-bold mb-2">Join the Newsletter</h3>
        <p className="text-sm text-white/70 mb-5 leading-relaxed">Get our latest SEO strategies and platform updates delivered weekly.</p>
        <div className="flex flex-col gap-2">
          <input 
            type="email" 
            placeholder="name@company.com" 
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-bold text-[#103938] transition-colors hover:bg-emerald-400">
            Subscribe <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

    </aside>
  );
}
