import { MusicPro } from '../musicPro/MusicPro';
import { MainContainer } from './style';
import { MusicListBar } from '../musicListBar/MusicListBar';
import { TrackProvider } from '../trackContext/TrackProvider';

export function Main() {
  return (
    <TrackProvider>
      {
        <MainContainer>
          <MusicListBar />
          <MusicPro />
        </MainContainer>
      }
    </TrackProvider>
  );
}
