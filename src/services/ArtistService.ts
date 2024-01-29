import { ArtistServiceProps } from '../types/services/artist';
import { AxiosServiceProps } from '../types/services/axios';
import { AxiosService } from './AxiosService';

export class ArtistService implements ArtistServiceProps {
  #axiosInstance: AxiosServiceProps;

  constructor() {
    this.#axiosInstance = new AxiosService();
  }

  getArtist(id: string): unknown {
    return this.#axiosInstance.get(`/artists/${id}`);
  }

  getArtists(): unknown {
    return this.#axiosInstance.get('/artists');
  }

  createArtist(data: unknown): unknown {
    return this.#axiosInstance.post('/artists', data);
  }

  updateArtist(id: string, data: unknown): unknown {
    return this.#axiosInstance.put(`/artists/${id}`, data);
  }

  deleteArtist(id: string): unknown {
    return this.#axiosInstance.delete(`/artists/${id}`);
  }
}
