import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HeaderProvider } from './components/headerContext/HeaderProvider.tsx';
import { GlobalStyle } from './style.ts';
import { GlobalProvider } from './components/globalContext/GlobalProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/router/Router.tsx';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <HeaderProvider>
      <GlobalProvider>
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </GlobalProvider>
    </HeaderProvider>
    <GlobalStyle />
  </>
);
