const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUserMe,
  patchUser,

} = require('../controllers/users');

// возвращает информацию о пользователе (email и имя)
router.get('/me', getUserMe);

// обновляет информацию о пользователе (email и имя)
router.patch('/me', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().min(2).max(30),
    name: Joi.string().required().min(2).max(30),
  }),
}), patchUser);

module.exports = router;
