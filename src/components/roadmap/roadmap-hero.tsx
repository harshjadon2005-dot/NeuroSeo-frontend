'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/ui';

function AnimatedCounter({ value, label }: { value: number | string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const isNumber = typeof value === 'number';

  useEffect(() => {
    if (isInView && isNumber) {
      let start = 0;
      const duration = 1500;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(easeProgress * (value as number)));

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value, isNumber]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-border shadow-sm"
    >
      <div className="text-4xl sm:text-5xl font-black text-foreground mb-2 tracking-tight">
        {isNumber ? count : (isInView ? value : '')}
        {isNumber && '+'}
      </div>
      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
}

export function RoadmapHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-border bg-[#FAFAFA]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/50 px-3 py-1 text-sm font-medium text-emerald-700 mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              The Journey
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl font-black tracking-tight text-foreground sm:text-7xl mb-8"
          >
            Product Roadmap
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-16"
          >
            Follow the evolution of Seobox. See what we've shipped, what we're actively building, and how we're shaping the future of autonomous publishing.
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedCounter value={24} label="Shipped Features" />
            <AnimatedCounter value={8} label="Currently Building" />
            <AnimatedCounter value={14} label="Planned" />
            <AnimatedCounter value="Today" label="Last Updated" />
          </div>
        </div>
      </Container>
    </section>
  );
}
