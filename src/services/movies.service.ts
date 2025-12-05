import { fetchFromTMDB } from "../utils/fetchFromTMDB";

// ⭐ Filmes populares
export function fetchPopularMovies(page = 1) {
  return fetchFromTMDB("/movie/popular", { page });
}

// ⭐ Filmes mais bem avaliados
export function fetchTopRatedMovies(page = 1) {
  return fetchFromTMDB("/movie/top_rated", { page });
}

// ⭐ Filmes que vão lançar
export function fetchUpcomingMovies(page = 1) {
  return fetchFromTMDB("/movie/upcoming", { page });
}

// ⭐ Filmes em cartaz
export function fetchNowPlayingMovies(page = 1) {
  return fetchFromTMDB("/movie/now_playing", { page });
}

// ⭐ Buscar filmes por texto
export function searchMovies(query: string, page = 1) {
  return fetchFromTMDB("/search/movie", { query, page });
}

// ⭐ Detalhes de um filme
export function fetchMovieDetails(id: number) {
  return fetchFromTMDB(`/movie/${id}`);
}
