import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';
import { fontSize, fontWeight, fontFamily } from '@/styles/tokens/typography.css';
import { radius, shadow, space } from '@/styles/tokens/spacing.css';

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space[2],
    fontFamily: fontFamily.body,
    fontWeight: fontWeight.medium,
    lineHeight: 1,
    border: 'none',
    borderRadius: radius.md,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ':focus-visible': {
      outline: `2px solid ${vars.color.focus}`,
      outlineOffset: '2px',
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.textInverse,
        ':hover': {
          backgroundColor: vars.color.primaryHover,
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: vars.color.primary,
        border: `1px solid ${vars.color.primary}`,
        ':hover': {
          backgroundColor: vars.color.primaryLight,
        },
      },
      'ghost-light': {
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.25)',
        ':hover': {
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderColor: 'rgba(255,255,255,0.4)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: vars.color.text,
        ':hover': {
          backgroundColor: vars.color.surface,
        },
      },
      link: {
        backgroundColor: 'transparent',
        color: vars.color.primary,
        padding: '0 !important',
        ':hover': {
          textDecoration: 'underline',
        },
      },
    },
    size: {
      sm: {
        fontSize: fontSize.sm,
        padding: `${space[2]} ${space[3]}`,
        height: '2rem',
      },
      md: {
        fontSize: fontSize.base,
        padding: `${space[2]} ${space[5]}`,
        height: '2.5rem',
      },
      lg: {
        fontSize: fontSize.lg,
        padding: `${space[3]} ${space[6]}`,
        height: '3rem',
      },
    },
    fullWidth: {
      true: { width: '100%' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
  },
});
