import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug } from '@/lib/resource-data';
import { ArticleLayout } from '@/components/article/article-layout';
import { ArticleHero } from '@/components/article/article-hero';
import { ArticleContent } from '@/components/article/article-content';
import { ArticleSidebar } from '@/components/article/article-sidebar';
import { ReadingProgress } from '@/components/article/reading-progress';
import { CaseStudyBlocks } from '@/components/article/templates/case-study-blocks';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
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

export default async function CaseStudyArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.category !== 'case-studies') {
    notFound();
  }

  return (
    <>
      <ReadingProgress />
      <ArticleLayout sidebar={<ArticleSidebar post={post} />}>
        <ArticleHero post={post} categoryLabel="Case Studies" />
        <CaseStudyBlocks post={post} />
        <ArticleContent content={post.content} />
      </ArticleLayout>
    </>
  );
}
