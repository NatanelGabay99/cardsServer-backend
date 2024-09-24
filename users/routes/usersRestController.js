const express = require("express");
const {
  registerUser,
  getUser,
  getUsers,
  loginUser,
} = require("../models/usersAccessDataService");
const authenticatedUser = require("../../authentication/authService");
const { handleError } = require("../../utils/handleErrors");
const { validateRegistration, validateLogin } = require("../validation/usersValidationService");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const error = validateRegistration(req.body);
    if (error) return handleError(res, 400, `Joi Error: ${error}`);

    let user = await registerUser(req.body);
    res.send(user);
  } catch (error) {
    return handleError(res, 400, error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const error = validateLogin(req.body);
    if (error) return handleError(res, 400, `Joi Error: ${error}`);

    let { email, password } = req.body;
    const token = await loginUser(email, password);
    res.send(token);
  } catch (error) {
    return handleError(res, 400, error.message);
  }
});

router.get("/:id", authenticatedUser, async (req, res) => {
  try {
    const userInfo = req.user;
    const { id } = req.params;
    if (userInfo._id !== id && !userInfo.isAdmin) {
      return handleError(res, 403, "Authoruzation Error: Only the same user or admin can get the user")
    }
    let user = await getUser(id);
    res.send(user);
  } catch (error) {
    return handleError(res, 400, error.message);
  }
});

router.get("/", authenticatedUser, async (req, res) => {
  try {
    let users = await getUsers();
    res.send(users);
  } catch (error) {
    return handleError(res, 400, error.message);
  }
});

module.exports = router;
