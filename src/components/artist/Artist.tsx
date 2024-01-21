import { MusicListBar } from '../musicListBar/MusicListBar';
import { TrackProvider } from '../trackContext/TrackProvider';
import { ArtistContainer, ArtistCardContainer } from './style';

import { ArtistQuery } from './ArtistQuery';

const artistId = '1';

export function Artist() {
  return (
    <TrackProvider>
      <>
        <MusicListBar />
        <ArtistContainer>
          <ArtistCardContainer>
            <ArtistQuery id={artistId} />
          </ArtistCardContainer>
        </ArtistContainer>
      </>
    </TrackProvider>
  );
}
