const {
  getHomepage,
  getAboutPage,
  getContactPage,
  getLoginController,
  getRegisterController,
  postUserRegister,
} = require("../../controller/UserController/users_controller.controller");

const userRouter = require("express").Router();

userRouter.get("/", getHomepage);
userRouter.get("/about", getAboutPage);
userRouter.get("/contact", getContactPage);
userRouter.get("/login", getLoginController);
userRouter.get("/register", getRegisterController);
userRouter.post("/postuser", postUserRegister);

module.exports = userRouter;
