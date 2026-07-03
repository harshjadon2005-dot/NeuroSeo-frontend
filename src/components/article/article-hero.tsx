import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { ResourcePost } from '@/lib/resource-data';
import { Breadcrumb } from './breadcrumb';

interface ArticleHeroProps {
  post: ResourcePost;
  categoryLabel: string;
}

export function ArticleHero({ post, categoryLabel }: ArticleHeroProps) {
  return (
    <header className="mb-12">
      <Breadcrumb 
        items={[
          { label: categoryLabel, href: `/resources/${post.category}` },
          { label: post.title, href: '#' }
        ]} 
      />

      <h1 className="mt-8 text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-foreground leading-[1.15]">
        {post.title}
      </h1>
      
      <div className="mt-8 flex items-center gap-3">
        {post.author.avatar ? (
          <img src={post.author.avatar} alt={post.author.name} className="h-10 w-10 rounded-full object-cover bg-muted" />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-[#103938] font-bold text-sm">
            {post.author.name.charAt(0)}
          </div>
        )}
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-foreground">By {post.author.name}</div>
          <div className="text-[13px] text-muted-foreground flex items-center gap-1.5 flex-wrap">
            <span>Published on: {post.date}</span>
            {post.readTime && (
              <>
                <span className="text-border">•</span>
                <span>{post.readTime} read</span>
              </>
            )}
            <span className="text-border">•</span>
            <span>Last reviewed: {post.date}</span>
          </div>
        </div>
      </div>

      {post.excerpt && (
        <div className="mt-12 rounded-xl bg-card p-6 sm:p-8 border border-border shadow-sm">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">TL;DR</div>
          <p className="text-foreground/90 leading-relaxed font-medium">
            {post.excerpt}
          </p>
        </div>
      )}
    </header>
  );
}
