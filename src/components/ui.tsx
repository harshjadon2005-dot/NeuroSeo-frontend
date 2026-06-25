import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

type ButtonProps = {
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  external?: boolean;
};

export function Button({ href, variant = 'primary', size = 'md', className, children, external }: ButtonProps) {
  const base =
    'press inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#103938] focus-visible:ring-offset-2';
  const sizes = {
    md: 'h-11 px-6 text-sm',
    lg: 'h-13 px-8 text-base',
  };
  const variants = {
    primary: 'bg-[#103938] text-white hover:bg-[#0d2e2d] shadow-lg shadow-[#103938]/20',
    outline: 'border border-border bg-white text-foreground hover:border-[#103938]/40',
    ghost: 'text-[#103938] hover:bg-[#103938]/5',
  };
  const cls = cn(base, sizes[size], variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <button className={cls}>{children}</button>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-[#103938] shadow-sm">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'center',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: 'center' | 'left';
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}
