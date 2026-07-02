'use client';

import { motion } from 'framer-motion';
import { RoadmapQuarter, RoadmapItem } from './roadmap-data';
import { RoadmapCard } from './roadmap-card';

export function QuarterSection({ 
  data,
  onCardClick
}: { 
  data: RoadmapQuarter;
  onCardClick: (item: RoadmapItem) => void;
}) {
  if (data.items.length === 0) return null;

  return (
    <div className="relative mb-24 last:mb-0">
      
      {/* Quarter Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8 pl-4 border-l-4 border-emerald-500"
      >
        <h2 className="text-3xl font-black text-foreground tracking-tight">{data.quarter}</h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {data.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="h-full"
          >
            <RoadmapCard item={item} onClick={() => onCardClick(item)} />
          </motion.div>
        ))}
      </div>

      {/* Vertical Connector Line to next quarter */}
      <div className="hidden md:block absolute left-1/2 -bottom-24 w-px h-16 bg-gradient-to-b from-border to-transparent -translate-x-1/2" />
    </div>
  );
}
