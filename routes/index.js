import { Router } from "express";

import moviesRouter from "./movies/index.js";

const router = Router();

router.use("/movies", moviesRouter);

export default router;
