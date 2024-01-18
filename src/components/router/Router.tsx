import { MusicListBar } from '../musicListBar/MusicListBar';
import { MusicPro } from '../musicPro/MusicPro';
import { RouterContainer } from './style';

export function Router() {
  return (
    <RouterContainer>
      <MusicListBar />
      <MusicPro />
    </RouterContainer>
  );
}
