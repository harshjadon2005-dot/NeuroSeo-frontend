import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { ResourceCta } from '@/components/resource-cta';
import { CheckCircle2, CircleDashed, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Roadmap — NeuroSEO Platform',
  description: 'See what we are building next at NeuroSEO.',
};

const TIMELINE = [
  {
    quarter: "Q3 2025",
    status: "completed",
    items: [
      { id: 'NEU-094', title: 'AI Overviews Tracking', desc: 'Monitor citations in Google AI Overviews.', tag: 'Analytics', status: 'completed' },
      { id: 'NEU-098', title: 'Extractability Scoring', desc: 'Algorithm to measure GEO readiness.', tag: 'Core AI', status: 'completed' },
    ]
  },
  {
    quarter: "Q4 2025",
    status: "completed",
    items: [
      { id: 'NEU-102', title: 'WordPress Plugin v1', desc: 'One-click publishing support.', tag: 'CMS', status: 'completed' },
      { id: 'NEU-104', title: 'DataForSEO Integration', desc: 'Live SERP metric tracking.', tag: 'Integration', status: 'completed' },
    ]
  },
  {
    quarter: "Q1 2026",
    status: "in-progress",
    items: [
      { id: 'NEU-112', title: 'Shopify Integration', desc: 'Bulk product description generation pipeline.', tag: 'Integration', status: 'in-progress' },
      { id: 'NEU-115', title: 'Zapier App', desc: 'Connect NeuroSEO publishing events to 5000+ apps.', tag: 'Automation', status: 'in-progress' },
      { id: 'NEU-118', title: 'Team Workspaces', desc: 'Role-based access control and approval flows.', tag: 'Enterprise', status: 'in-progress' },
    ]
  },
  {
    quarter: "Q2 2026",
    status: "planned",
    items: [
      { id: 'NEU-120', title: 'Webflow CMS Sync', desc: 'Native Webflow collection mapping.', tag: 'CMS', status: 'planned' },
      { id: 'NEU-124', title: 'Custom Fine-tuning', desc: 'Train the generation engine strictly on your brand guidelines.', tag: 'Core AI', status: 'planned' },
    ]
  },
  {
    quarter: "Q3 2026",
    status: "planned",
    items: [
      { id: 'NEU-128', title: 'Video SEO', desc: 'Automated YouTube description and chapter generation.', tag: 'New Product', status: 'planned' },
      { id: 'NEU-135', title: 'Enterprise SSO', desc: 'SAML and Okta integration for large teams.', tag: 'Enterprise', status: 'planned' },
    ]
  }
];

export default function RoadmapPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/50 px-3 py-1 text-sm font-medium text-emerald-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                The Journey
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                Product Roadmap
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Follow our development cycle. Scroll through what we've shipped, what we're actively building, and what's coming next.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-muted/20 border-y border-border">
        <Container>
          <div className="mx-auto max-w-4xl relative">
            
            {/* The Central Timeline Line */}
            <div className="absolute left-[23px] md:left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-500 via-blue-500 to-border/30 rounded-full" />

            <div className="flex flex-col gap-16">
              {TIMELINE.map((milestone, index) => (
                <Reveal key={milestone.quarter} delay={index * 100}>
                  <div className="relative pl-16 md:pl-28">
                    
                    {/* Node on the Line */}
                    <div className="absolute left-4 md:left-8 top-1 -translate-x-1/2 flex items-center justify-center">
                      {milestone.status === 'completed' && (
                        <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10 border-4 border-white">
                        </div>
                      )}
                      {milestone.status === 'in-progress' && (
                        <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.6)] z-10 border-4 border-white">
                           <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                        </div>
                      )}
                      {milestone.status === 'planned' && (
                        <div className="h-5 w-5 rounded-full bg-white border-2 border-dashed border-muted-foreground/40 z-10">
                        </div>
                      )}
                    </div>

                    {/* Quarter Title */}
                    <div className="mb-6">
                      <h2 className="text-2xl font-black text-foreground">{milestone.quarter}</h2>
                      <p className="text-sm font-medium text-muted-foreground mt-1 uppercase tracking-wider">
                        {milestone.status === 'completed' && <span className="text-emerald-600">Shipped</span>}
                        {milestone.status === 'in-progress' && <span className="text-blue-600">Currently Building</span>}
                        {milestone.status === 'planned' && <span>Upcoming</span>}
                      </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {milestone.items.map((item) => (
                        <div 
                          key={item.id}
                          className={cn(
                            "group relative flex flex-col gap-3 rounded-xl border p-5 shadow-sm transition-all hover:-translate-y-1 bg-white",
                            item.status === 'completed' ? "border-border/60 hover:shadow-[0_10px_30px_rgba(16,57,56,0.08)]" : "",
                            item.status === 'in-progress' ? "border-blue-500/20 shadow-blue-500/5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]" : "",
                            item.status === 'planned' ? "border-dashed border-border/80 bg-[#FAFAFA]/50 hover:border-solid hover:border-border hover:bg-white hover:shadow-md" : ""
                          )}
                        >
                          {item.status === 'in-progress' && (
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                          )}

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {item.status === 'completed' && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />}
                              {item.status === 'in-progress' && <Loader2 className="h-3.5 w-3.5 text-blue-500 animate-spin [animation-duration:3s]" />}
                              {item.status === 'planned' && <CircleDashed className="h-3.5 w-3.5 text-muted-foreground/60" />}
                              
                              <span className={cn(
                                "text-[11px] font-semibold",
                                item.status === 'planned' ? "text-muted-foreground/60" : "text-muted-foreground"
                              )}>
                                {item.id}
                              </span>
                            </div>
                            <span className={cn(
                              "rounded-md border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider",
                              item.status === 'completed' ? "border-border/50 bg-[#FAFAFA] text-muted-foreground" : "",
                              item.status === 'in-progress' ? "border-blue-500/20 bg-blue-50/50 text-blue-700" : "",
                              item.status === 'planned' ? "border-border/30 bg-muted/50 text-muted-foreground" : ""
                            )}>
                              {item.tag}
                            </span>
                          </div>

                          <div>
                            <h4 className={cn(
                              "text-sm font-bold transition-colors",
                              item.status === 'completed' ? "text-foreground group-hover:text-[#103938]" : "",
                              item.status === 'in-progress' ? "text-foreground group-hover:text-blue-600" : "",
                              item.status === 'planned' ? "text-foreground/80 group-hover:text-foreground" : ""
                            )}>
                              {item.title}
                            </h4>
                            <p className={cn(
                              "mt-1 text-[13px] line-clamp-2 leading-relaxed",
                              item.status === 'planned' ? "text-muted-foreground/80" : "text-muted-foreground"
                            )}>
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>

            {/* End of line fade */}
            <div className="absolute left-[23px] md:left-[39px] -bottom-16 h-24 w-[2px] bg-gradient-to-b from-border/30 to-transparent rounded-full" />
          </div>
        </Container>
      </section>

      <ResourceCta />
    </>
  );
}
