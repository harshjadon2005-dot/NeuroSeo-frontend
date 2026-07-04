import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'Privacy Policy — Seobox Platform',
  description: 'How Seobox collects, uses, and protects your data.',
};

const SECTIONS = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'data-collection', title: '2. Data We Collect' },
  { id: 'how-we-use', title: '3. How We Use Your Data' },
  { id: 'ai-training', title: '4. AI & Model Training' },
  { id: 'data-sharing', title: '5. Data Sharing & Third Parties' },
  { id: 'security', title: '6. Data Security' },
  { id: 'your-rights', title: '7. Your Rights (GDPR/CCPA)' },
  { id: 'contact', title: '8. Contact Us' },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-border bg-muted/30">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Privacy Policy
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
              <div id="introduction" className="scroll-mt-24">
                <Reveal>
                  <h2>1. Introduction</h2>
                  <p>
                    Welcome to Seobox ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@seobox.com.
                  </p>
                  <p>
                    This privacy policy applies to all information collected through our Services (which, as described above, includes our Website), as well as any related services, sales, marketing, or events.
                  </p>
                </Reveal>
              </div>

              <div id="data-collection" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>2. Data We Collect</h2>
                  <p>
                    We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.
                  </p>
                  <ul>
                    <li><strong>Account Information:</strong> Name, email address, password, billing information.</li>
                    <li><strong>Usage Data:</strong> How you interact with our application, which features you use, and generation volumes.</li>
                    <li><strong>Integration Data:</strong> CMS API keys, Google Search Console Oauth tokens (stored encrypted).</li>
                  </ul>
                </Reveal>
              </div>

              <div id="how-we-use" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>3. How We Use Your Data</h2>
                  <p>
                    We use personal information collected via our Website for a variety of business purposes described below:
                  </p>
                  <ul>
                    <li>To facilitate account creation and logon process.</li>
                    <li>To fulfill and manage your orders and subscription.</li>
                    <li>To deliver and facilitate delivery of services to the user.</li>
                    <li>To respond to user inquiries/offer support to users.</li>
                  </ul>
                </Reveal>
              </div>

              <div id="ai-training" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>4. AI & Model Training</h2>
                  <p>
                    <strong>We do not use your proprietary data to train our foundational models.</strong>
                  </p>
                  <p>
                    Any content you generate, seed keywords you research, or drafts you publish through Seobox remain strictly confidential. If you opt-in to custom fine-tuning (Enterprise tier), that model is isolated entirely to your workspace and is never shared.
                  </p>
                </Reveal>
              </div>

              <div id="third-parties" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>5. Data Sharing & Third Parties</h2>
                  <p>
                    We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
                  </p>
                  <p>Examples include:</p>
                  <ul>
                    <li><strong>Payment Processors:</strong> For secure handling of billing information (e.g., Stripe).</li>
                    <li><strong>Cloud Hosting:</strong> To securely store your content and app data (e.g., AWS, Vercel).</li>
                    <li><strong>LLM Providers:</strong> Content sent for analysis or generation is passed securely via API. No personal data is used to train these external models.</li>
                  </ul>
                </Reveal>
              </div>

              <div id="security" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>6. Data Security</h2>
                  <p>
                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                  </p>
                  <p>
                    All sensitive information, such as your CMS API keys and Oauth tokens, are encrypted at rest using AES-256 encryption.
                  </p>
                </Reveal>
              </div>

              <div id="rights" className="scroll-mt-24 mt-12">
                <Reveal>
                  <h2>7. Your Rights (GDPR/CCPA)</h2>
                  <p>
                    Depending on your location, you may have the following rights regarding your personal data:
                  </p>
                  <ul>
                    <li>The right to request access and obtain a copy of your personal information.</li>
                    <li>The right to request rectification or erasure of your data.</li>
                    <li>The right to restrict the processing of your personal information.</li>
                    <li>If applicable, the right to data portability.</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact our Data Protection Officer using the contact details provided in Section 8.
                  </p>
                </Reveal>
              </div>

              <div id="contact" className="scroll-mt-24 mt-12 border-t border-border pt-12">
                <Reveal>
                  <h2>8. Contact Us</h2>
                  <p>
                    If you have questions or comments about this notice, you may email us at:
                  </p>
                  <p>
                    <strong>Seobox Inc.</strong><br />
                    Data Protection Officer<br />
                    privacy@seobox.com
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
