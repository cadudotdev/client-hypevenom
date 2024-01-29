import { useState, useEffect } from 'react';
import {
  GlobalProviderProps,
  ServicesProps,
} from '../../types/components/globalContext';
import { GlobalContext } from './GlobalContext';
import { MusicProService } from '../../services/MusicProService';
import { IMusicPro } from '../../types/services/musicPro';
import { ArtistService } from '../../services/ArtistService';

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [instancies, setInstancies] = useState<ServicesProps>();
  const [openModalContact, setOpenModalContact] = useState<boolean>(false);
  const [openModalMusicMenu, setOpenModalMusicMenu] = useState<boolean>(false);

  useEffect(() => {
    const musicProInstance: IMusicPro = new MusicProService(
      'http:localhost:3000'
    );

    setInstancies({
      musicProInstance,
      artistInstance: new ArtistService(),
    });
  }, []);

  return (
    <>
      {instancies ? (
        <GlobalContext.Provider
          value={{
            services: {
              musicProInstance: instancies.musicProInstance,
              artistInstance: instancies.artistInstance,
            },
            openModalContact,
            setOpenModalContact,
            openModalMusicMenu,
            setOpenModalMusicMenu,
          }}
        >
          {children}
        </GlobalContext.Provider>
      ) : null}
    </>
  );
}
