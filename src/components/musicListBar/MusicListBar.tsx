import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MusicListBarContainer, MenuContainer } from './style';

import { MusicSelector } from '../musicSelector/MusicSelector';
import { TrackContext } from '../trackContext/TrackContext';
import { Menu } from '@mui/icons-material';
import { TrackProps } from '../../types/services/musicPro';

export function MusicListBar() {
  const navigate = useNavigate();
  const trackContext = useContext(TrackContext);

  const handleOnClick = (id: string) => {
    const selectedTrack = trackContext.allTracks.find(
      (track) => id === track.id
    );
    trackContext.setSelectedTrack(selectedTrack as TrackProps);
    navigate('/');
  };

  return (
    <MusicListBarContainer>
      <MenuContainer className="track-menu-container">
        <Menu />
      </MenuContainer>
      {trackContext.allTracks.map(({ id, title, artists }, index) => (
        <MusicSelector
          onClick={() => handleOnClick(id)}
          key={id}
          {...{ trackId: id, title, artists, index }}
        />
      ))}
    </MusicListBarContainer>
  );
}
