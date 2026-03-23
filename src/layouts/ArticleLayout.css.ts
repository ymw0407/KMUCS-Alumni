import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { space, radius } from '@/styles/tokens/spacing.css';
import { fontSize, fontWeight, fontFamily, lineHeight, letterSpacing } from '@/styles/tokens/typography.css';

export const articleHeader = style({
  marginBottom: space[8],
  textAlign: 'center',
});

export const articleTitle = style({
  fontFamily: fontFamily.display,
  fontSize: fontSize['4xl'],
  fontWeight: fontWeight.extrabold,
  lineHeight: lineHeight.heading,
  letterSpacing: letterSpacing.tight,
  color: vars.color.text,
  marginTop: space[4],
  marginBottom: space[3],
  wordBreak: 'keep-all',
  '@media': {
    '(max-width: 768px)': {
      fontSize: fontSize['3xl'],
    },
  },
});

export const articleSubtitle = style({
  fontSize: fontSize.xl,
  color: vars.color.textSecondary,
  lineHeight: lineHeight.subheading,
  marginBottom: space[4],
  wordBreak: 'keep-all',
});

export const articleMeta = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: space[3],
  flexWrap: 'wrap',
});

export const articleAuthorDate = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: space[2],
  fontSize: fontSize.sm,
  color: vars.color.textTertiary,
  marginBottom: space[3],
  flexWrap: 'wrap',
});

export const articleCover = style({
  width: '100%',
  maxWidth: '680px',
  marginInline: 'auto',
  borderRadius: radius.xl,
  marginBottom: space[10],
  display: 'block',
});

export const articleTagsWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});
