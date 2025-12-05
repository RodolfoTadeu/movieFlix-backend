import { Request, Response } from "express";
import * as SeriesService from "../services/series.service";
import { asyncHandler } from "../middlewares/asyncHandler";

export const getPopularSeries = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await SeriesService.fetchPopularSeries();
    return res.json(data);
  },
);

export const getTopRatedSeries = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await SeriesService.fetchTopRatedSeries();
    return res.json(data);
  },
);

export const getAiringTodaySeries = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await SeriesService.fetchAiringTodaySeries();
    return res.json(data);
  },
);

export const getOnAirSeries = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await SeriesService.fetchOnAirSeries();
    return res.json(data);
  },
);

export const searchSeries = asyncHandler(
  async (req: Request, res: Response) => {
    const query = req.query.query as string;
    if (!query)
      return res.status(400).json({ error: "Parâmetro 'query' é obrigatório" });

    const data = await SeriesService.searchSeries(query);
    return res.json(data);
  },
);

export const getSeriesDetails = asyncHandler(
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const data = await SeriesService.fetchSeriesDetails(id);
    return res.json(data);
  },
);
