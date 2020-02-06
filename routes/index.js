const router = require("express").Router();
const bookRoutes = require("./piRoutes");

// Raspberry Pi Routes
router.use("/pi", bookRoutes);

module.exports = router;
