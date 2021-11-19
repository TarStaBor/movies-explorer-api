const router = require('express').Router();
const { createMovieValidate, getMoviesValidate } = require('../middlewares/validation');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

// возвращает все сохранённые пользователем фильмы
router.get('/', getMoviesValidate, getMovies);

// создаёт фильм с переданными в теле
router.post('/', createMovieValidate, createMovie);

// удаляет сохранённый фильм по id
router.delete('/:movieId', deleteMovie);

module.exports = router;
