'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './reveal';
import { cn } from '@/lib/utils';

interface Article {
  title: string;
  content: string;
}

export function HelpArticles({ articles }: { articles: Article[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-4">
      {articles.map((article, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal key={i} delay={i * 50}>
            <div 
              className={cn(
                "group flex flex-col rounded-xl border bg-white transition-all hover:shadow-md",
                isOpen ? "border-[#103938]/30 shadow-md" : "border-border hover:border-[#103938]/30"
              )}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex items-center justify-between p-5 w-full text-left"
              >
                <span className={cn(
                  "font-medium transition-colors group-hover:text-[#103938]",
                  isOpen && "text-[#103938]"
                )}>
                  {article.title}
                </span>
                <ChevronDown className={cn(
                  "h-5 w-5 text-muted-foreground transition-transform duration-300 shrink-0 ml-4", 
                  isOpen && "rotate-180 text-[#103938]"
                )} />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out px-5",
                  isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {article.content}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
