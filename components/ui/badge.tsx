import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger';
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-slate-700 text-slate-100',
  success: 'bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-200 ring-1 ring-amber-500/20',
  danger: 'bg-rose-500/10 text-rose-200 ring-1 ring-rose-500/20',
};

export default function Badge({ variant = 'default', className, children }: BadgeProps) {
  return (
    <span className={cn('inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]', variantStyles[variant], className)}>
      {children}
    </span>
  );
}
