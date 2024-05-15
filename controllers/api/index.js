// imports the modules and routes
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
// set up routes
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
// export router
module.exports = router;