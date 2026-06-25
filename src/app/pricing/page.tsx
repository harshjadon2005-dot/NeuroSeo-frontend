import type { Metadata } from 'next';
import { Check, ArrowRight } from 'lucide-react';
import { Container, Button, SectionHeading, Eyebrow } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { CtaSection } from '@/components/cta-section';
import { cn, APP_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, credit-based pricing for NeuroSEO. Start free, scale as you publish.',
};

const PLANS = [
  {
    key: 'starter',
    name: 'Starter',
    price: '$29',
    period: '/mo',
    blurb: 'For solo creators and single sites.',
    features: [
      '1 workspace · 1 site',
      '1,500 monthly credits (~30 articles)',
      'Full 18-stage generation pipeline',
      'WordPress, Webflow & Shopify publishing',
      'Google Search Console sync',
      'Email support',
    ],
    cta: 'Start free',
    featured: false,
  },
  {
    key: 'growth',
    name: 'Growth',
    price: '$99',
    period: '/mo',
    blurb: 'For growing teams that publish weekly.',
    features: [
      '3 workspaces · 10 sites',
      '6,000 monthly credits (~120 articles)',
      'AI visibility (GEO) tracking',
      'Competitor & opportunity intelligence',
      'Autonomous content generation',
      'Branded client reports (PDF)',
      'Priority support',
    ],
    cta: 'Start free',
    featured: true,
  },
  {
    key: 'agency',
    name: 'Agency',
    price: 'Custom',
    period: '',
    blurb: 'For agencies managing many clients.',
    features: [
      'Unlimited workspaces & sites',
      'Volume credit pricing',
      'Public API + webhooks + OAuth',
      'White-glove onboarding',
      'SSO & advanced roles',
      'Dedicated success manager',
    ],
    cta: 'Contact sales',
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Pay for content, not seats"
            sub="Every plan includes the full pipeline. Credits convert to articles — roughly 50 credits each. Upgrade, top up, or cancel anytime."
          />

          <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.key} delay={i * 70}>
                <div
                  className={cn(
                    'relative flex h-full flex-col rounded-3xl border bg-white p-8',
                    plan.featured
                      ? 'border-[#103938] shadow-xl shadow-[#103938]/10 ring-1 ring-[#103938]/10'
                      : 'border-border',
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#103938] px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tighter text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>

                  <Button
                    href={plan.key === 'agency' ? '/contact' : `${APP_URL}/signup`}
                    external={plan.key !== 'agency'}
                    variant={plan.featured ? 'primary' : 'outline'}
                    className="mt-6 w-full"
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#103938]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

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
