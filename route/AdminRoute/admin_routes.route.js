const { getAdmin, getArticle, getCategory } = require("../../controller/AdminController/admin_controllers.controller");

const adminRouter = require("express").Router();



adminRouter.get("/", getAdmin)
adminRouter.get("/articles", getArticle)
adminRouter.get("/categories", getCategory)


module.exports = adminRouter;