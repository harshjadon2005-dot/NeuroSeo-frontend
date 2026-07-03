"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './reveal';

export function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  return (
    <div className="mx-auto mt-16 max-w-3xl divide-y divide-border/60 border-y border-border/60">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal key={faq.q} delay={i * 60}>
            <div className="group">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left transition-colors"
              >
                <span className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-[#103938]">
                  {faq.q}
                </span>
                <span className="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-white text-muted-foreground shadow-sm transition-all duration-300 group-hover:border-[#103938]/30 group-hover:text-[#103938] group-hover:shadow-md">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-muted-foreground pr-12">
                    {faq.a}
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
