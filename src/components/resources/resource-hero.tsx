import { ReactNode } from 'react';

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
}: ResourceHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-border bg-background">
      {/* Subtle NeuroSEO Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="relative mx-auto max-w-[1200px] px-4 md:px-8">
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-[44px] mb-4">
          {title}
        </h1>
        
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground mb-8">
          {description}
        </p>
        
        {stats.length > 0 && (
          <div className="flex items-center gap-8 text-sm font-semibold text-muted-foreground">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="text-foreground">{stat.value}</span>
                <span>{stat.label.toLowerCase()}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
