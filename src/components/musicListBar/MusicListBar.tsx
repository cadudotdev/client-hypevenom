import { useContext } from 'react';
import { MusicListBarContainer, MenuContainer } from './style';

import { MusicSelector } from '../musicSelector/MusicSelector';
import { TrackContext } from '../trackContext/TrackContext';
import { Menu } from '@mui/icons-material';

export function MusicListBar() {
  const trackContext = useContext(TrackContext);

  return (
    <MusicListBarContainer>
      <MenuContainer className="track-menu-container">
        <Menu />
      </MenuContainer>
      {trackContext.allTracks.map(({ id, title, artists }, index) => (
        <MusicSelector key={id} {...{ trackId: id, title, artists, index }} />
      ))}
    </MusicListBarContainer>
  );
}
