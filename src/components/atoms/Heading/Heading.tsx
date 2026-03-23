import type { ReactNode } from 'react';
import { heading } from './Heading.css';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  level?: HeadingLevel;
  align?: 'left' | 'center' | 'right';
  color?: 'default' | 'primary' | 'secondary' | 'inverse';
  className?: string;
  id?: string;
  children: ReactNode;
}

export function Heading({
  level = 2,
  align = 'left',
  color = 'default',
  className,
  id,
  children,
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      id={id}
      className={`${heading({ level, align, color })}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Tag>
  );
}
