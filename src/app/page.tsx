import {
  ArrowRight,
  Search,
  PenLine,
  ShieldCheck,
  Rocket,
  Bot,
  Building2,
  Check,
  CheckCircle2,
  X,
  Quote,
  Store,
  Cpu,
  Briefcase,
  Newspaper,
  Clock,
  TrendingUp,
  Globe,
  DollarSign,
} from 'lucide-react';
import Link from 'next/link';
import { Container, Button, Eyebrow, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { HeroSection } from '@/components/hero-section';
import { InteractiveCta } from '@/components/interactive-cta';
import { WorkflowComparison } from '@/components/workflow-comparison';
import { APP_URL } from '@/lib/utils';
import { NumberTicker } from '@/components/number-ticker';
import { Marquee3D } from '@/components/marquee-3d';
import { PipelinePath } from '@/components/pipeline-path';
import { TestimonialsMarquee } from '@/components/testimonials-marquee';
import { FaqInteractive } from '@/components/faq-interactive';

const FEATURES = [
  { 
    icon: Search, 
    title: 'Keyword intelligence', 
    desc: 'Discover profitable keywords using live search data.',
    bullets: ['Search Volume', 'Keyword Difficulty', 'SERP Analysis', 'Competitor Gaps']
  },
  { 
    icon: PenLine, 
    title: 'Ranking content', 
    desc: 'An 18-stage pipeline to research, write, and optimize.',
    bullets: ['Automated Outlines', 'Long-form Drafts', 'Internal Linking', 'FAQ Schema']
  },
  { 
    icon: ShieldCheck, 
    title: 'Trust & originality', 
    desc: 'Automated verification before reaching your queue.',
    bullets: ['Plagiarism Checks', 'AI-Detection Gates', 'Fact Verification', 'SEO Readiness']
  },
  { 
    icon: Rocket, 
    title: 'One-click publish', 
    desc: 'Push approved drafts instantly to your tech stack.',
    bullets: ['WordPress & Webflow', 'Shopify Integration', 'Headless CMS Ready', 'Signed Webhooks']
  },
  { 
    icon: Bot, 
    title: 'AI visibility (GEO)', 
    desc: 'Monitor your brand presence across major AI engines.',
    bullets: ['ChatGPT & Claude', 'Google AI Overviews', 'Perplexity Tracking', 'Brand Mentions']
  },
  { 
    icon: Building2, 
    title: 'Agency-ready', 
    desc: 'Scale operations across multiple clients and teams.',
    bullets: ['Multi-Workspace', 'Team Roles', 'Branded Client Reports', 'Public API']
  },
];

const PIPELINE = [
  'Research', 'Outline', 'Draft', 'Metadata', 'FAQ', 'Internal links',
  'Originality', 'Fact-check', 'SEO score', 'GEO score', 'Review', 'Publish',
];

const TRUST = [
  { name: 'DataForSEO', iconUrl: 'https://www.google.com/s2/favicons?domain=dataforseo.com&sz=128' },
  { name: 'WordPress', iconUrl: 'https://www.google.com/s2/favicons?domain=wordpress.org&sz=128' },
  { name: 'Webflow', iconUrl: 'https://www.google.com/s2/favicons?domain=webflow.com&sz=128' },
  { name: 'Shopify', iconUrl: 'https://www.google.com/s2/favicons?domain=shopify.com&sz=128' },
  { name: 'Google Search Console', iconUrl: 'https://www.google.com/s2/favicons?domain=google.com&sz=128' },
  { name: 'Anthropic', iconUrl: 'https://www.google.com/s2/favicons?domain=anthropic.com&sz=128' },
  { name: 'Perplexity', iconUrl: 'https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128' },
  { name: 'Stripe', iconUrl: 'https://www.google.com/s2/favicons?domain=stripe.com&sz=128' },
];



const SPOTLIGHTS = [
  {
    icon: Search,
    eyebrow: 'Research',
    title: 'Decisions backed by real search data',
    desc: 'Every article starts from live keyword volume, difficulty, and SERP analysis — not guesswork. NeuroSEO continuously scans your niche for content gaps competitors are ranking for and flags pages losing position before the traffic drops.',
    points: ['Live volume & difficulty from DataForSEO', 'Automatic content-gap discovery', 'Ranking-decay alerts from Search Console'],
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Trust',
    title: 'Nothing ships until it earns it',
    desc: 'Before a draft reaches your review queue it passes plagiarism, AI-detection, and fact-verification gates, then gets scored for on-page SEO and AI-visibility readiness. You approve with confidence — or let auto-publish handle the ones that clear your thresholds.',
    points: ['Plagiarism & AI-detection screening', 'LLM-assisted fact checking', 'SEO + GEO scores on every draft'],
  },
  {
    icon: Bot,
    eyebrow: 'AI visibility',
    title: 'Win the answer, not just the link',
    desc: 'Search is moving into AI answers. NeuroSEO probes ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews to see whether they cite your brand — then structures content to improve those mentions over time.',
    points: ['Multi-engine GEO probing', 'Brand-mention tracking over time', 'Content structured for AI retrieval'],
  },
];

const USE_CASES = [
  { icon: Cpu, title: 'SaaS & startups', desc: 'Build a programmatic content engine that compounds without growing headcount.' },
  { icon: Store, title: 'E-commerce', desc: 'Rank category and buying-guide content, publish straight to Shopify.' },
  { icon: Briefcase, title: 'Agencies', desc: 'Run up to 100 client sites from one console with branded reporting.' },
  { icon: Newspaper, title: 'Content teams', desc: 'Turn a keyword list into a reviewed, on-brand editorial pipeline.' },
];

const COMPARISON_CARDS = [
  { 
    id: 'time',
    title: 'Time to First Published Article',
    icon: Clock,
    neuroseoValue: 'Minutes',
    neuroseoSubtitle: 'Automated 18-stage pipeline',
    neuroseoScore: 100,
    manualValue: 'Days to weeks',
    manualSubtitle: 'Writing, editing, formatting',
    manualScore: 15,
    badge: '⚡ 95% Faster'
  },
  { 
    id: 'research',
    title: 'Keyword & SERP Data',
    icon: Search,
    neuroseoValue: 'Included natively',
    neuroseoSubtitle: 'Real-time DataForSEO API',
    neuroseoScore: 100,
    manualValue: 'Requires extra tools',
    manualSubtitle: 'Ahrefs, Semrush, etc.',
    manualScore: 40,
    badge: '💰 Lower Cost'
  },
  { 
    id: 'quality',
    title: 'Quality & AI Detection',
    icon: ShieldCheck,
    neuroseoValue: 'Automated Gates',
    neuroseoSubtitle: 'Plagiarism & AI screening',
    neuroseoScore: 100,
    manualValue: 'Manual Review',
    manualSubtitle: 'Human editors & checkers',
    manualScore: 25,
    badge: '🛡 Risk Free'
  },
  { 
    id: 'geo',
    title: 'AI Visibility Tracking',
    icon: TrendingUp,
    neuroseoValue: 'Continuous Probing',
    neuroseoSubtitle: 'ChatGPT, Claude, Gemini',
    neuroseoScore: 100,
    manualValue: 'Blind Spots',
    manualSubtitle: 'No standardized way to track',
    manualScore: 10,
    badge: '📈 GEO Optimized'
  },
  { 
    id: 'publishing',
    title: 'CMS Publishing',
    icon: Rocket,
    neuroseoValue: 'One-click / Auto',
    neuroseoSubtitle: 'WordPress, Webflow, Shopify',
    neuroseoScore: 100,
    manualValue: 'Copy & Paste',
    manualSubtitle: 'Manual formatting & image uploads',
    manualScore: 20,
    badge: '🚀 Fully Automated'
  },
  { 
    id: 'scale',
    title: 'Scalability',
    icon: Globe,
    neuroseoValue: '100+ Sites',
    neuroseoSubtitle: 'Run entire portfolios from one hub',
    neuroseoScore: 100,
    manualValue: '1-3 Sites',
    manualSubtitle: 'Requires hiring more staff to scale',
    manualScore: 30,
    badge: '🌍 Unlimited Scale'
  }
];

const TESTIMONIALS = [
  { 
    quote: 'We replaced a freelance writer and two SEO tools with one workflow. The fact-check gate alone saved us from publishing nonsense.', 
    name: 'Maya R.', 
    role: 'Head of Growth, B2B SaaS',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  { 
    quote: 'The GEO tracking is the part nobody else has. Seeing when Perplexity starts citing us changed how we brief content.', 
    name: 'Daniel K.', 
    role: 'Founder, DTC brand',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  { 
    quote: 'Running 30 client sites used to mean 30 spreadsheets. Now it is one dashboard and a branded PDF every Monday.', 
    name: 'Priya S.', 
    role: 'Director, SEO agency',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  { 
    quote: 'I used to spend 15 hours a week just building content briefs. NeuroSEO generates them instantly based on live SERP data.', 
    name: 'Marcus T.', 
    role: 'Content Strategist',
    image: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
  { 
    quote: 'The automated internal linking is flawless. It immediately improved our topical authority without any manual auditing.', 
    name: 'Sarah L.', 
    role: 'VP of Marketing',
    image: 'https://randomuser.me/api/portraits/women/12.jpg'
  },
  { 
    quote: 'We scaled from publishing 4 articles a month to 40, without sacrificing quality or hiring more writers. Unbelievable ROI.', 
    name: 'James C.', 
    role: 'Startup Founder',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  { 
    quote: 'Finally, an AI writer that understands brand voice. I setup our style guide once and it nails our exact tone every single time.', 
    name: 'Elena V.', 
    role: 'Lead Editor',
    image: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  { 
    quote: 'Our agency margins doubled since moving to NeuroSEO. We deliver higher quality content in a fraction of the time.', 
    name: 'Tom W.', 
    role: 'Agency Partner',
    image: 'https://randomuser.me/api/portraits/men/67.jpg'
  },
  { 
    quote: 'The built-in AI detection ensures our clients feel safe. It’s the most comprehensive content pipeline I have ever used.', 
    name: 'Chloe B.', 
    role: 'SEO Manager',
    image: 'https://randomuser.me/api/portraits/women/79.jpg'
  },
];

const FAQ_PREVIEW = [
  { q: 'Do I need my own API keys?', a: 'No. NeuroSEO ships with research, writing, and publishing wired in. Bring your own keys only if you want to.' },
  { q: 'Will the content read like AI?', a: 'Every draft runs through AI-detection and originality gates, and you set the brand voice, tone, and banned words per site.' },
  { q: 'Which CMSs can it publish to?', a: 'WordPress, Webflow, and Shopify natively, plus any headless CMS via signed webhooks.' },
  { q: 'Can I review before anything goes live?', a: 'Yes. Everything lands in a review queue by default. Auto-publish is opt-in and gated by your own score thresholds.' },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* ─── Trust marquee ────────────────────────────────────────────────── */}
      <section id="trust-marquee" className="relative overflow-hidden border-y border-border/60 bg-gradient-to-b from-[#FAFAFA] to-white py-16 sm:py-24">
        <Container>
          <h2 className="mb-12 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground sm:mb-16 sm:text-sm">
            Trusted by modern marketing teams
          </h2>
        </Container>
        <div className="w-full max-w-full overflow-hidden">
          <Marquee3D items={TRUST} />
        </div>
      </section>



      {/* ─── Features ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FAFAFA] py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#FAFAFA] to-[#FAFAFA]" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Capabilities"
            title="An entire SEO team, automated"
            sub="Everything you need to research, write, optimize, publish, and monitor SEO content from one AI-powered workspace."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group flex h-full flex-col rounded-[20px] border border-border/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#103938]/30 hover:shadow-md hover:shadow-black/5">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#103938]/10 to-[#103938]/5 shadow-inner">
                    <f.icon className="h-6 w-6 text-[#103938] transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  
                  <ul className="mt-5 mb-6 space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#103938]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center text-sm font-semibold text-[#103938] transition-colors hover:text-[#0d2e2d]">
                      Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </Container>
      </section>

      {/* ─── Feature spotlights (alternating) ─────────────────────────────── */}
      <section className="bg-muted/30 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Under the hood"
            title="Built to rank, engineered to trust"
            sub="The three pillars that make autonomous content safe to publish."
          />
          <div className="mt-16 space-y-16 sm:space-y-24">
            {SPOTLIGHTS.map((s, i) => (
              <Reveal key={s.title}>
                <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-[#103938] shadow-sm">
                      {s.eyebrow}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold tracking-tighter text-foreground sm:text-3xl">{s.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                    <ul className="mt-5 space-y-2.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#103938]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm lg:h-full lg:min-h-[400px] flex flex-col">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-60"
                      style={{
                        backgroundImage:
                          'linear-gradient(#10393810 1px, transparent 1px), linear-gradient(90deg, #10393810 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 100%)',
                      }}
                    />
                    <div className="relative flex flex-1 w-full h-full items-center justify-center p-6 sm:p-10">
                      {s.eyebrow === 'Research' && (
                        <div className="w-full max-w-[420px] scale-100 sm:scale-110 lg:scale-125 origin-center rounded-2xl border border-border/50 bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] relative z-10 font-sans">
                          <div className="flex flex-col items-center border-b border-border/50 pb-6 mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50 mb-4">
                              <Search className="h-6 w-6 text-foreground/70" />
                            </div>
                            <h4 className="text-sm font-bold text-foreground mb-1">Live SERP Data</h4>
                            <p className="text-lg font-bold text-muted-foreground">Volume & Difficulty</p>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-[11px] font-bold text-foreground uppercase tracking-wider mb-2">
                                <span>SEO Automation</span>
                                <span className="text-muted-foreground">12k</span>
                              </div>
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                                <div className="h-full rounded-full bg-[#103938]" style={{ width: '85%' }} />
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-[11px] font-bold text-foreground uppercase tracking-wider mb-2">
                                <span>AI Writing</span>
                                <span className="text-muted-foreground">45k</span>
                              </div>
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                                <div className="h-full rounded-full bg-[#103938]" style={{ width: '95%' }} />
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-[11px] font-bold text-foreground uppercase tracking-wider mb-2">
                                <span>Content Gap</span>
                                <span className="text-muted-foreground">8k</span>
                              </div>
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                                <div className="h-full rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{ width: '60%' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {s.eyebrow === 'Trust' && (
                        <div className="w-full max-w-[420px] scale-100 sm:scale-110 lg:scale-125 origin-center rounded-2xl border border-border/50 bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] relative z-10 font-sans">
                          <div className="flex flex-col items-center border-b border-border/50 pb-6 mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 mb-4">
                              <ShieldCheck className="h-6 w-6 text-emerald-600" />
                            </div>
                            <h4 className="text-sm font-bold text-foreground mb-1">Quality Score</h4>
                            <div className="flex items-baseline gap-1">
                              <span className="text-5xl font-black text-emerald-500 tracking-tighter">98</span>
                              <span className="text-lg font-bold text-muted-foreground">/100</span>
                            </div>
                          </div>
                          
                          <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                                <Check className="h-3 w-3 shrink-0" />
                              </div>
                              <span className="text-xs font-bold text-foreground">Plagiarism check passed</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                                <Check className="h-3 w-3 shrink-0" />
                              </div>
                              <span className="text-xs font-bold text-foreground">AI-detection clear</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                                <Check className="h-3 w-3 shrink-0" />
                              </div>
                              <span className="text-xs font-bold text-foreground">Fact-verification verified</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {s.eyebrow === 'AI visibility' && (
                        <div className="w-full max-w-[420px] scale-100 sm:scale-110 lg:scale-125 origin-center rounded-2xl border border-border/50 bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] relative z-10 font-sans">
                          <div className="flex flex-col items-center border-b border-border/50 pb-6 mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#103938]/5 mb-4">
                              <Bot className="h-6 w-6 text-[#103938]" />
                            </div>
                            <h4 className="text-sm font-bold text-foreground mb-1">Brand Mentions</h4>
                            <div className="flex items-baseline gap-1">
                              <span className="text-5xl font-black text-[#103938] tracking-tighter">85%</span>
                              <span className="text-lg font-bold text-muted-foreground">visibility</span>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-[11px] font-bold text-foreground uppercase tracking-wider mb-2">
                                <span>ChatGPT</span>
                                <span className="text-emerald-600">High</span>
                              </div>
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                                <div className="h-full rounded-full bg-[#103938]" style={{ width: '92%' }} />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-[11px] font-bold text-foreground uppercase tracking-wider mb-2">
                                <span>Perplexity</span>
                                <span className="text-emerald-500">Medium</span>
                              </div>
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                                <div className="h-full rounded-full bg-emerald-500" style={{ width: '65%' }} />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-[11px] font-bold text-foreground uppercase tracking-wider mb-2">
                                <span>Google AI</span>
                                <span className="text-emerald-600">High</span>
                              </div>
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                                <div className="h-full rounded-full bg-[#103938]" style={{ width: '88%' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Pipeline ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Research → Publish, on autopilot"
            sub="Every article runs through the same rigorous 18-stage pipeline before it reaches you."
          />
          <PipelinePath steps={PIPELINE} />
        </Container>
      </section>

      {/* ─── Use cases ────────────────────────────────────────────────────── */}
      <section className="bg-muted/30 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Who it's for"
            title="One engine, every content team"
            sub="However you grow with search, NeuroSEO adapts to the workflow."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((u, i) => (
              <Reveal key={u.title} delay={(i % 4) * 60}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#103938]/30 hover:shadow-xl hover:shadow-[#103938]/5 cursor-default relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#103938]/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-[#103938]/8 transition-colors duration-300 group-hover:bg-[#103938]/10">
                    <u.icon className="h-5 w-5 text-[#103938] transition-transform duration-300 group-hover:scale-110" />
                  </span>
                  <h3 className="relative z-10 mt-4 text-base font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-[#103938]">{u.title}</h3>
                  <p className="relative z-10 mt-1.5 text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Comparison ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Why NeuroSEO"
              title="Why Teams Choose NeuroSEO"
              sub="What it takes to ship trustworthy content at scale — with and without NeuroSEO."
            />
          </div>
          
          <WorkflowComparison />
        </Container>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────────────── */}
      <section className="bg-muted/30 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Loved by operators"
            title="Teams that stopped guessing"
            sub="From solo founders to multi-client agencies."
          />
          <TestimonialsMarquee items={TESTIMONIALS} />
        </Container>
      </section>

      {/* ─── FAQ preview ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Everything you need to know"
            sub="Questions before you get started? Here are the answers to the ones we hear most."
          />
          <FaqInteractive faqs={FAQ_PREVIEW} />
          
          <div className="mt-16 flex flex-col items-center justify-center gap-6 px-4">
            <p className="text-center text-sm font-medium text-muted-foreground">
              Still have questions? We're happy to help you before you get started.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button href="/contact" variant="outline" className="w-full sm:w-auto">
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing" variant="primary" className="w-full sm:w-auto">
                Try NeuroSEO
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <InteractiveCta />
    </>
  );
}
