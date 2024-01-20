import { createBrowserRouter } from 'react-router-dom';

import { Main } from '../main/Main';
import { DrawerAppBar } from '../DrawerAppBar';
import { Artist } from '../artist/Artist';

export const router = createBrowserRouter([
  {
    path: '/2',
    element: (
      <>
        <DrawerAppBar />
        <Main />
      </>
    ),
  },
  {
    path: '/',
    element: (
      <>
        <DrawerAppBar />
        <Artist />
      </>
    ),
  },
]);
