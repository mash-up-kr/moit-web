import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, ThemeProvider, css } from '@emotion/react';
import normalize from 'emotion-normalize';
import ReactDOM from 'react-dom/client';
import { theme } from '@styles/theme';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={theme}>
        <Global
          styles={css`
            ${normalize}
            body {
              @media only screen and (-webkit-device-pixel-ratio: 3) {
                padding-top: env(safe-area-inset-top);
                padding-bottom: env(safe-area-inset-bottom);
                padding-left: env(safe-area-inset-left);
                padding-right: env(safe-area-inset-right);
              }
            }
          `}
        />
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
