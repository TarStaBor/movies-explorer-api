const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const usersRouter = require("./users");
const moviesRouter = require("./movies");
const errorsRouter = require("./errors");
const auth = require("../middlewares/auth");
const {
  createUserValidate,
  loginValidate,
} = require("../middlewares/validation");

router.post("/signup", createUserValidate, createUser);
router.post("/signin", loginValidate, login);
router.use(auth);
router.use("/users", usersRouter);
router.use("/movies", moviesRouter);
router.use("*", errorsRouter);

module.exports = router;
