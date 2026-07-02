import Link from 'next/link';
import { ArrowRight, BarChart } from 'lucide-react';
import type { ResourcePost } from '@/lib/resource-data';
import { ReactNode } from 'react';

interface FeaturedCardProps {
  post: ResourcePost;
  visual: ReactNode;
}

export function FeaturedCard({ post, visual }: FeaturedCardProps) {
  return (
    <Link 
      href={`/resources/${post.category}/${post.slug}`}
      className="group relative flex flex-col md:flex-row overflow-hidden rounded-[32px] border border-border bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#103938]/10 mb-16"
    >
      {/* Left Content */}
      <div className="flex flex-1 flex-col justify-center p-8 md:p-12 lg:p-16">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
            {post.tag}
          </span>
          {post.readTime && (
            <span className="text-xs font-semibold text-muted-foreground">
              {post.readTime} read
            </span>
          )}
          {post.difficulty && (
            <span className="flex items-center gap-1 rounded-full border border-border/50 bg-[#FAFAFA] px-2.5 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              <BarChart className="h-3 w-3" />
              {post.difficulty}
            </span>
          )}
        </div>

        <h3 className="mb-4 text-3xl font-black leading-tight tracking-tight text-foreground transition-colors group-hover:text-[#103938] md:text-4xl">
          {post.title}
        </h3>
        
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center gap-4">
          <span className="flex items-center gap-2 font-bold text-[#103938] transition-colors group-hover:text-emerald-600">
            Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>

      {/* Right Visual (Mockup) */}
      <div className="relative flex-1 bg-muted/30 overflow-hidden min-h-[300px] md:min-h-[400px]">
        {/* Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/20 rounded-full blur-[80px]" />
        
        {/* Render the custom UI mockup */}
        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
          {visual}
        </div>
      </div>
    </Link>
  );
}
