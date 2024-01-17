import { useState, useEffect } from 'react';
import {
  GlobalProviderProps,
  ServicesProps,
} from '../../types/components/globalContext';
import { GlobalContext } from './GlobalContext';
import { MusicProService } from '../../services/MusicProService';
import { IMusicPro } from '../../types/services/musicPro';

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [instancies, setInstancies] = useState<ServicesProps>();

  useEffect(() => {
    const musicProInstance: IMusicPro = new MusicProService(
      'http:localhost:3000'
    );
    setInstancies({
      musicProInstance,
    });
  }, []);

  return (
    <>
      {instancies ? (
        <GlobalContext.Provider
          value={{
            services: {
              musicProInstance: instancies.musicProInstance,
            },
          }}
        >
          {children}
        </GlobalContext.Provider>
      ) : null}
    </>
  );
}