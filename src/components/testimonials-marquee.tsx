"use client";

import React from 'react';
import { Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export function TestimonialsMarquee({ items }: { items: Testimonial[] }) {
  // We assume 9 items are passed in total. We split them into 3 distinct arrays.
  // We duplicate each array once (6 items per column) so that translating by -50% loops exactly one complete set.
  const col1Items = items.slice(0, 3);
  const col1 = [...col1Items, ...col1Items];
  
  const col2Items = items.slice(3, 6);
  const col2 = [...col2Items, ...col2Items];
  
  const col3Items = items.slice(6, 9);
  const col3 = [...col3Items, ...col3Items];

  const TestimonialCard = ({ t, i }: { t: Testimonial; i: number }) => (
    <figure key={i} className="pointer-events-auto flex flex-col rounded-2xl border border-border/80 bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-[6px] hover:shadow-lg hover:shadow-[#103938]/5 hover:border-[#103938] h-max w-full">
      <Quote className="h-6 w-6 text-[#103938]/30" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <img 
          src={t.image} 
          alt={t.name} 
          className="h-10 w-10 shrink-0 rounded-full object-cover border border-[#E8ECEA]"
        />
        <span className="truncate">
          <span className="block text-sm font-semibold text-foreground truncate">{t.name}</span>
          <span className="block text-xs text-muted-foreground truncate">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );

  return (
    <>
      {/* Mobile Horizontal Marquee (< 768px) */}
      <div className="relative mt-8 flex w-full overflow-hidden md:hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -mx-4 px-4 w-[calc(100%+32px)]">
        <div className="flex w-max animate-marquee-horizontal pause-on-hover gap-4">
          {[...items, ...items].map((t, i) => (
            <div key={`mobile-${i}`} className="w-[300px] sm:w-[380px] shrink-0">
              <TestimonialCard t={t} i={i} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Vertical Marquee (>= 768px) */}
      <div className="hidden md:flex relative mt-14 h-[650px] w-full max-w-6xl mx-auto overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full">
          
          {/* Left Column (Down) */}
          <div className="flex-1 overflow-hidden h-full">
            <div className="pointer-events-none flex flex-col gap-4 animate-marquee-vertical-reverse pause-on-hover motion-reduce:[animation-play-state:paused] w-full">
              {col1.map((t, i) => <TestimonialCard key={`col1-${i}`} t={t} i={i} />)}
            </div>
          </div>

          {/* Middle Column (Up) */}
          <div className="flex-1 overflow-hidden h-full">
            <div className="pointer-events-none flex flex-col gap-4 animate-marquee-vertical pause-on-hover motion-reduce:[animation-play-state:paused] w-full">
              {col2.map((t, i) => <TestimonialCard key={`col2-${i}`} t={t} i={i} />)}
            </div>
          </div>

          {/* Right Column (Down) */}
          <div className="hidden lg:block flex-1 overflow-hidden h-full">
            <div className="pointer-events-none flex flex-col gap-4 animate-marquee-vertical-reverse pause-on-hover motion-reduce:[animation-play-state:paused] w-full">
              {col3.map((t, i) => <TestimonialCard key={`col3-${i}`} t={t} i={i} />)}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
