import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;

if (!API_KEY || !BASE_URL) {
  // don't throw at import time in case tests or other scripts run without env
}

export async function fetchFromTMDB(
  path: string,
  params: Record<string, string | number | undefined> = {},
) {
  if (!API_KEY || !BASE_URL)
    throw new Error(
      "TMDB API not configured. Set TMDB_API_KEY and TMDB_BASE_URL in .env",
    );

  const url = new URL(BASE_URL + path);
  // attach API key and language by default
  url.searchParams.set("api_key", String(API_KEY));
  url.searchParams.set(
    "language",
    params.language ? String(params.language) : "pt-BR",
  );

  // attach other params
  Object.entries(params).forEach(([k, v]) => {
    if (k === "language") return;
    if (v !== undefined) url.searchParams.set(k, String(v));
  });

  const res = await fetch(url.toString());
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`TMDB error: ${res.status} ${res.statusText} - ${text}`);
  }

  const data = await res.json();
  return data;
}
