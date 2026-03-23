import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";
import { space, radius } from "@/styles/tokens/spacing.css";
import { fontSize, fontWeight } from "@/styles/tokens/typography.css";
import { colors } from "@/styles/tokens/colors.css";

export const timelineItemWrapper = style({
  display: "flex",
  gap: space[5],
  position: "relative",
});

export const timelineYear = style({
  flexShrink: 0,
  width: "5rem",
  fontSize: fontSize.lg,
  fontWeight: fontWeight.bold,
  lineHeight: "1.35",
  color: vars.color.primary,
  textAlign: "right",
});

export const timelineLine = style({
  position: "relative",
  flexShrink: 0,
  width: "2px",
  backgroundColor: vars.color.borderLight,
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: "0.35em",
      left: "50%",
      transform: "translateX(-50%)",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: vars.color.primary,
      border: `3px solid ${colors.kmuBlue[100]}`,
    },
  },
});

export const timelineContent = style({
  flex: 1,
});

export const timelineTitle = style({
  fontSize: fontSize.lg,
  fontWeight: fontWeight.semibold,
  lineHeight: "1.35",
  color: vars.color.text,
  marginBottom: space[1],
});

export const timelineDescription = style({
  fontSize: fontSize.base,
  color: vars.color.textSecondary,
  lineHeight: "1.6",
  paddingBottom: space[10],
});
