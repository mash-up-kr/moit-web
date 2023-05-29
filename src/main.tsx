import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import normalize from 'emotion-normalize';
import ReactDOM from 'react-dom/client';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Global styles={normalize} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
