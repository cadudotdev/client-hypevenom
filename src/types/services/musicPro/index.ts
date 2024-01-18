export interface IMusicPro {
  baseUrl: string;
  getAllTracks: () => TrackProps[];
}

export interface ArtistsProps {
  name: string;
}

export interface TrackProps {
  id: string;
  title: string;
  artists: ArtistsProps[];
  releaseDate: number;
  iframLink: string;
}
