import { Dispatch, SetStateAction } from 'react';
import { IMusicPro } from '../../services/musicPro';

export interface ServicesProps {
  musicProInstance: IMusicPro;
}

export interface GlobalContextProps {
  services: ServicesProps;
  openModalContact: boolean;
  setOpenModalContact: Dispatch<SetStateAction<boolean>>;
  openModalMusicMenu: boolean;
  setOpenModalMusicMenu: Dispatch<SetStateAction<boolean>>;
}

export interface GlobalProviderProps {
  children: JSX.Element;
}
