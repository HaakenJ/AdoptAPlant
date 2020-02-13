const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const signupRoute = require("./signup");
const loginRoute = require("./login");
const lightRoute = require("./light");

// API Routes
// router.use("/api", apiRoutes);

//HTML Routes
router.use(signupRoute);
router.use(loginRoute);
router.use(lightRoute);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
