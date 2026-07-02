import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug } from '@/lib/resource-data';
import { ArticleLayout } from '@/components/article/article-layout';
import { ArticleHero } from '@/components/article/article-hero';
import { ArticleContent } from '@/components/article/article-content';
import { ArticleSidebar } from '@/components/article/article-sidebar';
import { ReadingProgress } from '@/components/article/reading-progress';
import { CaseStudyBlocks } from '@/components/article/templates/case-study-blocks';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  
  if (!post || post.category !== 'case-studies') {
    return { title: 'Not Found' };
  }

  return {
    title: `${post.title} — NeuroSEO Case Studies`,
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

export default function CaseStudyArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post || post.category !== 'case-studies') {
    notFound();
  }

  return (
    <>
      <ReadingProgress />
      <ArticleHero post={post} categoryLabel="Case Studies" />
      <ArticleLayout sidebar={<ArticleSidebar post={post} />}>
        <CaseStudyBlocks post={post} />
        <ArticleContent content={post.content} />
      </ArticleLayout>
    </>
  );
}
