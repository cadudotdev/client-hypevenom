import { useContext, useEffect, useState } from 'react';

import { MusicPro } from '../musicPro/MusicPro';
import { MainContainer } from './style';
import { GlobalContext } from '../globalContext/GlobalContext';
import { TrackProps } from '../../types/services/musicPro';

export function Main() {
  const [, setAllTracks] = useState<TrackProps[]>();
  const [currentTrack, setCurrentTrack] = useState<TrackProps>();
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    const { musicProInstance } = globalContext.services;
    const tracks = musicProInstance.getAllTracks();

    setAllTracks(tracks);
    setCurrentTrack(tracks[0]);
  }, []);

  return (
    <MainContainer>
      <MusicPro track={currentTrack ?? null} />
    </MainContainer>
  );
}
