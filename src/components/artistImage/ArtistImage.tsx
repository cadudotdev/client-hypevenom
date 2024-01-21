import { CSSProperties } from 'react';
import { ArtistImageContainer } from './style';

interface ArstistImageProps {
  src: string;
  alt: string;
  style?: CSSProperties;
}

export function ArtistImage({ src, alt, style }: ArstistImageProps) {
  return (
    <ArtistImageContainer>
      <img src={src} alt={alt} style={style} />
    </ArtistImageContainer>
  );
}
