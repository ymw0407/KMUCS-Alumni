import { recipe } from '@vanilla-extract/recipes';
import { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } from '@/styles/tokens/typography.css';
import { space } from '@/styles/tokens/spacing.css';
import { vars } from '@/styles/theme.css';

export const heading = recipe({
  base: {
    fontFamily: fontFamily.display,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.heading,
    letterSpacing: letterSpacing.tight,
    color: vars.color.text,
    wordBreak: 'keep-all',
  },
  variants: {
    level: {
      1: {
        fontSize: fontSize['4xl'],
        fontWeight: fontWeight.extrabold,
        '@media': {
          '(max-width: 768px)': {
            fontSize: fontSize['3xl'],
          },
        },
      },
      2: {
        fontSize: fontSize['3xl'],
        '@media': {
          '(max-width: 768px)': {
            fontSize: fontSize['2xl'],
          },
        },
      },
      3: {
        fontSize: fontSize['2xl'],
        '@media': {
          '(max-width: 768px)': {
            fontSize: fontSize.xl,
          },
        },
      },
      4: {
        fontSize: fontSize.xl,
      },
      5: {
        fontSize: fontSize.lg,
      },
      6: {
        fontSize: fontSize.base,
        fontWeight: fontWeight.semibold,
      },
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
    color: {
      default: {},
      primary: { color: vars.color.primary },
      secondary: { color: vars.color.textSecondary },
      inverse: { color: vars.color.textInverse },
    },
  },
  defaultVariants: {
    level: 2,
    align: 'left',
    color: 'default',
  },
});
