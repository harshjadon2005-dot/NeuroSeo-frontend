import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { CtaSection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Guide — step-by-step playbooks',
  description: 'Practical, step-by-step playbooks for getting the most out of NeuroSEO.',
};

const PLAYBOOKS = [
  {
    step: '01',
    title: 'Add your first site',
    desc: 'Connect a domain, set your brand voice, and configure DataForSEO location & language so research matches your market.',
  },
  {
    step: '02',
    title: 'Connect your CMS',
    desc: 'Link WordPress, Webflow, Shopify, or a headless webhook so approved articles publish in one click — or fully automatically.',
  },
  {
    step: '03',
    title: 'Generate your first article',
    desc: 'Pick a target keyword, choose tone and intent, and watch the 18-stage pipeline run live, streaming the draft as it writes.',
  },
  {
    step: '04',
    title: 'Review & publish',
    desc: 'Check the SEO and GEO scores, scan the trust report, then approve. Publishing pushes straight to your CMS.',
  },
  {
    step: '05',
    title: 'Turn on autonomy',
    desc: 'Let the strategist act on top opportunities within safety limits — daily caps, score gates, and credit guardrails keep it safe.',
  },
  {
    step: '06',
    title: 'Track AI visibility & report',
    desc: 'Probe AI engines for brand citations, watch your GEO score trend, and email branded PDF reports to clients on a schedule.',
  },
];

export default function GuidePage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <Link href="/resources" className="press inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-[#103938]">
              <ArrowLeft className="h-4 w-4" /> All resources
            </Link>
          </Reveal>
          <div className="mt-6">
            <SectionHeading
              align="left"
              eyebrow="Guide"
              title="From zero to autopilot"
              sub="Follow these six steps to go from a fresh account to autonomous, published content."
            />
          </div>

          {/* Zig-zag two-column step layout (avoids generic equal-card grid) */}
          <div className="mx-auto mt-14 max-w-3xl">
            {PLAYBOOKS.map((p, i) => (
              <Reveal key={p.step} delay={i * 50}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {/* connector line */}
                  {i < PLAYBOOKS.length - 1 && (
                    <span className="absolute left-[27px] top-14 h-[calc(100%-3.5rem)] w-px bg-border" />
                  )}
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-white text-sm font-bold text-[#103938]">
                    {p.step}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
