'use client';

import { useState } from 'react';
import { 
  Globe, 
  Link as LinkIcon, 
  Sparkles, 
  Check, 
  Bot, 
  TrendingUp, 
  Clock, 
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Signal,
  CheckSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/reveal';

const PLAYBOOKS = [
  {
    step: '1',
    title: 'Add Website',
    desc: 'Connect your domain, set your brand voice, and configure DataForSEO location & language so research matches your market accurately.',
    time: '2 min',
    difficulty: 'Beginner',
    requirements: 'Requires domain',
    tip: 'Use your production website instead of staging to ensure API connections work smoothly.',
    icon: Globe,
    imageUrl: '/images/guide/mockup_website_setup.png',
  },
  {
    step: '2',
    title: 'Connect CMS',
    desc: 'Link WordPress, Webflow, Shopify, or a headless webhook so approved articles publish in one click — or fully automatically.',
    time: '3 min',
    difficulty: 'Beginner',
    requirements: 'CMS Admin Access',
    tip: 'For headless setups, generate your signed webhook secret first before proceeding.',
    icon: LinkIcon,
    imageUrl: '/images/guide/mockup_cms_integrations.png',
  },
  {
    step: '3',
    title: 'Generate Article',
    desc: 'Pick a target keyword, choose tone and intent, and watch the 18-stage pipeline run live, streaming the draft as it writes.',
    time: '5 min',
    difficulty: 'Intermediate',
    requirements: 'Target Keyword',
    tip: 'Keep the intent specific (e.g., "Transactional") to yield the best automated structure.',
    icon: Sparkles,
    imageUrl: '/images/guide/mockup_article_gen.png',
  },
  {
    step: '4',
    title: 'Review & Publish',
    desc: 'Check the SEO and GEO scores, scan the trust report, then approve. Publishing pushes straight to your CMS.',
    time: '1 min',
    difficulty: 'Beginner',
    requirements: 'Completed Draft',
    tip: 'Don\'t publish anything below a 85 GEO score if you want visibility in AI Overviews.',
    icon: Check,
    imageUrl: '/images/guide/mockup_review_queue.png',
  },
  {
    step: '5',
    title: 'Enable Automation',
    desc: 'Let the strategist act on top opportunities within safety limits — daily caps, score gates, and credit guardrails keep it safe.',
    time: '2 min',
    difficulty: 'Advanced',
    requirements: 'Active Subscription',
    tip: 'Start with a strict daily cap of 2 articles before fully opening the automation floodgates.',
    icon: Bot,
    imageUrl: '/images/guide/mockup_automation.png',
  },
  {
    step: '6',
    title: 'Reports & Tracking',
    desc: 'Probe AI engines for brand citations, watch your GEO score trend, and email branded PDF reports to clients on a schedule.',
    time: 'Ongoing',
    difficulty: 'Beginner',
    requirements: 'Published Content',
    tip: 'Set up automated weekly email reports to keep stakeholders in the loop without logging in.',
    icon: TrendingUp,
    imageUrl: '/images/guide/mockup_analytics.png',
  },
];

export function GuideDashboard() {
  const [activeStep, setActiveStep] = useState(0);
  const currentPlaybook = PLAYBOOKS[activeStep];
  
  // Calculate progress %
  const progressPercentage = Math.round((activeStep / (PLAYBOOKS.length - 1)) * 100);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 mx-auto max-w-6xl mt-12 mb-20 px-4">
      
      {/* ─── Left Sidebar (30%) ────────────────────────────────────────── */}
      <div className="lg:w-[30%] shrink-0">
        <div className="sticky top-24 bg-white/60 backdrop-blur-md border border-border/60 rounded-[24px] p-6 shadow-sm">
          
          {/* Progress Summary */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              <span>Onboarding Progress</span>
              <span className="text-[#103938]">{activeStep + 1} of 6</span>
            </div>
            <div className="h-2 w-full bg-muted/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Navigation Steps */}
          <div className="relative flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
            {/* Vertical connector line (desktop only) */}
            <div className="absolute left-[23px] top-6 bottom-6 w-px bg-border/50 hidden lg:block" />

            {PLAYBOOKS.map((p, i) => {
              const Icon = p.icon;
              const isActive = i === activeStep;
              const isCompleted = i < activeStep;

              return (
                <button
                  key={p.step}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "relative flex items-center gap-4 w-full text-left p-3 rounded-xl transition-all duration-300 min-w-[200px] lg:min-w-0 group",
                    isActive 
                      ? "bg-emerald-500/10 shadow-[inset_4px_0_0_0_#10b981]" 
                      : "hover:bg-muted/50 hover:translate-x-1"
                  )}
                >
                  <div className={cn(
                    "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300",
                    isActive ? "border-emerald-500 bg-white shadow-[0_0_10px_rgba(16,185,129,0.3)]" : 
                    isCompleted ? "border-emerald-500 bg-emerald-500" : 
                    "border-border bg-white group-hover:border-emerald-500/50"
                  )}>
                    {isCompleted ? (
                      <Check className="h-4 w-4 text-white" />
                    ) : (
                      <span className={cn(
                        "text-xs font-bold", 
                        isActive ? "text-emerald-600" : "text-muted-foreground"
                      )}>
                        {p.step}
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <h4 className={cn(
                      "text-sm transition-colors duration-300",
                      isActive ? "font-bold text-[#103938]" : "font-semibold text-muted-foreground group-hover:text-foreground"
                    )}>
                      {p.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── Right Content Panel (70%) ─────────────────────────────────── */}
      <div className="lg:w-[70%] flex flex-col">
        {/* We use a key based on activeStep to trigger CSS re-animation on mount */}
        <div 
          key={activeStep} 
          className="bg-white border border-border/60 rounded-[32px] p-6 sm:p-10 shadow-xl shadow-emerald-900/5 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
        >
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#103938] mb-4">
              {currentPlaybook.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {currentPlaybook.desc}
            </p>
          </div>

          {/* UI Mockup Area */}
          <div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-muted/30 rounded-2xl border border-border/50 mb-10 overflow-hidden relative group">
            {/* Fallback pattern if image is missing */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            {/* The Actual Image */}
            <img 
              src={currentPlaybook.imageUrl} 
              alt={`${currentPlaybook.title} interface`} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Hide broken images gracefully if not generated yet
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 pb-10 border-b border-border/60">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">
                <Clock className="h-3.5 w-3.5" /> Time
              </div>
              <div className="text-sm font-medium text-foreground">{currentPlaybook.time}</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">
                <Signal className="h-3.5 w-3.5" /> Difficulty
              </div>
              <div className="text-sm font-medium text-emerald-600 flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                {currentPlaybook.difficulty}
              </div>
            </div>
            <div className="col-span-2 sm:col-span-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">
                <CheckSquare className="h-3.5 w-3.5" /> Requirements
              </div>
              <div className="text-sm font-medium text-foreground">{currentPlaybook.requirements}</div>
            </div>
          </div>

          {/* Helpful Tip */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-5 mb-10 flex gap-4 items-start">
            <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="h-4 w-4 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-800 mb-1">Helpful Tip</h4>
              <p className="text-sm text-emerald-700/80 leading-relaxed">{currentPlaybook.tip}</p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-4">
            {activeStep > 0 ? (
              <button 
                onClick={() => setActiveStep(prev => prev - 1)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
              >
                Previous
              </button>
            ) : (
              <div /> // Placeholder to push Next button right
            )}

            {activeStep < PLAYBOOKS.length - 1 ? (
              <button 
                onClick={() => setActiveStep(prev => prev + 1)}
                className="group flex items-center gap-2 bg-[#103938] hover:bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-900/20"
              >
                Next Step
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <a 
                href="/pricing"
                className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#103938] px-6 py-3 rounded-full text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                Launch Workspace
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
