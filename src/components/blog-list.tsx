'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { Search, Clock, ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'Product Updates', 'SEO Strategy', 'GEO Tactics', 'Engineering', 'Case Studies'];

const POSTS = [
  {
    title: 'The complete guide to AI Overviews in 2025',
    desc: 'How Google\'s AI Overviews are shifting search behavior, and how you can optimize your content to be cited as a source.',
    category: 'GEO Tactics',
    readTime: '8 min read',
    image: '/images/resources/geo_concept.png',
  },
  {
    title: 'NeuroSEO 2.0: Autonomous Content Pipelines',
    desc: 'We are thrilled to announce our biggest update yet, featuring 1-click publishing, automated keyword clustering, and more.',
    category: 'Product Updates',
    readTime: '4 min read',
    image: '/images/resources/content_ui.png',
  },
  {
    title: 'Why your keyword difficulty metrics are lying to you',
    desc: 'High volume, low difficulty keywords are great—unless the SERP intent is entirely mismatched. Here is how to spot the difference.',
    category: 'SEO Strategy',
    readTime: '6 min read',
    image: '/images/resources/keyword_ui.png',
  },
  {
    title: 'Building a real-time fact-checking engine for LLMs',
    desc: 'A technical deep-dive into how our pipeline cross-references claims against trusted domains to ensure factual accuracy.',
    category: 'Engineering',
    readTime: '12 min read',
    image: '/images/resources/fact_check_ui.png',
  },
  {
    title: 'How AcmeCorp increased organic traffic by 340%',
    desc: 'A look into how replacing legacy SEO tools with an autonomous pipeline accelerated publishing velocity by 10x.',
    category: 'Case Studies',
    readTime: '5 min read',
    image: '/images/resources/seo_vs_geo.png',
  },
  {
    title: 'The math behind our new Extractability Score',
    desc: 'Breaking down the heuristics used to measure how easily an LLM can parse and cite your content.',
    category: 'GEO Tactics',
    readTime: '7 min read',
    image: '/images/resources/scoring_ui.png',
  },
];

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isFiltering = activeCategory !== 'All' || searchQuery !== '';

  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                The NeuroSEO Blog
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                Insights and strategies for the next era of search.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mx-auto flex max-w-md items-center overflow-hidden rounded-full border border-border bg-white pl-4 pr-1.5 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-[#103938] transition-shadow">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  placeholder="Search articles..."
                  className="w-full border-0 bg-transparent px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-0"
                />
                <button className="rounded-full bg-[#103938] px-5 py-2 text-sm font-bold text-white transition-transform hover:scale-105">
                  Search
                </button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat} delay={i * 50}>
                <button 
                  onClick={() => {
                    setActiveCategory(cat);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat 
                      ? 'bg-[#103938] text-white shadow-md' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {!isFiltering && (
        <section className="py-12">
          <Container>
            <Reveal>
              <Link href="#" className="group relative flex flex-col lg:flex-row overflow-hidden rounded-[32px] border border-border bg-white shadow-xl transition-transform hover:-translate-y-1">
                <div className="relative aspect-video lg:aspect-auto lg:w-3/5 overflow-hidden bg-muted">
                  <img 
                    src="/images/resources/geo_concept.png" 
                    alt="Featured article" 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:w-2/5">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-[#103938]">
                      Featured
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      8 min read
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4 group-hover:text-[#103938] transition-colors">
                    The complete guide to AI Overviews in 2025
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    How Google's AI Overviews are shifting search behavior, and how you can optimize your content to be cited as a source.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#103938]">
                    Read full article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="py-16 bg-muted/30 border-y border-border">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-6 text-[#103938] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, i) => (
                <Reveal key={i} delay={(i % 3) * 50}>
                  <Link href="#" className="group flex flex-col h-full overflow-hidden rounded-[24px] border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                    <div className="flex flex-col p-6 flex-1">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-bold tracking-wide text-foreground uppercase">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#103938] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-1 line-clamp-2">
                        {post.desc}
                      </p>
                      <div className="flex items-center gap-1.5 text-sm font-bold text-[#103938] mt-auto">
                        Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
