const router = require("express").Router();
const { getUserMe, patchUser } = require("../controllers/users");
const { patchUserValidate } = require("../middlewares/validation");

router.get("/me", getUserMe);
router.patch("/me", patchUserValidate, patchUser);

module.exports = router;
