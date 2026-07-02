import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { ResourceCta } from '@/components/resource-cta';
import { CheckCircle2, Search, Edit3, LineChart, LayoutTemplate, Share2, Shield, LayoutDashboard } from 'lucide-react';
import { 
  AiResearchMockup, 
  AiWritingMockup, 
  GeoTrackingMockup, 
  SeoOptimizationMockup, 
  CmsPublishingMockup, 
  AiDetectionMockup, 
  ReportingMockup 
} from '@/components/feature-mockups';

export const metadata: Metadata = {
  title: 'Features — NeuroSEO Platform',
  description: 'Explore the complete suite of AI-powered tools designed to automate your SEO and GEO workflows.',
};

const FEATURES = [
  {
    id: 'ai-research',
    title: 'AI Research',
    description: 'Deep dive into SERP intent and keyword gaps using DataForSEO and live Google search data. Our AI automatically clusters keywords and identifies informational vs transactional intent.',
    icon: <Search className="h-6 w-6" />,
    bullets: ['Automated keyword clustering', 'SERP intent analysis', 'Competitor content gaps'],
    visual: <AiResearchMockup />,
  },
  {
    id: 'ai-writing',
    title: 'AI Writing',
    description: 'Generate high-quality, long-form content optimized for both traditional crawlers and AI answer engines. Structure your content with perfect heading hierarchies.',
    icon: <Edit3 className="h-6 w-6" />,
    bullets: ['Fact-dense generation', 'Automatic schema markup', 'Brand voice matching'],
    visual: <AiWritingMockup />,
  },
  {
    id: 'geo-tracking',
    title: 'GEO Tracking',
    description: 'Monitor your visibility in AI Overviews, Perplexity, and ChatGPT. Track how often your brand is cited as a source by major LLMs.',
    icon: <LineChart className="h-6 w-6" />,
    bullets: ['Citation tracking', 'Extractability scoring', 'LLM visibility metrics'],
    visual: <GeoTrackingMockup />,
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Classic technical and on-page SEO made simple. Real-time scoring for TF-IDF, LSI keywords, readability, and internal linking structure.',
    icon: <LayoutTemplate className="h-6 w-6" />,
    bullets: ['Real-time SEO scoring', 'Internal link suggestions', 'Meta tag generation'],
    visual: <SeoOptimizationMockup />,
  },
  {
    id: 'cms-publishing',
    title: 'CMS Publishing',
    description: 'Push finalized, approved content directly to your CMS. Seamlessly integrate with WordPress, Webflow, Ghost, or your custom stack via API.',
    icon: <Share2 className="h-6 w-6" />,
    bullets: ['1-click publishing', 'Schedule and queue', 'Rich media syncing'],
    visual: <CmsPublishingMockup />,
  },
  {
    id: 'ai-detection',
    title: 'AI Detection & Originality',
    description: 'Ensure your content passes rigorous quality standards. Built-in plagiarism checks and AI-footprint reduction to maintain domain trust.',
    icon: <Shield className="h-6 w-6" />,
    bullets: ['Plagiarism scanning', 'Humanizer models', 'Trust score rating'],
    visual: <AiDetectionMockup />,
  },
  {
    id: 'reporting',
    title: 'Reporting Dashboard',
    description: 'Visualize your entire content pipeline. Track ROI, traffic growth, citation increases, and publishing velocity in one beautiful dashboard.',
    icon: <LayoutDashboard className="h-6 w-6" />,
    bullets: ['Custom report builder', 'Automated email digests', 'Traffic vs Output correlation'],
    visual: <ReportingMockup />,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-[#103938] mb-6">
                Platform Overview
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                Everything you need to dominate modern search
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                From keyword discovery to one-click CMS publishing. NeuroSEO replaces 5 different tools with one unified, autonomous pipeline.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-muted/30 border-y border-border">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <SectionHeading 
              align="center"
              eyebrow="Capabilities"
              title="A Complete Workflow"
              sub="Built for teams that need to scale high-quality, trustworthy content rapidly."
            />
          </div>

          <div className="mx-auto max-w-5xl space-y-24">
            {FEATURES.map((feature, index) => (
              <Reveal key={feature.id} delay={100}>
                <div className={`flex flex-col gap-12 lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                  <div className="flex-1 space-y-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#103938] text-white shadow-lg">
                      {feature.icon}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">{feature.title}</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">{feature.description}</p>
                    <ul className="mt-8 space-y-3">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 relative aspect-[4/3] rounded-[32px] bg-muted/30 overflow-hidden">
                    {feature.visual}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <SectionHeading 
              align="center"
              title="The NeuroSEO Advantage"
              sub="See why modern marketing teams are migrating from legacy SEO tools."
            />
          </div>
          
          <Reveal delay={200}>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-border bg-white shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-6 font-semibold text-muted-foreground w-1/3">Feature</th>
                    <th className="p-6 font-bold text-[#103938] w-1/3 border-l border-border">NeuroSEO</th>
                    <th className="p-6 font-semibold text-muted-foreground w-1/3 border-l border-border">Legacy Tools</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-6 font-medium text-foreground">Content Generation</td>
                    <td className="p-6 text-[#103938] bg-emerald-50/30 border-l border-border font-medium flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Autonomous AI Pipeline
                    </td>
                    <td className="p-6 text-muted-foreground border-l border-border">Manual writing</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-foreground">Optimization Target</td>
                    <td className="p-6 text-[#103938] bg-emerald-50/30 border-l border-border font-medium flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> SEO & GEO (AI Citations)
                    </td>
                    <td className="p-6 text-muted-foreground border-l border-border">Classic SEO only</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-foreground">Fact Verification</td>
                    <td className="p-6 text-[#103938] bg-emerald-50/30 border-l border-border font-medium flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Built-in SERP Fact-checking
                    </td>
                    <td className="p-6 text-muted-foreground border-l border-border">None</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-foreground">Publishing</td>
                    <td className="p-6 text-[#103938] bg-emerald-50/30 border-l border-border font-medium flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 1-Click CMS Sync
                    </td>
                    <td className="p-6 text-muted-foreground border-l border-border">Copy & Paste</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      <ResourceCta />
    </>
  );
}
