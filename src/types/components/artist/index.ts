export interface ArtistInfoProps {
  age: number;
  nationality: string;
}

export interface ArtistProps {
  id: string;
  name: string;
  artistName: string;
  imageLink: string;
  info: ArtistInfoProps;
  description: string;
}
