import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { space, radius, shadow, zIndex } from '@/styles/tokens/spacing.css';
import { fontSize, fontWeight, fontFamily } from '@/styles/tokens/typography.css';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: zIndex.sticky,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(8px)',
  borderBottom: `1px solid ${vars.color.borderLight}`,
});

export const headerInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '4rem',
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

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: space[2],
  textDecoration: 'none',
  color: vars.color.text,
  fontFamily: fontFamily.display,
  fontWeight: fontWeight.bold,
  fontSize: fontSize.lg,
  whiteSpace: 'nowrap',
});

export const logoImage = style({
  height: '2rem',
  width: 'auto',
});

export const nav = style({
  display: 'none',
  alignItems: 'center',
  gap: space[1],
  '@media': {
    '(min-width: 768px)': {
      display: 'flex',
    },
  },
});

export const navLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: `${space[2]} ${space[3]}`,
  fontSize: fontSize.base,
  fontWeight: fontWeight.medium,
  color: vars.color.textSecondary,
  textDecoration: 'none',
  borderRadius: radius.md,
  transition: 'color 0.15s ease, background-color 0.15s ease',
  ':hover': {
    color: vars.color.primary,
    backgroundColor: vars.color.primaryLight,
  },
});

export const navLinkActive = style({
  color: vars.color.primary,
  fontWeight: fontWeight.semibold,
});

export const mobileMenuButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  borderRadius: radius.md,
  color: vars.color.text,
  ':hover': {
    backgroundColor: vars.color.surface,
  },
  '@media': {
    '(min-width: 768px)': {
      display: 'none',
    },
  },
});

export const mobileOverlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: zIndex.overlay,
});

export const mobileNav = style({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '280px',
  maxWidth: '80vw',
  backgroundColor: vars.color.background,
  zIndex: zIndex.modal,
  display: 'flex',
  flexDirection: 'column',
  padding: `${space[6]} 0`,
  boxShadow: shadow.xl,
  overflowY: 'auto',
});

export const mobileNavHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${space[4]} ${space[5]}`,
  borderBottom: `1px solid ${vars.color.borderLight}`,
  marginBottom: space[2],
});

export const mobileNavTitle = style({
  fontWeight: fontWeight.bold,
  fontSize: fontSize.xl,
  color: vars.color.text,
});

export const mobileNavClose = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  borderRadius: radius.md,
  color: vars.color.textSecondary,
  ':hover': {
    backgroundColor: vars.color.surface,
    color: vars.color.text,
  },
});

export const mobileNavLink = style({
  display: 'flex',
  alignItems: 'center',
  padding: `${space[4]} ${space[5]}`,
  fontSize: fontSize.xl,
  fontWeight: fontWeight.medium,
  color: vars.color.text,
  textDecoration: 'none',
  borderBottom: `1px solid ${vars.color.borderLight}`,
  transition: 'color 0.15s ease, background-color 0.15s ease',
  ':hover': {
    color: vars.color.primary,
    backgroundColor: vars.color.primaryLight,
  },
});

export const mobileNavLinkActive = style({
  color: vars.color.primary,
  fontWeight: fontWeight.bold,
});
