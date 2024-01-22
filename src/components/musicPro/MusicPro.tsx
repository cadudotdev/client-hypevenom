import { useState, useEffect, useContext } from 'react';
import { MusicProContainer, IframeContainer } from './style';

import { Loader } from '../loader/Loader';
import { TrackContext } from '../trackContext/TrackContext';

export function MusicPro() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const trackContext = useContext(TrackContext);

  const handleOnLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setLoaded(false);
  }, [trackContext.selectedTrack]);

  return (
    <MusicProContainer>
      <Loader loaded={loaded} />
      {trackContext.selectedTrack ? (
        <IframeContainer
          style={{ display: loaded ? 'block' : 'none' }}
          onLoad={handleOnLoad}
          src={trackContext.selectedTrack.iframLink}
        />
      ) : null}
    </MusicProContainer>
  );
}
