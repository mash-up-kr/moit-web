import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import { globalStyle } from '@styles/global';
import theme from '@styles/theme';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={theme}>
        <Global styles={globalStyle} />
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
