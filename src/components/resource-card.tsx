import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface ResourceItem {
  title: string;
  desc: string;
  tag: string;
  readTime: string;
  href?: string;
}

// Deterministic teal-tinted gradient thumbnail (no external images)
function thumb(seed: number): string {
  const angle = (seed * 47) % 360;
  return `linear-gradient(135deg, hsl(178 56% ${18 + (seed % 4) * 4}%), hsl(${160 + (seed % 30)} 40% ${28 + (seed % 5) * 3}%))`;
}

export function ResourceCard({ item, index }: { item: ResourceItem; index: number }) {
  const Inner = (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5">
      <div className="relative h-36 w-full" style={{ background: thumb(index) }}>
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#103938] backdrop-blur">
          {item.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="flex items-start justify-between gap-2 text-base font-semibold tracking-tight text-foreground">
          <span className="group-hover:text-[#103938]">{item.title}</span>
          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
        <span className="mt-4 text-xs text-muted-foreground/80">{item.readTime}</span>
      </div>
    </div>
  );

  return item.href ? (
    <Link href={item.href}>{Inner}</Link>
  ) : (
    <div className="cursor-default">{Inner}</div>
  );
}
