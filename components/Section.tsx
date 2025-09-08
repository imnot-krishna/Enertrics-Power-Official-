'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'brand' | 'accent';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  container?: boolean;
  animate?: boolean;
}

export default function Section({
  children,
  className,
  background = 'white',
  padding = 'lg',
  container = true,
  animate = true,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    brand: 'bg-gradient-to-r from-brand-500 to-brand-400 text-white',
    accent: 'bg-gradient-to-r from-accent to-yellow-600 text-white',
  };

  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
  };

  const content = container ? (
    <div className="container-custom">
      {children}
    </div>
  ) : (
    children
  );

  const sectionContent = (
    <section
      className={cn(
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      {content}
    </section>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {sectionContent}
      </motion.div>
    );
  }

  return sectionContent;
}
