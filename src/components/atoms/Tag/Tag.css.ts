import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { fontSize, fontWeight, fontFamily } from '@/styles/tokens/typography.css';
import { radius, space } from '@/styles/tokens/spacing.css';

export const tag = style({
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: fontFamily.body,
  fontSize: fontSize.sm,
  fontWeight: fontWeight.medium,
  lineHeight: 1,
  color: vars.color.primary,
  backgroundColor: vars.color.primaryLight,
  borderRadius: radius.md,
  padding: `${space[1]} ${space[2]}`,
  textDecoration: 'none',
  transition: 'background-color 0.15s ease',
  ':hover': {
    backgroundColor: vars.color.surface,
  },
});

export const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: space[2],
});
