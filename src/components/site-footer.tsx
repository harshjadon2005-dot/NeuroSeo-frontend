import Link from 'next/link';
import { APP_URL } from '@/lib/utils';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { href: '/pricing', label: 'Pricing' },
      { href: '/faq', label: 'FAQ' },
      { href: `${APP_URL}/signup`, label: 'Start free', external: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources/learn', label: 'Learn' },
      { href: '/resources/guide', label: 'Guide' },
      { href: '/contact', label: 'Contact us' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: '/faq', label: 'Support' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="NeuroSEO" className="h-8 w-8 rounded-lg" />
              <span className="text-lg font-bold tracking-tight text-[#103938]">NeuroSEO</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Autonomous AI SEO that researches, writes, verifies, and publishes ranking content — continuously.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-[#103938]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-[#103938]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <span>© 2026 NeuroSEO · Autonomous AI SEO</span>
          <span className="flex items-center gap-4">
            <span>AES-256 encrypted</span>
            <span>·</span>
            <span>SOC 2 ready</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
