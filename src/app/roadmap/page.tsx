import type { Metadata } from 'next';
import { ResourceCta } from '@/components/resource-cta';
import { RoadmapHero } from '@/components/roadmap/roadmap-hero';
import { RoadmapClient } from '@/components/roadmap/roadmap-client';

export const metadata: Metadata = {
  title: 'Roadmap — Seobox Platform',
  description: 'See what we are building next at Seobox.',
};

export default function RoadmapPage() {
  return (
    <div className="bg-white min-h-screen">
      <RoadmapHero />
      <RoadmapClient />
      
      {/* Bottom CTA */}
      <section className="py-24 border-t border-border bg-[#FAFAFA]">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h2 className="text-4xl font-black text-foreground mb-6 tracking-tight">Ready to see what's coming next?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Follow our progress and start using Seobox today to dominate the modern AI search landscape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/signup" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#103938] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#0a2423] hover:shadow-xl hover:shadow-[#103938]/20">
              Start Free Trial
            </a>
            <a href="/resources/documentation" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white border border-border px-8 py-4 text-sm font-bold text-foreground transition-all hover:bg-muted/50">
              Read Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
