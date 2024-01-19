import ReactDOM from 'react-dom/client';
import { HeaderProvider } from './components/headerContext/HeaderProvider.tsx';
import { GlobalStyle } from './style.ts';
import { GlobalProvider } from './components/globalContext/GlobalProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/router/Router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <HeaderProvider>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </HeaderProvider>
    <GlobalStyle />
  </>
);
