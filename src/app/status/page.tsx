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
    <div className="relative min-h-screen bg-[#FAFAFA] text-foreground overflow-hidden font-sans pb-32">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-300/10 blur-[120px]" />
        {/* Subtle dot matrix pattern */}
        <div 
          className="absolute inset-0 opacity-[0.2]" 
          style={{ backgroundImage: 'radial-gradient(#103938 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />
        {/* Light vignette to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#FAFAFA_80%)]" />
      </div>

      <Container className="relative z-10 pt-32">
        {/* Header Section */}
        <Reveal>
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live Telemetry
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#103938] mb-6">
              Network Status
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Real-time monitoring of all autonomous AI agents and publishing nodes in the Seobox ecosystem.
            </p>

            <Link 
              href="#newsletter" 
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#103938] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:-translate-y-1"
            >
              <Bell className="h-4 w-4" />
              Subscribe to Alerts
            </Link>
          </div>
        </Reveal>

        {/* Master Status Card - Floating Orb Style */}
        <Reveal delay={100}>
          <div className="mx-auto max-w-3xl mb-24 relative group">
            {/* Massive glowing aura behind the main status */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between bg-white border border-border/80 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl">
              <div className="flex items-center gap-8 mb-6 md:mb-0">
                <div className="relative flex items-center justify-center h-24 w-24 rounded-full bg-emerald-50 border border-emerald-500/20 shadow-sm">
                  <div className="absolute inset-0 rounded-full border-t-2 border-emerald-400 animate-spin" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute inset-2 rounded-full border-b-2 border-teal-400 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
                  <Zap className="h-10 w-10 text-emerald-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-foreground mb-2 tracking-tight">All Systems Nominal</h2>
                  <p className="text-muted-foreground font-medium flex items-center gap-2">
                    <Activity className="h-4 w-4 text-emerald-500" /> Global nodes are operating at 100% capacity
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-4xl font-black text-emerald-600 mb-1">
                  99.99%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
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
              <div key={i} className="group relative rounded-3xl bg-white border border-border/60 p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-xl overflow-hidden">
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-500/20 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${
                    service.status === 'Operational' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    {service.status}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#103938] mb-6 relative z-10">{service.name}</h3>

                <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                  <div className="bg-muted/40 rounded-xl p-4 border border-border/40">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Uptime</div>
                    <div className="text-lg font-bold text-foreground">{service.uptime}</div>
                  </div>
                  <div className="bg-muted/40 rounded-xl p-4 border border-border/40">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Latency</div>
                    <div className="text-lg font-bold text-foreground">{service.latency}</div>
                  </div>
                </div>

                {/* 30-Day History Graph */}
                <div className="relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 flex justify-between">
                    <span>30 Days</span>
                    <span>Today</span>
                  </div>
                  <div className="flex items-end gap-[4px] h-12 w-full">
                    {service.history.map((dayStatus, idx) => (
                      <div 
                        key={idx} 
                        className={`flex-1 rounded-full transition-all duration-300 cursor-crosshair group-hover:opacity-100 opacity-70 hover:!opacity-100 hover:scale-y-125 ${
                          dayStatus === 'operational' ? 'bg-emerald-400 h-full' :
                          dayStatus === 'warning' ? 'bg-amber-400 h-[70%]' : 
                          'bg-red-500 h-[40%]'
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
