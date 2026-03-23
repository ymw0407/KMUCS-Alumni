import { recipe } from '@vanilla-extract/recipes';
import { fontFamily, fontSize, fontWeight, lineHeight } from '@/styles/tokens/typography.css';
import { vars } from '@/styles/theme.css';

export const text = recipe({
  base: {
    fontFamily: fontFamily.body,
    wordBreak: 'keep-all',
    overflowWrap: 'break-word',
  },
  variants: {
    size: {
      xs: { fontSize: fontSize.xs, lineHeight: lineHeight.body },
      sm: { fontSize: fontSize.sm, lineHeight: lineHeight.body },
      base: { fontSize: fontSize.base, lineHeight: lineHeight.body },
      lg: { fontSize: fontSize.lg, lineHeight: lineHeight.body },
      xl: { fontSize: fontSize.xl, lineHeight: lineHeight.subheading },
    },
    weight: {
      regular: { fontWeight: fontWeight.regular },
      medium: { fontWeight: fontWeight.medium },
      semibold: { fontWeight: fontWeight.semibold },
      bold: { fontWeight: fontWeight.bold },
    },
    color: {
      default: { color: vars.color.text },
      secondary: { color: vars.color.textSecondary },
      tertiary: { color: vars.color.textTertiary },
      primary: { color: vars.color.primary },
      inverse: { color: vars.color.textInverse },
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'regular',
    color: 'default',
    align: 'left',
  },
});
