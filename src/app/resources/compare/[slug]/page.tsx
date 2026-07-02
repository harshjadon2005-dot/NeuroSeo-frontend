import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug } from '@/lib/resource-data';
import { ArticleLayout } from '@/components/article/article-layout';
import { ArticleHero } from '@/components/article/article-hero';
import { ArticleContent } from '@/components/article/article-content';
import { ArticleSidebar } from '@/components/article/article-sidebar';
import { ReadingProgress } from '@/components/article/reading-progress';
import { CompareBlocks } from '@/components/article/templates/compare-blocks';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  
  if (!post || post.category !== 'compare') {
    return { title: 'Not Found' };
  }

  return {
    title: `${post.title} — NeuroSEO Compare`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name]
    }
  };
}

export default function CompareArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post || post.category !== 'compare') {
    notFound();
  }

  return (
    <>
      <ReadingProgress />
      <ArticleHero post={post} categoryLabel="Compare" />
      <ArticleLayout sidebar={<ArticleSidebar post={post} />}>
        <ArticleContent content={post.content} />
        <CompareBlocks post={post} />
      </ArticleLayout>
    </>
  );
}
