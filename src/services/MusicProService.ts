import { IMusicPro } from '../types/services/musicPro';

import allTracks from '../mocks/musicPro.json';

export class MusicProService implements IMusicPro {
  #baseUrl: string;

  constructor(baseUrl: string) {
    this.#baseUrl = baseUrl;
  }

  get baseUrl() {
    return this.#baseUrl;
  }

  set baseUrl(value: string) {
    this.#baseUrl = value;
  }

  getAllTracks() {
    return allTracks;
  }
}
