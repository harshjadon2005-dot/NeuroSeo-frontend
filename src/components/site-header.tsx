'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, BookOpen, GraduationCap } from 'lucide-react';
import { cn, APP_URL } from '@/lib/utils';
import { Button } from './ui';
import { ResourcesMegaMenu, MobileResourcesAccordion } from '@/components/resources-mega-menu';

const NAV = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <ResourcesMegaMenu />

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
          <Link
            href="/login"
            className="press rounded-full px-4 py-2 text-sm font-medium text-foreground hover:text-[#103938]"
          >
            Sign in
          </Link>
          <Button href="/signup">
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
            <MobileResourcesAccordion onNavigate={() => setMobileOpen(false)} />
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
              <Button href="/login" variant="outline">
                Sign in
              </Button>
              <Button href="/signup">
                Start free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
