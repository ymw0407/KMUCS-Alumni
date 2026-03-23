import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { space, radius, shadow } from '@/styles/tokens/spacing.css';
import { fontSize, fontWeight, lineHeight } from '@/styles/tokens/typography.css';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: radius.lg,
  border: `1px solid ${vars.color.borderLight}`,
  backgroundColor: vars.color.background,
  overflow: 'hidden',
  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
  ':hover': {
    boxShadow: shadow.md,
    transform: 'translateY(-2px)',
  },
});

export const cardImage = style({
  width: '100%',
  aspectRatio: '3 / 2',
  objectFit: 'cover',
  backgroundColor: vars.color.surface,
});

export const cardImagePlaceholder = style({
  width: '100%',
  aspectRatio: '3 / 2',
  backgroundColor: vars.color.primaryLight,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.primary,
  fontSize: fontSize.lg,
});

export const cardBody = style({
  padding: space[4],
  display: 'flex',
  flexDirection: 'column',
  gap: space[2],
  flex: 1,
});

export const cardMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: space[2],
  fontSize: fontSize.sm,
  color: vars.color.textTertiary,
});

export const cardTitle = style({
  fontSize: fontSize.base,
  fontWeight: fontWeight.semibold,
  lineHeight: lineHeight.heading,
  color: vars.color.text,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  wordBreak: 'keep-all',
});

export const cardExcerpt = style({
  fontSize: fontSize.sm,
  color: vars.color.textSecondary,
  lineHeight: lineHeight.body,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  wordBreak: 'keep-all',
});

export const cardLink = style({
  textDecoration: 'none',
  color: 'inherit',
  display: 'contents',
});

export const cardTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: space[1],
  marginTop: 'auto',
});
