const express = require("express");
require("dotenv").config();
const morgan = require("morgan");

const UserRouter = require("./route/UserRoute/user_routes.route");
const AdminRouter = require("./route/AdminRoute/admin_routes.route");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("combined"));

// app.get("/", (req, res) => {
//   res.send("Hello Sujan Pradhan");
// });

// Routes
app.use("/", UserRouter);
app.use("/admin", AdminRouter);

// 404 errror handling

// app.use((req, res, next) => {
//   let error = new Error("404! Page Not Found 😒");
//   error.status = 404;
//   next(error);
// });

app.use((error, req, res, next) => {
  res.json({
    message: error.message
  });
});

module.exports = app;
