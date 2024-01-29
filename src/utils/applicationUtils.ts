export function blockSite() {
  return import.meta.env.VITE_BLOCK_SITE === 'true';
}
