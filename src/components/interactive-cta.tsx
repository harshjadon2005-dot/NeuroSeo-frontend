"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from './ui';
import { APP_URL } from '@/lib/utils';
import { Reveal } from './reveal';

const SUGGESTIONS = [
  "Keyword Research",
  "Blog Writer",
  "SEO Audit",
  "Content Brief",
  "Product Description",
  "Landing Page Copy",
  "Meta Titles",
  "FAQ Generator",
];

const SIMULATION_STEPS = [
  "Analyzing request...",
  "Researching keywords...",
  "Generating outline...",
  "Optimizing content...",
];

export function InteractiveCta() {
  const [prompt, setPrompt] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const [simulationProgress, setSimulationProgress] = useState(0);

  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!isSimulating) return;

    // Fast progress bar for the active step
    const progressInterval = setInterval(() => {
      setSimulationProgress((p) => {
        if (p >= 100) return 100;
        return p + Math.random() * 20; // fill up fast
      });
    }, 100);

    const stepDuration = 700; // ms per step

    const timers = SIMULATION_STEPS.map((_, index) => {
      return setTimeout(() => {
        setSimulationStep(index + 1);
        setSimulationProgress(0); // reset progress for the next step
      }, stepDuration * (index + 1));
    });

    // After all steps, wait a beat then show result instead of redirecting
    const showResultTimer = setTimeout(() => {
      setShowResult(true);
    }, stepDuration * (SIMULATION_STEPS.length + 1));

    return () => {
      clearInterval(progressInterval);
      timers.forEach(clearTimeout);
      clearTimeout(showResultTimer);
    };
  }, [isSimulating]);

  const handleGenerate = () => {
    if (!prompt) return;
    setIsSimulating(true);
    setShowResult(false);
    setSimulationStep(0);
    setSimulationProgress(0);
  };

  return (
    <section id="try-neuroseo" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#103938]/5 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.25]" />

      <Container>
        <Reveal>
          <div className="mx-auto max-w-[900px]">
            {/* Main Glass Container */}
            <div className="relative rounded-[24px] border border-border/60 bg-white/60 px-6 py-12 text-center shadow-2xl shadow-black/5 backdrop-blur-2xl sm:px-16 sm:py-16">
              
              {/* Badge */}
              <div className="mb-6 flex justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#103938]/10 bg-[#103938]/5 px-4 py-1.5 text-sm font-semibold text-[#103938] shadow-sm">
                  <Sparkles className="h-4 w-4" /> Try NeuroSEO
                </span>
              </div>
              
              {/* Heading */}
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                See NeuroSEO in Action
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Describe what you want to create and experience how AI can automate your SEO workflow.
              </p>

              {/* Interactive Prompt Box */}
              <div className="mx-auto mt-12 max-w-2xl text-left">
                <div 
                  className={`relative transition-all duration-300 ease-out ${
                    isFocused && !isSimulating ? 'scale-[1.02] shadow-lg' : 'scale-100 shadow-sm'
                  }`}
                >
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    disabled={isSimulating}
                    placeholder="Write a blog about AI SEO for dentists..."
                    className="min-h-[140px] w-full resize-none rounded-[18px] border-2 border-border bg-white/80 p-5 pr-5 pb-20 text-lg transition-all focus:border-[#103938]/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#103938]/10 disabled:opacity-60 placeholder:text-muted-foreground/40 sm:pr-40 sm:pb-5"
                  />
                  
                  {/* Generate Button positioned inside text area on desktop, stacked on mobile */}
                  <div className="absolute bottom-4 left-4 right-4 sm:left-auto">
                    <button
                      onClick={handleGenerate}
                      disabled={!prompt || isSimulating}
                      className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#103938] px-6 font-semibold text-white shadow-lg shadow-[#103938]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0d2e2d] active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
                    >
                      {isSimulating ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          Generate Free
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Suggestions / Chips */}
                <div className={`mt-6 transition-all duration-500 ${isSimulating ? 'opacity-0 select-none pointer-events-none h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setPrompt(s)}
                        className="rounded-full border border-border/80 bg-white px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#103938]/30 hover:text-[#103938] active:translate-y-0"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live AI Simulation Preview */}
                <div className={`transition-all duration-500 ${isSimulating && !showResult ? 'mt-8 opacity-100' : 'h-0 opacity-0 overflow-hidden mt-0'}`}>
                  <div className="space-y-4 rounded-2xl border border-border/80 bg-white/80 p-6 text-left shadow-sm backdrop-blur-md">
                    {SIMULATION_STEPS.slice(0, simulationStep + 1).map((step, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center gap-2.5">
                          {idx === simulationStep && simulationStep < SIMULATION_STEPS.length ? (
                            <Loader2 className="h-4 w-4 animate-spin text-[#103938]" />
                          ) : (
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          )}
                          <span className={idx === simulationStep ? 'font-medium text-foreground' : 'text-muted-foreground'}>
                            {step}
                          </span>
                        </div>
                        {idx === simulationStep && simulationStep < SIMULATION_STEPS.length && (
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#103938]/10">
                            <div
                              className="h-full bg-[#103938] transition-all duration-100 ease-out"
                              style={{ width: `${Math.min(simulationProgress, 100)}%` }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                    {simulationStep >= SIMULATION_STEPS.length && (
                      <div className="flex items-center gap-2.5 pt-2">
                        <Sparkles className="h-5 w-5 text-emerald-600" />
                        <span className="font-bold text-emerald-600">✓ Ready! Generating output...</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Simulated Article Result (Gated) */}
                <div className={`transition-all duration-700 ${showResult ? 'mt-8 opacity-100' : 'h-0 opacity-0 overflow-hidden mt-0'}`}>
                  <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-white text-left shadow-sm">
                    <div className="p-6 sm:p-8 pb-32 sm:pb-40">
                      <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#103938]/10 px-2.5 py-1 text-xs font-semibold text-[#103938]">
                        <Sparkles className="h-3 w-3" /> AI Generated
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {prompt || 'The Ultimate Guide to SEO Automation'}
                      </h3>
                      <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Search engine optimization (SEO) has evolved drastically. What used to take days of manual keyword research, content outlining, and tedious internal linking can now be accomplished in minutes using advanced AI pipelines.
                      </p>
                      <h4 className="mt-8 text-xl font-semibold text-foreground">
                        Why Traditional SEO is Failing
                      </h4>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Most marketing teams still rely on fragmented tools: one platform for keyword discovery, another for content writing, and a third for publishing. This siloed approach creates bottlenecks and inconsistencies that harm search visibility.
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        By integrating data directly from search engines and feeding it into proprietary large language models, modern solutions can identify search intent with unprecedented accuracy...
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        This allows for the automatic generation of perfectly structured FAQ schema, optimized meta titles, and highly relevant internal links—all without human intervention.
                      </p>
                    </div>

                    {/* Blur Overlay & CTA */}
                    <div className="absolute inset-x-0 bottom-0 flex h-64 flex-col items-center justify-end bg-gradient-to-t from-white via-white/90 to-transparent p-6 sm:p-8">
                      <h4 className="mb-5 text-center text-xl font-bold text-foreground">
                        Create your free account to unlock the full result
                      </h4>
                      <button
                        onClick={() => window.location.href = `${APP_URL}/signup`}
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#103938] px-8 font-semibold text-white shadow-lg shadow-[#103938]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0d2e2d] active:translate-y-0 sm:w-auto"
                      >
                        Start Free
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Trust Badges Row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#103938]/60" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#103938]/60" />
                Setup in under 2 minutes
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#103938]/60" />
                Trusted by modern marketing teams
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
