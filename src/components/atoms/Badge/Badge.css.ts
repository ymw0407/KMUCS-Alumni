import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';
import { fontSize, fontWeight, fontFamily } from '@/styles/tokens/typography.css';
import { radius, space } from '@/styles/tokens/spacing.css';

export const badge = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: fontFamily.body,
    fontWeight: fontWeight.medium,
    lineHeight: 1,
    borderRadius: radius.full,
    whiteSpace: 'nowrap',
  },
  variants: {
    variant: {
      default: {
        backgroundColor: vars.color.surface,
        color: vars.color.textSecondary,
      },
      primary: {
        backgroundColor: vars.color.primaryLight,
        color: vars.color.primary,
      },
      outline: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.border}`,
        color: vars.color.textSecondary,
      },
    },
    size: {
      sm: {
        fontSize: fontSize.xs,
        padding: `${space[1]} ${space[2]}`,
      },
      md: {
        fontSize: fontSize.sm,
        padding: `${space[1]} ${space[3]}`,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
});
