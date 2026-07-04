import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { Activity, Bell, Terminal, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'System Status — Seobox Platform',
  description: 'Real-time status of Seobox API, Publishing, and Generation services.',
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
      <section className="relative min-h-screen bg-[#021110] text-emerald-50 pb-24 font-sans selection:bg-emerald-500/30">
        {/* Futuristic Grid & Glowing Orbs Background */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-[800px] h-[600px] rounded-[100%] bg-emerald-600/10 blur-[120px] opacity-100" />
          <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-[100%] bg-teal-500/5 blur-[150px]" />
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />
          {/* Fading bottom shadow to blend with grid */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#021110] via-transparent to-[#021110]/50" />
        </div>

        {/* Hero Section */}
        <div className="relative z-10 pt-24 pb-16">
          <Container>
            <div className="mx-auto max-w-5xl">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                      <Activity className="h-4 w-4" />
                      <span>Live Infrastructure Feed</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
                      System Status
                    </h1>
                    <p className="text-emerald-50/60 text-lg sm:text-xl max-w-2xl">
                      Real-time telemetry and visibility into Seobox's autonomous nodes and API services.
                    </p>
                  </div>
                  <Link 
                    href="/register" 
                    className="flex w-max items-center gap-2 rounded-full bg-emerald-500/10 px-6 py-3 text-sm font-bold text-emerald-400 border border-emerald-500/20 backdrop-blur-md shadow-lg transition-all hover:bg-emerald-500 hover:text-white hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  >
                    <Bell className="h-4 w-4" />
                    Subscribe to Updates
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={100}>
                {/* Master Status Banner */}
                <div className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-[24px] border border-emerald-500/20 bg-[#061f1d]/80 backdrop-blur-xl px-8 py-8 shadow-2xl relative overflow-hidden group">
                  {/* Glass highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="flex items-center gap-6 mb-6 sm:mb-0 relative z-10">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-20"></span>
                      <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">All Systems Operational</h2>
                      <p className="text-sm font-medium text-emerald-50/50 flex items-center gap-2">
                        <Server className="h-3.5 w-3.5" /> Synchronized a few seconds ago
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center gap-2 text-sm font-bold text-emerald-300 bg-emerald-950/50 border border-emerald-500/20 px-5 py-2.5 rounded-full shadow-inner">
                    99.99% Uptime (90 Days)
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                {/* Services List */}
                <div className="mb-24 rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                  <div className="grid divide-y divide-white/5">
                    {SERVICES.map((service, i) => (
                      <div key={i} className="p-8 transition-colors hover:bg-white/[0.02] relative group">
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 relative z-10">
                          <div className="flex items-center gap-4 mb-4 md:mb-0">
                            {/* Animated Pulse indicator */}
                            <div className="relative flex h-3 w-3">
                              {service.status === 'Operational' ? (
                                <>
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40"></span>
                                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                                </>
                              ) : (
                                <>
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-40"></span>
                                  <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
                                </>
                              )}
                            </div>
                            
                            <h3 className="text-lg font-bold text-white tracking-wide">{service.name}</h3>
                            <span className={`hidden sm:inline-block ml-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${
                              service.status === 'Operational' 
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            }`}>
                              {service.status}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-8 bg-black/20 rounded-xl px-5 py-3 border border-white/5">
                            <div className="flex flex-col text-left">
                              <span className="text-[10px] font-bold uppercase text-emerald-50/40 tracking-widest mb-1">Uptime</span>
                              <span className="text-sm font-bold text-emerald-50">{service.uptime}</span>
                            </div>
                            <div className="h-6 w-px bg-white/10" />
                            <div className="flex flex-col text-left">
                              <span className="text-[10px] font-bold uppercase text-emerald-50/40 tracking-widest mb-1">Latency</span>
                              <span className="text-sm font-bold text-emerald-50">{service.latency}</span>
                            </div>
                          </div>
                        </div>

                        {/* Neon History Equalizer */}
                        <div className="mt-6 relative z-10">
                          <div className="flex items-end gap-[3px] h-10 w-full group-hover:gap-[4px] transition-all duration-300">
                            {service.history.map((dayStatus, idx) => (
                              <div 
                                key={idx} 
                                className={`flex-1 rounded-[1px] transition-all duration-300 cursor-crosshair hover:scale-y-150 hover:brightness-150 ${
                                  dayStatus === 'operational' ? 'bg-emerald-500/40 hover:bg-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.8)] h-[60%] hover:h-full' :
                                  dayStatus === 'warning' ? 'bg-amber-500/80 hover:bg-amber-400 hover:shadow-[0_0_12px_rgba(251,191,36,0.8)] h-[80%] hover:h-full' : 
                                  'bg-red-500/80 hover:bg-red-400 hover:shadow-[0_0_12px_rgba(239,68,68,0.8)] h-[40%] hover:h-full'
                                }`}
                                title={`${90 - idx} days ago: ${dayStatus}`}
                              />
                            ))}
                          </div>
                          <div className="flex items-center justify-between mt-4 text-[10px] font-bold uppercase tracking-widest text-emerald-50/40">
                            <span>90 days ago</span>
                            <span className="flex items-center border-t border-dashed border-white/10 grow mx-6 h-[1px]"></span>
                            <span>Today</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Terminal-Style Incidents Timeline */}
              <Reveal delay={300}>
                <div>
                  <div className="flex items-center gap-3 mb-10">
                    <Terminal className="h-6 w-6 text-emerald-500" />
                    <h3 className="text-2xl font-black text-white tracking-tight">Incident Log</h3>
                  </div>
                  
                  <div className="relative space-y-0 pl-6 sm:pl-0 before:absolute before:inset-y-0 before:left-6 sm:before:left-[120px] before:w-[2px] before:bg-gradient-to-b before:from-emerald-500/50 before:via-emerald-500/10 before:to-transparent">
                    {LOGS.map((log, i) => (
                      <div key={i} className="relative sm:pl-48 py-8 group">
                        {/* Glowing node on the timeline */}
                        <div className="absolute left-[19px] sm:left-[115px] top-10 h-3 w-3 rounded-full bg-[#021110] border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-150 group-hover:bg-emerald-500 transition-all z-10" />
                        
                        {/* Terminal Date Column */}
                        <div className="hidden sm:block absolute left-0 top-9 w-24 text-right">
                          <span className="text-xs font-mono font-bold text-emerald-500/70">{log.date}</span>
                        </div>

                        {/* Content Card */}
                        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md transition-all hover:bg-white/[0.04] hover:border-emerald-500/20">
                          <div className="sm:hidden mb-3">
                            <span className="text-xs font-mono font-bold text-emerald-500/70">{log.date}</span>
                          </div>
                          
                          <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{log.title}</h4>
                          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest ${
                            log.status === 'Completed' || log.status === 'Resolved' ? 'text-emerald-400' : 'text-amber-400'
                          }`}>
                            [{log.status}]
                          </span>
                          
                          <p className="text-emerald-50/60 leading-relaxed font-medium">
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
