const express = require("express");
const auth = require("../../controllers/auth");
const { validateBody } = require("../../middlewares");
const { authentication } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../schemas/user");
const router = express.Router();

router.post("/register", validateBody(registerSchema), auth.register);

router.post("/login", validateBody(loginSchema), auth.login);

router.post("/logout", authentication, auth.logout);

router.get("/current", authentication, auth.current);

module.exports = router;
