"use client";

import React from 'react';
import { Reveal } from './reveal';

export function PipelinePath({ steps }: { steps: string[] }) {
  const desktopPath = `
    M 12.5 16.6
    L 87.5 16.6
    C 98 16.6, 98 50, 87.5 50
    L 12.5 50
    C 2 50, 2 83.3, 12.5 83.3
    L 87.5 83.3
  `;

  const mobilePath = `
    M 25 8.33
    L 75 8.33
    C 95 8.33, 95 25, 75 25
    L 25 25
    C 5 25, 5 41.66, 25 41.66
    L 75 41.66
    C 95 41.66, 95 58.33, 75 58.33
    L 25 58.33
    C 5 58.33, 5 75, 25 75
    L 75 75
    C 95 75, 95 91.66, 75 91.66
    L 25 91.66
  `;

  return (
    <>
      {/* Mobile Zig-Zag (2 columns) */}
      <div className="relative mx-auto mt-12 h-[700px] sm:h-[800px] w-full max-w-md lg:hidden">
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d={mobilePath}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="text-[#103938]/20"
          />
          <path
            vectorEffect="non-scaling-stroke"
            d={mobilePath}
            fill="none"
            stroke="#103938"
            strokeWidth="2"
            className="animate-[dash_6s_linear_infinite]"
            strokeDasharray="15 300"
            strokeLinecap="round"
          />
        </svg>

        {steps.map((step, i) => {
          const row = Math.floor(i / 2);
          const col = row % 2 === 0 ? (i % 2) : 1 - (i % 2);
          
          const x = 25 + col * 50; 
          const y = 8.33 + row * 16.66;

          return (
            <div
              key={`mobile-${step}`}
              className="absolute z-10"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Reveal delay={i * 60}>
                <div className="flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-110">
                  <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-border text-[#103938]">
                    <span className="text-sm sm:text-base font-black">{i + 1}</span>
                  </div>
                  <div className="rounded-full border border-border/80 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-foreground shadow-sm whitespace-nowrap">
                    {step}
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      {/* Desktop Zig-Zag (4 columns) */}
      <div className="relative mx-auto mt-20 h-[380px] w-full max-w-5xl hidden lg:block">
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d={desktopPath}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="text-[#103938]/20"
          />
          <path
            vectorEffect="non-scaling-stroke"
            d={desktopPath}
            fill="none"
            stroke="#103938"
            strokeWidth="2"
            className="animate-[dash_6s_linear_infinite]"
            strokeDasharray="15 300"
            strokeLinecap="round"
          />
        </svg>

        {steps.map((step, i) => {
          const row = Math.floor(i / 4);
          const col = row % 2 === 0 ? (i % 4) : 3 - (i % 4);
          
          const x = 12.5 + col * 25; 
          const y = 16.6 + row * 33.3;

          return (
            <div
              key={`desktop-${step}`}
              className="absolute z-10"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Reveal delay={i * 60}>
                <div className="flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-border text-[#103938]">
                    <span className="text-base font-black">{i + 1}</span>
                  </div>
                  <div className="rounded-full border border-border/80 bg-white/95 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-foreground shadow-sm whitespace-nowrap">
                    {step}
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </>
  );
}
