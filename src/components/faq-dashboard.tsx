'use client';

import { useState, useMemo } from 'react';
import { 
  Search, 
  ChevronRight, 
  Lightbulb, 
  ArrowLeft,
  Rocket,
  Bot,
  TrendingUp,
  Link as LinkIcon,
  CreditCard,
  ShieldCheck,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/reveal';

const FAQ_DATA = [
  // GETTING STARTED
  {
    id: 'connect',
    categoryId: 'getting_started',
    q: 'Do I need to connect anything to get started?',
    a: 'No. You can generate and review articles immediately. Connecting Google Search Console unlocks real ranking data, and connecting a CMS lets you publish in one click — but both are optional and take a couple of minutes.',
    tip: 'Connect Google Search Console first for instant keyword difficulty metrics based on your actual site authority.',
    related: ['cms', 'team']
  },
  {
    id: 'team',
    categoryId: 'getting_started',
    q: 'Can my whole team and clients use it?',
    a: 'Yes. Invite teammates with roles (owner, admin, editor, reviewer, viewer), spin up a separate workspace per client, and send branded PDF performance reports on a schedule. Client-guest access is scoped to specific workspaces.',
    tip: 'Set up distinct workspaces for each client to keep their brand voice and CMS connections completely isolated.',
    related: ['connect', 'data']
  },
  
  // AI CONTENT
  {
    id: 'how_write',
    categoryId: 'ai_content',
    q: 'How does NeuroSEO actually write content?',
    a: 'Every article runs through an 18-stage pipeline: it pulls live SERP data for your keyword, builds an outline against the top results, drafts the body, generates SEO metadata and FAQ schema, adds internal links, then runs originality, AI-detection, and fact-verification checks before scoring SEO and AI visibility. You review the result and publish.',
    tip: 'The 18-stage pipeline runs synchronously. You can watch it stream the outline, draft, and metadata in real time.',
    related: ['originality', 'human', 'brand']
  },
  {
    id: 'human',
    categoryId: 'ai_content',
    q: 'Can I keep a human in the loop?',
    a: 'Always. By default every article lands in a review queue where you can edit, approve, or reject it. Auto-publish is entirely opt-in and only fires when an article clears the SEO and quality thresholds you set per site.',
    tip: 'Enable \'Human Review\' as a mandatory gate to ensure an editor signs off on every piece before it hits your CMS.',
    related: ['how_write', 'cms']
  },
  {
    id: 'originality',
    categoryId: 'ai_content',
    q: 'Is the content original, or will it get flagged as AI?',
    a: 'Before anything reaches your review queue it passes plagiarism, AI-detection, and fact-verification gates. When you connect an external originality provider (Originality.ai or Copyscape), those scores override the built-in heuristics for an authoritative check.',
    tip: 'Integrating your Originality.ai API key allows you to strictly enforce a >90% human score before a draft can be approved.',
    related: ['how_write', 'brand']
  },
  {
    id: 'brand',
    categoryId: 'ai_content',
    q: 'How does it keep my content on-brand?',
    a: 'Each site has its own brand voice settings — tone, target audience, writing style, and banned words. The pipeline writes to those constraints, and you can adjust them any time without regenerating past work.',
    tip: 'Explicitly add competitor names or jargon to the "Banned Words" list in your workspace settings to prevent them from ever appearing.',
    related: ['how_write', 'human']
  },

  // SEO & GEO
  {
    id: 'geo',
    categoryId: 'seo_geo',
    q: 'What is "AI visibility" or GEO?',
    a: 'Generative Engine Optimization. NeuroSEO probes ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews to see whether they cite your brand for your target queries, then scores and tracks that visibility over time.',
    tip: 'Focus on targeting specific, long-tail queries; AI engines are much more likely to cite your brand for direct answers than broad topics.',
    related: ['how_write']
  },

  // INTEGRATIONS
  {
    id: 'cms',
    categoryId: 'integrations',
    q: 'Which CMS platforms can it publish to?',
    a: 'WordPress (REST + Application Passwords), Webflow (CMS API), Shopify (Admin API), and any headless setup via signed webhooks. Approved articles publish in one click, or fully automatically when you enable auto-publish with quality gates.',
    tip: 'For WordPress, we recommend creating a dedicated Application Password specifically for NeuroSEO rather than using your main admin password.',
    related: ['connect', 'human', 'api_q']
  },

  // PRICING
  {
    id: 'credits',
    categoryId: 'pricing',
    q: 'How do credits work?',
    a: 'Generation is credit-based — roughly 50 credits per article. Each plan includes a monthly allowance, and you can buy one-time top-up packs (100–5,000 credits) that never expire. Auto-top-up keeps things running when you dip below a threshold.',
    tip: 'A typical 1,500-word article consumes roughly 45-55 credits depending on the number of SERP sources analyzed.',
    related: ['trial']
  },
  {
    id: 'trial',
    categoryId: 'pricing',
    q: 'Is there a free trial, and can I cancel anytime?',
    a: 'Yes. New accounts start with credits on us — no card required — and you can upgrade, downgrade, or cancel at any time from the billing portal. Top-up credits you purchase never expire.',
    tip: 'Trial credits never expire, so you can take your time evaluating the pipeline before upgrading.',
    related: ['credits']
  },

  // SECURITY
  {
    id: 'data',
    categoryId: 'security',
    q: 'How is my data protected?',
    a: 'All secrets — CMS credentials, OAuth tokens, API keys — are encrypted at rest with AES-256-GCM. You can export your full account data as JSON or request deletion at any time (GDPR).',
    tip: 'You can instantly revoke CMS application passwords or API keys from within your dashboard settings if needed.',
    related: ['team', 'api_q']
  },

  // API
  {
    id: 'api_q',
    categoryId: 'api',
    q: 'Is there an API?',
    a: 'A full developer API at /v1/api with API-key auth, per-key rate limiting, outbound webhooks for content events, and an OAuth consent flow for connected apps. Generate articles, list content, and wire NeuroSEO into your own tooling.',
    tip: 'You can subscribe to outbound webhooks to receive real-time notifications when an article passes the review queue and is published.',
    related: ['cms', 'data']
  },
];

const CATEGORIES = [
  { id: 'getting_started', title: 'Getting Started', icon: Rocket },
  { id: 'ai_content', title: 'AI Content', icon: Bot },
  { id: 'seo_geo', title: 'SEO & GEO', icon: TrendingUp },
  { id: 'integrations', title: 'Integrations', icon: LinkIcon },
  { id: 'pricing', title: 'Pricing', icon: CreditCard },
  { id: 'security', title: 'Security', icon: ShieldCheck },
  { id: 'api', title: 'API', icon: Settings },
];

const POPULAR_CHIPS = [
  { label: 'AI Detection', query: 'originality' },
  { label: 'Credits', query: 'credits' },
  { label: 'Publishing', query: 'publish' },
  { label: 'CMS', query: 'cms' },
  { label: 'API', query: 'api' },
];

export function FaqDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting_started');
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

  // Derived state
  const isSearching = searchQuery.trim().length > 0;
  
  const filteredQuestions = useMemo(() => {
    if (isSearching) {
      const q = searchQuery.toLowerCase();
      return FAQ_DATA.filter(faq => 
        faq.q.toLowerCase().includes(q) || 
        faq.a.toLowerCase().includes(q)
      );
    }
    return FAQ_DATA.filter(faq => faq.categoryId === activeCategory);
  }, [searchQuery, activeCategory]);

  const activeQuestion = activeQuestionId 
    ? FAQ_DATA.find(q => q.id === activeQuestionId) 
    : null;

  // Handlers
  const handleCategoryClick = (categoryId: string) => {
    setSearchQuery('');
    setActiveCategory(categoryId);
    setActiveQuestionId(null);
  };

  const handleQuestionClick = (id: string) => {
    setActiveQuestionId(id);
  };

  const handleBackToList = () => {
    setActiveQuestionId(null);
  };

  const handleChipClick = (query: string) => {
    setSearchQuery(query);
    setActiveQuestionId(null);
  };

  return (
    <div className="relative z-10 mx-auto max-w-6xl mt-4 mb-20 px-4">
      
      {/* ─── Top Header (Search & Chips) ────────────────────────────────── */}
      <div className="mb-12 max-w-3xl">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-emerald-500 transition-colors" />
          </div>
          <input
            type="text"
            className="w-full bg-white border border-border/80 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-full py-4 pl-12 pr-6 text-base text-foreground shadow-sm transition-all outline-none"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveQuestionId(null);
            }}
          />
        </div>
        
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">
            Popular:
          </span>
          {POPULAR_CHIPS.map(chip => (
            <button
              key={chip.label}
              onClick={() => handleChipClick(chip.query)}
              className="rounded-full border border-border/60 bg-white px-4 py-1.5 text-xs font-medium text-muted-foreground hover:border-emerald-500/30 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
        
        {/* ─── Left Sidebar (28%) ────────────────────────────────────────── */}
        <div className="w-full md:w-[28%] shrink-0">
          <div className="md:sticky md:top-24 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
            {CATEGORIES.map(category => {
              const Icon = category.icon;
              const isActive = !isSearching && activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={cn(
                    "flex items-center gap-3 w-full text-left p-3.5 rounded-xl transition-all duration-200 min-w-[160px] md:min-w-0 border",
                    isActive 
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-800 shadow-[inset_3px_0_0_0_#10b981]" 
                      : "bg-transparent border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  <Icon className={cn("h-4 w-4", isActive ? "text-emerald-600" : "text-muted-foreground")} />
                  <span className={cn("text-sm", isActive ? "font-bold" : "font-medium")}>
                    {category.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Right Content Panel (72%) ─────────────────────────────────── */}
        <div className="w-full md:w-[72%] min-h-[500px]">
          <div className="bg-white border border-border/60 rounded-[32px] p-6 sm:p-10 shadow-xl shadow-emerald-900/5 relative overflow-hidden">
            
            {/* Answer View */}
            {activeQuestion ? (
              <div key={activeQuestion.id} className="animate-in fade-in slide-in-from-right-4 duration-300">
                <button 
                  onClick={handleBackToList}
                  className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-[#103938] transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to questions
                </button>

                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#103938] mb-6">
                  {activeQuestion.q}
                </h2>
                
                <div className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
                  {activeQuestion.a}
                </div>

                {/* Helpful Tip */}
                {activeQuestion.tip && (
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 mb-12 flex gap-4 items-start">
                    <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Lightbulb className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-800 mb-1">Pro Tip</h4>
                      <p className="text-sm text-emerald-700/80 leading-relaxed">{activeQuestion.tip}</p>
                    </div>
                  </div>
                )}

                {/* Related Questions */}
                {activeQuestion.related && activeQuestion.related.length > 0 && (
                  <div className="border-t border-border/60 pt-8">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                      Related Questions
                    </h4>
                    <ul className="space-y-3">
                      {activeQuestion.related.map(relatedId => {
                        const relQ = FAQ_DATA.find(f => f.id === relatedId);
                        if (!relQ) return null;
                        return (
                          <li key={relatedId}>
                            <button 
                              onClick={() => handleQuestionClick(relatedId)}
                              className="text-left text-base font-semibold text-[#103938] hover:text-emerald-600 transition-colors flex items-center gap-2 group"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-500 transition-colors" />
                              {relQ.q}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              /* List View */
              <div key={isSearching ? 'search' : activeCategory} className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <h3 className="text-xl font-bold text-[#103938] mb-6 pb-4 border-b border-border/60">
                  {isSearching ? `Search results for "${searchQuery}"` : CATEGORIES.find(c => c.id === activeCategory)?.title}
                </h3>
                
                {filteredQuestions.length === 0 ? (
                  <div className="py-12 text-center text-muted-foreground">
                    No questions found matching your search.
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {filteredQuestions.map(faq => (
                      <li key={faq.id}>
                        <button
                          onClick={() => handleQuestionClick(faq.id)}
                          className="w-full text-left p-4 rounded-xl border border-transparent hover:border-border/60 hover:bg-muted/30 transition-all flex items-center justify-between group"
                        >
                          <span className="text-base font-semibold text-foreground group-hover:text-[#103938]">
                            {faq.q}
                          </span>
                          <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
