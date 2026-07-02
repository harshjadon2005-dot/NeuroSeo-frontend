import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug } from '@/lib/resource-data';
import { ArticleLayout } from '@/components/article/article-layout';
import { ArticleHero } from '@/components/article/article-hero';
import { ArticleContent } from '@/components/article/article-content';
import { ArticleSidebar } from '@/components/article/article-sidebar';
import { ReadingProgress } from '@/components/article/reading-progress';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post || post.category !== 'documentation') {
    return { title: 'Not Found' };
  }

  return {
    title: `${post.title} — NeuroSEO Documentation`,
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

export default async function DocumentationArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.category !== 'documentation') {
    notFound();
  }

  return (
    <>
      <ReadingProgress />
      <ArticleLayout sidebarPosition="left" sidebar={<ArticleSidebar post={post} />}>
        <ArticleHero post={post} categoryLabel="Documentation" />
        <ArticleContent content={post.content} />
      </ArticleLayout>
    </>
  );
}
