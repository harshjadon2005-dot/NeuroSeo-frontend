import type { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { CtaSection } from '@/components/cta-section';
import { FaqAccordion } from './faq-accordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about NeuroSEO — pipeline, publishing, credits, and AI visibility.',
};

const FAQS = [
  {
    q: 'How does NeuroSEO actually write content?',
    a: 'Every article runs through an 18-stage pipeline: it pulls live SERP data for your keyword, builds an outline against the top results, drafts the body, generates SEO metadata and FAQ schema, adds internal links, then runs originality, AI-detection, and fact-verification checks before scoring SEO and AI visibility. You review the result and publish.',
  },
  {
    q: 'Is the content original, or will it get flagged as AI?',
    a: 'Before anything reaches your review queue it passes plagiarism, AI-detection, and fact-verification gates. When you connect an external originality provider (Originality.ai or Copyscape), those scores override the built-in heuristics for an authoritative check.',
  },
  {
    q: 'Which CMS platforms can it publish to?',
    a: 'WordPress (REST + Application Passwords), Webflow (CMS API), Shopify (Admin API), and any headless setup via signed webhooks. Approved articles publish in one click, or fully automatically when you enable auto-publish with quality gates.',
  },
  {
    q: 'What is "AI visibility" or GEO?',
    a: 'Generative Engine Optimization. NeuroSEO probes ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews to see whether they cite your brand for your target queries, then scores and tracks that visibility over time.',
  },
  {
    q: 'How do credits work?',
    a: 'Generation is credit-based — roughly 50 credits per article. Each plan includes a monthly allowance, and you can buy one-time top-up packs (100–5,000 credits) that never expire. Auto-top-up keeps things running when you dip below a threshold.',
  },
  {
    q: 'Can my whole team and clients use it?',
    a: 'Yes. Invite teammates with roles (owner, admin, editor, reviewer, viewer), spin up a separate workspace per client, and send branded PDF performance reports on a schedule. Client-guest access is scoped to specific workspaces.',
  },
  {
    q: 'Is there an API?',
    a: 'A full developer API at /v1/api with API-key auth, per-key rate limiting, outbound webhooks for content events, and an OAuth consent flow for connected apps. Generate articles, list content, and wire NeuroSEO into your own tooling.',
  },
  {
    q: 'How is my data protected?',
    a: 'All secrets — CMS credentials, OAuth tokens, API keys — are encrypted at rest with AES-256-GCM. You can export your full account data as JSON or request deletion at any time (GDPR).',
  },
  {
    q: 'Do I need to connect anything to get started?',
    a: 'No. You can generate and review articles immediately. Connecting Google Search Console unlocks real ranking data, and connecting a CMS lets you publish in one click — but both are optional and take a couple of minutes.',
  },
  {
    q: 'Can I keep a human in the loop?',
    a: 'Always. By default every article lands in a review queue where you can edit, approve, or reject it. Auto-publish is entirely opt-in and only fires when an article clears the SEO and quality thresholds you set per site.',
  },
  {
    q: 'How does it keep my content on-brand?',
    a: 'Each site has its own brand voice settings — tone, target audience, writing style, and banned words. The pipeline writes to those constraints, and you can adjust them any time without regenerating past work.',
  },
  {
    q: 'Is there a free trial, and can I cancel anytime?',
    a: 'Yes. New accounts start with credits on us — no card required — and you can upgrade, downgrade, or cancel at any time from the billing portal. Top-up credits you purchase never expire.',
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            sub="Everything you need to know about how NeuroSEO works. Still curious? Reach out — we reply fast."
          />
          <div className="mx-auto mt-14 max-w-3xl">
            <FaqAccordion items={FAQS} />
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
