import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>Hello, MO IT</QueryClientProvider>
  );
}

export default App;
