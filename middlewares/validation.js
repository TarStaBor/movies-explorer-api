const { celebrate, Joi } = require("celebrate");
const regExp = require("../regexp/regexp");

const createUserValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
});

const loginValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(8),
  }),
});

const getMoviesValidate = celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24).hex(),
  }),
});

const createMovieValidate = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(regExp),
    trailer: Joi.string().required().pattern(regExp),
    thumbnail: Joi.string().required().pattern(regExp),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const patchUserValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().min(2).email(),
    name: Joi.string().required().min(2).max(30),
  }),
});

module.exports = {
  createUserValidate,
  loginValidate,
  createMovieValidate,
  getMoviesValidate,
  patchUserValidate,
};
