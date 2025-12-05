import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler";
import * as PeopleService from "../services/people.service";

export const getPopularPeople = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await PeopleService.fetchPopularPeople();
    return res.json(data);
  },
);

export const getPersonDetails = asyncHandler(
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const data = await PeopleService.fetchPersonDetails(id);
    return res.json(data);
  },
);
