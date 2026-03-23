import type { ReactNode } from 'react';
import { text } from './Text.css';

interface TextProps {
  as?: 'p' | 'span' | 'div' | 'blockquote' | 'figcaption';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'secondary' | 'tertiary' | 'primary' | 'inverse';
  align?: 'left' | 'center' | 'right';
  className?: string;
  children: ReactNode;
}

export function Text({
  as: Tag = 'p',
  size = 'base',
  weight = 'regular',
  color = 'default',
  align = 'left',
  className,
  children,
}: TextProps) {
  return (
    <Tag className={`${text({ size, weight, color, align })}${className ? ` ${className}` : ''}`}>
      {children}
    </Tag>
  );
}
