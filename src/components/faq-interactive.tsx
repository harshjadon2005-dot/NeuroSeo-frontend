"use client";

import React, { useState, useEffect } from 'react';
import { Plus, Minus, Bot, Database, Search, Sparkles, Workflow, CheckCircle2, AlertCircle, Layout, ShoppingCart, Globe, FileJson, FileText, CalendarClock } from 'lucide-react';
import { Reveal } from './reveal';

// --- MOCKUP COMPONENTS ---

function IntegrationsMockup() {
  const integrations = [
    { name: 'OpenAI', icon: Bot, color: 'text-emerald-500' },
    { name: 'Claude', icon: Sparkles, color: 'text-amber-500' },
    { name: 'Gemini', icon: Sparkles, color: 'text-blue-500' },
    { name: 'DataForSEO', icon: Database, color: 'text-indigo-500' },
    { name: 'Google Search Console', icon: Search, color: 'text-rose-500' },
  ];

  return (
    <div className="flex h-full flex-col p-5 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h4 className="text-sm font-semibold tracking-tight text-foreground">Integrations</h4>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          Connected automatically
        </span>
      </div>
      <div className="grid gap-3">
        {integrations.map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border border-border/50 bg-white/50 p-3 shadow-sm backdrop-blur-sm">
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-background shadow-sm ${item.color}`}>
              <item.icon className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium text-foreground">{item.name}</span>
            <div className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Active
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QualityMockup() {
  const metrics = [
    { label: 'Human Score', value: '92%', progress: 92, color: 'bg-emerald-500' },
    { label: 'SEO Score', value: '88/100', progress: 88, color: 'bg-emerald-500' },
    { label: 'Originality', value: '100%', progress: 100, color: 'bg-emerald-500' },
  ];

  return (
    <div className="flex h-full flex-col p-5 sm:p-8">
      <h4 className="mb-6 text-sm font-semibold tracking-tight text-foreground">Article Quality Dashboard</h4>
      
      <div className="mb-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border/50 bg-white/50 p-4 shadow-sm backdrop-blur-sm">
          <div className="mb-1 text-xs text-muted-foreground">AI Detection</div>
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Passed
          </div>
        </div>
        <div className="rounded-xl border border-border/50 bg-white/50 p-4 shadow-sm backdrop-blur-sm">
          <div className="mb-1 text-xs text-muted-foreground">Readability</div>
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Sparkles className="h-4 w-4 text-blue-500" /> 8th Grade
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-xl border border-border/50 bg-white/50 p-5 shadow-sm backdrop-blur-sm">
        {metrics.map((m, i) => (
          <div key={i}>
            <div className="mb-2 flex items-center justify-between text-xs font-medium">
              <span className="text-muted-foreground">{m.label}</span>
              <span className="text-foreground">{m.value}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PublishingMockup() {
  const targets = [
    { name: 'WordPress', icon: Globe },
    { name: 'Webflow', icon: Layout },
    { name: 'Shopify', icon: ShoppingCart },
    { name: 'Ghost', icon: Workflow },
    { name: 'Custom Webhook', icon: FileJson },
  ];

  return (
    <div className="flex h-full flex-col p-5 sm:p-8">
      <h4 className="mb-8 text-sm font-semibold tracking-tight text-foreground">Publishing Integrations</h4>
      
      <div className="flex items-center justify-between mb-10 px-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#103938] text-white shadow-lg">
          <Bot className="h-6 w-6" />
        </div>
        <div className="flex-1 border-t-2 border-dashed border-emerald-500/30 mx-4 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAFAFA] px-2 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
             Publishing...
           </div>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border-2 border-emerald-500 text-emerald-500 shadow-lg relative">
          <Globe className="h-5 w-5" />
          <div className="absolute -bottom-1.5 -right-1.5 rounded-full bg-emerald-500 text-white p-0.5">
            <CheckCircle2 className="h-3 w-3" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-auto">
        {targets.map((t, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg border border-border/40 bg-white/40 p-2.5 backdrop-blur-sm">
            <t.icon className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs font-medium text-foreground/80">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewQueueMockup() {
  const queue = [
    { title: 'The 2024 Guide', status: 'Published', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Content Scaling Strategies', status: 'Scheduled', icon: CalendarClock, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Why AI is the future', status: 'Approved', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-100 ring-1 ring-emerald-500', highlight: true },
    { title: 'Top 10 Marketing Tools', status: 'Pending Review', icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'How to optimize for SEO', status: 'Draft', icon: FileText, color: 'text-muted-foreground', bg: 'bg-muted/50' },
  ];

  return (
    <div className="flex h-full flex-col p-5 sm:p-8">
      <h4 className="mb-6 text-sm font-semibold tracking-tight text-foreground">Review Queue</h4>
      <div className="flex flex-col gap-2.5">
        {queue.map((item, i) => (
          <div key={i} className={`flex items-center justify-between rounded-xl p-3 shadow-sm transition-all ${item.bg} ${item.highlight ? 'scale-[1.02] shadow-md my-1' : 'opacity-90'}`}>
            <span className={`text-xs font-semibold ${item.highlight ? 'text-emerald-950' : 'text-foreground'}`}>{item.title}</span>
            <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${item.color}`}>
              <item.icon className="h-3.5 w-3.5" />
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---

export function FaqInteractive({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getMockup = (index: number) => {
    switch (index) {
      case 0: return <IntegrationsMockup />;
      case 1: return <QualityMockup />;
      case 2: return <PublishingMockup />;
      case 3: return <ReviewQueueMockup />;
      default: return <IntegrationsMockup />;
    }
  };

  return (
    <div className="mx-auto mt-16 max-w-6xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[45%_1fr] lg:gap-12 xl:gap-16">
        
        {/* Left Column: Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 60}>
                <div 
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-[2px] ${
                    isOpen 
                      ? 'border-[#103938] bg-[#103938]/[0.02] shadow-md' 
                      : 'border-border/60 bg-white hover:border-[#103938]/30 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(i)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                  >
                    <span className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                      isOpen ? 'text-[#103938]' : 'text-foreground group-hover:text-[#103938]'
                    }`}>
                      {faq.q}
                    </span>
                    <span className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border shadow-sm transition-all duration-300 ${
                      isOpen 
                        ? 'border-[#103938] bg-[#103938] text-white' 
                        : 'border-border bg-white text-muted-foreground group-hover:border-[#103938]/30 group-hover:text-[#103938]'
                    }`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                      
                      {/* Mobile mockup preview (inline) */}
                      <div className="block lg:hidden relative w-full border-t border-border/40 bg-[#FAFAFA]/80">
                         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:24px_24px]"></div>
                         <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#103938]/10 blur-[40px]"></div>
                         <div className="relative z-10 w-full overflow-hidden">
                           {getMockup(i)}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Right Column: Product Preview */}
        <div className="hidden lg:block relative h-auto w-full overflow-hidden rounded-[24px] border border-border/50 bg-[#FAFAFA] shadow-sm">
          {/* Subtle background textures */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#103938]/10 blur-[80px]"></div>
          
          <div className="relative h-full w-full min-h-[400px]">
            {isClient && faqs.map((_, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  openIndex === i 
                    ? 'opacity-100 translate-y-0 pointer-events-auto z-10' 
                    : 'opacity-0 translate-y-4 pointer-events-none z-0'
                }`}
              >
                {getMockup(i)}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
