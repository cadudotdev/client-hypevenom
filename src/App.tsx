import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { TrackProvider } from './components/trackContext/TrackProvider';

import { ModalContact } from './components/modal/ModalContact.tsx';
import { router } from './components/router/Router.tsx';
import { ModalMusicMenu } from './components/modal/ModalMusicMenu.tsx';

const client = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={client}>
      <TrackProvider>
        <>
          <RouterProvider router={router} />
          <ModalContact />
          <ModalMusicMenu />
        </>
      </TrackProvider>
    </QueryClientProvider>
  );
}
