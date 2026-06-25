import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'NeuroSEO — Autonomous AI SEO that researches, writes & publishes',
    template: '%s · NeuroSEO',
  },
  description:
    'NeuroSEO is the autonomous AI-SEO platform that researches keywords, writes ranking content, verifies it, and publishes to your CMS — continuously.',
  metadataBase: new URL('https://neuroseo.ai'),
  openGraph: {
    title: 'NeuroSEO — Autonomous AI SEO',
    description: 'Research, write, verify, and publish ranking content on autopilot.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
