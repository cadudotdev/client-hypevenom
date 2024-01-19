import { MainContainer } from './style';
import { TrackProvider } from '../trackContext/TrackProvider';
import { MusicListBar } from '../musicListBar/MusicListBar';
import { MusicPro } from '../musicPro/MusicPro';

export function Main() {
  return (
    <TrackProvider>
      <MainContainer>
        <MusicListBar />
        <MusicPro />
      </MainContainer>
    </TrackProvider>
  );
}
