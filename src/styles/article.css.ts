import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './theme.css';
import { space, radius } from './tokens/spacing.css';
import { fontSize, fontWeight, fontFamily, lineHeight } from './tokens/typography.css';
import { colors } from './tokens/colors.css';

/**
 * Notion 스타일 기사 본문 스타일
 * MDX 렌더링 결과에 적용되는 prose 스타일
 */
export const articleContent = style({
  maxWidth: '680px',
  marginInline: 'auto',
  fontSize: fontSize.lg,
  lineHeight: lineHeight.body,
  color: vars.color.text,
  wordBreak: 'keep-all',
});

// Headings
globalStyle(`${articleContent} h1`, {
  fontSize: fontSize['4xl'],
  fontWeight: fontWeight.bold,
  fontFamily: fontFamily.display,
  lineHeight: lineHeight.heading,
  marginTop: space[12],
  marginBottom: space[4],
});

globalStyle(`${articleContent} h2`, {
  fontSize: fontSize['2xl'],
  fontWeight: fontWeight.bold,
  fontFamily: fontFamily.display,
  lineHeight: lineHeight.heading,
  marginTop: space[10],
  marginBottom: space[4],
  paddingBottom: space[2],
  borderBottom: `1px solid ${vars.color.borderLight}`,
});

globalStyle(`${articleContent} h3`, {
  fontSize: fontSize.xl,
  fontWeight: fontWeight.semibold,
  fontFamily: fontFamily.display,
  lineHeight: lineHeight.heading,
  marginTop: space[8],
  marginBottom: space[3],
});

globalStyle(`${articleContent} h4`, {
  fontSize: fontSize.lg,
  fontWeight: fontWeight.semibold,
  marginTop: space[6],
  marginBottom: space[2],
});

// Paragraphs
globalStyle(`${articleContent} p`, {
  marginBottom: space[5],
});

// Lists
globalStyle(`${articleContent} ul, ${articleContent} ol`, {
  marginBottom: space[5],
  paddingLeft: space[6],
});

globalStyle(`${articleContent} li`, {
  marginBottom: space[2],
});

globalStyle(`${articleContent} li > ul, ${articleContent} li > ol`, {
  marginTop: space[2],
  marginBottom: 0,
});

// Links
globalStyle(`${articleContent} a`, {
  color: vars.color.primary,
  textDecoration: 'underline',
  textDecorationColor: `${colors.kmuBlue[200]}`,
  textUnderlineOffset: '3px',
  transition: 'text-decoration-color 0.15s ease',
});

globalStyle(`${articleContent} a:hover`, {
  textDecorationColor: vars.color.primary,
});

// Blockquote (Notion 스타일)
globalStyle(`${articleContent} blockquote`, {
  borderLeft: `3px solid ${vars.color.border}`,
  paddingLeft: space[4],
  marginBlock: space[5],
  color: vars.color.textSecondary,
  fontStyle: 'normal',
});

// Code inline
globalStyle(`${articleContent} code`, {
  fontFamily: fontFamily.mono,
  fontSize: '0.9em',
  backgroundColor: vars.color.surface,
  padding: `${space[1]} ${space[2]}`,
  borderRadius: radius.sm,
  color: colors.kmuBlue[700],
});

// Code block
globalStyle(`${articleContent} pre`, {
  backgroundColor: colors.neutral[50],
  border: `1px solid ${vars.color.borderLight}`,
  borderRadius: radius.lg,
  padding: space[4],
  marginBlock: space[5],
  overflowX: 'auto',
  fontSize: fontSize.sm,
  lineHeight: '1.7',
});

globalStyle(`${articleContent} pre code`, {
  backgroundColor: 'transparent',
  padding: 0,
  borderRadius: 0,
  color: 'inherit',
});

// Images
globalStyle(`${articleContent} img`, {
  borderRadius: radius.lg,
  marginBlock: space[5],
});

// Horizontal rule (Notion divider)
globalStyle(`${articleContent} hr`, {
  border: 'none',
  borderTop: `1px solid ${vars.color.border}`,
  marginBlock: space[8],
});

// Table
globalStyle(`${articleContent} table`, {
  width: '100%',
  borderCollapse: 'collapse',
  marginBlock: space[5],
  fontSize: fontSize.base,
});

globalStyle(`${articleContent} th`, {
  textAlign: 'left',
  fontWeight: fontWeight.semibold,
  padding: `${space[2]} ${space[3]}`,
  borderBottom: `2px solid ${vars.color.border}`,
  color: vars.color.textSecondary,
});

globalStyle(`${articleContent} td`, {
  padding: `${space[2]} ${space[3]}`,
  borderBottom: `1px solid ${vars.color.borderLight}`,
});

// Strong / em
globalStyle(`${articleContent} strong`, {
  fontWeight: fontWeight.semibold,
});
