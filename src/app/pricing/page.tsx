import type { Metadata } from 'next';
import { Container, SectionHeading, Eyebrow } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { CtaSection } from '@/components/cta-section';
import { PricingCards } from '@/components/pricing-cards';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, credit-based pricing for Seobox. Start free, scale as you publish.',
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAFAFA] py-16 sm:py-24">
        {/* Background Atmosphere */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-32 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-emerald-500/10 blur-[120px] opacity-80" />
          <div 
            className="absolute inset-0 opacity-[0.02]" 
            style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />
        </div>

        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Pricing"
            title="Pay for content, not seats"
            sub="Every plan includes the full pipeline. Credits convert to articles — roughly 50 credits each. Upgrade, top up, or cancel anytime."
          />

          <PricingCards />

          <Reveal>
            <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-muted/30 p-6 text-center">
              <Eyebrow>Credit top-ups</Eyebrow>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Need more than your monthly allowance? Buy one-time credit packs from{' '}
                <span className="font-medium text-foreground">100 to 5,000 credits</span> — they never expire,
                and auto-top-up keeps generation running without interruptions.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
