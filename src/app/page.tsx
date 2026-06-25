import {
  ArrowRight,
  Search,
  PenLine,
  ShieldCheck,
  Rocket,
  Bot,
  Building2,
  Check,
  X,
  Quote,
  Store,
  Cpu,
  Briefcase,
  Newspaper,
} from 'lucide-react';
import Link from 'next/link';
import { Container, Button, Eyebrow, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { CtaSection } from '@/components/cta-section';
import { APP_URL } from '@/lib/utils';

const FEATURES = [
  { icon: Search, title: 'Keyword intelligence', desc: 'Real search volume, difficulty, and SERP data from DataForSEO. Auto-discovers content gaps and ranking decay.' },
  { icon: PenLine, title: 'Ranking content', desc: 'An 18-stage pipeline researches, outlines, drafts, and optimizes long-form articles with internal links and FAQ schema.' },
  { icon: ShieldCheck, title: 'Trust & originality', desc: 'Plagiarism, AI-detection, and fact verification gates run before anything reaches your review queue.' },
  { icon: Rocket, title: 'One-click publish', desc: 'Push approved articles straight to WordPress, Webflow, Shopify, or any headless CMS via signed webhooks.' },
  { icon: Bot, title: 'AI visibility (GEO)', desc: 'Track whether ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews cite your brand.' },
  { icon: Building2, title: 'Agency-ready', desc: 'Multi-workspace, team roles, branded PDF client reports, a public API, and outbound webhooks.' },
];

const PIPELINE = [
  'Research', 'Outline', 'Draft', 'Metadata', 'FAQ', 'Internal links',
  'Originality', 'Fact-check', 'SEO score', 'GEO score', 'Review', 'Publish',
];

const TRUST = [
  'DataForSEO', 'WordPress', 'Webflow', 'Shopify', 'Google Search Console',
  'Anthropic', 'Perplexity', 'Stripe',
];

const STATS = [
  { value: '18', label: 'Quality stages per article' },
  { value: '5', label: 'AI engines tracked for GEO' },
  { value: '4', label: 'Native CMS integrations' },
  { value: '100%', label: 'Originality-checked before review' },
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

const COMPARISON = [
  { label: 'Time to first published article', neuro: 'Minutes', diy: 'Days to weeks' },
  { label: 'Real keyword & SERP data', neuro: true, diy: 'Extra tools' },
  { label: 'Plagiarism + AI-detection gates', neuro: true, diy: 'Manual' },
  { label: 'AI-visibility (GEO) tracking', neuro: true, diy: false },
  { label: 'One-click CMS publishing', neuro: true, diy: false },
  { label: 'Scales to 100 sites', neuro: true, diy: 'More hires' },
  { label: 'Cost', neuro: 'Flat subscription', diy: 'Salaries + tools' },
];

const TESTIMONIALS = [
  { quote: 'We replaced a freelance writer and two SEO tools with one workflow. The fact-check gate alone saved us from publishing nonsense.', name: 'Maya R.', role: 'Head of Growth, B2B SaaS' },
  { quote: 'The GEO tracking is the part nobody else has. Seeing when Perplexity starts citing us changed how we brief content.', name: 'Daniel K.', role: 'Founder, DTC brand' },
  { quote: 'Running 30 client sites used to mean 30 spreadsheets. Now it is one dashboard and a branded PDF every Monday.', name: 'Priya S.', role: 'Director, SEO agency' },
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
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* grid overlay — brand signature, #103938 at 2% with radial fade */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#10393814 1px, transparent 1px), linear-gradient(90deg, #10393814 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)',
          }}
        />
        {/* ambient blobs */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-50 blur-3xl drift-slow" />
        <div className="pointer-events-none absolute right-1/4 top-10 h-72 w-72 translate-x-1/2 rounded-full bg-emerald-50 blur-3xl drift-slow" />

        <Container className="relative pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
          <Reveal>
            <Eyebrow>Autonomous AI SEO · Real ranking data</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.4rem,8vw,4.5rem)] font-bold leading-[0.98] tracking-tighter text-foreground">
              SEO content that{' '}
              <span className="text-[#103938]">writes &amp; publishes itself</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-snug text-muted-foreground sm:text-xl">
              NeuroSEO researches keywords, writes ranking articles, fact-checks them, scores SEO and AI visibility,
              and publishes to your CMS — continuously, on autopilot.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={`${APP_URL}/signup`} external size="lg">
                Generate your first article
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View pricing
              </Button>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required · AES-256 encrypted · Cancel anytime
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ─── Trust marquee ────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-muted/30 py-8">
        <div className="relative overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
            {[...TRUST, ...TRUST].map((name, i) => (
              <span key={i} className="text-sm font-semibold tracking-tight text-muted-foreground/70">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats band ───────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) * 60}>
                <div className="text-center">
                  <div className="text-4xl font-bold tracking-tighter text-[#103938] sm:text-5xl">{s.value}</div>
                  <div className="mt-2 text-sm leading-snug text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Features ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="An entire SEO team, automated"
            sub="From research to published, ranking content — without the headcount."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 60}>
                <div className="group h-full rounded-2xl border border-border bg-white p-7 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#103938]/8 transition-colors group-hover:bg-[#103938]/12">
                    <f.icon className="h-5 w-5 text-[#103938]" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
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
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm">
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
                    <div className="relative flex h-48 items-center justify-center">
                      <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#103938]/8">
                        <s.icon className="h-9 w-9 text-[#103938]" />
                      </span>
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
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
            {PIPELINE.map((step, i) => (
              <Reveal key={step} delay={i * 40}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#103938] text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </span>
                  {i < PIPELINE.length - 1 && (
                    <span className="pulse-line hidden h-px w-6 bg-[#103938]/30 lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
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
                <div className="h-full rounded-2xl border border-border bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#103938]/8">
                    <u.icon className="h-5 w-5 text-[#103938]" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">{u.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Comparison ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why NeuroSEO"
            title="The math against doing it manually"
            sub="What it takes to ship trustworthy content at scale — with and without NeuroSEO."
          />
          <Reveal>
            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <div className="grid grid-cols-[1.5fr_1fr_1fr] items-center border-b border-border bg-muted/40 px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <span></span>
                <span className="text-center text-[#103938]">NeuroSEO</span>
                <span className="text-center">Manual / DIY</span>
              </div>
              {COMPARISON.map((row) => (
                <div key={row.label} className="grid grid-cols-[1.5fr_1fr_1fr] items-center border-b border-border px-5 py-3.5 text-sm last:border-0">
                  <span className="font-medium text-foreground">{row.label}</span>
                  <span className="flex justify-center">
                    {row.neuro === true ? (
                      <Check className="h-4 w-4 text-[#103938]" />
                    ) : (
                      <span className="text-center text-xs font-medium text-foreground">{row.neuro}</span>
                    )}
                  </span>
                  <span className="flex justify-center text-center">
                    {row.diy === false ? (
                      <X className="h-4 w-4 text-muted-foreground/50" />
                    ) : (
                      <span className="text-xs text-muted-foreground">{row.diy}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
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
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 60}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-7">
                  <Quote className="h-6 w-6 text-[#103938]/30" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#103938] text-sm font-semibold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                      <span className="block text-xs text-muted-foreground">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── FAQ preview ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="The short answers"
            sub={
              <>
                More on the{' '}
                <Link href="/faq" className="font-medium text-[#103938] hover:underline">
                  full FAQ
                </Link>
                .
              </>
            }
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {FAQ_PREVIEW.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 60}>
                <div className="h-full rounded-2xl border border-border bg-white p-6">
                  <h3 className="text-sm font-semibold tracking-tight text-foreground">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/faq" variant="outline">
              Read the full FAQ
            </Button>
            <Button href="/contact" variant="ghost">
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
