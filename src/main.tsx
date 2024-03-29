import { ChakraProvider } from '@chakra-ui/react';
import { Global, ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import globalStyle from '@styles/globalStyle';
import theme, { chakraTheme } from '@styles/theme';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <ChakraProvider theme={chakraTheme}>
      <Global styles={globalStyle} />
      <App />
    </ChakraProvider>
  </ThemeProvider>,
);
