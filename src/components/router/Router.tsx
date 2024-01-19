import { createBrowserRouter } from 'react-router-dom';

import { RouterContainer } from './style';
import { Main } from '../main/Main';
import { DrawerAppBar } from '../DrawerAppBar';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RouterContainer>
        <DrawerAppBar />
        <Main />
      </RouterContainer>
    ),
  },
  {
    path: '/torta',
    element: <div>About</div>,
  },
]);
