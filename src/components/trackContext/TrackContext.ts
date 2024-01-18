import { createContext, Dispatch, SetStateAction } from 'react';
import { TrackProps } from '../../types/services/musicPro';

interface TrackContextProps {
  allTracks: TrackProps[];
  selectedTrack: TrackProps | null;
  setSelectedTrack: Dispatch<SetStateAction<TrackProps | null>>;
}

export const TrackContext = createContext<TrackContextProps>(
  {} as TrackContextProps
);
