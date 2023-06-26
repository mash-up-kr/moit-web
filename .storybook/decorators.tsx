import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import theme, { chakraTheme } from '../src/styles/theme';
import globalStyle from '../src/styles/globalStyle';
import { Decorator } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';

const withTheme: Decorator = (StoryFn) => {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={chakraTheme}>
        <Global styles={globalStyle} />
        <StoryFn />
      </ChakraProvider>
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme];
