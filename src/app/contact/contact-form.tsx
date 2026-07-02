'use client';

import { useState } from 'react';
import { Loader2, Check, ArrowRight, Lock, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'done';

const INQUIRY_OPTIONS = [
  'General Question',
  'Pricing',
  'Enterprise',
  'Technical Support',
  'Partnership',
  'Other'
];

interface ContactFormProps {
  initialInquiryType?: string;
}

export function ContactForm({ initialInquiryType = 'General Question' }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [inquiryType, setInquiryType] = useState(initialInquiryType);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    // Wire to your API / form service (e.g. POST {API}/v1/public/contact or Resend).
    await new Promise((r) => setTimeout(r, 900));
    setStatus('done');
  }

  const inputCls =
    'h-12 w-full rounded-xl border border-border/80 bg-white px-4 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 hover:border-border';

  if (status === 'done') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
          <Check className="h-8 w-8 text-emerald-600" />
        </span>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-[#103938]">Message sent</h3>
        <p className="mt-2 max-w-sm text-base text-muted-foreground">
          Thanks, {form.name || 'there'} — we'll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#103938]">Full Name</label>
          <input className={inputCls} placeholder="Jane Cooper" value={form.name} onChange={update('name')} required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#103938]">Work Email</label>
          <input type="email" className={inputCls} placeholder="jane@company.com" value={form.email} onChange={update('email')} required />
        </div>
      </div>
      
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#103938]">Company <span className="font-normal text-muted-foreground">(optional)</span></label>
          <input className={inputCls} placeholder="Company name" value={form.company} onChange={update('company')} />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#103938]">Inquiry Type</label>
          <select 
            className={cn(inputCls, 'appearance-none bg-[url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%209L12%2015L18%209%22%20stroke%3D%22%23103938%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E")] bg-[position:right_12px_center] bg-no-repeat cursor-pointer')}
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
            required
          >
            <option value="" disabled>Select an option</option>
            {INQUIRY_OPTIONS.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#103938]">Message</label>
        <textarea
          className={cn(inputCls, 'h-32 resize-none py-3')}
          placeholder="Tell us about your sites, volume, or what you're trying to automate…"
          value={form.message}
          onChange={update('message')}
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group press inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#103938] text-base font-semibold text-white shadow-xl shadow-[#103938]/10 hover:bg-emerald-600 disabled:opacity-70 transition-all duration-300 hover:-translate-y-0.5"
      >
        {status === 'submitting' ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            Send Message
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      {/* Trust Row */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[13px] font-medium text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Lock className="h-3.5 w-3.5 text-emerald-600/70" />
          <span>Your information is kept private</span>
        </div>
        <div className="hidden sm:block text-border">•</div>
        <div className="flex items-center gap-1.5">
          <Zap className="h-3.5 w-3.5 text-emerald-600/70" />
          <span>Usually replies within 1 business day</span>
        </div>
      </div>
    </form>
  );
}
