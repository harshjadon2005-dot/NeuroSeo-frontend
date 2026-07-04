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
      <div className="hidden lg:flex w-1/2 flex-col justify-between bg-[#103938] text-white p-12 lg:p-16 relative overflow-hidden">
        {/* Subtle grid pattern for Seobox branding */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        {/* Highly visible bottom-to-top fading effect (Deep shadow + Emerald glow) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#021110] via-[#051c1b]/80 to-transparent pointer-events-none z-0" />
        <div className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-emerald-400/15 blur-[120px] rounded-[100%] pointer-events-none z-0" />
        
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2 text-xl font-bold text-white">
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
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
                  {FEATURES[featureIndex].title}
                </h2>
                <p className="text-xl text-emerald-50/80 font-medium">
                  {FEATURES[featureIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats below the text */}
          <div className="flex items-center gap-12 border-t border-white/10 pt-8 mt-auto">
            <div>
              <div className="text-2xl font-bold text-white mb-1">50K+</div>
              <div className="text-[10px] font-bold tracking-widest text-emerald-50/50 uppercase">Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">100+</div>
              <div className="text-[10px] font-bold tracking-widest text-emerald-50/50 uppercase">Pipelines</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">99%</div>
              <div className="text-[10px] font-bold tracking-widest text-emerald-50/50 uppercase">Accuracy</div>
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
