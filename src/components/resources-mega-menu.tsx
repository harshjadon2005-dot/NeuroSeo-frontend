'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  ArrowRight,
  BookOpen, 
  Map, 
  Search, 
  Edit3, 
  Settings, 
  Terminal, 
  Scale, 
  Zap, 
  Briefcase, 
  Building2, 
  ShoppingCart, 
  Rocket, 
  LayoutTemplate, 
  Code2, 
  FileQuestion,
  FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';

const MEGA_MENU_DATA = [
  {
    title: 'LEARN',
    items: [
      { label: 'The Complete Guide to GEO', desc: 'Mastering AI Answer Engines', href: '/resources/learn/complete-guide-to-geo', icon: BookOpen },
      { label: 'Write Content That Ranks in 2026', desc: 'Core principles of search optimization', href: '/resources/learn/write-content-that-ranks-2026', icon: Map },
      { label: 'Keyword Research', desc: 'Find intent-driven opportunities', href: '/resources/learn/keyword-research', icon: Search },
      { label: 'AI Writing', desc: 'Generate rank-ready content', href: '/resources/learn/ai-writing', icon: Edit3 },
    ],
    viewAll: { label: 'View all Learn', href: '/resources/learn' }
  },
  {
    title: 'COMPARE',
    items: [
      { label: 'NeuroSEO vs Surfer SEO', desc: 'Next-gen vs legacy tools', href: '/resources/compare/neuroseo-vs-surfer-seo', icon: Scale },
      { label: 'NeuroSEO vs Jasper', desc: 'SEO-focused vs general AI', href: '/resources/compare/jasper', icon: Scale },
      { label: 'NeuroSEO vs Frase', desc: 'Autonomous vs manual workflow', href: '/resources/compare/frase', icon: Scale },
      { label: 'NeuroSEO vs ChatGPT', desc: 'Data-driven vs generic output', href: '/resources/compare/chatgpt', icon: Scale },
    ],
    viewAll: { label: 'View all Comparisons', href: '/resources/compare' }
  },
  {
    title: 'ALTERNATIVES',
    items: [
      { label: 'Surfer SEO Alternatives', desc: 'Find better optimization tools', href: '/resources/alternatives/surfer-seo-alternatives', icon: Zap },
      { label: 'Jasper Alternatives', desc: 'Specialized writing platforms', href: '/resources/alternatives/jasper', icon: Zap },
      { label: 'Frase Alternatives', desc: 'Modern brief generators', href: '/resources/alternatives/frase', icon: Zap },
      { label: 'Copy.ai Alternatives', desc: 'Long-form content focus', href: '/resources/alternatives/copy-ai', icon: Zap },
    ],
    viewAll: { label: 'View all Alternatives', href: '/resources/alternatives' }
  },
  {
    title: 'CASE STUDIES',
    items: [
      { label: 'SaaS', desc: 'How software companies grow', href: '/resources/case-studies/saas', icon: Rocket },
      { label: 'Agencies', desc: 'Scaling client deliverables', href: '/resources/case-studies/agencies', icon: Briefcase },
      { label: 'Ecommerce', desc: 'Product page optimization', href: '/resources/case-studies/ecommerce', icon: ShoppingCart },
      { label: 'Startups', desc: 'Zero to 100k organic traffic', href: '/resources/case-studies/startups', icon: Zap },
    ],
    viewAll: { label: 'View all Case Studies', href: '/resources/case-studies' }
  },
  {
    title: 'FREE TOOLS',
    items: [
      { label: 'Keyword Difficulty Checker', desc: 'Analyze SERP competition', href: '/resources/tools/keyword-difficulty', icon: Search },
      { label: 'Meta Tag Generator', desc: 'Create perfect CTR tags', href: '/resources/tools/meta-tag-generator', icon: LayoutTemplate },
      { label: 'Robots.txt Generator', desc: 'Control crawler access', href: '/resources/tools/robots-txt-generator', icon: FileText },
      { label: 'Schema Generator', desc: 'Build rich snippet code', href: '/resources/tools/schema-generator', icon: Code2 },
    ],
    viewAll: { label: 'View all Tools', href: '/resources/tools' }
  },
  {
    title: 'DOCUMENTATION',
    items: [
      { label: 'API', desc: 'Build custom integrations', href: '/resources/documentation/api', icon: Code2 },
      { label: 'Integrations', desc: 'Connect your favorite tools', href: '/resources/documentation/integrations', icon: Zap },
      { label: 'Webhooks', desc: 'Real-time event triggers', href: '/resources/documentation/webhooks', icon: Terminal },
      { label: 'SDK', desc: 'Official client libraries', href: '/resources/documentation/sdk', icon: FileText },
    ],
    viewAll: { label: 'View Documentation', href: '/resources/documentation' }
  }
];

export function ResourcesMegaMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  // Accessibility: Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          'flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500',
          pathname.startsWith('/resources') || pathname.startsWith('/compare') || pathname.startsWith('/alternatives') ? 'text-[#103938]' : 'text-muted-foreground hover:text-foreground',
        )}
        aria-expanded={isOpen}
      >
        Resources
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      {/* Mega Menu Dropdown */}
      <div
        className={cn(
          'absolute left-1/2 top-full w-[900px] -translate-x-1/2 pt-4 transition-all duration-300 ease-out',
          isOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2'
        )}
      >
        <div className="overflow-hidden rounded-[24px] border border-border/80 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
          {/* Content grid */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6">
            {MEGA_MENU_DATA.map((section) => (
              <div key={section.title} className="flex flex-col">
                <h3 className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-1.5">
                  {section.title}
                </h3>
                <ul className="flex flex-col space-y-0.5">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link 
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-start gap-3 rounded-xl py-1.5 px-2 transition-all duration-200 hover:bg-[#EAF8F3]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      >
                        <item.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-[3px] group-hover:text-emerald-600" />
                        <div>
                          <div className="text-[12px] font-semibold text-foreground transition-colors duration-200 group-hover:text-[#103938]">
                            {item.label}
                          </div>
                          <div className="text-[10px] font-medium text-muted-foreground line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={section.viewAll.href}
                  onClick={() => setIsOpen(false)}
                  className="mt-1.5 group flex w-max items-center gap-1 rounded-lg px-2 py-1 text-[10px] font-bold text-muted-foreground hover:bg-muted/50 hover:text-[#103938] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  {section.viewAll.label}
                  <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
          
          {/* Bottom Highlight Bar */}
          <div className="bg-[#EAF8F3]/60 border-t border-emerald-500/10 px-6 py-4 flex items-center justify-between">
             <div className="flex items-center gap-3">
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold text-emerald-700 border border-emerald-500/20">PRO</span>
                <div>
                  <h4 className="text-[12px] font-bold text-[#103938]">Ready to scale?</h4>
                  <p className="text-[10px] font-medium text-[#103938]/70">Upgrade your plan to unlock unlimited AI publishing and enterprise features.</p>
                </div>
             </div>
             <Link 
               href="/pricing" 
               onClick={() => setIsOpen(false)}
               className="flex items-center gap-1 rounded-full bg-[#103938] px-4 py-2 text-[12px] font-bold text-white transition-all hover:bg-[#103938]/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
             >
                View Pricing <ArrowRight className="h-3.5 w-3.5" />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileResourcesAccordion({ onNavigate }: { onNavigate: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <div className="flex flex-col mb-4 bg-muted/30 rounded-xl p-2 border border-border/50">
      <div className="px-3 pt-2 pb-1 text-sm font-bold text-muted-foreground">Resources</div>
      {MEGA_MENU_DATA.map((section) => (
        <div key={section.title} className="border-b border-border/40 last:border-0">
          <button
            onClick={() => toggleSection(section.title)}
            className="flex w-full items-center justify-between py-3 px-3 text-[13px] font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
          >
            {section.title}
            <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", openSection === section.title && "rotate-180")} />
          </button>
          <div 
            className={cn(
              "grid transition-all duration-200 ease-in-out",
              openSection === section.title ? "grid-rows-[1fr] opacity-100 mb-2" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <ul className="flex flex-col space-y-0.5 pl-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href} 
                      onClick={onNavigate}
                      className="flex items-center gap-3 rounded-lg py-2 px-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-[13px] font-medium text-foreground">{item.label}</div>
                      </div>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href={section.viewAll.href} 
                    onClick={onNavigate}
                    className="flex items-center gap-2 rounded-lg py-2 px-2 text-[12px] font-bold text-emerald-600 hover:bg-emerald-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    {section.viewAll.label} <ArrowRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
      
      {/* Mobile Featured */}
      <div className="mt-3 rounded-xl bg-[#EAF8F3]/60 p-4 border border-emerald-500/10">
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold text-emerald-700 border border-emerald-500/20 mb-2 inline-block">NEW</span>
        <h4 className="text-[13px] font-bold text-[#103938]">Programmatic SEO Hub</h4>
        <p className="text-[11px] font-medium text-[#103938]/70 mt-1 mb-3">Discover the newest GEO guides, AI writing tutorials and comparison articles.</p>
        <Link 
          href="#" 
          onClick={onNavigate}
          className="text-[11px] font-bold text-emerald-700 flex items-center gap-1 focus-visible:outline-none"
        >
          Explore <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
