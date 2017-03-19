const router = require("express").Router();

// Available platforms.
const facebook = require('./facebook');

// Platforms routes.
router.use("/facebook", facebook.webhook);

module.exports = router;