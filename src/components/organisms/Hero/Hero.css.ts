import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { space } from '@/styles/tokens/spacing.css';
import { fontSize, fontWeight, fontFamily, lineHeight, letterSpacing } from '@/styles/tokens/typography.css';
import { colors } from '@/styles/tokens/colors.css';

export const hero = style({
  position: 'relative',
  backgroundColor: colors.kmuBlue[900],
  color: colors.neutral[0],
  paddingBlock: space[20],
  overflow: 'hidden',
  '@media': {
    '(max-width: 768px)': {
      paddingBlock: space[12],
    },
  },
});

export const heroBackground = style({
  position: 'absolute',
  inset: 0,
  opacity: 0.08,
  background: `radial-gradient(circle at 30% 50%, ${colors.kmuBlue[400]}, transparent 60%),
               radial-gradient(circle at 70% 80%, ${colors.kmuBlue[300]}, transparent 50%)`,
});

/* ── Carousel ── */

export const carouselContainer = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
});

const kenBurns = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.1)' },
});

export const carouselSlide = style({
  position: 'absolute',
  inset: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0,
  transition: 'opacity 1.5s ease-in-out',
  animation: `${kenBurns} 10s ease-in-out alternate infinite`,
  selectors: {
    '&[data-active="true"]': {
      opacity: 1,
    },
  },
});

export const carouselOverlay = style({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(135deg, ${colors.kmuBlue[900]}ee 0%, ${colors.kmuBlue[900]}bb 50%, ${colors.kmuBlue[800]}99 100%)`,
  zIndex: 1,
});

export const carouselDots = style({
  position: 'absolute',
  bottom: space[6],
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: space[2],
  zIndex: 3,
  '@media': {
    '(max-width: 768px)': {
      bottom: space[3],
    },
  },
});

export const carouselDot = style({
  width: '8px',
  height: '8px',
  borderRadius: '9999px',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  backgroundColor: 'rgba(255,255,255,0.4)',
  transition: 'all 0.3s ease',
  selectors: {
    '&[data-active="true"]': {
      backgroundColor: colors.neutral[0],
      width: '24px',
    },
  },
});

export const heroContent = style({
  position: 'relative',
  maxWidth: '1200px',
  marginInline: 'auto',
  paddingInline: space[4],
  '@media': {
    '(min-width: 768px)': {
      paddingInline: space[6],
    },
    '(min-width: 1024px)': {
      paddingInline: space[8],
    },
  },
});

export const heroLabel = style({
  display: 'inline-block',
  fontSize: fontSize.sm,
  fontWeight: fontWeight.semibold,
  color: colors.kmuBlue[200],
  letterSpacing: letterSpacing.wider,
  textTransform: 'uppercase',
  marginBottom: space[4],
});

export const heroTitle = style({
  fontFamily: fontFamily.display,
  fontSize: fontSize['5xl'],
  fontWeight: fontWeight.extrabold,
  lineHeight: lineHeight.tight,
  letterSpacing: letterSpacing.tight,
  maxWidth: '720px',
  wordBreak: 'keep-all',
  '@media': {
    '(max-width: 768px)': {
      fontSize: fontSize['3xl'],
    },
  },
});

export const heroSubtitle = style({
  fontSize: fontSize.xl,
  fontWeight: fontWeight.regular,
  lineHeight: lineHeight.subheading,
  color: colors.kmuBlue[100],
  maxWidth: '600px',
  marginTop: space[5],
  wordBreak: 'keep-all',
  '@media': {
    '(max-width: 768px)': {
      fontSize: fontSize.lg,
    },
  },
});

export const heroActions = style({
  display: 'flex',
  gap: space[3],
  marginTop: space[8],
  flexWrap: 'wrap',
});

export const heroStat = style({
  display: 'flex',
  gap: space[8],
  marginTop: space[12],
  paddingTop: space[8],
  borderTop: `1px solid rgba(255,255,255,0.15)`,
  flexWrap: 'wrap',
  '@media': {
    '(max-width: 768px)': {
      gap: space[6],
      marginTop: space[8],
    },
  },
});

export const heroStatItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space[1],
});

export const heroStatValue = style({
  fontSize: fontSize['3xl'],
  fontWeight: fontWeight.bold,
  color: colors.neutral[0],
});

export const heroStatLabel = style({
  fontSize: fontSize.sm,
  color: colors.kmuBlue[200],
});
