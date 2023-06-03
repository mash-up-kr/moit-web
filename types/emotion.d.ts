import '@emotion/react';
// import { colors, fonts } from '@styles/theme';
import { colors } from '@styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    // TODO: 공통 typo 정의
    // fonts: typeof fonts;
  }
}
