import React from 'react';
import { cn } from './Button';
import * as motion from 'framer-motion/client';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 flex flex-col',
        {
          'items-start text-left': alignment === 'left',
          'items-center text-center': alignment === 'center',
          'items-end text-right': alignment === 'right',
        },
        className
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-widest text-[var(--color-brand-accent)] uppercase mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-heading font-semibold text-[var(--color-brand-primary)] leading-tight max-w-2xl"
      >
        {title}
      </motion.h2>
    </div>
  );
};
