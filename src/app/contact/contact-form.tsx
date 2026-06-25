'use client';

import { useState } from 'react';
import { Loader2, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'done';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
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
    'h-11 w-full rounded-lg border border-border bg-white px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-[#103938] focus:outline-none focus:ring-2 focus:ring-[#103938]/15';

  if (status === 'done') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#103938]/8">
          <Check className="h-6 w-6 text-[#103938]" />
        </span>
        <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">Message sent</h3>
        <p className="mt-1 max-w-xs text-sm text-muted-foreground">
          Thanks, {form.name || 'there'} — we&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Name</label>
          <input className={inputCls} placeholder="Jane Cooper" value={form.name} onChange={update('name')} required />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Work email</label>
          <input type="email" className={inputCls} placeholder="jane@company.com" value={form.email} onChange={update('email')} required />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">Company <span className="font-normal text-muted-foreground">(optional)</span></label>
        <input className={inputCls} placeholder="Company name" value={form.company} onChange={update('company')} />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">How can we help?</label>
        <textarea
          className={cn(inputCls, 'h-28 resize-none py-2.5')}
          placeholder="Tell us about your sites, volume, or what you're trying to automate…"
          value={form.message}
          onChange={update('message')}
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="press inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#103938] text-sm font-medium text-white shadow-lg shadow-[#103938]/20 hover:bg-[#0d2e2d] disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Send message
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
