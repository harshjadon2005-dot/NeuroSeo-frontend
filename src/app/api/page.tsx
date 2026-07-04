import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { ResourceCta } from '@/components/resource-cta';
import { Code2, Key, Globe, Terminal, Box, Database, Webhook } from 'lucide-react';

export const metadata: Metadata = {
  title: 'API Reference — Seobox Platform',
  description: 'Integrate Seobox into your custom stack with our developer API.',
};

const ENDPOINTS = [
  {
    method: 'POST',
    path: '/v1/generate',
    title: 'Generate Article',
    desc: 'Initiate a new content generation pipeline for a given keyword or topic.',
    req: `curl -X POST https://api.seobox.com/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "keyword": "AI in marketing",
    "tone": "professional",
    "word_count": 1500
  }'`,
    res: `{
  "status": "success",
  "data": {
    "job_id": "gen_8x92nd",
    "status": "processing",
    "estimated_completion": "45s"
  }
}`,
  },
  {
    method: 'GET',
    path: '/v1/keywords',
    title: 'Keyword Research',
    desc: 'Fetch search volume, difficulty, and intent clustering for a seed keyword.',
    req: `curl -X GET https://api.seobox.com/v1/keywords?seed=saas+marketing \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
    res: `{
  "status": "success",
  "data": [
    {
      "keyword": "b2b saas marketing",
      "volume": 2400,
      "difficulty": 68,
      "intent": "informational"
    }
  ]
}`,
  },
  {
    method: 'POST',
    path: '/v1/publish',
    title: 'Publish to CMS',
    desc: 'Push an approved article draft directly to your configured CMS integration.',
    req: `curl -X POST https://api.seobox.com/v1/publish \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "article_id": "art_99mx3",
    "integration_id": "int_wp_22"
  }'`,
    res: `{
  "status": "success",
  "data": {
    "publish_id": "pub_7781k",
    "url": "https://yourblog.com/ai-marketing",
    "status": "live"
  }
}`,
  },
];

export default function ApiPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-6">
                <Code2 className="h-4 w-4" /> Developer API v1
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Build custom SEO workflows
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg leading-relaxed text-white/60">
                A powerful, RESTful API that lets you generate, analyze, and publish content programmatically.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <button className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105">
                  Generate API Key
                </button>
                <button className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
                  View OpenAPI Spec
                </button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#0a0a0a] text-white border-t border-white/10">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar */}
            <div className="w-full lg:w-64 shrink-0">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4 px-3">Getting Started</h4>
                  <div className="space-y-1">
                    <button className="flex w-full items-center gap-3 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white">
                      <Key className="h-4 w-4 text-emerald-400" /> Authentication
                    </button>
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                      <Globe className="h-4 w-4" /> Base URL
                    </button>
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                      <Terminal className="h-4 w-4" /> Errors & Limits
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4 px-3">Endpoints</h4>
                  <div className="space-y-1">
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                      <Box className="h-4 w-4" /> Generate
                    </button>
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                      <Database className="h-4 w-4" /> Keywords
                    </button>
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                      <Webhook className="h-4 w-4" /> Webhooks
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-24">
              {ENDPOINTS.map((endpoint, i) => (
                <Reveal key={i} delay={100}>
                  <div className="border-b border-white/10 pb-24 last:border-0 last:pb-0">
                    <div className="mb-6 flex items-center gap-4">
                      <span className={`rounded px-2 py-1 text-xs font-bold uppercase tracking-wider ${
                        endpoint.method === 'POST' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-white/80">{endpoint.path}</code>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{endpoint.title}</h3>
                    <p className="text-white/60 mb-8 leading-relaxed max-w-2xl">{endpoint.desc}</p>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-bold text-white/80 mb-3">Example Request</h4>
                        <div className="rounded-xl bg-[#1a1a1a] border border-white/10 overflow-hidden">
                          <div className="flex items-center px-4 py-2 border-b border-white/10 bg-black/20">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            </div>
                            <span className="ml-4 text-xs font-mono text-white/40">bash</span>
                          </div>
                          <pre className="p-4 text-xs font-mono text-white/80 overflow-x-auto whitespace-pre">
                            {endpoint.req}
                          </pre>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold text-white/80 mb-3">Example Response</h4>
                        <div className="rounded-xl bg-[#1a1a1a] border border-white/10 overflow-hidden">
                          <div className="flex items-center px-4 py-2 border-b border-white/10 bg-black/20">
                            <span className="text-xs font-mono text-white/40">json</span>
                          </div>
                          <pre className="p-4 text-xs font-mono text-emerald-400/90 overflow-x-auto whitespace-pre">
                            {endpoint.res}
                          </pre>
                        </div>
                      </div>
                    </div>
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
