import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
          {
            'bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-accent-dark)] shadow-md': variant === 'primary',
            'bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary-light)] shadow-md': variant === 'secondary',
            'border-2 border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)] hover:text-white': variant === 'outline',
            'hover:bg-brand-primary/10 text-brand-primary': variant === 'ghost',
            'h-9 px-4 py-2 text-sm': size === 'sm',
            'h-11 px-6 py-2': size === 'md',
            'h-14 px-8 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
