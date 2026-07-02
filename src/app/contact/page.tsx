import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { ContactDashboard } from '@/components/contact-dashboard';

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
      </Container>
    </section>
  );
}
