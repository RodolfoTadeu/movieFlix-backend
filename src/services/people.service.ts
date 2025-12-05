import { fetchFromTMDB } from "../utils/fetchFromTMDB";

// ⭐ Pessoas populares
export function fetchPopularPeople(page = 1) {
  return fetchFromTMDB("/person/popular", { page });
}

// ⭐ Detalhes da pessoa
export function fetchPersonDetails(id: number) {
  return fetchFromTMDB(`/person/${id}`);
}
