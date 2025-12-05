import { Request, Response, NextFunction } from "express";

interface ApiError extends Error {
  status?: number;
}

export const errorMiddleware = (
  err: ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error("🔥 Erro capturado:", err);

  const status = err.status || 500;
  const message = err.message || "Erro interno no servidor";

  return res.status(status).json({
    success: false,
    error: message,
  });
};
