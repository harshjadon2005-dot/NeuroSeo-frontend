'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/ui';
import { TIMELINE, RoadmapItem, RoadmapStatus } from './roadmap-data';
import { RoadmapFilter } from './roadmap-filter';
import { QuarterSection } from './roadmap-quarter';
import { RoadmapModal } from './roadmap-modal';
import { motion } from 'framer-motion';

export function RoadmapClient() {
  const [activeFilter, setActiveFilter] = useState<RoadmapStatus | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<RoadmapItem | null>(null);

  const filteredTimeline = useMemo(() => {
    return TIMELINE.map(quarter => {
      const filteredItems = activeFilter === 'all' 
        ? quarter.items 
        : quarter.items.filter(item => item.status === activeFilter);
      
      return {
        ...quarter,
        items: filteredItems
      };
    }).filter(quarter => quarter.items.length > 0);
  }, [activeFilter]);

  return (
    <section className="py-24 bg-white relative">
      <Container>
        <RoadmapFilter 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />

        <div className="mx-auto max-w-5xl">
          {filteredTimeline.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">No items found</h3>
              <p className="text-muted-foreground">Try selecting a different filter.</p>
            </motion.div>
          ) : (
            filteredTimeline.map((quarterData) => (
              <QuarterSection 
                key={quarterData.quarter} 
                data={quarterData} 
                onCardClick={setSelectedItem}
              />
            ))
          )}
        </div>
      </Container>

      {/* Shared Modal Overlay */}
      <RoadmapModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </section>
  );
}
