"use client";

import React, { useState, useEffect } from 'react';

type Brand = { name: string; iconUrl: string };

export function Marquee3D({ items }: { items: Brand[] }) {
  // We use exactly 2 sets (16 items) so the math works out perfectly to show ~5 logos on the front face (180 deg)
  const duplicatedItems = [...items, ...items];
  const itemCount = duplicatedItems.length;
  
  const [radius, setRadius] = useState(900);

  useEffect(() => {
    const updateRadius = () => {
      // Use half the screen width for desktop to show ~5 logos.
      // Enforce a minimum radius of 450px so that on mobile screens, we show exactly ~3 items
      // across the screen width. We will scale the logos down on mobile to prevent overlapping.
      const halfScreen = window.innerWidth / 2;
      setRadius(Math.min(Math.max(halfScreen, 450), 1200));
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Using an extreme perspective (10000px) flattens the violent 3D tapering while keeping the curved 3D rotation.
  // This ensures the cylinder doesn't collapse into the center of the screen, completely filling the full width.
  return (
    <div className="relative mx-auto flex h-[200px] w-full max-w-[100vw] items-center justify-center overflow-hidden" style={{ perspective: '10000px' }}>
      {/* Side fade masks strictly on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[15%] bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[15%] bg-gradient-to-l from-white to-transparent" />
      
      {/* Container pushed back by radius so front items sit at z=0 (exact pixel size) */}
      <div 
        className="relative flex h-full w-full items-center justify-center"
        style={{ transformStyle: 'preserve-3d', transform: `translateZ(-${radius}px)` }}
      >
        <div 
          className="absolute flex items-center justify-center w-full h-full marquee-3d-spin"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {duplicatedItems.map((brand, i) => {
            const angle = (360 / itemCount) * i;
            // Slightly scale down longer names like "Google Search Console" to match visual weight
            const isLongName = brand.name.length > 10;
            
            return (
              <div
                key={i}
                className="absolute flex w-max items-center justify-center gap-1.5 sm:gap-2.5"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {/* 
                  Logos remain in full color without any hover effects as per request.
                */}
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <img 
                    src={brand.iconUrl} 
                    alt={brand.name} 
                    className="h-5 w-5 sm:h-7 sm:w-7 lg:h-[32px] lg:w-[32px] object-contain drop-shadow-sm" 
                  />
                  <span 
                    className={`font-bold tracking-tight text-foreground whitespace-nowrap ${
                      isLongName ? 'text-xs sm:text-base lg:text-[20px]' : 'text-sm sm:text-lg lg:text-[24px]'
                    }`}
                  >
                    {brand.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
