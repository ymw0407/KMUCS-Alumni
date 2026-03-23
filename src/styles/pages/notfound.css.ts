import { style } from '@vanilla-extract/css';
import { space } from '@/styles/tokens/spacing.css';

export const notfoundContent = style({
  textAlign: 'center',
  paddingBlock: space[24],
});

export const notfoundActions = style({
  marginTop: space[8],
});
