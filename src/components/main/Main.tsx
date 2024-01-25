import { MusicListBar } from '../musicListBar/MusicListBar';
import { MusicPro } from '../musicPro/MusicPro';
import { MainContainer } from './style';

export function Main() {
  return (
    <MainContainer>
      <MusicListBar />
      <MusicPro />
    </MainContainer>
  );
}
