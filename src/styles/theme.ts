import { css } from '@emotion/react';

export const palette = {
  blue800: '#585FF0',
  blue700: '#646AF1',
  blue600: '#757AEC',
  blue500: '#7F84F1',
  blue400: '#9094ED',
  blue300: '#B2B5FA',
  blue200: '#D7D8FE',
  blue100: '#E9EAFF',

  gray900: '#191F28',
  gray800: '#4E5968',
  gray700: '#333',
  gray600: '#6B7684',
  gray500: '#8B95A1',
  gray400: '#B0B8C1',
  gray300: '#D1D6DB',
  gray200: '#E5E8EB',
  gray100: '#F2F4F6',
  gray50: '#F9FAFB',

  white: '#FFF',
  white_08: 'rgba(255, 255, 255, 0.8)',
  white_07: 'rgba(255, 255, 255, 0.7)',
  white_06: 'rgba(255, 255, 255, 0.6)',
  white_05: 'rgba(255, 255, 255, 0.5)',
  white_04: 'rgba(255, 255, 255, 0.4)',
  white_03: 'rgba(255, 255, 255, 0.3)',
  white_02: 'rgba(255, 255, 255, 0.2)',
  white_01: 'rgba(255, 255, 255, 0.1)',

  black: '#000',
} as const;

export const colors = {
  primary: {
    default: palette.blue800,
    disabled: palette.gray200,
    selected: palette.blue100,
  },
  background: {
    input: palette.gray50,
    white: palette.white,
    black: palette.gray900,
  },
  text: {
    general: palette.gray900,
    inputLabel: palette.gray700,
    placeholer: palette.gray500,
    white: palette.white,
  },
};

export const fonts = {
  h1: css`
    font-size: 36px;
    line-height: 50px;
  `,
  h2: css`
    font-size: 32px;
    line-height: 32px;
  `,
  h3: css`
    font-size: 24px;
    line-height: 36px;
  `,
  h4: css`
    font-size: 20px;
    line-height: 32px;
  `,
  h5: css`
    font-size: 18px;
    line-height: 27px;
  `,
  h6: css`
    font-size: 16px;
    line-height: 23px;
  `,
  body1: css`
    font-size: 16px;
    line-height: 23px;
  `,
  body2: css`
    font-size: 14px;
    line-height: 22px;
  `,
  body3: css`
    font-size: 14px;
    line-height: 22px;
  `,
  caption: css`
    font-size: 12px;
    line-height: 18px;
  `,
} as const;

const spacing = {
  xl: 60,
  lg: 30,
  md: 20,
  sm: 10,
  xs: 4,
};

const zIndex = {
  header: 999,
  bottomSheet: 777,
};

const theme = {
  spacing,
  palette,
  colors,
  fonts,
  zIndex,
} as const;

type PalleteType = typeof palette;
type FontType = typeof fonts;
export type PalleteValueType = PalleteType[keyof PalleteType];
export type FontKeyType = keyof FontType;
export type Theme = typeof theme;

export default theme;
