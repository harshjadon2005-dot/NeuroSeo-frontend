import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type ResourcePost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: 'learn' | 'compare' | 'alternatives' | 'case-studies' | 'documentation' | 'tools';
  date: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  readTime?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  featured_image?: { url: string; alt: string };
  isFeatured?: boolean;
  
  metrics?: { label: string; value: string }[];
  pros?: string[];
  cons?: string[];
  faq?: { question: string; answer: string }[];
  relatedArticles?: string[];
  
  winner?: string;
  pricing?: { name: string; price: string; details: string }[];
  features?: { name: string; neuroseo: boolean; competitor: boolean }[];
  
  company?: { name: string; industry: string; size: string };
  challenge?: string;
  solution?: string;
};

const contentDir = path.join(process.cwd(), 'content');

export function getAllPosts(): ResourcePost[] {
  const posts: ResourcePost[] = [];
  
  if (!fs.existsSync(contentDir)) return posts;

  const categories = fs.readdirSync(contentDir);
  for (const category of categories) {
    const categoryPath = path.join(contentDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const files = fs.readdirSync(categoryPath);
    for (const file of files) {
      if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;

      const filePath = path.join(categoryPath, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      posts.push({
        ...data,
        content: marked.parse(content) as string,
      } as ResourcePost);
    }
  }

  return posts;
}

export function getPostsByCategory(category: string) {
  return getAllPosts().filter(post => post.category === category);
}

export function getFeaturedPost(category: string) {
  const posts = getPostsByCategory(category);
  return posts.find(post => post.isFeatured) || posts[0];
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find(post => post.slug === slug);
}
