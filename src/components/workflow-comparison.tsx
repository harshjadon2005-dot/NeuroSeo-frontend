'use client';

import { Search, ChartColumn, FileText, ShieldCheck, Rocket, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/reveal';
import { NumberTicker } from '@/components/number-ticker';

const UNIFIED_STEPS = [
  { 
    icon: Search, 
    title: 'Keyword Research', 
    traditional: 'Manual search volume check',
    seobox: 'Completed'
  },
  { 
    icon: ChartColumn, 
    title: 'SERP Analysis', 
    traditional: 'Manual competitor analysis',
    seobox: 'Completed'
  },
  { 
    icon: FileText, 
    title: 'Outline & Writing', 
    traditional: 'Manual structuring & drafting',
    seobox: 'AI Draft Generation'
  },
  { 
    icon: ShieldCheck, 
    title: 'Editing & Quality', 
    traditional: 'Human review & third-party screening',
    seobox: 'Quality Verification'
  },
  { 
    icon: Rocket, 
    title: 'Publishing', 
    traditional: 'Manual upload to CMS',
    seobox: 'One-click Publishing'
  },
];

const STATS = [
  { value: 95, suffix: '%', label: 'Faster Publishing' },
  { value: 6, suffix: '+', label: 'Tools Replaced' },
  { value: 100, suffix: '%', label: 'Automated Workflow' },
];

export function WorkflowComparison() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      
      {/* ─── Unified Comparison Table ────────────────────────────────────── */}
      <div className="w-full overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        <Reveal className="min-w-[768px] overflow-hidden rounded-[20px] border border-[#E8ECEA] bg-white shadow-sm shadow-emerald-900/5">
          
          {/* Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-[#E8ECEA] bg-[#FAFAFA]/50">
            <div className="px-6 py-5 md:px-8 text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Feature Area
            </div>
            <div className="px-6 py-5 md:px-8 border-l border-[#E8ECEA] text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Traditional Workflow
            </div>
            <div className="px-6 py-5 md:px-8 border-l border-[#E8ECEA] text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#103938] bg-emerald-500/5">
              Seobox
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {UNIFIED_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title} 
                  className={cn(
                    "group relative grid grid-cols-[1.2fr_1fr_1fr] transition-colors duration-250 hover:bg-emerald-50/40",
                    index !== UNIFIED_STEPS.length - 1 ? "border-b border-[#E8ECEA]" : ""
                  )}
                >
                  {/* Feature Column */}
                  <div className="p-6 md:px-8 md:py-6 flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E8ECEA] bg-[#FAFAFA] transition-transform duration-250 group-hover:scale-110 group-hover:border-emerald-500/30 group-hover:bg-white group-hover:shadow-sm">
                      <Icon className="h-4 w-4 text-[#103938]" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{step.title}</span>
                  </div>

                  {/* Traditional Column */}
                  <div className="p-6 md:px-8 md:py-6 border-l border-[#E8ECEA] flex flex-col justify-center">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {step.traditional}
                    </span>
                  </div>

                  {/* Seobox Column */}
                  <div className="p-6 md:px-8 md:py-6 border-l border-[#E8ECEA] bg-emerald-500/5 group-hover:bg-transparent flex flex-col justify-center relative transition-colors duration-250">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm font-bold text-[#103938]">
                        {step.seobox}
                      </span>
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-sm ml-2">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer / Estimated Time */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-t border-[#E8ECEA] bg-[#FAFAFA]/50">
            <div className="p-6 md:px-8 md:py-6 flex items-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">Overall Comparison</span>
            </div>

            <div className="p-6 md:px-8 md:py-6 border-l border-[#E8ECEA] flex flex-col justify-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">Estimated Time</span>
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl font-bold text-foreground">2–5 Days</span>
                <span className="inline-flex items-center rounded-full bg-muted/60 px-2 py-0.5 text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Manual
                </span>
              </div>
            </div>

            <div className="p-6 md:px-8 md:py-6 border-l border-[#E8ECEA] bg-emerald-500/5 flex flex-col justify-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#103938] mb-1">Estimated Time</span>
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl font-bold text-[#103938]">3 Min</span>
                <span className="inline-flex items-center rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider shadow-sm">
                  Automated
                </span>
              </div>
            </div>
          </div>

        </Reveal>
      </div>

      {/* ─── Bottom Summary Stats ─────────────────────────────────────────── */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100}>
            <div className="flex flex-col items-center justify-center rounded-[20px] bg-white p-8 border border-[#E8ECEA] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/20 text-center">
              <div className="text-4xl font-extrabold tracking-tight text-[#103938] mb-2 flex items-baseline">
                <NumberTicker value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
