import { Router } from "express";
import { register, login } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware"; // 🔥 IMPORT CORRETO

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/me", authMiddleware, (req, res) => {
  return res.json({ user: req.user });
});

export default router;
