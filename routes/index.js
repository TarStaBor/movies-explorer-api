const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const { createUserValidate, loginValidate } = require('../middlewares/validation');

// регистрация
router.post('/signup', createUserValidate, createUser);

// авторизация
router.post('/signin', loginValidate, login);

router.use(auth);

// пользователи
router.use('/users', usersRouter);

// фильмы
router.use('/movies', moviesRouter);

module.exports = router;
