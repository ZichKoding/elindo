const router = require("express").Router();
let parts = require("../Models/parts-schema");

router.route("/").get(async (req, res) => {
  parts
    .find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
