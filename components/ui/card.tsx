import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div className={cn('card-glow rounded-3xl p-6 shadow-soft', className)}>{children}</div>
  );
}
