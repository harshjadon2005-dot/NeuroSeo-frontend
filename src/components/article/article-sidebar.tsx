import type { ResourcePost } from '@/lib/resource-data';
import { TableOfContents } from './table-of-contents';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ArticleSidebarProps {
  post: ResourcePost;
}

export function ArticleSidebar({ post }: ArticleSidebarProps) {
  return (
    <div className="space-y-8">
      <TableOfContents />

      {/* InboxKit style Dark CTA */}
      <div className="rounded-2xl bg-[#0f172a] p-8 text-white shadow-xl border border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-6 w-6 rounded-md bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
            <div className="h-3 w-3 rounded-sm bg-emerald-400" />
          </div>
          <span className="font-bold tracking-tight">NeuroSEO</span>
        </div>
        
        <p className="text-slate-300 text-[13px] leading-relaxed font-medium">
          Plans from $99/mo for unlimited AI articles. Scale with Agency and Enterprise tiers.
        </p>

        <Link 
          href="/pricing"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
