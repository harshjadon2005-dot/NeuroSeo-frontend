import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { ResourceCta } from '@/components/resource-cta';
import { Mail, Clock, BookOpen, ExternalLink, ArrowRight, Zap, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Support — NeuroSEO Platform',
  description: 'Get in touch with the NeuroSEO support team.',
};

export default function SupportPage() {
  return (
    <>
      {/* Premium Dark Hero */}
      <section className="relative overflow-hidden bg-[#103938] pt-24 pb-48 sm:pt-32 sm:pb-56 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Glowing Orbs */}
        <div className="absolute -left-20 top-20 h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-[100px]" />
        <div className="absolute -right-20 top-40 h-[400px] w-[400px] rounded-full bg-teal-300/10 blur-[100px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                How can we help you?
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-xl leading-relaxed text-emerald-50/70">
                Whether you need technical guidance, billing help, or enterprise consulting, our team is ready to assist.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Overlapping Bento Grid */}
      <section className="relative z-20 -mt-32 pb-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3 mx-auto max-w-6xl">
            
            {/* Email Support */}
            <Reveal delay={150}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-8 shadow-2xl shadow-black/10 transition-all hover:-translate-y-2 hover:shadow-emerald-500/10">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-50 transition-transform duration-700 group-hover:scale-[2]" />
                
                <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100/50 text-emerald-600 ring-1 ring-emerald-500/20">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="relative z-10 text-2xl font-bold text-foreground mb-3">Email Support</h3>
                <p className="relative z-10 text-muted-foreground leading-relaxed flex-1">
                  Technical support for bugs, billing, or account management.
                </p>
                
                <div className="relative z-10 mt-8 space-y-4 border-t border-border pt-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Response time</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1"><Clock className="h-4 w-4" /> &lt; 2 hrs</span>
                  </div>
                  <a href="mailto:support@neuroseo.com" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#103938] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#0c2a29] hover:shadow-lg">
                    Email support <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Knowledge Base */}
            <Reveal delay={250}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-8 shadow-2xl shadow-black/10 transition-all hover:-translate-y-2 hover:shadow-blue-500/10">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-50 transition-transform duration-700 group-hover:scale-[2]" />
                
                <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100/50 text-blue-600 ring-1 ring-blue-500/20">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="relative z-10 text-2xl font-bold text-foreground mb-3">Knowledge Base</h3>
                <p className="relative z-10 text-muted-foreground leading-relaxed flex-1">
                  Detailed playbooks, API documentation, and setup guides.
                </p>
                
                <div className="relative z-10 mt-8 space-y-4 border-t border-border pt-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Articles available</span>
                    <span className="font-bold text-blue-600">120+ guides</span>
                  </div>
                  <Link href="/help" className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-bold text-foreground transition-all hover:border-blue-500/30 hover:bg-blue-50/50">
                    Browse docs <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Enterprise Support */}
            <Reveal delay={350}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[32px] bg-[#103938] p-8 shadow-2xl shadow-black/20 transition-all hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                
                <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="relative z-10 text-2xl font-bold text-white mb-3">Enterprise</h3>
                <p className="relative z-10 text-emerald-50/70 leading-relaxed flex-1">
                  Dedicated Slack channels and custom onboarding for your entire team.
                </p>
                
                <div className="relative z-10 mt-8 space-y-4 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-emerald-50/70">Response time</span>
                    <span className="font-bold text-emerald-400">Under 15 mins</span>
                  </div>
                  <Link href="/contact" className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#103938] transition-all hover:bg-emerald-50 hover:shadow-lg">
                    Contact sales <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>
        </Container>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 rounded-[32px] border border-border bg-white p-8 sm:p-12 md:flex-row shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-violet-100/50 text-violet-600 ring-1 ring-violet-500/20">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Join the Community</h3>
                  <p className="text-muted-foreground leading-relaxed">Connect with 5,000+ SEO professionals on our Discord server to share strategies and get help.</p>
                </div>
              </div>
              <button className="shrink-0 rounded-full bg-[#5865F2] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#4752C4] hover:shadow-lg hover:shadow-[#5865F2]/20 hover:-translate-y-0.5">
                Join Discord Server
              </button>
            </div>
          </Reveal>
        </Container>
      </section>

      <ResourceCta />
    </>
  );
}
