import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { space, radius, shadow } from '@/styles/tokens/spacing.css';
import { fontSize, fontWeight } from '@/styles/tokens/typography.css';

export const linkCard = style({
  display: 'flex',
  alignItems: 'center',
  gap: space[4],
  padding: space[4],
  border: `1px solid ${vars.color.border}`,
  borderRadius: radius.lg,
  textDecoration: 'none',
  color: 'inherit',
  transition: 'box-shadow 0.15s ease, border-color 0.15s ease',
  marginBlock: space[4],
  ':hover': {
    boxShadow: shadow.md,
    borderColor: vars.color.primary,
  },
});

export const linkCardContent = style({
  flex: 1,
  overflow: 'hidden',
});

export const linkCardTitle = style({
  fontSize: fontSize.base,
  fontWeight: fontWeight.semibold,
  color: vars.color.text,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const linkCardDescription = style({
  fontSize: fontSize.sm,
  color: vars.color.textTertiary,
  marginTop: space[1],
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const linkCardUrl = style({
  fontSize: fontSize.xs,
  color: vars.color.textTertiary,
  marginTop: space[1],
});

export const linkCardIcon = style({
  flexShrink: 0,
  color: vars.color.textTertiary,
});
