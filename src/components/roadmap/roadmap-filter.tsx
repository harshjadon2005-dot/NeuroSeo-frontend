'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RoadmapStatus } from './roadmap-data';

type FilterOption = RoadmapStatus | 'all';

const FILTERS: { label: string; value: FilterOption }[] = [
  { label: 'All', value: 'all' },
  { label: 'Shipped', value: 'shipped' },
  { label: 'Building', value: 'building' },
  { label: 'Planning', value: 'planning' },
  { label: 'Research', value: 'research' },
];

export function RoadmapFilter({ 
  activeFilter, 
  onFilterChange 
}: { 
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}) {
  return (
    <div className="flex justify-center mb-16">
      <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-border rounded-full shadow-sm">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.value;
          
          return (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={cn(
                "relative px-4 py-2 text-sm font-semibold rounded-full transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-muted/80 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
