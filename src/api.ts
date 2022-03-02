const API_KEY = "9db5794f039ec550f11e71750544ca9e";
const BASE_URL = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
