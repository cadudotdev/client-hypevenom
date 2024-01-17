import { IMusicPro } from '../../services/musicPro';

export interface ServicesProps {
  musicProInstance: IMusicPro;
}

export interface GlobalContextProps {
  services: ServicesProps;
}

export interface GlobalProviderProps {
  children: JSX.Element;
}
