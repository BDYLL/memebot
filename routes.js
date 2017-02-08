const router = require("express").Router();

// Define API routes.

router.route("/")
  .get( (req, res) => {
    res.send("Welcome to Memetor bot API.");
  });

module.exports = router;
