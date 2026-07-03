'use client';

import { Mail, MapPin } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { ContactForm } from '@/app/contact/contact-form';

export function ContactDashboard() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl mt-4 mb-20 px-4">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* ─── Left Column (Human Touch) ─────────────────────────────────── */}
        <div className="flex-1 lg:max-w-[400px]">
          <Reveal delay={100} className="sticky top-24">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              We'd love to hear from you.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Our team is always available to help you set up workflows, explore enterprise options, or just chat about AI and SEO. Fill out the form, or email us directly below.
            </p>

            <div className="space-y-8">
              {/* Support */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#103938]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Support & General</h3>
                  <a href="mailto:support@neuroseo.com" className="mt-1 block text-sm font-medium text-muted-foreground hover:text-[#103938] transition-colors">
                    support@neuroseo.com
                  </a>
                </div>
              </div>

              {/* Sales */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#103938]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Sales & Partnerships</h3>
                  <a href="mailto:sales@neuroseo.com" className="mt-1 block text-sm font-medium text-muted-foreground hover:text-[#103938] transition-colors">
                    sales@neuroseo.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] text-muted-foreground border border-border/50">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">HQ</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    San Francisco, CA<br/>
                    United States
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ─── Right Column (Form) ───────────────────────────────────────── */}
        <div className="flex-[1.5]">
          <Reveal delay={200} className="rounded-[24px] border border-border/80 bg-white p-6 sm:p-10 shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Send us a message</h3>
            </div>
            
            {/* The actual form logic is wrapped here */}
            {/* We don't pass inquiryType anymore since we removed the quick chips */}
            <ContactForm initialInquiryType="General Question" />
          </Reveal>
        </div>
        
      </div>
    </div>
  );
}
