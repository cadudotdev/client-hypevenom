import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HeaderProvider } from './components/headerContext/HeaderProvider.tsx';
import { GlobalStyle } from './style.ts';
import { GlobalProvider } from './components/globalContext/GlobalProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/router/Router.tsx';
import { TrackProvider } from './components/trackContext/TrackProvider.tsx';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <HeaderProvider>
      <GlobalProvider>
        <QueryClientProvider client={client}>
          <TrackProvider>
            <RouterProvider router={router} />
          </TrackProvider>
        </QueryClientProvider>
      </GlobalProvider>
    </HeaderProvider>
    <GlobalStyle />
  </>
);
