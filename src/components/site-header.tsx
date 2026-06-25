'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, BookOpen, GraduationCap } from 'lucide-react';
import { cn, APP_URL } from '@/lib/utils';
import { Button } from './ui';

const NAV = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const RESOURCES = [
  { href: '/resources/learn', label: 'Learn', desc: 'SEO & GEO fundamentals', icon: GraduationCap },
  { href: '/resources/guide', label: 'Guide', desc: 'Step-by-step playbooks', icon: BookOpen },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="press flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="NeuroSEO" className="h-8 w-8 rounded-lg" />
          <span className="text-lg font-bold tracking-tight text-[#103938]">NeuroSEO</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {/* Resources dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              className={cn(
                'flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors',
                pathname.startsWith('/resources') ? 'text-[#103938]' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              Resources
              <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', resourcesOpen && 'rotate-180')} />
            </button>
            <div
              className={cn(
                'absolute left-0 top-full w-64 origin-top pt-2 transition-all duration-200',
                resourcesOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-1',
              )}
              style={{ transitionTimingFunction: 'var(--ease-out)' }}
            >
              <div className="overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-xl shadow-black/5">
                {RESOURCES.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#103938]/8">
                      <r.icon className="h-4 w-4 text-[#103938]" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-foreground">{r.label}</span>
                      <span className="block text-xs text-muted-foreground">{r.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-3 py-2 text-sm font-medium transition-colors',
                pathname === item.href ? 'text-[#103938]' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`${APP_URL}/login`}
            className="press rounded-full px-4 py-2 text-sm font-medium text-foreground hover:text-[#103938]"
          >
            Sign in
          </a>
          <Button href={`${APP_URL}/signup`} external>
            Start free
          </Button>
        </div>

        <button
          className="press md:hidden text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {RESOURCES.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {r.label}
              </Link>
            ))}
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Button href={`${APP_URL}/login`} variant="outline" external>
                Sign in
              </Button>
              <Button href={`${APP_URL}/signup`} external>
                Start free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
