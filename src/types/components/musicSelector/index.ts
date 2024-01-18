import { ArtistsProps } from '../../services/musicPro';

export interface MusicSelectorProps {
  trackId: string;
  title: string;
  artists: ArtistsProps[];
  index: number;
}
