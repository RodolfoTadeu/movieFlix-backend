import { Router } from "express";
import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  searchMovies,
  getMovieDetails,
} from "../controllers/movies.controller";

const router = Router();

// 🎬 Listagens
router.get("/popular", getPopularMovies);
router.get("/top-rated", getTopRatedMovies);
router.get("/now-playing", getNowPlayingMovies);
router.get("/upcoming", getUpcomingMovies);

// 🔍 Busca de filmes
router.get("/search", searchMovies);

// 📌 Detalhes
router.get("/:id", getMovieDetails);

export default router;
