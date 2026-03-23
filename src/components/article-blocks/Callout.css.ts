import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';
import { space, radius } from '@/styles/tokens/spacing.css';
import { fontSize } from '@/styles/tokens/typography.css';
import { colors } from '@/styles/tokens/colors.css';

export const callout = recipe({
  base: {
    display: 'flex',
    gap: space[3],
    padding: space[4],
    borderRadius: radius.lg,
    fontSize: fontSize.base,
    lineHeight: '1.7',
    marginBlock: space[4],
    wordBreak: 'keep-all',
  },
  variants: {
    type: {
      info: {
        backgroundColor: colors.accent.infoLight,
        borderLeft: `4px solid ${colors.accent.info}`,
      },
      warning: {
        backgroundColor: colors.accent.warningLight,
        borderLeft: `4px solid ${colors.accent.warning}`,
      },
      success: {
        backgroundColor: colors.accent.successLight,
        borderLeft: `4px solid ${colors.accent.success}`,
      },
      error: {
        backgroundColor: colors.accent.errorLight,
        borderLeft: `4px solid ${colors.accent.error}`,
      },
      default: {
        backgroundColor: vars.color.surface,
        borderLeft: `4px solid ${vars.color.border}`,
      },
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

export const calloutIcon = recipe({
  base: {
    flexShrink: 0,
    fontSize: fontSize.xl,
    lineHeight: 1,
  },
  variants: {
    type: {
      info: {},
      warning: {},
      success: {},
      error: {},
      default: {},
    },
  },
});

export const calloutContent = recipe({
  base: {
    flex: 1,
  },
  variants: {
    type: {
      info: {},
      warning: {},
      success: {},
      error: {},
      default: {},
    },
  },
});
