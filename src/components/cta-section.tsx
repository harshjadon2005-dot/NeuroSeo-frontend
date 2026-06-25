import { ArrowRight } from 'lucide-react';
import { Container, Button } from './ui';
import { Reveal } from './reveal';
import { APP_URL } from '@/lib/utils';

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#103938] px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* ambient glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl drift-slow" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl drift-slow" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                Start ranking on autopilot
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-white/70 sm:text-lg">
                Your first articles are on us. Connect a site, pick a keyword, and watch NeuroSEO research, write, and publish.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href={`${APP_URL}/signup`} external size="lg" variant="outline" className="border-0 bg-white text-[#103938] hover:bg-white/90">
                  Create your free account
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
