/**
 * KMU Alumni Design Tokens — Typography
 *
 * 한국어 가독성 최우선 설계
 * - Pretendard: 한국어 + 영문 모두 우수한 가독성, 웹 무료 배포 가능
 * - 국민대학교 전용 서체 사용 시 fontFamily.display 교체
 */

export const fontFamily = {
  /** 본문 서체: Pretendard */
  body: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
  /** 디스플레이/헤딩 서체: Pretendard */
  display: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif",
  /** 코드 서체 */
  mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Cascadia Code', Consolas, monospace",
} as const;

/**
 * Font Size Scale
 * 한국어 본문 기준 16px, 모바일에서도 가독성 확보
 */
export const fontSize = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem',// 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem', // 60px
} as const;

/**
 * Font Weight
 */
export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
} as const;

/**
 * Line Height
 * 한국어 텍스트는 영문보다 높은 line-height가 필요
 * - 본문: 1.8 (한글 가독성 최적)
 * - 제목: 1.3~1.4
 */
export const lineHeight = {
  tight: '1.25',
  heading: '1.35',
  subheading: '1.5',
  body: '1.8',
  relaxed: '2.0',
} as const;

/**
 * Letter Spacing
 * 한국어는 일반적으로 자간 조정이 적음
 */
export const letterSpacing = {
  tight: '-0.02em',
  normal: '0',
  wide: '0.02em',
  wider: '0.05em',
} as const;

/**
 * Paragraph Spacing
 * 한국어 문단 간격 (본문 블록 사이)
 */
export const paragraphSpacing = {
  sm: '0.75rem',
  md: '1.25rem',
  lg: '2rem',
} as const;

export type TypographyTokens = {
  fontFamily: typeof fontFamily;
  fontSize: typeof fontSize;
  fontWeight: typeof fontWeight;
  lineHeight: typeof lineHeight;
  letterSpacing: typeof letterSpacing;
};
