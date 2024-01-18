import { MainContainer } from './style';
import { TrackProvider } from '../trackContext/TrackProvider';
import { Router } from '../router/Router';

export function Main() {
  return (
    <TrackProvider>
      {
        <MainContainer>
          <Router />
        </MainContainer>
      }
    </TrackProvider>
  );
}
