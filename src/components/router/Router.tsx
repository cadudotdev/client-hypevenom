import { createBrowserRouter } from 'react-router-dom';

import { Main } from '../main/Main';
import { DrawerAppBar } from '../DrawerAppBar';
import { Artist } from '../artist/Artist';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <DrawerAppBar />
        <Main />
      </>
    ),
  },
  {
    path: '/artist',
    element: (
      <>
        <DrawerAppBar />
        <Artist />
      </>
    ),
  },
]);
