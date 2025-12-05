import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import * as PeopleController from "../controllers/people.controller";

const router = Router();

router.get("/popular", authMiddleware, PeopleController.getPopularPeople);

//detalhes da pessoa
router.get("/:id", authMiddleware, PeopleController.getPersonDetails);

export default router;
