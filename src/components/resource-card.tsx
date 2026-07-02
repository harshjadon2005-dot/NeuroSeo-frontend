'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, BarChart, CheckCircle2, X } from 'lucide-react';

export interface ResourceItem {
  id: string;
  title: string;
  desc: string;
  tag: string;
  readTime: string;
  href?: string;
  image?: string;
  difficulty?: string;
  keyTakeaways?: string[];
  previewText?: string[];
}

export function ResourceGrid({ lessons }: { lessons: ResourceItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = lessons.find(l => l.id === activeId);

  // Scroll lock and ESC listener
  useEffect(() => {
    if (activeId) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveId(null);
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [activeId]);

  return (
    <>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <ResourceCard
            key={lesson.id}
            item={lesson}
            onClick={() => setActiveId(lesson.id)}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeItem && (
          <ExpandedModal item={activeItem} onClose={() => setActiveId(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function ResourceCard({ item, onClick }: { item: ResourceItem; onClick: () => void }) {
  return (
    <motion.div
      layoutId={`card-${item.id}`}
      onClick={onClick}
      className="group flex h-[460px] cursor-pointer flex-col overflow-hidden rounded-[20px] border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-[6px] hover:border-emerald-500/30 hover:shadow-xl hover:shadow-black/5"
    >
      <div className="relative h-[42%] w-full shrink-0 overflow-hidden bg-gradient-to-br from-emerald-100/80 to-emerald-50/30">
        {/* Shining radial glows to create rich texture */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-400/40 blur-[50px] transition-all duration-700 group-hover:scale-125 group-hover:bg-emerald-400/50" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#103938]/10 blur-[50px] transition-all duration-700 group-hover:scale-125 group-hover:bg-[#103938]/15" />
        
        {/* Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src="/logo.png" alt="" className="h-24 w-24 opacity-[0.35] mix-blend-screen contrast-200 brightness-50 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.5]" />
        </div>
        
        {/* Subtle white-to-transparent overlay at bottom to separate text cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        
        {/* Top-left category badge */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold tracking-wide text-[#103938] shadow-sm backdrop-blur">
          {item.tag}
        </span>
        
        {/* Top-right difficulty badge */}
        {item.difficulty && (
          <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-sm backdrop-blur">
            <BarChart className="h-3.5 w-3.5" />
            {item.difficulty}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 pt-5">
        <h3 className="mb-3 text-[26px] font-bold leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-[#103938] line-clamp-2">
          {item.title}
        </h3>
        
        <p className="text-[15px] leading-relaxed text-muted-foreground line-clamp-2">
          {item.desc}
        </p>

        <div className="mt-auto pt-6">
          <div className="mb-4 flex items-center gap-4 text-[13px] font-semibold text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {item.readTime}
            </div>
          </div>
          
          <div className="flex items-center gap-2 border-t border-border/50 pt-4 text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-[#103938]">
            Read Guide <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExpandedModal({ item, onClose }: { item: ResourceItem; onClose: () => void }) {
  return (
    <>
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
      />

      {/* Floating Centered Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
        <motion.div
          layoutId={`card-${item.id}`}
          className="pointer-events-auto relative flex w-full max-w-[800px] flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl ring-1 ring-black/5"
          style={{ maxHeight: '700px' }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-black/40"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="overflow-y-auto overflow-x-hidden">
            {/* Hero Image */}
            <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-gradient-to-br from-emerald-100/80 to-emerald-50/30">
              {/* Shining radial glows */}
              <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-emerald-400/40 blur-[80px]" />
              <div className="absolute -left-32 -bottom-32 h-[400px] w-[400px] rounded-full bg-[#103938]/10 blur-[80px]" />
              
              {/* Logo Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src="/logo.png" alt="" className="h-48 w-48 opacity-[0.25] mix-blend-screen contrast-200 brightness-50 grayscale" />
              </div>
              
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>

            {/* Modal Content */}
            <div className="px-8 py-8 sm:px-12 sm:py-10">
              {/* Badges */}
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-[#103938]">
                  {item.tag}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {item.readTime}
                </div>
                {item.difficulty && (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <BarChart className="h-3.5 w-3.5" />
                    {item.difficulty}
                  </div>
                )}
              </div>

              {/* Title & Intro */}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                {item.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {item.previewText?.[0] || item.desc}
              </p>

              {/* What You'll Learn */}
              {item.keyTakeaways && item.keyTakeaways.length > 0 && (
                <div className="mt-10">
                  <h4 className="text-lg font-bold text-foreground mb-6">
                    What You'll Learn
                  </h4>
                  <ul className="space-y-4">
                    {item.keyTakeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                        <span className="leading-relaxed">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer CTA */}
              <div className="mt-12 pt-8 border-t border-border/60 flex items-center justify-between">
                <button className="flex items-center justify-center gap-2 rounded-full bg-[#103938] px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#103938]/20">
                  Continue Reading <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
