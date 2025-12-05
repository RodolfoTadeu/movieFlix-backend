import { fetchFromTMDB } from "../utils/fetchFromTMDB";

// ⭐ Séries populares
export function fetchPopularSeries(page = 1) {
  return fetchFromTMDB("/tv/popular", { page });
}

// ⭐ Séries mais bem avaliadas
export function fetchTopRatedSeries(page = 1) {
  return fetchFromTMDB("/tv/top_rated", { page });
}

// ⭐ Séries atualmente no ar
export function fetchOnAirSeries(page = 1) {
  return fetchFromTMDB("/tv/on_the_air", { page });
}

// ⭐ Séries que vão lançar
export function fetchAiringTodaySeries(page = 1) {
  return fetchFromTMDB("/tv/airing_today", { page });
}

// ⭐ Buscar séries
export function searchSeries(query: string, page = 1) {
  return fetchFromTMDB("/search/tv", { query, page });
}

// ⭐ Detalhes de uma série
export function fetchSeriesDetails(id: number) {
  return fetchFromTMDB(`/tv/${id}`);
}
