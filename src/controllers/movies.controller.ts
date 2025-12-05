import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler";
import * as MoviesServices from "../services/movies.service";

export const getPopularMovies = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await MoviesServices.fetchPopularMovies();
    res.json(data);
  },
);

export const getTopRatedMovies = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await MoviesServices.fetchTopRatedMovies();
    res.json(data);
  },
);

export const getNowPlayingMovies = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await MoviesServices.fetchNowPlayingMovies();
    res.json(data);
  },
);

export const getUpcomingMovies = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await MoviesServices.fetchUpcomingMovies();
    res.json(data);
  },
);

export const searchMovies = asyncHandler(
  async (req: Request, res: Response) => {
    const { query } = req.query as { query: string };

    if (!query) {
      throw new Error("Você precisa enviar ?query=alguma-coisa");
    }

    const data = await MoviesServices.searchMovies(query);
    res.json(data);
  },
);

export const getMovieDetails = asyncHandler(
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await MoviesServices.fetchMovieDetails(id);
    res.json(data);
  },
);
