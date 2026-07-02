import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug } from '@/lib/resource-data';
import { ArticleLayout } from '@/components/article/article-layout';
import { ArticleHero } from '@/components/article/article-hero';
import { ArticleContent } from '@/components/article/article-content';
import { ArticleSidebar } from '@/components/article/article-sidebar';
import { ReadingProgress } from '@/components/article/reading-progress';

// Mock generateStaticParams if we were building statically
// export function generateStaticParams() { ... }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  
  if (!post || post.category !== 'learn') {
    return { title: 'Not Found' };
  }

  return {
    title: `${post.title} — NeuroSEO Learn`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  };
}

export default function LearnArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post || post.category !== 'learn') {
    notFound();
  }

  return (
    <>
      <ReadingProgress />
      <ArticleHero post={post} categoryLabel="Learn" />
      <ArticleLayout sidebar={<ArticleSidebar post={post} />}>
        <ArticleContent content={post.content} />
      </ArticleLayout>
    </>
  );
}
