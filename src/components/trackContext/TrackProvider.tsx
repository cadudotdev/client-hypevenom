import { useState, useContext, useEffect } from 'react';
import { TrackContext } from './TrackContext';
import { TrackProps } from '../../types/services/musicPro';
import { GlobalContext } from '../globalContext/GlobalContext';

interface TrackProviderProps {
  children: JSX.Element;
}

export function TrackProvider({ children }: TrackProviderProps) {
  const [selectedTrack, setSelectedTrack] = useState<TrackProps | null>(null);
  const [allTracks, setAllTracks] = useState<TrackProps[]>([]);
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    const { musicProInstance } = globalContext.services;
    const tracks = musicProInstance.getAllTracks();

    setAllTracks(tracks);
    setSelectedTrack(tracks[0]);
  }, []);

  return (
    <TrackContext.Provider
      value={{
        allTracks,
        selectedTrack,
        setSelectedTrack,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
}
