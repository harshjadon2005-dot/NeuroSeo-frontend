'use client';

import { useState } from 'react';
import { ResourceHero } from './resource-hero';
import { ResourceGrid } from '../resource-card';
import type { ResourcePost } from '@/lib/resource-data';
import { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ResourcePageClientProps {
  hero: {
    title: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  sidebar: {
    categories: { name: string; count: number; href: string }[];
    trending: { title: string; href: string }[];
  };
  featured: {
    post: ResourcePost;
    visual: ReactNode;
  };
  posts: ResourcePost[];
  filterCategories: string[];
  baseRoute: string; // e.g., '/resources/learn'
}

export function ResourcePageClient({
  hero,
  sidebar,
  featured,
  posts,
  filterCategories,
  baseRoute
}: ResourcePageClientProps) {
  // InboxKit doesn't have a category filter on the landing page but we can keep a subtle one.
  const [activeCategory, setActiveCategory] = useState(filterCategories[0]);
  
  // Prepend featured post to the rest of the posts if it's the 'All' category
  const displayPosts = activeCategory === filterCategories[0] ? [featured.post, ...posts] : posts;

  const filteredPosts = displayPosts.filter(post => {
    return activeCategory === filterCategories[0] || post.tags.includes(activeCategory) || post.category === activeCategory;
  });

  return (
    <div className="bg-background min-h-screen pb-24">
      <ResourceHero 
        title={hero.title}
        description={hero.description}
        stats={hero.stats}
      />

      <div className="mx-auto max-w-[1200px] px-4 md:px-8 mt-4 mb-12">
        {/* Subtle Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${
                activeCategory === cat 
                  ? 'bg-foreground text-background' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Grid */}
        {filteredPosts.length > 0 ? (
          <ResourceGrid 
            lessons={filteredPosts.map(p => ({
              id: p.id,
              title: p.title,
              desc: p.excerpt,
              tag: p.tags[0] || 'Resource',
              readTime: p.readTime || '5 min',
              difficulty: p.difficulty,
              href: `${baseRoute}/${p.slug}`
            }))} 
          />
        ) : (
          <div className="py-20 text-center text-muted-foreground">
            No resources found matching this category.
          </div>
        )}

        {/* Bottom Categories & Trending Section (InboxKit style) */}
        {(sidebar.categories.length > 0 || sidebar.trending.length > 0) && (
          <div className="mt-32 pt-16 border-t border-border">
            <div className="mb-12">
              <h2 className="text-2xl font-black text-foreground mb-2">Explore related resources</h2>
              <p className="text-muted-foreground text-sm">Find detailed breakdowns and trending guides.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {sidebar.trending.map((trend, i) => (
                <Link 
                  key={i} 
                  href={trend.href}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-emerald-500/30 hover:bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-[#103938]">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground group-hover:text-[#103938]">{trend.title}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-[#103938] transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
