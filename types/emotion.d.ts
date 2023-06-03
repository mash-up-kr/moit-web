import '@emotion/react';
// import { colors, fonts } from '@styles/theme';
import { colors } from '@styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    // fonts: typeof fonts;
  }
}
