import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { ResourceCta } from '@/components/resource-cta';
import { HelpArticles } from '@/components/help-articles';
import { Search, User, CreditCard, Share2, Sparkles, Coins, Link2, Code, HelpCircle, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Help Center — Seobox Platform',
  description: 'Find answers, guides, and tutorials for the Seobox platform.',
};

const CATEGORIES = [
  { name: 'Account', icon: <User className="h-5 w-5" />, desc: 'Manage profile & team' },
  { name: 'Billing', icon: <CreditCard className="h-5 w-5" />, desc: 'Invoices & plans' },
  { name: 'Publishing', icon: <Share2 className="h-5 w-5" />, desc: 'CMS integrations' },
  { name: 'AI Content', icon: <Sparkles className="h-5 w-5" />, desc: 'Generation pipelines' },
  { name: 'Credits', icon: <Coins className="h-5 w-5" />, desc: 'Usage & limits' },
  { name: 'Integrations', icon: <Link2 className="h-5 w-5" />, desc: 'Connecting tools' },
  { name: 'API', icon: <Code className="h-5 w-5" />, desc: 'Developer docs' },
  { name: 'FAQ', icon: <HelpCircle className="h-5 w-5" />, desc: 'Common questions' },
];

const POPULAR_ARTICLES = [
  {
    title: 'How to connect WordPress via the REST API',
    content: 'To connect your WordPress site, navigate to Settings > Integrations in your dashboard. Generate a new API Application password in WordPress, and paste the credentials into Seobox to enable 1-click publishing.',
  },
  {
    title: 'Understanding how credits are calculated per generation',
    content: 'Each article generation consumes 1 credit. However, if you opt to use the built-in fact-checking API or originality scoring, an additional 0.5 credits are consumed per action to cover the API costs.',
  },
  {
    title: 'Why did my article fail the AI detection check?',
    content: 'Our strict AI detection limits aim for a >90% human score to protect your domain trust. If an article fails, use the "Humanize" button in the editor to automatically restructure robotic phrasing and improve the score.',
  },
  {
    title: 'Inviting team members to your workspace',
    content: 'Pro and Enterprise users can invite team members by going to Workspace Settings > Team. You can assign roles such as Editor, Admin, or Viewer to restrict publishing permissions.',
  },
  {
    title: 'Configuring custom domain tracking for GEO metrics',
    content: 'Connect your Google Search Console via OAuth in the Analytics tab. Once verified, Seobox will cross-reference your GSC data with our Perplexity API to track your exact citation rates.',
  },
  {
    title: 'Upgrading from Pro to Enterprise tier',
    content: 'Enterprise upgrades require a brief consultation to provision your isolated LLM instances and fine-tune models. Please contact our sales team using the link on the right to begin the process.',
  },
];

export default function HelpPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 bg-[#103938] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                How can we help?
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <div className="mx-auto mt-10 flex max-w-2xl items-center overflow-hidden rounded-full bg-white/10 pl-5 pr-2 py-2 shadow-sm backdrop-blur-md focus-within:ring-2 focus-within:ring-emerald-400 transition-all border border-white/20">
                <Search className="h-5 w-5 text-white/60" />
                <input 
                  type="text"
                  placeholder="Search the knowledge base..."
                  className="w-full border-0 bg-transparent px-4 py-2 text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-0"
                />
                <button className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#103938] transition-transform hover:scale-105">
                  Search
                </button>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-white/60">
                <span>Popular:</span>
                <Link href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30">API Keys</Link>
                <Link href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30">Billing</Link>
                <Link href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30">WordPress Sync</Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-muted/30 border-b border-border">
        <Container>
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Browse by Category</h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CATEGORIES.map((cat, i) => (
                <Reveal key={cat.name} delay={(i % 4) * 50}>
                  <Link href="#" className="group flex flex-col items-center justify-center rounded-[20px] border border-border bg-white p-8 text-center transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-black/5">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50 text-[#103938] transition-colors group-hover:bg-[#103938] group-hover:text-white">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-[#103938]">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground">{cat.desc}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <Reveal>
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-emerald-600" /> Popular Articles
                </h2>
              </Reveal>
              <HelpArticles articles={POPULAR_ARTICLES} />
            </div>
            
            <div className="w-full lg:w-[350px]">
              <Reveal delay={200}>
                <div className="rounded-[24px] bg-muted/50 p-8 border border-border text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                    <HelpCircle className="h-8 w-8 text-[#103938]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Still need help?</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                    Can't find the answer you're looking for? Our support team is ready to help you with any technical issues.
                  </p>
                  <Link href="/support" className="inline-flex w-full items-center justify-center rounded-full bg-[#103938] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#0c2a29] hover:shadow-lg">
                    Contact Support
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
