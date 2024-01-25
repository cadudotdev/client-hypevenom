import { MusicListBar } from '../musicListBar/MusicListBar';
import { ArtistCardContainer, ArtistContainer } from './style';

import { ArtistQuery } from './ArtistQuery';

const artistId = '1';

export function Artist() {
  return (
    <>
      <MusicListBar />
      <ArtistContainer>
        <ArtistCardContainer>
          <ArtistQuery id={artistId} />
        </ArtistCardContainer>
      </ArtistContainer>
    </>
  );
}
