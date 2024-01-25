import { MusicListBar } from '../musicListBar/MusicListBar';
import { ArtistsQuery } from './ArtistsQuery';
import { ArtistsContainer } from './style';

export function Artists() {
  return (
    <>
      <MusicListBar />
      <ArtistsContainer>
        <ArtistsQuery />
      </ArtistsContainer>
    </>
  );
}
