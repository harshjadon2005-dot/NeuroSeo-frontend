'use client';

import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { cn, APP_URL } from '@/lib/utils';

const PLANS = [
  {
    key: 'starter',
    name: 'Starter',
    priceMonthly: 29,
    priceYearly: 24,
    savingsText: 'Save $60/year',
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
    priceMonthly: 99,
    priceYearly: 79,
    savingsText: 'Save $240/year',
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
    priceMonthly: 'Custom',
    priceYearly: 'Custom',
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

export function PricingCards() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div>
      {/* ─── Toggle ─── */}
      <div className="mt-12 flex justify-center mb-16">
        <div className="relative inline-flex items-center rounded-full bg-muted/40 p-1.5 shadow-inner hover:shadow-md transition-shadow duration-300">
          <div
            className={cn(
              "absolute inset-y-1.5 left-1.5 w-[110px] rounded-full bg-[#103938] shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isYearly ? "translate-x-full" : "translate-x-0"
            )}
          />
          <button
            onClick={() => setIsYearly(false)}
            className={cn(
              "relative z-10 w-[110px] py-2.5 text-sm font-medium transition-colors duration-300 hover:scale-105 active:scale-95",
              !isYearly ? "text-white" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={cn(
              "relative z-10 flex w-[110px] items-center justify-center gap-1.5 py-2.5 text-sm font-medium transition-colors duration-300 hover:scale-105 active:scale-95",
              isYearly ? "text-white" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Yearly
            <span className={cn(
              "absolute -right-2 -top-3 inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-bold shadow-sm transition-colors",
              isYearly ? "bg-emerald-500 text-white" : "bg-emerald-500/10 text-emerald-700"
            )}>
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* ─── Cards ─── */}
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {PLANS.map((plan, i) => {
          const isCustom = typeof plan.priceMonthly === 'string';
          const price = isYearly ? plan.priceYearly : plan.priceMonthly;
          
          return (
            <Reveal key={plan.key} delay={i * 70}>
              <div
                className={cn(
                  'group relative flex h-full flex-col rounded-3xl border bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
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
                
                <div className="mt-6 flex flex-col min-h-[90px]">
                  <div className="flex items-baseline gap-1">
                    <span 
                      key={price} // Forces re-render animation when price changes
                      className="text-4xl font-bold tracking-tighter text-foreground relative animate-in fade-in slide-in-from-bottom-2 duration-300 group-hover:scale-105 transition-transform"
                    >
                      {isCustom ? price : `$${price}`}
                    </span>
                    {!isCustom && (
                      <span 
                        key={isYearly ? 'y' : 'm'}
                        className="text-sm text-muted-foreground animate-in fade-in duration-500"
                      >
                        {isYearly ? '/month billed annually' : '/mo'}
                      </span>
                    )}
                  </div>
                  
                  <div className="h-6 mt-2">
                    {!isCustom && isYearly && (
                      <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 animate-in fade-in slide-in-from-bottom-3 duration-300">
                        {plan.savingsText}
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  href={plan.key === 'agency' ? '/contact' : `${APP_URL}/signup`}
                  external={plan.key !== 'agency'}
                  variant={plan.featured ? 'primary' : 'outline'}
                  className="mt-2 w-full"
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
          );
        })}
      </div>
    </div>
  );
}
