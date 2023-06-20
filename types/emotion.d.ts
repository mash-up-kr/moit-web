import '@emotion/react';
import { Theme as ThemeModel } from '@styles/theme';

declare module '@emotion/react' {
  export type Theme = ThemeModel;
}
