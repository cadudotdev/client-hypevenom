import { MusicListBar } from '../musicListBar/MusicListBar';
import {
  AboutContainer,
  AboutContentContainer,
  AboutHeaderContainer,
} from './style';

export function About() {
  return (
    <AboutContainer>
      <>
        <MusicListBar />
        <AboutHeaderContainer>
          <span>Sobre nós</span>
        </AboutHeaderContainer>
        <AboutContentContainer>
          <div>
            <span>
              HypeVenom surgiu com o proposito para inovar a cena fonografica,
              juntando varios artistas com um proposito, revolucionar.
            </span>
          </div>
        </AboutContentContainer>
      </>
    </AboutContainer>
  );
}
