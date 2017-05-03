const router = require("express").Router();

// Available platforms.
const facebook = require('./facebook');
const slack = require('./slack');

// Platforms routes.
router.use("/facebook", facebook.webhook);

module.exports = router;