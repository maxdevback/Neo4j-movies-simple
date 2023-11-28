import { Router } from "express";
import MoviesController from "../controllers/movies/index.js";

const router = Router();

router.post("/", MoviesController.create);
router.get("/title/:title", MoviesController.getByTitle);
router.get("/budget/:budget", MoviesController.getByBudget);
router.get("/rating/:rating", MoviesController.getByRating);
router.get("/genre/:genre", MoviesController.getByGenre);

export default router;
