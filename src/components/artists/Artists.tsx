import { MusicListBar } from '../musicListBar/MusicListBar';
import { TrackProvider } from '../trackContext/TrackProvider';
import { ArtistsQuery } from './ArtistsQuery';
import { ArtistsContainer } from './style';

export function Artists() {
  return (
    <TrackProvider>
      <>
        <MusicListBar />
        <ArtistsContainer>
          <ArtistsQuery />
        </ArtistsContainer>
      </>
    </TrackProvider>
  );
}
