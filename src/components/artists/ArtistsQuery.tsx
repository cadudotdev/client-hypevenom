import { CSSProperties } from 'react';
import { useQuery } from 'react-query';
// import axios from 'axios';

import { Loader } from '../loader/Loader';
import { ArtistsCardContainer } from './style';
import { ArtistNameContainer } from '../artist/style';
import { ArtistProps } from '../../types/components/artist';
import { ArtistImage } from '../artistImage/ArtistImage';

import { artists } from '../../../db.json';

export function ArtistsQuery() {
  const style: CSSProperties = { width: '50px', borderRadius: '10px 0 0 10px' };
  const { data, isLoading } = useQuery('artists', () => {
    // axios('http://localhost:8080/artists').then((res) => res.data)
    return artists;
  });

  return (
    <>
      {isLoading ? (
        <Loader loaded={false} />
      ) : (
        (data as unknown as ArtistProps[]).map(({ artistName, imageLink }) => (
          <ArtistsCardContainer>
            <ArtistImage src={imageLink} alt={artistName} style={style} />
            <ArtistNameContainer>{artistName}</ArtistNameContainer>
          </ArtistsCardContainer>
        ))
      )}
    </>
  );
}
