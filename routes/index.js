const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const signupRoute = require("./signup");
const loginRoute = require("./login");
const facebookRoute = require("./facebook");
const lightRoute = require("./light");
const dataRoute = require("./sensorData");
const waterRoute = require("./water");

// API Routes
// router.use("/api", apiRoutes);

//HTML Routes
router.use(signupRoute);
router.use(loginRoute);
router.use(facebookRoute);
router.use(lightRoute);
router.use(dataRoute);
router.use(waterRoute);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
});

module.exports = router;
