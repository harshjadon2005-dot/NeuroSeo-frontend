import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug } from '@/lib/resource-data';
import { ArticleLayout } from '@/components/article/article-layout';
import { ArticleHero } from '@/components/article/article-hero';
import { ArticleContent } from '@/components/article/article-content';
import { ArticleSidebar } from '@/components/article/article-sidebar';
import { ReadingProgress } from '@/components/article/reading-progress';
import { AlternativesBlocks } from '@/components/article/templates/alternatives-blocks';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  
  if (!post || post.category !== 'alternatives') {
    return { title: 'Not Found' };
  }

  return {
    title: `${post.title} — NeuroSEO Alternatives`,
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

export default function AlternativesArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post || post.category !== 'alternatives') {
    notFound();
  }

  return (
    <>
      <ReadingProgress />
      <ArticleHero post={post} categoryLabel="Alternatives" />
      <ArticleLayout sidebar={<ArticleSidebar post={post} />}>
        <ArticleContent content={post.content} />
        <AlternativesBlocks post={post} />
      </ArticleLayout>
    </>
  );
}
