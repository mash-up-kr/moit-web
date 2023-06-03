import { extendTheme } from '@chakra-ui/react';
import { COLORS } from 'constants/theme';

export const chakraTheme = extendTheme({
  colors: { ...COLORS },
});

export const emotionTheme = { ...COLORS };
