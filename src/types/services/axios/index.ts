export interface AxiosServiceProps {
  get(url: string): unknown | unknown[];
  post(url: string, data: unknown): unknown;
  put(url: string, data: unknown): unknown;
  delete(url: string): unknown;
}
