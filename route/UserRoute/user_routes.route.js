const {
  getHomepage,
  getAboutPage,
  getContactPage,
  getLoginController,
  getRegisterController,
} = require("../../controller/UserController/users_controller.controller");

const userRouter = require("express").Router();

userRouter.get("/", getHomepage);
userRouter.get("/about", getAboutPage);
userRouter.get("/contact", getContactPage);
userRouter.get("/login", getLoginController);
userRouter.get("/register", getRegisterController);

module.exports = userRouter;
