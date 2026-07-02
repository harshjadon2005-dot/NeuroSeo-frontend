import React from 'react';
import { 
  Search, 
  Info, 
  ShoppingCart, 
  Heading1, 
  Heading2, 
  Check, 
  Bot, 
  Sparkles, 
  Network, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight, 
  FileText, 
  Globe,
  ScanFace,
  BarChart3, 
  TrendingUp, 
  Users,
  Filter,
  CheckCircle,
  RefreshCcw,
  CheckSquare
} from 'lucide-react';

export function AiResearchMockup() {
  return (
    <div className="absolute top-8 left-8 right-[-20px] bottom-[-20px] rounded-tl-2xl border border-border/80 bg-white p-6 shadow-[0_20px_50px_rgba(16,57,56,0.1)] overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border/50 pb-5">
        <Search className="h-4 w-4 text-muted-foreground" />
        <div className="flex-1 text-sm font-medium text-foreground">b2b saas marketing</div>
        <div className="flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-[10px] font-semibold text-muted-foreground">
          <Filter className="h-3 w-3" /> US
        </div>
      </div>
      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          <span>Keyword Cluster</span>
          <span>Vol / KD</span>
        </div>
        {[
          { kw: 'b2b saas marketing strategy', intent: 'info', icon: Info, vol: '12.4k', kd: 68 },
          { kw: 'saas marketing agencies', intent: 'trans', icon: ShoppingCart, vol: '8.1k', kd: 82 },
          { kw: 'b2b marketing automation', intent: 'info', icon: Info, vol: '22k', kd: 74 },
          { kw: 'saas content marketing', intent: 'info', icon: Info, vol: '18k', kd: 71 },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-3">
              <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${item.intent === 'trans' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                <item.icon className="h-3.5 w-3.5" />
              </div>
              <span className="text-[13px] font-semibold text-foreground truncate">{item.kw}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-medium text-muted-foreground">{item.vol}</span>
              <div className="flex items-center gap-1.5 hidden sm:flex">
                <div className="h-1.5 w-12 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-[#103938]" style={{ width: `${item.kd}%` }} />
                </div>
                <span className="w-5 text-right text-[10px] font-bold text-foreground">{item.kd}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AiWritingMockup() {
  return (
    <>
      <div className="absolute top-10 left-10 right-10 bottom-[-30px] flex overflow-hidden rounded-t-2xl border border-border/80 bg-white shadow-[0_20px_50px_rgba(16,57,56,0.1)]">
        {/* Outline Sidebar */}
        <div className="w-1/3 border-r border-border/50 bg-[#FAFAFA] p-5 hidden sm:block">
          <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            <AlignLeftIcon className="h-3 w-3" /> Outline
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-600">
              <Heading1 className="h-4 w-4" />
              <span className="text-[12px] font-bold truncate">Ultimate Guide to B2B</span>
            </div>
            <div className="flex flex-col gap-3 pl-3 border-l-2 border-emerald-500/20 ml-2">
              <div className="flex items-center gap-2 text-foreground/80">
                <Heading2 className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-[11px] font-medium truncate">Why it matters</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Heading2 className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-[11px] font-medium truncate">Core Strategies</span>
              </div>
            </div>
          </div>
        </div>
        {/* Editor Area */}
        <div className="flex-1 p-8 relative">
          <div className="mt-4 space-y-5">
            <div className="h-6 w-3/4 rounded-md bg-muted/80" />
            <div className="space-y-2.5">
              <div className="h-2 w-full rounded bg-muted/40" />
              <div className="h-2 w-full rounded bg-muted/40" />
              <div className="h-2 w-5/6 rounded bg-muted/40" />
            </div>
            <div className="h-4 w-1/2 rounded-md bg-muted/60 mt-8" />
            <div className="space-y-2.5">
              <div className="h-2 w-full rounded bg-muted/40" />
              <div className="h-2 w-4/5 rounded bg-muted/40" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AlignLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" x2="21" y1="6" y2="6"/>
      <line x1="3" x2="15" y1="12" y2="12"/>
      <line x1="3" x2="17" y1="18" y2="18"/>
    </svg>
  )
}

export function GeoTrackingMockup() {
  return (
    <>
      <div className="absolute top-10 left-12 right-[-20px] bottom-[-20px] rounded-tl-2xl border border-border/80 bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(16,57,56,0.1)]">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">AI Answer Engines</h4>
            <p className="text-[11px] text-muted-foreground mt-0.5">Live citation tracking</p>
          </div>
        </div>
        
        <div className="space-y-6">
          {[
            { name: 'ChatGPT', icon: Bot, score: 92, trend: '+12%', color: 'bg-emerald-500' },
            { name: 'Perplexity', icon: Network, score: 85, trend: '+8%', color: 'bg-[#103938]' },
            { name: 'Google AI', icon: Search, score: 76, trend: '+4%', color: 'bg-emerald-400' },
          ].map((engine, i) => (
            <div key={i} className="space-y-2.5">
              <div className="flex items-center justify-between text-[13px] font-semibold text-foreground">
                <div className="flex items-center gap-2">
                  <engine.icon className="h-4 w-4 text-muted-foreground" />
                  {engine.name}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-500 text-[11px] font-bold">{engine.trend}</span>
                  <span className="w-8 text-right">{engine.score}%</span>
                </div>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className={`h-full rounded-full ${engine.color}`} style={{ width: `${engine.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function SeoOptimizationMockup() {
  return (
    <>
      <div className="absolute top-10 left-[-20px] right-12 bottom-[-20px] rounded-tr-2xl border border-border/80 bg-white p-8 shadow-[0_20px_50px_rgba(16,57,56,0.1)]">
        <div className="flex items-center justify-between border-b border-border/50 pb-6">
          <div>
            <h4 className="text-lg font-bold text-foreground">On-Page SEO</h4>
            <p className="text-[12px] font-medium text-muted-foreground mt-1">Real-time analysis</p>
          </div>
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-emerald-500 bg-emerald-50/50">
            <span className="text-xl font-black text-emerald-600">94</span>
          </div>
        </div>
        
        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-border/50 bg-[#FAFAFA] p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-[13px] font-bold text-foreground">
                <CheckSquare className="h-4 w-4 text-emerald-500" /> TF-IDF & LSI
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">Perfect</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['semantic search', 'b2b sales', 'lead gen', 'intent'].map((tag, i) => (
                <span key={i} className="rounded-md border border-border bg-white px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="rounded-xl border border-border/50 bg-[#FAFAFA] p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-[13px] font-bold text-foreground">
                <CheckSquare className="h-4 w-4 text-emerald-500" /> Internal Linking
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground">5 relevant links to pillar pages detected.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function CmsPublishingMockup() {
  return (
    <>
      <div className="absolute top-8 left-12 right-[-20px] bottom-[-20px] flex overflow-hidden rounded-tl-2xl border border-border/80 bg-white shadow-[0_20px_50px_rgba(16,57,56,0.1)]">
        {/* Integrations List */}
        <div className="w-[140px] border-r border-border/50 bg-[#FAFAFA] p-5 hidden sm:block">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Destinations</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold text-foreground">WordPress</span>
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold text-foreground">Webflow</span>
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center justify-between opacity-50">
              <span className="text-[12px] font-semibold text-foreground">Ghost</span>
              <div className="h-2 w-2 rounded-full bg-muted-foreground" />
            </div>
          </div>
        </div>
        
        {/* Pipeline Area */}
        <div className="flex-1 p-6 sm:p-8 bg-white relative">
          <div className="mb-6 flex items-center justify-between">
            <h4 className="text-[13px] font-bold text-foreground">Publishing Queue</h4>
            <RefreshCcw className="h-4 w-4 text-muted-foreground animate-spin-slow" />
          </div>
          
          <div className="space-y-4">
            {/* Active Sync */}
            <div className="rounded-xl border-2 border-emerald-500/20 bg-emerald-50/30 p-4 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Syncing to Webflow</span>
                <Globe className="h-4 w-4 text-emerald-500" />
              </div>
              <div className="text-[13px] font-bold text-foreground mb-3">Ultimate Guide to B2B SaaS...</div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-emerald-100">
                <div className="h-full w-2/3 rounded-full bg-emerald-500" />
              </div>
            </div>
            
            {/* Queued */}
            <div className="rounded-xl border border-border/50 bg-[#FAFAFA] p-4 opacity-70">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Scheduled • Tomorrow</span>
              </div>
              <div className="text-[13px] font-bold text-foreground mb-2">How AI is changing SEO...</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function AiDetectionMockup() {
  return (
    <>
      <div className="absolute top-10 left-10 right-[-10px] bottom-10 rounded-l-2xl border border-border/80 bg-white p-6 shadow-[0_20px_50px_rgba(16,57,56,0.1)]">
        <div className="mb-5 flex items-center justify-between">
          <h4 className="text-[13px] font-bold text-foreground">Originality Scan</h4>
          <ScanFace className="h-4 w-4 text-muted-foreground" />
        </div>
        
        <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
          <p className="text-[12px] leading-relaxed text-foreground/80">
            <span className="bg-emerald-200/40 text-[#103938] font-semibold rounded px-0.5">The rapid evolution of search algorithms</span> means that content creators must prioritize user intent. Keyword stuffing is no longer effective; <span className="bg-emerald-200/40 text-[#103938] font-semibold rounded px-0.5">semantically rich, expert-driven answers</span> are what rank.
          </p>
        </div>
      </div>
    </>
  );
}

export function ReportingMockup() {
  return (
    <>
      <div className="absolute top-10 left-8 right-8 bottom-[-20px] rounded-t-2xl border border-border/80 bg-white p-6 shadow-[0_20px_50px_rgba(16,57,56,0.1)]">
        <div className="mb-6 flex items-center justify-between">
          <h4 className="text-[13px] font-bold text-foreground">Traffic vs Output</h4>
          <span className="text-[10px] font-medium text-muted-foreground border border-border/80 rounded px-2 py-1">Last 30 Days</span>
        </div>
        
        <div className="flex items-end justify-between h-24 gap-3 mt-4">
          {[40, 60, 45, 80, 65, 90, 75, 100].map((h, i) => (
            <div key={i} className="w-full bg-emerald-500/10 rounded-t-md relative group h-full flex items-end">
              <div 
                className="w-full bg-[#103938] rounded-t-md transition-all group-hover:bg-emerald-500" 
                style={{ height: `${h}%` }} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
