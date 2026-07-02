import { AuthLayout } from '@/components/auth-layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register — NeuroSEO Platform',
  description: 'Register for a new NeuroSEO account with full details.',
};

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Registration</h1>
        <p className="text-sm text-muted-foreground">Please fill in your details to register your account.</p>
      </div>

      <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-xl shadow-black/[0.02] sm:p-8">
        
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-foreground/80">First Name</label>
              <input 
                type="text" 
                placeholder="John"
                className="w-full rounded-xl border border-border/60 bg-[#fdfdfd] px-4 py-3 text-sm outline-none transition-colors focus:border-[#1b1c2b] focus:bg-white focus:ring-1 focus:ring-[#1b1c2b]"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-foreground/80">Last Name</label>
              <input 
                type="text" 
                placeholder="Doe"
                className="w-full rounded-xl border border-border/60 bg-[#fdfdfd] px-4 py-3 text-sm outline-none transition-colors focus:border-[#1b1c2b] focus:bg-white focus:ring-1 focus:ring-[#1b1c2b]"
                required
              />
            </div>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[13px] font-semibold text-foreground/80">Company Name</label>
            <input 
              type="text" 
              placeholder="Acme Corp"
              className="w-full rounded-xl border border-border/60 bg-[#fdfdfd] px-4 py-3 text-sm outline-none transition-colors focus:border-[#1b1c2b] focus:bg-white focus:ring-1 focus:ring-[#1b1c2b]"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-semibold text-foreground/80">Email address</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              className="w-full rounded-xl border border-border/60 bg-[#fdfdfd] px-4 py-3 text-sm outline-none transition-colors focus:border-[#1b1c2b] focus:bg-white focus:ring-1 focus:ring-[#1b1c2b]"
              required
            />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[13px] font-semibold text-foreground/80">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full rounded-xl border border-border/60 bg-[#fdfdfd] px-4 py-3 text-sm outline-none transition-colors focus:border-[#1b1c2b] focus:bg-white focus:ring-1 focus:ring-[#1b1c2b]"
              required
            />
          </div>

          <button className="mt-8 w-full rounded-full bg-[#1b1c2b] px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#151622] shadow-md hover:shadow-lg">
            Complete Registration
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-border/40 text-center text-[13px] text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="font-bold text-[#E56E3A] hover:underline transition-colors">
            Log in
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
