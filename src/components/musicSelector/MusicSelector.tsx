import { useContext } from 'react';
import { MusicSelectorProps } from '../../types/components/musicSelector';
import { TrackContext } from '../trackContext/TrackContext';
import {
  ArtistsContainer,
  MusicSelectorContainer,
  TitleContainer,
} from './style';

export function MusicSelector({
  trackId,
  title,
  artists,
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
      <TitleContainer>{index + 1 + '# ' + title}</TitleContainer>
      <ArtistsContainer>
        {artists.map(({ name }, index) => (
          <span>{(index ? ', ' : ' ') + name}</span>
        ))}
      </ArtistsContainer>
    </MusicSelectorContainer>
  );
}
