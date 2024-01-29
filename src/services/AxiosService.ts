import axios, { AxiosInstance } from 'axios';
import { AxiosServiceProps } from '../types/services/axios';

export class AxiosService implements AxiosServiceProps {
  #client: AxiosInstance;

  constructor() {
    this.#client = axios.create({
      baseURL: import.meta.env.VITE_DEFAULT_API_URL,
    });
  }

  get(url: string): unknown | unknown[] {
    return this.#client.get(url).then((res) => res.data);
  }

  post(url: string, data: unknown): unknown {
    return this.#client.post(url, data);
  }

  put(url: string, data: unknown): unknown {
    return this.#client.put(url, data);
  }

  delete(url: string): unknown {
    return this.#client.delete(url);
  }
}
