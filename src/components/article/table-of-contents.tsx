'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ListTree } from 'lucide-react';

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    // In a real implementation, we would parse the markdown/HTML.
    // For the dummy content, we'll just query the DOM inside the article body.
    const elements = Array.from(document.querySelectorAll('main h2, main h3'));
    
    // Add IDs if they don't exist
    elements.forEach(el => {
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '';
      }
    });

    const parsedHeadings = elements.map((el) => ({
      id: el.id,
      text: el.textContent || '',
      level: Number(el.tagName.charAt(1)),
    }));
    
    setHeadings(parsedHeadings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0% -80% 0%' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="rounded-2xl border border-border/80 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
        <ListTree className="h-4 w-4" />
        <span>On this page</span>
      </div>
      <nav className="space-y-3 relative before:absolute before:inset-y-0 before:left-[5px] before:w-px before:bg-border/50">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "block text-sm transition-colors relative pl-4",
              heading.level === 3 ? "ml-3" : "",
              activeId === heading.id 
                ? "font-bold text-[#103938] before:absolute before:left-[-3px] before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#103938]" 
                : "font-medium text-muted-foreground hover:text-foreground"
            )}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
