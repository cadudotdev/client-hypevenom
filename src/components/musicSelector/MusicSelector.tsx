import { useContext } from 'react';
import { MusicSelectorProps } from '../../types/components/musicSelector';
import {
  MusicSelectorContainer,
  TitleContainer,
  ArtistsContainer,
} from './style';
import { TrackContext } from '../trackContext/TrackContext';

export function MusicSelector({
  trackId,
  title,
  artists,
  index,
}: MusicSelectorProps) {
  const trackContext = useContext(TrackContext);
  const handleSelectTrack = (id: string) => {
    const track =
      trackContext.allTracks.find((track) => track.id === id) ?? null;

    trackContext.setSelectedTrack(track);
  };

  return (
    <MusicSelectorContainer onClick={() => handleSelectTrack(trackId)}>
      <TitleContainer>{index + 1 + ' ' + title}</TitleContainer>
      <ArtistsContainer>
        {artists.map(({ name }, index) => (
          <span>{(index ? ', ' : ' ') + name}</span>
        ))}
      </ArtistsContainer>
    </MusicSelectorContainer>
  );
}
