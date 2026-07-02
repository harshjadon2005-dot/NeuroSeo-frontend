import { cn } from '@/lib/utils';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory?: (cat: string) => void;
}

export function FilterBar({ categories, activeCategory, onSelectCategory }: FilterBarProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border/50 pb-6">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory?.(cat)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
              activeCategory === cat 
                ? "bg-[#103938] text-white"
                : "bg-white border border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted/50">
          <Filter className="h-3 w-3" />
          Filter
        </button>
        <select className="rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-semibold text-muted-foreground focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
          <option>Newest First</option>
          <option>Popular</option>
          <option>Recently Updated</option>
        </select>
      </div>
    </div>
  );
}
