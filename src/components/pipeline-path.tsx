"use client";

import React, { useEffect, useState } from 'react';
import { Reveal } from './reveal';
import { Check } from 'lucide-react';

export function PipelinePath({ steps }: { steps: string[] }) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!isDesktop) {
    return (
      <div className="relative mx-auto mt-12 max-w-sm pl-4">
        <div className="absolute bottom-0 left-[23px] top-0 w-px border-l-2 border-dashed border-[#103938]/30" />
        <div className="space-y-6">
          {steps.map((step, i) => (
            <Reveal key={step} delay={i * 40}>
              <div className="relative flex items-center gap-4">
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#103938] text-[11px] font-bold text-white shadow-md ring-4 ring-[#FAFAFA]">
                  {i + 1}
                </span>
                <span className="rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-foreground shadow-sm">
                  {step}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    );
  }

  // Desktop Zig-Zag Path
  return (
    <div className="relative mx-auto mt-20 h-[380px] w-full max-w-5xl">
      {/* Background SVG path connecting everything */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="
            M 12.5 16.6
            L 87.5 16.6
            C 98 16.6, 98 50, 87.5 50
            L 12.5 50
            C 2 50, 2 83.3, 12.5 83.3
            L 87.5 83.3
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="text-[#103938]/20"
        />
        {/* Animated glowing path tracing the line */}
        <path
          vectorEffect="non-scaling-stroke"
          d="
            M 12.5 16.6
            L 87.5 16.6
            C 98 16.6, 98 50, 87.5 50
            L 12.5 50
            C 2 50, 2 83.3, 12.5 83.3
            L 87.5 83.3
          "
          fill="none"
          stroke="#103938"
          strokeWidth="2"
          className="animate-[dash_6s_linear_infinite]"
          strokeDasharray="15 300"
          strokeLinecap="round"
        />
      </svg>

      {/* Floating Nodes */}
      {steps.map((step, i) => {
        const row = Math.floor(i / 4); // 0, 1, 2
        // If row is 1 (middle row), nodes go from right to left (col 3, 2, 1, 0)
        const col = row % 2 === 0 ? (i % 4) : 3 - (i % 4);
        
        const x = 12.5 + col * 25; // 12.5%, 37.5%, 62.5%, 87.5%
        const y = 16.6 + row * 33.3; // 16.6%, 49.9%, 83.2%

        return (
          <div
            key={step}
            className="absolute z-10"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Reveal delay={i * 60}>
              <div className="flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110">
                {/* Node Circle */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-border text-[#103938]">
                  <span className="text-base font-black">{i + 1}</span>
                </div>
                
                {/* Label */}
                <div className="rounded-full border border-border/80 bg-white/95 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-foreground shadow-sm whitespace-nowrap">
                  {step}
                </div>
              </div>
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}
