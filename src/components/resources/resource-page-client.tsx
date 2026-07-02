'use client';

import { useState } from 'react';
import { ResourceHero } from './resource-hero';
import { ResourceLayout } from './resource-layout';
import { ResourceSidebar } from './resource-sidebar';
import { FilterBar } from './filter-bar';
import { FeaturedCard } from './featured-card';
import { ResourceGrid } from '../resource-card';
import type { ResourcePost } from '@/lib/resource-data';
import { ReactNode } from 'react';

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
  const [activeCategory, setActiveCategory] = useState(filterCategories[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === filterCategories[0] || post.tags.includes(activeCategory) || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <ResourceHero 
        title={hero.title}
        description={hero.description}
        stats={hero.stats}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <ResourceLayout
        sidebar={
          <ResourceSidebar 
            categories={sidebar.categories}
            trending={sidebar.trending}
          />
        }
      >
        {!searchQuery && activeCategory === filterCategories[0] && (
          <FeaturedCard post={featured.post} visual={featured.visual} />
        )}
        
        <FilterBar 
          categories={filterCategories} 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

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
            No resources found matching your search.
          </div>
        )}
      </ResourceLayout>
    </>
  );
}
