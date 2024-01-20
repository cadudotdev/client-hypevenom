import { ArtistInfo } from '../artistInfo/ArtistInfo';
import { MusicListBar } from '../musicListBar/MusicListBar';
import { TrackProvider } from '../trackContext/TrackProvider';
import {
  ArtistContainer,
  ArtistCardContainer,
  ArtistNameContainer,
  ArtistVisualContainer,
  ArtistInfoContainer,
  ArtistDescriptionContainer,
  ArtistImageContainer,
} from './style';

import artist from '../../mocks/artist.json';

export function Artist() {
  return (
    <TrackProvider>
      <>
        <MusicListBar />
        <ArtistContainer>
          <ArtistCardContainer>
            <ArtistNameContainer>
              <span>{`${artist.name}(${artist.arstistName})`}</span>
            </ArtistNameContainer>
            <ArtistVisualContainer>
              <ArtistImageContainer>
                <img src={artist.imageLink} alt={artist.arstistName} />
              </ArtistImageContainer>
              <ArtistInfoContainer>
                <ArtistInfo />
              </ArtistInfoContainer>
            </ArtistVisualContainer>
            <ArtistDescriptionContainer>
              <span>Descrição</span>
              <br />
              <span>{artist.description}</span>
            </ArtistDescriptionContainer>
          </ArtistCardContainer>
        </ArtistContainer>
      </>
    </TrackProvider>
  );
}
