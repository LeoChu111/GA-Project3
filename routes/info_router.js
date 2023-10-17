const express = require("express");
const router = express.Router();
const Station = require("../models/station");

router.get("/owners", (req, res) => {
  Station.findAllOwners().then((owners) => res.json(owners));
});

module.exports = router;
