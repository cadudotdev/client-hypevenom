import { createBrowserRouter } from 'react-router-dom';

import { DrawerAppBar } from '../DrawerAppBar';
import { About } from '../about/About';
import { Artist } from '../artist/Artist';
import { Artists } from '../artists/Artists';
import { HeaderSeparator } from '../headerSeparator/HeaderSeparator';
import { Main } from '../main/Main';
import { Development } from '../development/Development';

const devMode = true;

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        {devMode ? (
          <Development />
        ) : (
          <>
            <DrawerAppBar />
            <HeaderSeparator />
            <Main />
          </>
        )}
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
  {
    path: '/artists',
    element: (
      <>
        <DrawerAppBar />
        <HeaderSeparator />
        <Artists />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <DrawerAppBar />
        <HeaderSeparator />
        <About />
      </>
    ),
  },
]);
