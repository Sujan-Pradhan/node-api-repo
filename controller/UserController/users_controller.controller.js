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
  res.render("users/login",
    {
      title: "Login",
    });
};

exports.getRegisterController = (req, res) => {
    res.render("users/register",
      {
        title: "Register",
      })
  };