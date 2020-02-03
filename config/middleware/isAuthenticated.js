// Checks if user is logged in, if not redirects them to the login page
module.exports = {
  authLogin: function(req, res, next) {
    if (req.session.user || req.user) {
      return next();
    }
    return res.redirect("/login");
  },
  authSignup: function(req, res, next) {
    console.log(req.session.user);
    if (req.session.user || req.user) {
      return next();
    }
    return res.redirect("/signup");
  }
}
