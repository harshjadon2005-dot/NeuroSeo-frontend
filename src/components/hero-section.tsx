"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Loader2, Search, ChevronDown } from 'lucide-react';
import { Container, Button, Eyebrow } from './ui';
import { Reveal } from './reveal';
import { NumberTicker } from './number-ticker';

export function HeroSection() {
  const [mockupStep, setMockupStep] = useState(0);
  const [activeTab, setActiveTab] = useState('Generator');

  useEffect(() => {
    const interval = setInterval(() => {
      setMockupStep((prev) => (prev >= 6 ? 0 : prev + 1));
    }, 2000); // Progress every 2s for demo loop
    return () => clearInterval(interval);
  }, []);

  const handleScrollToCta = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const cta = document.getElementById('try-neuroseo');
    if (cta) {
      cta.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '#try-neuroseo';
    }
  };

  const handleScrollExplore = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  const steps = [
    "Researching keywords",
    "Building content outline",
    "Writing article",
    "SEO optimization",
    "AI visibility check",
    "Ready to publish"
  ];

  const STATS = [
    { value: 18, suffix: '', label: 'Quality stages per article' },
    { value: 5, suffix: '', label: 'AI engines tracked for GEO' },
    { value: 4, suffix: '', label: 'Native CMS integrations' },
    { value: 100, suffix: '%', label: 'Originality-checked before review' },
  ];

  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16">
      {/* Background with brand gradients and subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-white" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            'linear-gradient(#10393815 1px, transparent 1px), linear-gradient(90deg, #10393815 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% -20%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% -20%, #000 40%, transparent 100%)',
        }}
      />
      
      {/* Soft blurred glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#103938]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-50 blur-3xl drift-slow" />
      <div className="pointer-events-none absolute right-1/4 top-10 h-72 w-72 translate-x-1/2 rounded-full bg-emerald-50 blur-3xl drift-slow" />

      <Container className="relative text-center">
        {/* Top: Text Content */}
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Eyebrow>Autonomous AI SEO · Real ranking data</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mx-auto mt-6 text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tighter text-foreground">
              SEO content that{' '}
              <span className="text-[#103938] relative inline-block">
                writes &amp; publishes itself
              </span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              NeuroSEO researches keywords, writes ranking articles, fact-checks them, scores SEO and AI visibility,
              and publishes to your CMS — continuously, on autopilot.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row w-full max-w-md mx-auto sm:max-w-none">
              <Button href="#try-neuroseo" size="lg" onClick={handleScrollToCta} className="group w-full sm:w-auto sm:min-w-[240px]">
                Generate your first article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/pricing" variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[240px]">
                View pricing
              </Button>
            </div>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              No credit card required · AES-256 encrypted · Cancel anytime
            </p>
          </Reveal>
        </div>

        {/* ─── Stats band ───────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-5xl mt-16 mb-16">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold tracking-tighter text-[#103938] sm:text-5xl">
                  <NumberTicker value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm leading-snug text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Product Preview Mockup */}
        <Reveal delay={300}>
          <div className="relative mx-auto mt-20 max-w-5xl">
            {/* Dashboard Browser Frame */}
            <div className="overflow-hidden rounded-[20px] border border-border/80 bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5 text-left">
              {/* Browser Header */}
              <div className="flex items-center border-b border-border/60 bg-[#FAFAFA] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="mx-auto flex h-6 w-full max-w-md items-center justify-center rounded-md bg-white text-xs text-muted-foreground shadow-sm ring-1 ring-border/50">
                  <span className="flex items-center gap-1.5"><Search className="h-3 w-3" /> neuroseo.com/app</span>
                </div>
              </div>
              
              {/* App Content */}
              <div className="flex flex-col md:flex-row">
                {/* Sidebar Mock */}
                <div className="hidden w-64 flex-col border-r border-border/60 bg-[#FAFAFA]/50 p-5 md:flex">
                  <div className="mb-6 flex items-center gap-2.5 font-bold text-foreground">
                    <div className="h-6 w-6 rounded bg-[#103938] flex items-center justify-center shadow-sm">
                      <span className="text-[10px] text-white">N</span>
                    </div> 
                    NeuroSEO
                  </div>
                  <div className="space-y-1">
                    {['Generator', 'Articles', 'Keywords', 'Integrations'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          activeTab === tab
                            ? 'bg-[#103938]/10 text-[#103938]'
                            : 'text-muted-foreground hover:bg-black/5'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Area Mock */}
                <div className="flex-1 p-6 sm:p-10 bg-white">
                  {activeTab === 'Generator' && (
                    <div className="animate-in fade-in duration-500">
                      <div className="mb-8">
                        <div className="text-sm font-semibold text-[#103938]">Prompt</div>
                        <div className="mt-2 rounded-xl border border-border/80 bg-[#FAFAFA] p-4 text-lg font-medium text-foreground shadow-inner">
                          "Write an SEO article about AI tools"
                        </div>
                      </div>

                      <div className="grid gap-8 lg:grid-cols-2">
                        {/* Status Steps */}
                        <div className="space-y-4">
                          <div className="text-sm font-semibold text-muted-foreground mb-4">Pipeline Status</div>
                          {steps.map((step, idx) => (
                            <div key={step} className={`flex items-center gap-3 transition-opacity duration-300 ${idx <= mockupStep ? 'opacity-100' : 'opacity-40'}`}>
                              {idx < mockupStep ? (
                                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                              ) : idx === mockupStep ? (
                                <Loader2 className="h-5 w-5 animate-spin text-[#103938]" />
                              ) : (
                                <div className="h-5 w-5 rounded-full border-2 border-border/80" />
                              )}
                              <span className={idx <= mockupStep ? 'font-medium text-foreground' : 'text-muted-foreground'}>{step}</span>
                            </div>
                          ))}
                        </div>

                        {/* Scores Widget */}
                        <div className="rounded-2xl border border-border/60 bg-[#FAFAFA] p-6 shadow-sm">
                          <div className="text-sm font-semibold text-muted-foreground mb-6">Metrics</div>
                          <div className="space-y-5">
                            <div>
                              <div className="flex justify-between text-sm font-medium mb-1.5">
                                <span className="text-foreground">Article Quality</span>
                                <span className={mockupStep >= 2 ? 'text-emerald-600' : 'text-muted-foreground'}>
                                  {mockupStep >= 2 ? '95/100' : '--'}
                                </span>
                              </div>
                              <div className="h-2 w-full overflow-hidden rounded-full bg-border/50">
                                <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: mockupStep >= 2 ? '95%' : '0%' }} />
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm font-medium mb-1.5">
                                <span className="text-foreground">SEO Score</span>
                                <span className={mockupStep >= 3 ? 'text-emerald-600' : 'text-muted-foreground'}>
                                  {mockupStep >= 3 ? '98/100' : '--'}
                                </span>
                              </div>
                              <div className="h-2 w-full overflow-hidden rounded-full bg-border/50">
                                <div className="h-full bg-emerald-500 transition-all duration-1000 delay-300" style={{ width: mockupStep >= 3 ? '98%' : '0%' }} />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-sm font-medium mb-1.5">
                                <span className="text-foreground">AI Visibility</span>
                                <span className={mockupStep >= 4 ? 'text-emerald-600' : 'text-muted-foreground'}>
                                  {mockupStep >= 4 ? '92/100' : '--'}
                                </span>
                              </div>
                              <div className="h-2 w-full overflow-hidden rounded-full bg-border/50">
                                <div className="h-full bg-[#103938] transition-all duration-1000 delay-500" style={{ width: mockupStep >= 4 ? '92%' : '0%' }} />
                              </div>
                            </div>

                            <div className="pt-4 mt-4 border-t border-border/80">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-muted-foreground">Connected CMS</span>
                                <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#103938] text-white shadow-sm">
                                    <span className="text-[9px]">W</span>
                                  </span> Webflow
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'Articles' && (
                    <div className="animate-in fade-in duration-500">
                      <div className="mb-6 font-semibold text-foreground text-lg">Published Articles</div>
                      <div className="space-y-3">
                        {[
                          { title: 'The Ultimate Guide to AI Tools in 2026', status: 'Published', date: 'Today' },
                          { title: '10 Ways Machine Learning Improves SEO', status: 'Published', date: 'Yesterday' },
                          { title: 'How to Build an Autonomous Content Engine', status: 'Reviewing', date: 'Oct 12' },
                        ].map((article, i) => (
                          <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-border/60 p-4 hover:bg-black/5 transition-colors cursor-default">
                            <div>
                              <div className="font-medium text-foreground">{article.title}</div>
                              <div className="text-xs text-muted-foreground mt-1">{article.date}</div>
                            </div>
                            <div className={`w-fit px-2.5 py-1 text-xs font-semibold rounded-full ${article.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                              {article.status}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'Keywords' && (
                    <div className="animate-in fade-in duration-500">
                      <div className="mb-6 font-semibold text-foreground text-lg">Keyword Intelligence</div>
                      <div className="space-y-3">
                        {[
                          { kw: 'ai seo tools', vol: '12.5k', diff: 45 },
                          { kw: 'programmatic seo strategy', vol: '8.2k', diff: 38 },
                          { kw: 'best cms for startups', vol: '45k', diff: 82 },
                        ].map((kw, i) => (
                          <div key={i} className="flex items-center justify-between rounded-lg border border-border/60 p-4 hover:bg-black/5 transition-colors cursor-default">
                            <div className="font-medium text-foreground">{kw.kw}</div>
                            <div className="flex gap-4 text-sm font-medium">
                              <span className="text-muted-foreground">Vol: <span className="text-foreground">{kw.vol}</span></span>
                              <span className="text-muted-foreground">Diff: <span className={kw.diff > 50 ? 'text-amber-600' : 'text-emerald-600'}>{kw.diff}</span></span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'Integrations' && (
                    <div className="animate-in fade-in duration-500">
                      <div className="mb-6 font-semibold text-foreground text-lg">Active Integrations</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { name: 'Webflow', status: 'Connected', color: 'bg-blue-600' },
                          { name: 'WordPress', status: 'Connected', color: 'bg-slate-700' },
                          { name: 'Shopify', status: 'Not connected', color: 'bg-emerald-600' },
                          { name: 'DataForSEO', status: 'Connected', color: 'bg-purple-600' },
                        ].map((int, i) => (
                          <div key={i} className="flex items-center gap-3 rounded-lg border border-border/60 p-4">
                            <div className={`h-10 w-10 rounded-md ${int.color} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                              {int.name[0]}
                            </div>
                            <div>
                              <div className="font-medium text-sm text-foreground">{int.name}</div>
                              <div className={`text-xs mt-0.5 font-medium ${int.status === 'Connected' ? 'text-emerald-600' : 'text-muted-foreground'}`}>{int.status}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center opacity-60 transition-opacity hover:opacity-100">
          <button 
            onClick={handleScrollExplore}
            className="flex flex-col items-center animate-bounce focus:outline-none"
            aria-label="Explore more"
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Explore</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </Container>
    </section>
  );
}
