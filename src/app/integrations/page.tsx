import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { ResourceCta } from '@/components/resource-cta';
import { Search, FileText, ShoppingBag, Layout, FileBox, Webhook, Code, Database, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Integrations — Seobox Platform',
  description: 'Connect Seobox to your favorite CMS, analytics, and data tools.',
};

const INTEGRATIONS = [
  {
    id: 'gsc',
    name: 'Google Search Console',
    category: 'Analytics',
    description: 'Sync your live search performance data to correlate SEO/GEO efforts with actual traffic.',
    status: 'Connected',
    icon: <img src="https://cdn.simpleicons.org/googlesearchconsole/4285F4" alt="Google Search Console" className="h-8 w-8" />,
    benefits: ['Real-time traffic correlation', 'Keyword impression tracking', 'Indexation status monitoring'],
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'CMS',
    description: 'Publish generated and approved content directly to your WordPress blog with one click.',
    status: 'Available',
    icon: <img src="https://cdn.simpleicons.org/wordpress/21759B" alt="WordPress" className="h-8 w-8" />,
    benefits: ['1-click publishing', 'Sync featured images', 'Update existing posts'],
  },
  {
    id: 'webflow',
    name: 'Webflow',
    category: 'CMS',
    description: 'Push SEO-optimized articles directly into your Webflow CMS collections.',
    status: 'Available',
    icon: <img src="https://cdn.simpleicons.org/webflow/4353FF" alt="Webflow" className="h-8 w-8" />,
    benefits: ['Map CMS fields automatically', 'Sync rich text formatting', 'Draft or publish instantly'],
  },
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'E-commerce',
    description: 'Generate product descriptions and blog posts tailored to your Shopify store inventory.',
    status: 'Coming Soon',
    icon: <img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Shopify" className="h-8 w-8" />,
    benefits: ['Bulk product descriptions', 'Store blog integration', 'Inventory-aware content'],
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'Productivity',
    description: 'Export content briefs, keyword research, and drafts directly into your Notion workspace.',
    status: 'Available',
    icon: <img src="https://cdn.simpleicons.org/notion/000000" alt="Notion" className="h-8 w-8" />,
    benefits: ['Sync content calendars', 'Export editorial briefs', 'Team collaboration'],
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'Automation',
    description: 'Connect Seobox to over 5,000+ apps. Trigger workflows based on publishing events.',
    status: 'Available',
    icon: <img src="https://cdn.simpleicons.org/zapier/FF4A00" alt="Zapier" className="h-8 w-8" />,
    benefits: ['Custom automation rules', 'Slack/Discord notifications', 'Google Sheets sync'],
  },
  {
    id: 'rest-api',
    name: 'REST API',
    category: 'Developer Tools',
    description: 'Build custom integrations with our robust, documented REST API.',
    status: 'Available',
    icon: <Code className="h-8 w-8 text-slate-600" />,
    benefits: ['Headless CMS support', 'Custom dashboard widgets', 'Programmatic generation'],
  },
  {
    id: 'dataforseo',
    name: 'DataForSEO',
    category: 'Data Provider',
    description: 'Powered by DataForSEO for enterprise-grade SERP and keyword metric accuracy.',
    status: 'Built-in',
    icon: <Database className="h-8 w-8 text-emerald-600" />,
    benefits: ['Live SERP data', 'Accurate keyword volumes', 'Global localization'],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                Integrate with your stack
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Seobox connects seamlessly with the tools you already use, creating a frictionless workflow from keyword research to final publication.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-muted/30 border-y border-border">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INTEGRATIONS.map((integration, i) => (
              <Reveal key={integration.id} delay={(i % 4) * 50}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted/50 border border-border/50 group-hover:scale-110 transition-transform duration-500">
                      {integration.icon}
                    </div>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      integration.status === 'Connected' || integration.status === 'Built-in'
                        ? 'bg-emerald-100 text-emerald-800'
                        : integration.status === 'Coming Soon'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{integration.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {integration.description}
                  </p>
                  
                  <div className="border-t border-border/50 pt-5 mt-auto">
                    <ul className="space-y-3">
                      {integration.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-foreground">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#103938]" />
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ResourceCta />
    </>
  );
}
