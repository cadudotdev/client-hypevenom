import { useContext } from 'react';
import { MusicSelectorProps } from '../../types/components/musicSelector';
import { TrackContext } from '../trackContext/TrackContext';
import {
  ArtistsContainer,
  MusicSelectorContainer,
  MusicSelectorContentContainer,
  TitleContainer,
} from './style';

export function MusicSelector({
  trackId,
  title,
  artists,
  imageLink,
  index,
  onClick,
}: MusicSelectorProps) {
  const trackContext = useContext(TrackContext);
  const handleSelectTrack = (id: string) => {
    const track =
      trackContext.allTracks.find((track) => track.id === id) ?? null;

    trackContext.setSelectedTrack(track);
  };

  return (
    <MusicSelectorContainer
      onClick={() => (handleSelectTrack(trackId), onClick())}
    >
      <div>
        <img src={imageLink} alt={title} />
      </div>
      <MusicSelectorContentContainer>
        <TitleContainer>{index + 1 + '# ' + title}</TitleContainer>
        <ArtistsContainer>
          {artists.map(({ name }, index) => (
            <span>{(index ? ', ' : ' ') + name}</span>
          ))}
        </ArtistsContainer>
      </MusicSelectorContentContainer>
    </MusicSelectorContainer>
  );
}
