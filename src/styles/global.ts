import { css } from '@emotion/react';
import normalize from 'emotion-normalize';

export const globalStyle = css`
  ${normalize}

  body {
    @media only screen and (-webkit-device-pixel-ratio: 3) {
      padding-top: env(safe-area-inset-top);
      padding-bottom: env(safe-area-inset-bottom);
      padding-left: env(safe-area-inset-left);
      padding-right: env(safe-area-inset-right);
    }
  }

  ul {
    list-style: none;
  }
`;
