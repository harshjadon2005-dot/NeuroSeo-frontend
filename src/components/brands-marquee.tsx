"use client";

import React from 'react';

type Brand = { name: string; iconUrl: string };

export function BrandsMarquee({ items }: { items: Brand[] }) {
  // To create a perfect seamless loop, we render exactly 2 sets of items in our CSS marquee.
  // We duplicate the original array so that 1 set is large enough to overflow the screen.
  // 8 items in TRUST array * 2 = 16 items per set. We use 2 sets for the loop.
  const set = [...items, ...items];

  const BrandItem = ({ brand, i }: { brand: Brand; i: number }) => {
    // Slightly scale down longer names like "Google Search Console" to match visual weight
    const isLongName = brand.name.length > 10;
    
    return (
      <div
        key={i}
        className="group flex flex-none items-center justify-center transition-all duration-250 ease-out"
      >
        <div className="flex items-center gap-2.5 transition-all duration-250 ease-out group-hover:scale-105 cursor-default">
          <img 
            src={brand.iconUrl} 
            alt={brand.name} 
            className="h-7 w-7 sm:h-[30px] sm:w-[30px] lg:h-[32px] lg:w-[32px] object-contain" 
          />
          <span 
            className={`font-bold tracking-tight text-foreground whitespace-nowrap ${
              isLongName ? 'text-base sm:text-lg lg:text-[20px]' : 'text-lg sm:text-xl lg:text-[24px]'
            }`}
          >
            {brand.name}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex flex-nowrap w-full max-w-[100vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)] py-4">
      <div className="flex flex-nowrap w-max animate-marquee-horizontal pause-on-hover">
        {/* Set 1 */}
        <div className="flex flex-nowrap w-max shrink-0 gap-10 md:gap-14 lg:gap-20 pr-10 md:pr-14 lg:pr-20">
          {set.map((brand, i) => <BrandItem key={i} brand={brand} i={i} />)}
        </div>
        {/* Set 2 (Duplicate for loop) */}
        <div className="flex flex-nowrap w-max shrink-0 gap-10 md:gap-14 lg:gap-20 pr-10 md:pr-14 lg:pr-20" aria-hidden="true">
          {set.map((brand, i) => <BrandItem key={`dup-${i}`} brand={brand} i={i} />)}
        </div>
      </div>
    </div>
  );
}
