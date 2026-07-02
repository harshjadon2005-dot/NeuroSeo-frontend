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
    <div className="pb-8">
      <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/80">
        <ListTree className="h-3.5 w-3.5 opacity-50" />
        <span>On this page</span>
      </div>
      <nav className="relative before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border/60">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "block text-[13px] py-1.5 transition-colors relative pl-4 border-l border-transparent hover:text-foreground",
              heading.level === 3 && "pl-8",
              activeId === heading.id 
                ? "text-[#103938] font-semibold border-[#103938] bg-[#103938]/5" 
                : "text-muted-foreground"
            )}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', `#${heading.id}`);
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
