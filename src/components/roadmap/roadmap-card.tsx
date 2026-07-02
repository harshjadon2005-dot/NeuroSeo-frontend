import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RoadmapItem } from './roadmap-data';
import { CheckCircle2, Loader2, CircleDashed, Search, AlertTriangle } from 'lucide-react';

export function RoadmapCard({ 
  item, 
  onClick 
}: { 
  item: RoadmapItem; 
  onClick: () => void;
}) {
  const getStatusConfig = () => {
    switch (item.status) {
      case 'shipped':
        return { color: 'text-emerald-600', bg: 'bg-emerald-50/50', border: 'border-emerald-200/50', icon: CheckCircle2 };
      case 'building':
        return { color: 'text-blue-600', bg: 'bg-blue-50/50', border: 'border-blue-200/50', icon: Loader2 };
      case 'planning':
        return { color: 'text-amber-600', bg: 'bg-amber-50/50', border: 'border-amber-200/50', icon: CircleDashed };
      case 'research':
        return { color: 'text-slate-600', bg: 'bg-slate-50/50', border: 'border-slate-200/50', icon: Search };
      case 'deprecated':
        return { color: 'text-red-600', bg: 'bg-red-50/50', border: 'border-red-200/50', icon: AlertTriangle };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <motion.div
      layoutId={`card-${item.id}`}
      onClick={onClick}
      className={cn(
        "group relative flex flex-col gap-4 rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer overflow-hidden",
        item.status === 'building' ? "border-blue-200 hover:border-blue-300 hover:shadow-blue-500/10" : "border-border/60 hover:border-border hover:shadow-black/5",
        item.status === 'shipped' ? "hover:border-emerald-200 hover:shadow-emerald-500/5" : ""
      )}
    >
      {/* Top row: Badge and Priority */}
      <div className="flex items-center justify-between">
        <span className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border",
          config.bg, config.color, config.border
        )}>
          <Icon className={cn("h-3 w-3", item.status === 'building' && "animate-spin [animation-duration:3s]")} />
          {item.status}
        </span>
        
        <span className="text-[11px] font-semibold text-muted-foreground bg-muted/30 px-2 py-0.5 rounded-md border border-border/50">
          {item.tag}
        </span>
      </div>

      {/* Main Content */}
      <div>
        <motion.h4 layoutId={`title-${item.id}`} className="text-lg font-bold text-foreground group-hover:text-[#103938] transition-colors mb-2">
          {item.title}
        </motion.h4>
        <motion.p layoutId={`desc-${item.id}`} className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {item.desc}
        </motion.p>
      </div>

      {/* Progress Bars for 'Building' */}
      {item.status === 'building' && item.progress && (
        <div className="mt-2 space-y-3">
          {item.progress.map((prog, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-bold">
                <span className="text-foreground/80">{prog.label}</span>
                <span className="text-blue-600">{prog.value}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-100">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${prog.value}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom row: Release & ID */}
      <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/40">
        <span className="text-xs font-medium text-muted-foreground/80">
          {item.estimatedRelease}
        </span>
        <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">
          {item.id}
        </span>
      </div>
    </motion.div>
  );
}
