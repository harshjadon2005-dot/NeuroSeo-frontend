import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container, Button } from './ui';
import { Reveal } from './reveal';

export function ResourceCta() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-emerald-500/5 blur-[100px]" />
      
      <Container>
        <div className="mx-auto max-w-2xl text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-50/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-6">
              Ready to automate?
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#103938] sm:text-5xl lg:leading-[1.1]">
              Ready to generate SEO content on autopilot?
            </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Stop writing manually. Give NeuroSEO a keyword and watch it research, draft, and publish fully optimized content that ranks and gets cited by AI engines.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center">
              <Button href="/pricing" size="lg" className="group h-14 rounded-full px-10 text-base font-semibold bg-[#103938] text-white hover:bg-emerald-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20 transition-all duration-300">
                Start Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs font-medium text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> No credit card required</span>
                <span className="mx-1 text-border/60 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Setup in minutes</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
