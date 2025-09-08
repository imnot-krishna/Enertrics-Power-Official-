'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';

  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-brand-100 text-brand-800',
    secondary: 'bg-gray-200 text-gray-700',
    accent: 'bg-accent/10 text-accent',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
