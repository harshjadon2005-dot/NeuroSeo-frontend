'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon } from 'lucide-react';

const FEATURES = [
  {
    title: 'Autonomous Content Pipelines',
    desc: 'Generate, optimize, and publish at scale without lifting a finger.',
  },
  {
    title: 'Real-time Fact Checking',
    desc: 'Ensure every claim is cross-referenced with trusted sources automatically.',
  },
  {
    title: 'AI Overviews Optimization',
    desc: 'Structure your content specifically to be cited by Generative Engines.',
  },
];

export function AuthLayout({ children }: { children: React.ReactNode }) {
  const [featureIndex, setFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % FEATURES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-[#fcfcfc]">
      {/* Left side (Promotional) */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between bg-[#f8fafc] text-[#103938] p-12 lg:p-16 relative overflow-hidden">
        {/* Soft bottom-to-top gradient fade (Inboxkit style) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#b4d6d3] via-[#e2f1ef]/50 to-transparent pointer-events-none" />
        
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2 text-xl font-bold text-[#103938]">
          <img src="/logo.png" alt="Seobox" className="h-8 w-8 object-contain" />
          Seobox
        </Link>

        {/* Feature Carousel */}
        <div className="relative z-10 mt-auto flex flex-col justify-end min-h-[300px]">
          <div className="h-[140px] flex flex-col justify-end mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col gap-4"
              >
                <h2 className="text-4xl font-bold tracking-tight text-[#0a2524] sm:text-5xl leading-tight">
                  {FEATURES[featureIndex].title}
                </h2>
                <p className="text-xl text-[#103938]/80 font-medium">
                  {FEATURES[featureIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats below the text */}
          <div className="flex items-center gap-12 border-t border-[#103938]/10 pt-8 mt-auto">
            <div>
              <div className="text-2xl font-bold text-[#0a2524] mb-1">50K+</div>
              <div className="text-[10px] font-bold tracking-widest text-[#103938]/60 uppercase">Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0a2524] mb-1">100+</div>
              <div className="text-[10px] font-bold tracking-widest text-[#103938]/60 uppercase">Pipelines</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0a2524] mb-1">99%</div>
              <div className="text-[10px] font-bold tracking-widest text-[#103938]/60 uppercase">Accuracy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side (Auth Form) */}
      <div className="flex w-full lg:w-1/2 flex-col items-center justify-center p-8 sm:p-12 relative bg-[#fcfcfc]">
        <Link href="/" className="absolute top-8 left-8 lg:hidden flex items-center gap-2 text-lg font-bold text-[#103938]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Seobox" className="h-6 w-6 rounded shadow-sm" />
          Seobox
        </Link>

        <div className="w-full max-w-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
