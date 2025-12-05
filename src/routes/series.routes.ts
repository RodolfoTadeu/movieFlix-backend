import { Router } from "express";
import {
  getPopularSeries,
  getTopRatedSeries,
  getAiringTodaySeries,
  getOnAirSeries,
  searchSeries,
  getSeriesDetails,
} from "../controllers/series.controller";

const router = Router();

// 🎬 Séries populares
router.get("/popular", getPopularSeries);

// ⭐ Séries mais bem avaliadas
router.get("/top-rated", getTopRatedSeries);

// 📺 Séries que estão passando hoje
router.get("/airing-today", getAiringTodaySeries);

// 📡 Séries que estão no ar
router.get("/on-air", getOnAirSeries);

// 🔍 Buscar séries
router.get("/search", searchSeries);

// 📌 Detalhes da série
router.get("/:id", getSeriesDetails);

export default router;
