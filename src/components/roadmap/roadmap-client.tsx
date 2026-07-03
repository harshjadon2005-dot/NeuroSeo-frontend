'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/ui';
import { TIMELINE, RoadmapItem, RoadmapStatus } from './roadmap-data';
import { RoadmapCard } from './roadmap-card';
import { RoadmapModal } from './roadmap-modal';
import { motion, AnimatePresence } from 'framer-motion';

export function RoadmapClient() {
  const [selectedItem, setSelectedItem] = useState<RoadmapItem | null>(null);

  // Flatten all items from the TIMELINE
  const allItems = useMemo(() => {
    return TIMELINE.flatMap(quarter => quarter.items);
  }, []);

  // Group items by status
  const plannedItems = allItems.filter(item => item.status === 'planning' || item.status === 'research');
  const buildingItems = allItems.filter(item => item.status === 'building');
  const shippedItems = allItems.filter(item => item.status === 'shipped');

  return (
    <section className="py-24 bg-[#FAFAFA] relative min-h-screen">
      <Container className="max-w-[1400px]">
        {/* Kanban Board Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* PLANNED COLUMN */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2 px-1">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Planned
              </h3>
              <span className="text-xs font-bold text-muted-foreground bg-black/5 px-2 py-0.5 rounded-full">
                {plannedItems.length}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {plannedItems.map((item) => (
                <RoadmapCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
              ))}
            </div>
          </div>

          {/* BUILDING COLUMN */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2 px-1">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" /> Building
              </h3>
              <span className="text-xs font-bold text-muted-foreground bg-black/5 px-2 py-0.5 rounded-full">
                {buildingItems.length}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {buildingItems.map((item) => (
                <RoadmapCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
              ))}
            </div>
          </div>

          {/* SHIPPED COLUMN */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2 px-1">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Shipped
              </h3>
              <span className="text-xs font-bold text-muted-foreground bg-black/5 px-2 py-0.5 rounded-full">
                {shippedItems.length}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {shippedItems.map((item) => (
                <RoadmapCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
              ))}
            </div>
          </div>

        </div>
      </Container>

      {/* Shared Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <RoadmapModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
