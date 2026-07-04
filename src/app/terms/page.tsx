import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'Terms of Service — Seobox Platform',
  description: 'Terms and conditions for using the Seobox platform.',
};

const SECTIONS = [
  { id: 'agreement', title: '1. Agreement to Terms' },
  { id: 'ip', title: '2. Intellectual Property' },
  { id: 'user-reps', title: '3. User Representations' },
  { id: 'prohibited', title: '4. Prohibited Activities' },
  { id: 'fees', title: '5. Fees and Payment' },
  { id: 'cancellation', title: '6. Cancellation' },
  { id: 'modifications', title: '7. Modifications' },
  { id: 'contact', title: '8. Contact Us' },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-border bg-muted/30">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Terms of Service
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Last updated: October 24, 2025
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 relative">
            
            {/* Sticky Table of Contents */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">
              <div className="sticky top-24 space-y-1 rounded-2xl border border-border bg-muted/30 p-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  Contents
                </h4>
                {SECTIONS.map((sec) => (
                  <a 
                    key={sec.id} 
                    href={`#${sec.id}`}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white hover:text-foreground hover:shadow-sm"
                  >
                    {sec.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-3xl prose prose-slate prose-headings:font-bold prose-headings:text-foreground prose-a:text-emerald-600 prose-a:font-semibold">
              <div id="agreement" className="scroll-mt-24">
                <Reveal>
                  <h2>1. Agreement to Terms</h2>
                  <p>
                    These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Seobox ("Company", "we", "us", or "our"), concerning your access to and use of the seobox.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                  </p>
                  <p>
                    You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                  </p>
                </Reveal>
              </div>

              <div id="ip" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>2. Intellectual Property Rights</h2>
                  <p>
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
                  </p>
                  <p>
                    <strong>Ownership of Generated Content:</strong> You retain full ownership, copyright, and intellectual property rights to all articles, blog posts, and text generated using the Seobox platform through your paid subscription.
                  </p>
                </Reveal>
              </div>

              <div id="user-reps" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>3. User Representations</h2>
                  <p>By using the Site, you represent and warrant that:</p>
                  <ul>
                    <li>All registration information you submit will be true, accurate, current, and complete.</li>
                    <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                    <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                    <li>You are not a minor in the jurisdiction in which you reside.</li>
                  </ul>
                </Reveal>
              </div>

              <div id="prohibited" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>4. Prohibited Activities</h2>
                  <p>
                    You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                  </p>
                  <p>As a user of the Site, you agree not to:</p>
                  <ul>
                    <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                    <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                    <li>Use the platform to generate illegal, harmful, or explicitly deceptive content designed to misinform the public (e.g. fake news, deepfakes, phishing material).</li>
                    <li>Attempt to reverse engineer the AI generation pipeline or extractability scoring algorithms.</li>
                  </ul>
                </Reveal>
              </div>

              <div id="fees" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>5. Fees and Payment</h2>
                  <p>
                    You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
                  </p>
                </Reveal>
              </div>

              <div id="cancellation" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>6. Cancellation</h2>
                  <p>
                    You can cancel your subscription at any time by logging into your account or contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term.
                  </p>
                  <p>
                    If you are unsatisfied with our services, please email us at support@seobox.com. Refunds are handled on a case-by-case basis according to our refund policy.
                  </p>
                </Reveal>
              </div>

              <div id="modifications" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>7. Modifications</h2>
                  <p>
                    We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site.
                  </p>
                  <p>
                    We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site or services.
                  </p>
                </Reveal>
              </div>

              <div id="contact" className="scroll-mt-24 mt-12 border-t border-border pt-12">
                <Reveal>
                  <h2>8. Contact Us</h2>
                  <p>
                    In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                  </p>
                  <p>
                    <strong>Seobox Inc.</strong><br />
                    Legal Department<br />
                    legal@seobox.com
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
