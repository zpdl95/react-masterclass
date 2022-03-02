export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/${format || "original"}/${id}`;
}
