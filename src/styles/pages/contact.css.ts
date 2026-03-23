import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { space, radius } from '@/styles/tokens/spacing.css';
import { contentWidth } from '@/styles/tokens/spacing.css';
import { fontSize, fontWeight } from '@/styles/tokens/typography.css';

export const contactContent = style({
  maxWidth: contentWidth.narrow,
  display: 'flex',
  flexDirection: 'column',
  gap: space[8],
});

export const contactCard = style({
  padding: space[6],
  border: `1px solid ${vars.color.borderLight}`,
  borderRadius: radius.lg,
  display: 'flex',
  flexDirection: 'column',
  gap: space[2],
});

export const linkList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space[3],
  marginTop: space[4],
});

export const linkCard = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${space[4]} ${space[5]}`,
  border: `1px solid ${vars.color.borderLight}`,
  borderRadius: radius.lg,
  textDecoration: 'none',
  color: 'inherit',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  ':hover': {
    borderColor: vars.color.primary,
    boxShadow: `0 0 0 1px ${vars.color.primary}`,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.color.focus}`,
    outlineOffset: '2px',
  },
});

export const linkCardLabel = style({
  fontWeight: fontWeight.semibold,
  color: vars.color.text,
});

export const linkCardDesc = style({
  fontSize: fontSize.sm,
  color: vars.color.textTertiary,
  marginTop: space[1],
});
