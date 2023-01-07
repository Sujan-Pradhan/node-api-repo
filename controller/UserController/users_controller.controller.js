const User = require("../../model/UserModel/userModel.model");
import bcrypt from "bcrypt";
// exports.getHomepage = (req,res)=>{
//     res.render("pages/index");
// }
exports.getHomepage = (req, res) => {
  res.render("index");
};

exports.getAboutPage = (req, res) => {
  res.json("Hello About page!!");
};
exports.getContactPage = (req, res) => {
  res.json("Hello Contact page!!");
};

exports.getLoginController = (req, res) => {
  res.render("users/login", {
    title: "Login",
  });
};

exports.getRegisterController = (req, res) => {
  res.render("users/register", {
    title: "Register",
  });
};

exports.postUserRegister = (req, res) => {
  const salt = bcrypt.genSaltSync(12);

  const { fullName, address, phone, email, password } = req.body;
  let secPass = bcrypt.hashSync(password, salt);
  console.log("test");
  
  const user = new User({
    fullName,
    address,
    phone,
    email,
    password: secPass,
    salt: salt,
  });

   user.save((err) => {
    if (err) {
      res.json({ message: err.message, type: "danger" });
    } else {
      req.session.message = {
        type: "success",
        message: "User registered successfully!",
      };
      res.redirect("/login");
    }
  });
};
