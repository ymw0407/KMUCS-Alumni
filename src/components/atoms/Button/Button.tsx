import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { button } from './Button.css';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'ghost-light' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: 'button';
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: 'a';
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className,
    children,
    ...rest
  } = props;

  const classes = `${button({ variant, size, fullWidth })}${className ? ` ${className}` : ''}`;

  if (props.as === 'a') {
    const { as: _, ...anchorProps } = rest as ButtonAsLink;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _, ...buttonProps } = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
