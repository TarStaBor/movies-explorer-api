const router = require("express").Router();
const {
  createMovieValidate,
  getMoviesValidate,
} = require("../middlewares/validation");

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require("../controllers/movies");

router.get("/", getMoviesValidate, getMovies);
router.post("/", createMovieValidate, createMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
