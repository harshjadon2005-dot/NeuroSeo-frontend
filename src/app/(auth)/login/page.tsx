import { AuthLayout } from '@/components/auth-layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login — Seobox Platform',
  description: 'Sign in to access your dashboard and pipelines.',
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Sign in to access your dashboard and pipelines.</p>
      </div>

      <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-xl shadow-black/[0.02] sm:p-8">
        <button className="flex w-full items-center justify-center gap-3 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-[#1b1c2b] focus:ring-offset-1">
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
          Continue with Google
        </button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/60" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="bg-white px-3 tracking-widest text-muted-foreground/70 font-bold">Or continue with email</span>
          </div>
        </div>

        <form className="space-y-4">
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
            Login
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-border/40 text-center text-[13px] text-muted-foreground">
          New to Seobox?{' '}
          <Link href="/register" className="font-bold text-[#E56E3A] hover:underline transition-colors">
            Create an account
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
