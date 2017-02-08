const router = require("express").Router();

// Define API routes.

router.route("/")
  .get( (req, res) => {
    res.send("I am the Bot server up and running.");
  });

module.exports = router;
