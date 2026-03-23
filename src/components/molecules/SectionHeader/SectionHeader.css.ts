import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { space } from '@/styles/tokens/spacing.css';

export const sectionHeaderWrapper = style({
  marginBottom: space[10],
});

export const sectionLabel = style({
  display: 'inline-block',
  fontSize: '0.875rem',
  fontWeight: '600',
  color: vars.color.primary,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: space[2],
});

export const sectionDescription = style({
  marginTop: space[3],
  maxWidth: '640px',
});

export const sectionDivider = style({
  width: '3rem',
  height: '3px',
  backgroundColor: vars.color.primary,
  border: 'none',
  marginTop: space[4],
});

export const sectionHeaderCenter = style({
  textAlign: 'center',
});

globalStyle(`${sectionHeaderCenter} ${sectionDescription}`, {
  marginInline: 'auto',
});

globalStyle(`${sectionHeaderCenter} ${sectionDivider}`, {
  marginInline: 'auto',
});
