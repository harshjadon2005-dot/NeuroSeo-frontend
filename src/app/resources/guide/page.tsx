import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Check } from 'lucide-react';
import { Container, SectionHeading, Button } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { GuideDashboard } from '@/components/guide-dashboard';
import { ResourceCta } from '@/components/resource-cta';
export const metadata: Metadata = {
  title: 'Guide — step-by-step playbooks',
  description: 'Practical, step-by-step playbooks for getting the most out of Seobox.',
};


export default function GuidePage() {
  return (
    <div className="relative overflow-hidden bg-[#FAFAFA]">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-emerald-500/10 blur-[120px] opacity-70" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <section className="relative z-10 py-16 sm:py-24">
        <Container>
          <Reveal>
            <Link href="/resources" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-[#103938]">
              <span className="font-bold">&larr;</span> All resources
            </Link>
          </Reveal>
          
          <div className="mt-8">
            <SectionHeading
              align="center"
              eyebrow="Onboarding Guide"
              title="From zero to autopilot"
              sub="Follow these six milestones to go from a fresh account to autonomous, published content."
            />
          </div>

          <GuideDashboard />
        </Container>
      </section>

      <ResourceCta />
    </div>
  );
}
