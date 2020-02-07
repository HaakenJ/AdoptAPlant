const router = require("express").Router();
const piRoutes = require("./piRoutes");

// Raspberry Pi Routes
router.use("/pi", piRoutes);

module.exports = router;
