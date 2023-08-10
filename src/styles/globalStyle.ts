import { css } from '@emotion/react';
import normalize from 'emotion-normalize';
import { colors } from './theme';

const globalStyle = css`
  ${normalize}

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: url('/fonts/Pretendard-Bold.woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src: url('/fonts/Pretendard-SemiBold.woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url('/fonts/Pretendard-Medium.woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url('/fonts/Pretendard-Regular.woff');
  }

  body {
    font-family: 'Pretendard';
    color: ${colors.text.general};
    -webkit-tap-highlight-color: transparent !important;
  }
`;

export default globalStyle;
