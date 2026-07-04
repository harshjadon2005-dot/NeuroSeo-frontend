'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/reveal';

export function FaqAccordion({ items }: { items: Array<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={i * 40}>
            <div className="overflow-hidden rounded-2xl border border-border bg-white">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium tracking-tight text-foreground">{item.q}</span>
                <Plus
                  className={cn(
                    'h-5 w-5 shrink-0 text-[#103938] transition-transform duration-300',
                    isOpen && 'rotate-45',
                  )}
                  style={{ transitionTimingFunction: 'var(--ease-out)' }}
                />
              </button>
              {/* grid-rows trick animates height with no fixed value */}
              <div
                className="grid transition-all duration-300"
                style={{
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  transitionTimingFunction: 'var(--ease-out)',
                }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
