import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { space, radius } from '@/styles/tokens/spacing.css';
import { fontSize } from '@/styles/tokens/typography.css';

export const imageGrid = recipe({
  base: {
    display: 'grid',
    gap: space[3],
    marginBlock: space[6],
  },
  variants: {
    columns: {
      1: { gridTemplateColumns: '1fr' },
      2: { gridTemplateColumns: 'repeat(2, 1fr)' },
      3: { gridTemplateColumns: 'repeat(3, 1fr)' },
    },
  },
  defaultVariants: {
    columns: 2,
  },
});

export const imageGridItem = style({
  borderRadius: radius.md,
  overflow: 'hidden',
});

export const imageGridImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const imageCaption = style({
  textAlign: 'center',
  fontSize: fontSize.sm,
  color: vars.color.textTertiary,
  marginTop: space[2],
});
