import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes";
import moviesRoutes from "./routes/movies.routes";
import seriesRoutes from "./routes/series.routes";
import peopleRoutes from "./routes/people.routes";
import { notFoundMiddleware } from "./middlewares/notFoundMiddleware";

import { errorMiddleware } from "./middlewares/error.middleware";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/movies", moviesRoutes);
app.use("/series", seriesRoutes);
app.use("/people", peopleRoutes);
app.use(notFoundMiddleware);

app.use(errorMiddleware);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
