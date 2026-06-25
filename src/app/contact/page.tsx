import type { Metadata } from 'next';
import { Mail, MessageSquare, Building2 } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Talk to the NeuroSEO team about plans, agency onboarding, or anything else.',
};

const CHANNELS = [
  { icon: Mail, title: 'Email', value: 'hello@neuroseo.ai', desc: 'General questions & support' },
  { icon: Building2, title: 'Sales', value: 'sales@neuroseo.ai', desc: 'Agency & enterprise plans' },
  { icon: MessageSquare, title: 'Support', value: 'Avg. reply < 1 business day', desc: 'For active customers' },
];

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          sub="Questions about plans, agency onboarding, or a custom workflow? Send a note and we'll get back fast."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Channels */}
          <div className="space-y-4">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#103938]/8">
                    <c.icon className="h-5 w-5 text-[#103938]" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-0.5 text-sm font-medium text-[#103938]">{c.value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-white p-7 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
