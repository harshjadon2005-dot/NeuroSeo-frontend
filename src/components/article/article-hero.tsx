import { Calendar, Clock, BarChart } from 'lucide-react';
import type { ResourcePost } from '@/lib/resource-data';
import { Breadcrumb } from './breadcrumb';

interface ArticleHeroProps {
  post: ResourcePost;
  categoryLabel: string;
}

export function ArticleHero({ post, categoryLabel }: ArticleHeroProps) {
  return (
    <header className="relative pt-32 pb-16 border-b border-border/50 bg-muted/10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container relative mx-auto px-4 md:px-6 max-w-4xl">
        <Breadcrumb 
          items={[
            { label: 'Resources', href: '/resources' },
            { label: categoryLabel, href: `/resources/${post.category}` },
            { label: post.title, href: '#' }
          ]} 
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 uppercase tracking-wider">
            {post.tags[0] || categoryLabel}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>{post.date}</span>
          </div>
          {post.readTime && (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </div>
          )}
          {post.difficulty && (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <BarChart className="h-3.5 w-3.5" />
              <span>{post.difficulty}</span>
            </div>
          )}
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
          {post.title}
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {post.excerpt}
        </p>

        <div className="mt-10 flex items-center gap-4">
          {post.author.avatar ? (
            <img src={post.author.avatar} alt={post.author.name} className="h-12 w-12 rounded-full object-cover bg-muted border border-border/80" />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#103938] text-white font-bold text-lg">
              {post.author.name.charAt(0)}
            </div>
          )}
          <div>
            <div className="font-bold text-foreground">{post.author.name}</div>
            <div className="text-sm font-medium text-muted-foreground">{post.author.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
