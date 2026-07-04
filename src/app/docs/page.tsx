import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { ResourceCta } from '@/components/resource-cta';
import { Book, Settings, Folder, Share2, CreditCard, LayoutTemplate, LineChart, LayoutDashboard, Link2, LifeBuoy, ArrowRight, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation — Seobox Platform',
  description: 'Everything you need to know about setting up and using the Seobox platform.',
};

const CATEGORIES = [
  { name: 'Getting Started', icon: <Book className="h-4 w-4" /> },
  { name: 'Account', icon: <Settings className="h-4 w-4" /> },
  { name: 'Projects', icon: <Folder className="h-4 w-4" /> },
  { name: 'Publishing', icon: <Share2 className="h-4 w-4" /> },
  { name: 'Credits', icon: <CreditCard className="h-4 w-4" /> },
  { name: 'SEO', icon: <LayoutTemplate className="h-4 w-4" /> },
  { name: 'GEO', icon: <LineChart className="h-4 w-4" /> },
  { name: 'Reporting', icon: <LayoutDashboard className="h-4 w-4" /> },
  { name: 'Integrations', icon: <Link2 className="h-4 w-4" /> },
  { name: 'Troubleshooting', icon: <LifeBuoy className="h-4 w-4" /> },
];

const DOC_CARDS = [
  { title: 'Quick Start Guide', desc: 'Set up your first workspace and connect your CMS in under 5 minutes.', icon: <FileText className="h-6 w-6 text-emerald-600" /> },
  { title: 'Understanding GEO Scoring', desc: 'Learn how we calculate your Generative Engine Optimization readiness.', icon: <LineChart className="h-6 w-6 text-emerald-600" /> },
  { title: 'Connecting WordPress', desc: 'Step-by-step guide to installing and authenticating the WordPress plugin.', icon: <Share2 className="h-6 w-6 text-emerald-600" /> },
  { title: 'AI Content Best Practices', desc: 'How to prompt the pipeline for high-density, citation-worthy articles.', icon: <LayoutTemplate className="h-6 w-6 text-emerald-600" /> },
  { title: 'Managing Projects', desc: 'Organize your keyword clusters and content calendars across multiple domains.', icon: <Folder className="h-6 w-6 text-emerald-600" /> },
  { title: 'API Authentication', desc: 'Generate API keys and authenticate your headless applications.', icon: <Settings className="h-6 w-6 text-emerald-600" /> },
];

export default function DocsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 bg-muted/30 border-b border-border">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Documentation
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Learn how to build, optimize, and scale your content engine.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="w-full lg:w-64 shrink-0">
              <div className="sticky top-24 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 px-3">
                  Categories
                </h4>
                {CATEGORIES.map((cat, i) => (
                  <Link 
                    key={i} 
                    href="#" 
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      i === 0 
                        ? 'bg-emerald-500/10 text-[#103938]' 
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <Reveal>
                <h2 className="text-2xl font-bold text-foreground mb-8">Popular Guides</h2>
              </Reveal>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {DOC_CARDS.map((card, i) => (
                  <Reveal key={i} delay={(i % 2) * 50}>
                    <Link href="#" className="group flex flex-col h-full overflow-hidden rounded-[20px] border border-border bg-white p-6 transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-black/5">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50/50">
                        {card.icon}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#103938] transition-colors">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-1">
                        {card.desc}
                      </p>
                      <div className="flex items-center gap-1.5 text-sm font-bold text-[#103938] mt-auto">
                        Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={200}>
                <div className="mt-12 rounded-[24px] bg-[#103938] p-8 sm:p-10 text-white">
                  <h3 className="text-2xl font-bold mb-4">Need developer API docs?</h3>
                  <p className="text-white/80 mb-6 max-w-lg leading-relaxed">
                    If you are building custom integrations, head over to our API reference to view endpoints, code snippets, and authentication guides.
                  </p>
                  <Link href="/api" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#103938] transition-transform hover:scale-105">
                    View API Reference
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <ResourceCta />
    </>
  );
}
