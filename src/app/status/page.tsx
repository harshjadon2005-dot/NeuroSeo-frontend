import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { Activity, Bell, Server, Cpu, Network, Database, Globe, Layers, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'System Status — Seobox Platform',
  description: 'Real-time status of Seobox API, Publishing, and Generation services.',
};

const SERVICES = [
  { name: 'API Gateway', icon: Network, status: 'Operational', uptime: '99.99%', latency: '45ms', history: Array.from({length: 30}).map((_, i) => i === 12 ? 'warning' : 'operational') },
  { name: 'AI Generation Pipeline', icon: Cpu, status: 'Operational', uptime: '99.95%', latency: '1.2s', history: Array.from({length: 30}).map((_, i) => i === 5 ? 'issue' : i === 25 ? 'warning' : 'operational') },
  { name: 'CMS Publishing Engine', icon: Layers, status: 'Operational', uptime: '99.99%', latency: '120ms', history: Array.from({length: 30}).map((_, i) => i === 18 ? 'warning' : 'operational') },
  { name: 'DataForSEO Integration', icon: Globe, status: 'Operational', uptime: '100%', latency: '85ms', history: Array.from({length: 30}).map(() => 'operational') },
  { name: 'Database & Indexing', icon: Database, status: 'Operational', uptime: '99.99%', latency: '12ms', history: Array.from({length: 30}).map((_, i) => i === 22 ? 'warning' : 'operational') },
  { name: 'Web Dashboard', icon: Server, status: 'Operational', uptime: '100%', latency: '35ms', history: Array.from({length: 30}).map(() => 'operational') },
];

export default function StatusPage() {
  return (
    <div className="relative min-h-screen bg-[#050f0e] text-white overflow-hidden font-sans pb-32">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/10 blur-[120px]" />
        {/* Subtle dot matrix pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ backgroundImage: 'radial-gradient(#14b8a6 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />
        {/* Dark vignette to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050f0e_80%)]" />
      </div>

      <Container className="relative z-10 pt-32">
        {/* Header Section */}
        <Reveal>
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live Telemetry
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
              Network Status
            </h1>
            <p className="text-emerald-50/50 text-lg max-w-xl mx-auto mb-10">
              Real-time monitoring of all autonomous AI agents and publishing nodes in the Seobox ecosystem.
            </p>

            <Link 
              href="/register" 
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#050f0e] transition-all hover:bg-emerald-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
            >
              <Bell className="h-4 w-4" />
              Subscribe to Alerts
            </Link>
          </div>
        </Reveal>

        {/* Master Status Card - Floating 3D Orb Style */}
        <Reveal delay={100}>
          <div className="mx-auto max-w-3xl mb-24 relative group">
            {/* Massive glowing aura behind the main status */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between bg-[#081816]/90 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl">
              <div className="flex items-center gap-8 mb-6 md:mb-0">
                <div className="relative flex items-center justify-center h-24 w-24 rounded-full bg-emerald-950 border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                  <div className="absolute inset-0 rounded-full border-t border-emerald-400 animate-spin" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute inset-2 rounded-full border-b border-teal-400 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
                  <Zap className="h-10 w-10 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-2 tracking-tight">All Systems Nominal</h2>
                  <p className="text-emerald-50/50 font-medium flex items-center gap-2">
                    <Activity className="h-4 w-4" /> Global nodes are operating at 100% capacity
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-4xl font-black text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)] mb-1">
                  99.99%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-50/40">
                  90-Day Uptime
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Service Grid - 3D Node Cards */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <div key={i} className="group relative rounded-3xl bg-[#091b19]/80 border border-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30 hover:bg-[#0c2421] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.15)] overflow-hidden">
                {/* Node glowing background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${
                    service.status === 'Operational' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {service.status}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 relative z-10">{service.name}</h3>

                <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-50/40 mb-1">Uptime</div>
                    <div className="text-lg font-bold text-white">{service.uptime}</div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-50/40 mb-1">Latency</div>
                    <div className="text-lg font-bold text-white">{service.latency}</div>
                  </div>
                </div>

                {/* 30-Day Glowing History Graph */}
                <div className="relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-50/40 mb-3 flex justify-between">
                    <span>30 Days</span>
                    <span>Today</span>
                  </div>
                  <div className="flex items-end gap-[4px] h-12 w-full">
                    {service.history.map((dayStatus, idx) => (
                      <div 
                        key={idx} 
                        className={`flex-1 rounded-full transition-all duration-300 cursor-crosshair group-hover:opacity-100 opacity-60 hover:!opacity-100 hover:scale-y-125 ${
                          dayStatus === 'operational' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)] h-full' :
                          dayStatus === 'warning' ? 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)] h-[70%]' : 
                          'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] h-[40%]'
                        }`}
                        title={`${30 - idx} days ago: ${dayStatus}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
