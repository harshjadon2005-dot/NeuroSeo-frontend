import { ReactNode } from 'react';
import { Search } from 'lucide-react';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';

interface ResourceHeroProps {
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  searchPlaceholder?: string;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export function ResourceHero({ 
  title, 
  description, 
  stats, 
  searchPlaceholder = "Search resources...",
  searchQuery = "",
  onSearchChange
}: ResourceHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 border-b border-border">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-6xl mb-6">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground mb-10">
              {description}
            </p>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mx-auto max-w-2xl relative flex items-center mb-12">
              <div className="absolute left-4 text-muted-foreground">
                <Search className="h-5 w-5" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded-full border border-border/80 bg-white py-4 pl-12 pr-6 text-sm shadow-sm transition-all focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
              />
              <button className="absolute right-2 rounded-full bg-[#103938] px-6 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#103938]/90">
                Search
              </button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="font-black text-foreground text-xl">{stat.value}</span>
                  <span className="font-bold uppercase tracking-wider text-muted-foreground text-[10px] mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
