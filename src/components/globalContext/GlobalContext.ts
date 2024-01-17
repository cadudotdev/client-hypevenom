import { createContext } from 'react';

import { GlobalContextProps } from '../../types/components/globalContext';

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);
