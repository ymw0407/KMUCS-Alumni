import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { space } from '@/styles/tokens/spacing.css';
import { contentWidth } from '@/styles/tokens/spacing.css';
import { colors } from '@/styles/tokens/colors.css';

export const aboutContent = style({
  maxWidth: contentWidth.narrow,
});

export const visionSection = style({
  backgroundColor: colors.neutral[50],
});

export const visionList = style({
  maxWidth: contentWidth.narrow,
  display: 'flex',
  flexDirection: 'column',
  gap: space[8],
});

export const visionItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space[2],
});

export const timelineWrapper = style({
  maxWidth: contentWidth.narrow,
});
