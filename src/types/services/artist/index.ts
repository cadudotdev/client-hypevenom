export interface ArtistServiceProps {
  getArtist(id: string): unknown;
  getArtists(): unknown;
  createArtist(data: unknown): unknown;
  updateArtist(id: string, data: unknown): unknown;
  deleteArtist(id: string): unknown;
}
