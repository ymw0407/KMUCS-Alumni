import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { space, radius, shadow } from '@/styles/tokens/spacing.css';
import { fontSize, fontWeight, lineHeight } from '@/styles/tokens/typography.css';

export const programCard = style({
  padding: space[6],
  borderRadius: radius.lg,
  border: `1px solid ${vars.color.borderLight}`,
  backgroundColor: vars.color.background,
  transition: 'box-shadow 0.2s ease',
  ':hover': {
    boxShadow: shadow.md,
  },
});

export const programTitle = style({
  fontSize: fontSize.xl,
  fontWeight: fontWeight.semibold,
  color: vars.color.text,
  marginBottom: space[2],
});

export const programDescription = style({
  fontSize: fontSize.base,
  color: vars.color.textSecondary,
  lineHeight: lineHeight.body,
  marginBottom: space[3],
  wordBreak: 'keep-all',
});

export const programBadgeRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: space[2],
  marginBottom: space[2],
});

export const programSchedule = style({
  fontSize: fontSize.sm,
  color: vars.color.textTertiary,
  display: 'flex',
  alignItems: 'center',
  gap: space[1],
});

export const programStatus = style({
  display: 'inline-block',
  fontSize: fontSize.xs,
  fontWeight: fontWeight.semibold,
  padding: `${space[1]} ${space[2]}`,
  borderRadius: radius.full,
});
