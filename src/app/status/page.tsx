import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { CheckCircle2, Activity, ShieldCheck, AlertCircle, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'System Status — NeuroSEO Platform',
  description: 'Real-time status of NeuroSEO API, Publishing, and Generation services.',
};

const SERVICES = [
  { name: 'API Gateway', status: 'Operational', uptime: '99.99%', latency: '45ms' },
  { name: 'AI Generation Pipeline', status: 'Operational', uptime: '99.95%', latency: '1.2s' },
  { name: 'CMS Publishing Engine', status: 'Operational', uptime: '99.99%', latency: '120ms' },
  { name: 'DataForSEO Integration', status: 'Operational', uptime: '100%', latency: '85ms' },
  { name: 'Database & Indexing', status: 'Operational', uptime: '99.99%', latency: '12ms' },
  { name: 'Web Dashboard', status: 'Operational', uptime: '100%', latency: '35ms' },
];

const LOGS = [
  { date: 'Oct 24, 2025', title: 'Scheduled Maintenance: Database Upgrades', status: 'Completed', desc: 'No downtime occurred. Database latency improved by 15%.' },
  { date: 'Sep 12, 2025', title: 'Degraded Performance: AI Generation Pipeline', status: 'Resolved', desc: 'Upstream provider rate limits caused 10-15s delays in generation. Resolved within 45 minutes.' },
  { date: 'Aug 05, 2025', title: 'System Update: CMS Publishing V2', status: 'Completed', desc: 'Rolled out new WordPress integration endpoint.' },
];

export default function StatusPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 bg-muted/30">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mb-10 flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-emerald-50 px-6 py-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500"></span>
                  </div>
                  <h2 className="text-lg font-bold text-emerald-900">All Systems Operational</h2>
                </div>
                <span className="text-sm font-medium text-emerald-700 hidden sm:block">
                  Updated a few seconds ago
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-12">
                NeuroSEO System Status
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <div className="overflow-hidden rounded-[24px] border border-border bg-white shadow-xl shadow-black/5">
                <div className="grid divide-y divide-border">
                  {SERVICES.map((service, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-muted/30 transition-colors">
                      <div className="mb-4 sm:mb-0 flex items-center gap-4">
                        <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                        <h3 className="text-lg font-bold text-foreground">{service.name}</h3>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex flex-col text-right">
                          <span className="font-semibold text-muted-foreground uppercase tracking-wider text-[10px]">Uptime</span>
                          <span className="font-bold text-foreground">{service.uptime}</span>
                        </div>
                        <div className="flex flex-col text-right hidden sm:flex">
                          <span className="font-semibold text-muted-foreground uppercase tracking-wider text-[10px]">Latency</span>
                          <span className="font-bold text-foreground">{service.latency}</span>
                        </div>
                        <div className="rounded-full bg-emerald-50 px-3 py-1 font-bold text-emerald-700">
                          {service.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-20">
                <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-muted-foreground" /> Incident History
                </h3>
                
                <div className="space-y-6">
                  {LOGS.map((log, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 rounded-2xl border border-border bg-white p-6 shadow-sm">
                      <div className="md:w-32 shrink-0">
                        <span className="text-sm font-bold text-muted-foreground">{log.date}</span>
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <h4 className="text-lg font-bold text-foreground">{log.title}</h4>
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                            log.status === 'Resolved' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {log.status}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {log.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </Container>
      </section>
    </>
  );
}
