"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { APP_URL } from '@/lib/utils';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Loader2,
  Check,
  Mail
} from 'lucide-react';

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
      <path d="m10 15 5-3-5-3z"></path>
    </svg>
  );
}

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/integrations', label: 'Integrations' },
      { href: '/faq', label: 'FAQ' },
      { href: '/roadmap', label: 'Roadmap' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources/documentation', label: 'Documentation' },
      { href: '/resources/guide', label: 'Guides' },
      { href: '/resources/learn', label: 'Learn' },
      { href: '/resources/compare', label: 'Compare' },
      { href: '/resources/alternatives', label: 'Alternatives' },
      { href: '/resources/case-studies', label: 'Case Studies' },
      { href: '/resources/tools', label: 'Free Tools' },
      { href: '/help', label: 'Help Center' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/careers', label: 'Careers' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms' },
      { href: '/support', label: 'Support' },
      { href: '/status', label: 'Status' },
    ],
  },
];

export function SiteFooter() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState !== 'idle') return;
    
    setFormState('loading');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      // Reset after a while
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <footer className="relative mt-24 bg-[#103938] text-white overflow-hidden">
      {/* Background Textures & Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Subtle radial gradient */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        
        {/* ─── NEWSLETTER SECTION ────────────────────────────────────────── */}
        <div id="newsletter" className="mx-auto max-w-5xl rounded-[24px] sm:rounded-[32px] border border-white/10 bg-white/[0.02] p-8 lg:p-12 backdrop-blur-sm shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="text-center lg:text-left lg:max-w-lg">
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 mb-6">
              Stay Updated
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Get the latest AI SEO insights
            </h2>
            
            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              Join marketers, agencies, and founders receiving product updates, SEO strategies, and AI workflow tips.
            </p>
          </div>

          <div className="w-full lg:max-w-md shrink-0">
            <form onSubmit={handleSubscribe} className="w-full flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Mail className="h-4 w-4 text-white/40" />
                </div>
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address" 
                  className="w-full rounded-full border border-white/20 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-emerald-400 focus:bg-white/10 focus:ring-4 focus:ring-emerald-400/20"
                />
              </div>
              <button 
                type="submit"
                disabled={formState !== 'idle'}
                className="relative flex h-[50px] w-full sm:w-[140px] items-center justify-center rounded-full bg-emerald-500 px-6 text-sm font-semibold text-[#103938] transition-all hover:bg-emerald-400 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-80 disabled:hover:translate-y-0 shrink-0"
              >
                {formState === 'idle' && 'Subscribe'}
                {formState === 'loading' && <Loader2 className="h-5 w-5 animate-spin text-[#103938]" />}
                {formState === 'success' && <Check className="h-5 w-5 text-[#103938]" />}
              </button>
            </form>
            
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-3 text-xs font-medium text-white/50">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80" />
                <span>No spam</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80" />
                <span>Monthly updates</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* ─── FOOTER NAVIGATION ─────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 lg:justify-between">
          <div className="w-full lg:max-w-xs shrink-0">
            <Link href="/" className="inline-flex items-center gap-2 transition-opacity hover:opacity-80">
              <img src="/logo.png" alt="Seobox" className="h-11 w-11 object-contain" />
              <span className="text-xl font-bold tracking-tight text-white">Seobox</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-sm">
              Autonomous AI SEO that researches, writes, verifies, and publishes ranking content — continuously.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="https://linkedin.com/company/seobox" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-emerald-500 hover:text-[#103938] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <LinkedinIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com/seobox" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-emerald-500 hover:text-[#103938] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <TwitterIcon className="h-4 w-4" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a href="https://github.com/seobox" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-emerald-500 hover:text-[#103938] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <GithubIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://youtube.com/@seobox" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-emerald-500 hover:text-[#103938] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <YoutubeIcon className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:w-[60%]">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold tracking-wide text-white">{col.title}</h3>
                <ul className="mt-5 sm:mt-6 space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center text-sm text-white/60 transition-all hover:text-emerald-400 hover:translate-x-1"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ─── BOTTOM BAR ────────────────────────────────────────────────── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row text-xs">
          <p className="text-white/40">
            © {new Date().getFullYear()} Seobox. All rights reserved.
          </p>
          
          <p className="hidden text-white/50 lg:block font-medium">
            Made for modern marketing teams.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/40 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              AES-256 Encrypted
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>SOC 2 Ready</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>99.9% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
