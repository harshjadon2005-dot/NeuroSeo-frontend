import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { FaqDashboard } from '@/components/faq-dashboard';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about Seobox — pipeline, publishing, credits, and AI visibility.',
};

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAFAFA] py-16 sm:py-24">
        {/* Background Atmosphere */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-emerald-500/10 blur-[120px] opacity-70" />
          <div 
            className="absolute inset-0 opacity-[0.02]" 
            style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />
        </div>

        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 relative z-10">
            <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700 mb-6 border border-emerald-500/20">
              Knowledge Center
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#103938] mb-6">
              Questions, Answered
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about how Seobox works. Explore categories, search for answers, or reach out to our team.
            </p>
          </div>
          
          <FaqDashboard />

        </Container>
      </section>

      {/* Bottom Support Section */}
      <section className="border-t border-border/60 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-[#103938] mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              Our team usually replies within one business day.
            </p>
            <Button href="/contact" size="lg" className="group h-12 rounded-full px-8 text-base bg-[#103938] text-white hover:bg-emerald-600 transition-all shadow-sm">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
