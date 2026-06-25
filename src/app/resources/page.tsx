import type { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, BookOpen, ArrowRight } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { CtaSection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Learn SEO & GEO fundamentals and follow step-by-step playbooks to get the most from NeuroSEO.',
};

const SECTIONS = [
  {
    href: '/resources/learn',
    icon: GraduationCap,
    title: 'Learn',
    desc: 'Fundamentals of modern SEO and Generative Engine Optimization — concepts, scoring, and how AI search is changing discovery.',
    cta: 'Browse lessons',
  },
  {
    href: '/resources/guide',
    icon: BookOpen,
    title: 'Guide',
    desc: 'Hands-on playbooks: connect your CMS, run your first generation, set up autonomous publishing, and read your reports.',
    cta: 'Open the playbooks',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Resources"
            title="Learn the craft. Master the tool."
            sub="Whether you're new to GEO or scaling an agency, start here."
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.href} delay={i * 80}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-white p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#103938]/8">
                    <s.icon className="h-6 w-6 text-[#103938]" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#103938]">
                    {s.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
