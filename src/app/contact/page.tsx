import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { ContactDashboard } from '@/components/contact-dashboard';
import { FaqAccordion } from '@/components/faq-accordion';

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Talk to the NeuroSEO team about plans, agency onboarding, or anything else.',
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-16 sm:py-24 min-h-screen flex flex-col">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-emerald-500/10 blur-[120px] opacity-80" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <Container className="flex-1 flex flex-col">
        <div className="relative z-10 mb-12 sm:mb-16">
          <SectionHeading
            align="center"
            eyebrow="Contact"
            title="Let's build something together"
            sub="Whether you need enterprise pricing, onboarding help, technical support, or product guidance, we're here to help."
          />
        </div>

        <ContactDashboard />

        {/* Contact FAQs */}
        <div className="mt-24 mb-8">
          <SectionHeading
            align="center"
            eyebrow="Common Questions"
            title="Before you send that message"
            sub="We've compiled some of the most common questions our support team receives."
          />
          <FaqAccordion 
            faqs={[
              {
                q: "What is your typical response time?",
                a: "We aim to reply within 1 business day for all standard inquiries. If you are on an Enterprise plan, your dedicated account manager will respond within 2 hours during business hours."
              },
              {
                q: "Can I request a custom Enterprise plan?",
                a: "Absolutely. If you have unique volume requirements, need custom LLM fine-tuning, or require specific SLA guarantees, please select 'Sales' in the form above and we'll design a custom package for you."
              },
              {
                q: "Do you offer technical support for API integrations?",
                a: "Yes. Our core engineering team provides direct technical support for custom CMS integrations, API usage, and Webhook configuration for users on our Pro and Enterprise tiers."
              },
              {
                q: "I run an agency. Can I white-label NeuroSEO?",
                a: "Yes! Our Agency tier includes full white-labeling capabilities, allowing you to generate reports, SERP analysis dashboards, and content drafts with your own branding to present directly to clients."
              }
            ]} 
          />
        </div>
      </Container>
    </section>
  );
}
