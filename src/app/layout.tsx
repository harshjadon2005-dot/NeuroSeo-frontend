import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LayoutElements } from '@/components/layout-elements';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Seobox — Autonomous AI SEO that researches, writes & publishes',
    template: '%s · Seobox',
  },
  description:
    'Seobox is the autonomous AI-SEO platform that researches keywords, writes ranking content, verifies it, and publishes to your CMS — continuously.',
  metadataBase: new URL('https://seobox.ai'),
  openGraph: {
    title: 'Seobox — Autonomous AI SEO',
    description: 'Research, write, verify, and publish ranking content on autopilot.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="overflow-x-hidden">
        <LayoutElements>{children}</LayoutElements>
      </body>
    </html>
  );
}
