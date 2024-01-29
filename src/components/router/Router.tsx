import { createBrowserRouter } from 'react-router-dom';

import { DrawerAppBar } from '../DrawerAppBar';
import { About } from '../about/About';
import { Artist } from '../artist/Artist';
import { Artists } from '../artists/Artists';
import { HeaderSeparator } from '../headerSeparator/HeaderSeparator';
import { Main } from '../main/Main';
import { Development } from '../development/Development';
import { blockSite } from '../../utils/applicationUtils';

export const router = createBrowserRouter(
  blockSite()
    ? [
        {
          path: '/',
          element: <Development />,
        },
      ]
    : [
        {
          path: '/',
          element: (
            <>
              {blockSite() ? (
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
      ]
);
