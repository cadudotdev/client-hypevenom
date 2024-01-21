import axios from 'axios';
import { useQuery } from 'react-query';
import { ArtistInfo } from '../artistInfo/ArtistInfo';
import {
  ArtistDescriptionContainer,
  ArtistImageContainer,
  ArtistInfoContainer,
  ArtistNameContainer,
  ArtistVisualContainer,
} from './style';
import { Loader } from '../loader/Loader';

interface ArtistQueryProps {
  id: string;
}

export function ArtistQuery({ id }: ArtistQueryProps) {
  const { data, isLoading } = useQuery('artists', () =>
    axios(`http://localhost:8080/artists/${id}`).then((res) => res.data)
  );

  if (isLoading) {
    return <Loader loaded={false} />;
  }

  return (
    <>
      <ArtistNameContainer>
        <span>{`${data.name}(${data.artistName})`}</span>
      </ArtistNameContainer>
      <ArtistVisualContainer>
        <ArtistImageContainer>
          <img src={data.imageLink} alt={data.artistName} />
        </ArtistImageContainer>
        <ArtistInfoContainer>
          <ArtistInfo />
        </ArtistInfoContainer>
      </ArtistVisualContainer>
      <ArtistDescriptionContainer>
        <span>Descrição</span>
        <br />
        <span>{data.description}</span>
      </ArtistDescriptionContainer>
    </>
  );
}
