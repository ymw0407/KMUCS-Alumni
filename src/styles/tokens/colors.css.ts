/**
 * KMU Alumni Design Tokens — Colors
 *
 * 국민대학교 공식 컬러 시스템 기반
 * KMU Blue를 Primary로, 보조색은 절제하여 사용
 */

export const colors = {
  // ── KMU Brand ──
  kmuBlue: {
    50: '#E8F0FE',
    100: '#C5D9FC',
    200: '#9EBFF9',
    300: '#74A3F6',
    400: '#528DF3',
    500: '#1A5BC4', // 국민대학교 대표색
    600: '#164EA8',
    700: '#123F89',
    800: '#0E316B',
    900: '#0A234D',
    950: '#061633',
  },

  // ── Neutral (기록성과 신뢰감을 위한 무채색 스케일) ──
  neutral: {
    0: '#FFFFFF',
    50: '#F8F9FA',
    100: '#F1F3F5',
    200: '#E9ECEF',
    300: '#DEE2E6',
    400: '#CED4DA',
    500: '#ADB5BD',
    600: '#868E96',
    700: '#495057',
    800: '#343A40',
    900: '#212529',
    950: '#111318',
  },

  // ── Accent (절제된 서브 컬러) ──
  accent: {
    gold: '#C9971E',
    goldLight: '#F5E6B8',
    success: '#2B8A3E',
    successLight: '#D3F9D8',
    warning: '#E67700',
    warningLight: '#FFF3BF',
    error: '#C92A2A',
    errorLight: '#FFE3E3',
    info: '#1971C2',
    infoLight: '#D0EBFF',
  },

  // ── Semantic ──
  semantic: {
    background: '#FFFFFF',
    backgroundAlt: '#F8F9FA',
    backgroundElevated: '#FFFFFF',
    surface: '#F1F3F5',
    border: '#DEE2E6',
    borderLight: '#E9ECEF',
    text: '#212529',
    textSecondary: '#495057',
    textTertiary: '#868E96',
    textInverse: '#FFFFFF',
    link: '#1A5BC4',
    linkHover: '#164EA8',
    focus: '#528DF3',
  },
} as const;

export type ColorToken = typeof colors;
