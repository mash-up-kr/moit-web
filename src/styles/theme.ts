import { extendTheme } from '@chakra-ui/react';
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

  orange200: '#FF8A00',

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

  modal_dim: 'rgba(24, 24, 24, 0.5)',
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
    font-weight: 700;
  `,
  h2: css`
    font-size: 32px;
    line-height: 32px;
    font-weight: 700;
  `,
  h3: css`
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
  `,
  h4: css`
    font-size: 20px;
    line-height: 32px;
    font-weight: 600;
  `,
  h5: css`
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
  `,
  h6: css`
    font-size: 16px;
    line-height: 23px;
    font-weight: 600;
  `,
  p1: css`
    font-size: 16px;
    line-height: 23px;
    font-weight: 500;
  `,
  p2: css`
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
  `,
  p3: css`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  `,
  caption: css`
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
  `,
} as const;

const space = {
  xl: '60px',
  lg: '30px',
  md: '20px',
  sm: '10px',
  xs: '4px',
};

const theme = {
  space,
  palette,
  colors,
  fonts,
} as const;

type PalleteType = typeof palette;
type FontType = typeof fonts;
export type PalleteValueType = PalleteType[keyof PalleteType];
export type FontKeyType = keyof FontType;
export type Theme = typeof theme;

export const chakraTheme = extendTheme({
  colors: { ...colors },
  space: { ...space },
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: theme.colors.primary.default,
        },
        track: {
          bg: theme.palette.gray200,
        },
      },
    },
  },
});

export default theme;
