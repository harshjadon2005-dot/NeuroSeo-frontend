import { ReactNode } from 'react';

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <article 
      className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-foreground prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-3xl prose-h3:mt-8 prose-h3:text-2xl prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:font-semibold hover:prose-a:text-emerald-700 prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-bold prose-img:rounded-2xl mt-12"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
