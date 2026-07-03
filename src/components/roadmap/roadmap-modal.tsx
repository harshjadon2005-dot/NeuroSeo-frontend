'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { RoadmapItem } from './roadmap-data';
import { useEffect } from 'react';

export function RoadmapModal({ 
  item, 
  onClose 
}: { 
  item: RoadmapItem | null; 
  onClose: () => void;
}) {
  // Lock body scroll when open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              layoutId={`card-${item.id}`}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl pointer-events-auto border border-border/60"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-border p-6 sm:px-8 flex items-start justify-between z-10">
                <div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="flex items-center gap-3 mb-3"
                  >
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest bg-muted/30 px-2 py-0.5 rounded-md border border-border/50">
                      {item.id}
                    </span>
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest bg-muted/30 px-2 py-0.5 rounded-md border border-border/50">
                      {item.tag}
                    </span>
                  </motion.div>
                  <motion.h2 layoutId={`title-${item.id}`} className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    {item.title}
                  </motion.h2>
                </div>
                <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground -mr-2"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-8 overflow-hidden">
                <motion.p layoutId={`desc-${item.id}`} className="text-lg leading-relaxed text-muted-foreground">
                  {item.desc}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <Section title="The Problem" content={item.details.problem} />
                  <Section title="The Solution" content={item.details.solution} />
                  <Section title="Technical Implementation" content={item.details.technical} />
                  <Section title="Expected Impact" content={item.details.impact} />
                  
                  {item.details.dependencies && item.details.dependencies.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wider">Dependencies</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.details.dependencies.map(dep => (
                          <span key={dep} className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200/50 rounded-full text-xs font-semibold">
                            {dep}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  if (!content) return null;
  return (
    <div>
      <h4 className="text-[13px] font-bold text-foreground mb-2 uppercase tracking-wider">{title}</h4>
      <p className="text-[15px] leading-relaxed text-muted-foreground bg-[#FAFAFA] p-4 rounded-2xl border border-border/40">
        {content}
      </p>
    </div>
  );
}
