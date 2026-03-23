import type { ReactNode } from 'react';
import { badge } from './Badge.css';

interface BadgeProps {
  variant?: 'default' | 'primary' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  children: ReactNode;
}

export function Badge({
  variant = 'default',
  size = 'sm',
  className,
  children,
}: BadgeProps) {
  return (
    <span className={`${badge({ variant, size })}${className ? ` ${className}` : ''}`}>
      {children}
    </span>
  );
}
