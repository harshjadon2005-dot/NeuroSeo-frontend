import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { ResourceCta } from '@/components/resource-cta';
import { Target, Lightbulb, Users, Shield, Zap, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Seobox Platform',
  description: 'The story, mission, and vision behind Seobox.',
};

const VALUES = [
  { icon: <Target className="h-6 w-6" />, title: 'Truth above all', desc: 'In an era of mass-produced AI content, we build pipelines that verify facts and prioritize accuracy.' },
  { icon: <Zap className="h-6 w-6" />, title: 'Velocity without compromise', desc: 'Publishing 10x faster should not mean 10x lower quality. We automate the repetitive, not the creative.' },
  { icon: <Users className="h-6 w-6" />, title: 'Human in the loop', desc: 'We believe AI is an engine, not a pilot. Our tools empower editors rather than replacing them.' },
  { icon: <Shield className="h-6 w-6" />, title: 'Protecting the web', desc: 'We actively fight against spam by ensuring our clients produce high-information-density content.' },
];

const TIMELINE = [
  { year: '2023', title: 'The Generative Shift', desc: 'As ChatGPT and Perplexity emerged, we realized traditional SEO tools were optimizing for an outdated algorithm.' },
  { year: '2024', title: 'Seobox v1', desc: 'We launched the first autonomous pipeline capable of formatting content specifically for LLM extraction (GEO).' },
  { year: '2025', title: 'The Trust Engine', desc: 'Integrated our live fact-checking API and originality scoring to protect domains from quality updates.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                Rebuilding search for the <span className="text-[#103938]">generative era</span>.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                We are a team of search engineers and AI researchers building the infrastructure for the next generation of the web.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#103938] text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <Reveal>
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Target className="h-6 w-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed text-white/70">
                  To transition the web from keyword-stuffed articles designed for crawlers, to high-density, factually accurate knowledge designed for answer engines.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Lightbulb className="h-6 w-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg leading-relaxed text-white/70">
                  A web where quality and truth are the only ranking factors, and where creators have the autonomous tools necessary to scale their expertise effortlessly.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why we built Seobox */}
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionHeading 
                align="center"
                eyebrow="The Story"
                title="Why we built Seobox"
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-12 space-y-8 text-lg leading-relaxed text-muted-foreground">
                <p>
                  For twenty years, SEO was a game of metrics. We counted backlinks, tracked keyword density, and tried to reverse-engineer an opaque algorithm. But when generative AI arrived, the rules changed overnight.
                </p>
                <p>
                  We watched as massive publishers lost millions in traffic because their content was too fluffy to be extracted by LLMs like Perplexity and AI Overviews. The web was evolving from "search and click" to "ask and receive".
                </p>
                <p>
                  Existing SEO tools were completely blind to this shift. They kept recommending 2,000-word articles for simple questions. So, we built Seobox: the first platform designed specifically for Generative Engine Optimization (GEO).
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="text-3xl font-bold text-center mb-16">The Journey</h2>
            </Reveal>
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
                    <div className="md:w-32 shrink-0 md:text-right">
                      <span className="text-2xl font-bold text-[#103938]/30 transition-colors group-hover:text-[#103938]">{item.year}</span>
                    </div>
                    <div className="relative pb-12 md:border-l-2 md:border-border md:pl-12 last:border-0 last:pb-0">
                      <div className="absolute -left-[9px] top-2 hidden h-4 w-4 rounded-full border-4 border-white bg-[#103938] shadow-sm md:block transition-transform group-hover:scale-125" />
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <SectionHeading 
              align="center"
              title="Core Values"
              sub="The principles that guide our product development and company culture."
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((val, i) => (
              <Reveal key={i} delay={(i % 4) * 100}>
                <div className="rounded-[24px] border border-border bg-white p-8 text-center shadow-sm h-full flex flex-col items-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-[#103938]">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">{val.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ResourceCta />
    </>
  );
}
