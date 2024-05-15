// Middleware if user is logged in
const withAuth = (req, res, next) => {
    // if user is not logged in, will redirect to login page
    if (!req.session.logged_in) {
      res.redirect("/login");
    } else {
      // if user is logged in, continue to next middleware or route
      next();
    }
  };
  
  // Exporting
  module.exports = withAuth;