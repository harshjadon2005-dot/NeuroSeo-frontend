import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { ResourceCta } from '@/components/resource-cta';
import { Briefcase, MapPin, ArrowRight, Heart, Zap, Coffee, Laptop } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers — NeuroSEO Platform',
  description: 'Join the team building the future of search and generative AI.',
};

const BENEFITS = [
  { icon: <Laptop className="h-6 w-6" />, title: 'Remote First', desc: 'Work from anywhere in the world. We are a fully distributed team.' },
  { icon: <Heart className="h-6 w-6" />, title: 'Health & Wellness', desc: 'Premium medical, dental, and vision coverage for you and your dependents.' },
  { icon: <Zap className="h-6 w-6" />, title: 'Home Office Setup', desc: '$2,000 stipend to build your perfect workspace.' },
  { icon: <Coffee className="h-6 w-6" />, title: 'Flexible Time Off', desc: 'Take the time you need. We measure output, not hours.' },
];

const POSITIONS = [
  { role: 'Senior AI Engineer', department: 'Engineering', location: 'Remote (US/EU)', status: 'Open' },
  { role: 'Product Designer', department: 'Design', location: 'Remote', status: 'Open' },
  { role: 'Growth Marketer', department: 'Marketing', location: 'Remote (US)', status: 'Coming Soon' },
  { role: 'Backend Engineer (Go)', department: 'Engineering', location: 'Remote', status: 'Closed' },
  { role: 'Customer Success Manager', department: 'Support', location: 'Remote (EU)', status: 'Open' },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                Build the future of search
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                We're looking for ambitious engineers, designers, and marketers to help us redefine how knowledge is structured for the AI era.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a href="#open-roles" className="inline-flex items-center justify-center rounded-full bg-[#103938] px-8 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#103938]/20">
                View Open Roles
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <SectionHeading 
              align="center"
              eyebrow="Benefits"
              title="Why work with us?"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={i} delay={(i % 4) * 100}>
                <div className="flex flex-col sm:flex-row gap-6 rounded-[24px] border border-border bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-[#103938]">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section id="open-roles" className="py-24 scroll-mt-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="text-3xl font-bold text-foreground mb-12">Open Positions</h2>
            </Reveal>
            <div className="flex flex-col gap-4">
              {POSITIONS.map((pos, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className={`group flex flex-col sm:flex-row sm:items-center justify-between rounded-[20px] border border-border bg-white p-6 transition-all ${
                    pos.status === 'Open' ? 'hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg' : 'opacity-75'
                  }`}>
                    <div className="mb-6 sm:mb-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-lg font-bold text-foreground">{pos.role}</h3>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                          pos.status === 'Open' ? 'bg-emerald-100 text-emerald-800' :
                          pos.status === 'Coming Soon' ? 'bg-orange-100 text-orange-800' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {pos.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
                        <span className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> {pos.department}</span>
                        <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {pos.location}</span>
                      </div>
                    </div>
                    
                    {pos.status === 'Open' ? (
                      <Link href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-6 py-2.5 text-sm font-bold text-foreground transition-colors group-hover:bg-[#103938] group-hover:text-white">
                        Apply Now <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <button disabled className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-muted/50 px-6 py-2.5 text-sm font-bold text-muted-foreground">
                        {pos.status}
                      </button>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      <ResourceCta />
    </>
  );
}
