const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userController");

const auth = require("../middleware/authmiddleware");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/current-user", auth , getCurrentUser);

module.exports = userRouter;
