import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { space, radius } from '@/styles/tokens/spacing.css';
import { colors } from '@/styles/tokens/colors.css';

export const articleGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: space[5],
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: space[6],
    },
    '(min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
});

export const programGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: space[5],
  '@media': {
    '(min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '(min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const timelineSection = style({
  backgroundColor: vars.color.backgroundAlt,
});

export const ctaSection = style({});

export const sectionCenterActions = style({
  textAlign: 'center',
  marginTop: space[8],
});

export const timelineWrapper = style({
  maxWidth: '640px',
  marginInline: 'auto',
});

export const ctaBox = style({
  backgroundColor: colors.kmuBlue[50],
  borderRadius: radius.xl,
  padding: `${space[12]} ${space[8]}`,
  textAlign: 'center',
  '@media': {
    '(max-width: 768px)': {
      padding: `${space[8]} ${space[4]}`,
    },
  },
});

export const ctaActions = style({
  display: 'flex',
  gap: space[3],
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: space[6],
});
