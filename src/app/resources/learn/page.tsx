import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { ResourceCard, type ResourceItem } from '@/components/resource-card';
import { CtaSection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Learn — SEO & GEO fundamentals',
  description: 'Core concepts behind modern search optimization and Generative Engine Optimization.',
};

const LESSONS: ResourceItem[] = [
  { tag: 'Fundamentals', readTime: '6 min read', title: 'What is GEO (Generative Engine Optimization)?', desc: 'How AI answer engines surface sources — and what it takes to be the one they cite.' },
  { tag: 'Fundamentals', readTime: '5 min read', title: 'SEO vs. GEO: what changed', desc: 'Classic ranking signals still matter, but extractability and authority now drive AI citations.' },
  { tag: 'Scoring', readTime: '7 min read', title: 'How NeuroSEO scores an article', desc: 'A breakdown of the SEO score, GEO readiness, originality, and AI-detection signals.' },
  { tag: 'Keywords', readTime: '6 min read', title: 'Reading keyword difficulty & intent', desc: 'Turn DataForSEO metrics into a prioritized content plan that actually ranks.' },
  { tag: 'Content', readTime: '8 min read', title: 'Structuring content for AI answers', desc: 'Headings, lists, definitions, and FAQ schema that make your pages easy to extract.' },
  { tag: 'Trust', readTime: '5 min read', title: 'Originality & fact-checking, explained', desc: 'Why plagiarism and AI-detection gates protect your domain — and how scoring works.' },
];

export default function LearnPage() {
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
              eyebrow="Learn"
              title="SEO & GEO fundamentals"
              sub="The concepts behind ranking in classic search and getting cited by AI answer engines."
            />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LESSONS.map((lesson, i) => (
              <Reveal key={lesson.title} delay={(i % 3) * 60}>
                <ResourceCard item={lesson} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
