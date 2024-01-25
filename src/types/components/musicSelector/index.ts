import { ArtistsProps } from '../../services/musicPro';

export interface MusicSelectorProps {
  trackId: string;
  title: string;
  artists: ArtistsProps[];
  imageLink: string;
  index: number;
  onClick: () => void;
}
