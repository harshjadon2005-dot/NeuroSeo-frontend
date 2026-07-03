import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { CheckCircle2, AlertCircle, Clock, Bell, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'System Status — NeuroSEO Platform',
  description: 'Real-time status of NeuroSEO API, Publishing, and Generation services.',
};

const SERVICES = [
  { name: 'API Gateway', status: 'Operational', uptime: '99.99%', latency: '45ms', history: Array.from({length: 90}).map((_, i) => i === 45 ? 'warning' : 'operational') },
  { name: 'AI Generation Pipeline', status: 'Operational', uptime: '99.95%', latency: '1.2s', history: Array.from({length: 90}).map((_, i) => i === 12 ? 'issue' : i === 88 ? 'warning' : 'operational') },
  { name: 'CMS Publishing Engine', status: 'Operational', uptime: '99.99%', latency: '120ms', history: Array.from({length: 90}).map((_, i) => i === 30 ? 'warning' : 'operational') },
  { name: 'DataForSEO Integration', status: 'Operational', uptime: '100%', latency: '85ms', history: Array.from({length: 90}).map(() => 'operational') },
  { name: 'Database & Indexing', status: 'Operational', uptime: '99.99%', latency: '12ms', history: Array.from({length: 90}).map((_, i) => i === 70 ? 'warning' : 'operational') },
  { name: 'Web Dashboard', status: 'Operational', uptime: '100%', latency: '35ms', history: Array.from({length: 90}).map(() => 'operational') },
];

const LOGS = [
  { date: 'Oct 24, 2025', title: 'Scheduled Maintenance: Database Upgrades', status: 'Completed', color: 'emerald', desc: 'No downtime occurred. Database latency improved by 15%.' },
  { date: 'Sep 12, 2025', title: 'Degraded Performance: AI Generation Pipeline', status: 'Resolved', color: 'emerald', desc: 'Upstream provider rate limits caused 10-15s delays in generation. Resolved within 45 minutes.' },
  { date: 'Aug 05, 2025', title: 'System Update: CMS Publishing V2', status: 'Completed', color: 'emerald', desc: 'Rolled out new WordPress integration endpoint.' },
];

export default function StatusPage() {
  return (
    <>
      <section className="relative min-h-screen bg-[#FAFAFA] pb-24 font-sans">
        {/* Background Gradients */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-emerald-500/10 blur-[100px] opacity-70" />
          <div 
            className="absolute inset-0 opacity-[0.02]" 
            style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />
        </div>

        {/* Hero Section */}
        <div className="relative z-10 pt-20 pb-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16">
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#103938] mb-4">
                      System Status
                    </h1>
                    <p className="text-muted-foreground text-lg">
                      Real-time visibility into NeuroSEO's infrastructure and services.
                    </p>
                  </div>
                  <Link 
                    href="/register" 
                    className="flex w-max items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#103938] border border-border/80 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/50"
                  >
                    <Bell className="h-4 w-4" />
                    Subscribe to Updates
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={100}>
                {/* Master Status Banner */}
                <div className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-50 to-white px-8 py-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <div className="relative flex h-6 w-6">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-6 w-6 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-emerald-950">All Systems Operational</h2>
                      <p className="text-sm font-medium text-emerald-700/70">Updated a few seconds ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-800 bg-emerald-100/50 px-4 py-1.5 rounded-full">
                    99.99% Uptime (90 Days)
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                {/* Services List */}
                <div className="mb-16 rounded-[24px] border border-border/80 bg-white shadow-sm overflow-hidden">
                  <div className="grid divide-y divide-border/60">
                    {SERVICES.map((service, i) => (
                      <div key={i} className="p-6 transition-colors hover:bg-gray-50/50">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            {service.status === 'Operational' ? (
                              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-amber-500" />
                            )}
                            <h3 className="text-base font-bold text-foreground">{service.name}</h3>
                            <span className="hidden sm:inline-block ml-2 rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                              {service.status}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-6 mt-2 sm:mt-0">
                            <div className="flex flex-col text-left sm:text-right">
                              <span className="text-[10px] font-bold uppercase text-muted-foreground">Uptime</span>
                              <span className="text-sm font-bold text-foreground">{service.uptime}</span>
                            </div>
                            <div className="flex flex-col text-left sm:text-right">
                              <span className="text-[10px] font-bold uppercase text-muted-foreground">Latency</span>
                              <span className="text-sm font-bold text-foreground">{service.latency}</span>
                            </div>
                          </div>
                        </div>

                        {/* 90 Day Bar Graph */}
                        <div className="mt-4">
                          <div className="flex items-center gap-[2px] h-8 w-full">
                            {service.history.map((dayStatus, idx) => (
                              <div 
                                key={idx} 
                                className={`flex-1 h-full rounded-sm transition-all hover:opacity-80 cursor-crosshair ${
                                  dayStatus === 'operational' ? 'bg-emerald-400' :
                                  dayStatus === 'warning' ? 'bg-amber-400' : 'bg-red-500'
                                }`}
                                title={`${90 - idx} days ago: ${dayStatus}`}
                              />
                            ))}
                          </div>
                          <div className="flex items-center justify-between mt-2 text-[11px] font-medium text-muted-foreground">
                            <span>90 days ago</span>
                            <span className="flex items-center gap-1.5 border-t border-dashed border-border/60 grow mx-4 h-[1px]"></span>
                            <span>Today</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Incidents Timeline */}
              <Reveal delay={300}>
                <div>
                  <h3 className="text-2xl font-black text-foreground mb-8">Past Incidents</h3>
                  <div className="space-y-8 pl-4 sm:pl-0">
                    {LOGS.map((log, i) => (
                      <div key={i} className="relative sm:pl-32">
                        {/* Desktop Date Column */}
                        <div className="hidden sm:block absolute left-0 top-1 text-right w-24">
                          <span className="text-sm font-bold text-muted-foreground">{log.date}</span>
                        </div>
                        
                        {/* Timeline Connector */}
                        <div className="absolute left-[-15px] sm:left-[112px] top-1.5 h-3 w-3 rounded-full bg-border shadow-[0_0_0_4px_white]" />
                        {i !== LOGS.length - 1 && (
                          <div className="absolute left-[-10px] sm:left-[117px] top-4 h-full w-[2px] bg-border/40" />
                        )}
                        
                        <div className="rounded-2xl border border-border/80 bg-white p-6 shadow-sm ml-2 sm:ml-6 hover:shadow-md transition-shadow">
                          {/* Mobile Date */}
                          <div className="sm:hidden mb-3">
                            <span className="text-xs font-bold text-muted-foreground">{log.date}</span>
                          </div>
                          
                          <div className="mb-3 flex flex-wrap items-center gap-3">
                            <h4 className="text-base sm:text-lg font-bold text-foreground">{log.title}</h4>
                            <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                              log.status === 'Resolved' || log.status === 'Completed' 
                                ? 'bg-emerald-100 text-emerald-800' 
                                : 'bg-amber-100 text-amber-800'
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
        </div>
      </section>
    </>
  );
}
