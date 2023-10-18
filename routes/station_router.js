const express = require("express");
const router = express.Router();
const Station = require("../models/station");

router.get("/all", (req, res) => {
  Station.findAll().then((stations) => res.json(stations));
});

router.get("/random", (req, res) => {
  Station.randomStation().then((stations) => res.json(stations));
});

router.get("/within", (req, res) => {
  const lat = req.body.lat;
  const lng = req.body.lng;
  const radius = req.body.rad;

  Station.stationsWithinRadius(
    parseFloat(lat),
    parseFloat(lng),
    parseFloat(radius)
  ).then((stations) => res.json(stations));
});

router.get("/nearest", (req, res) => {
  const lat = parseFloat(req.query.lat);
  const lng = parseFloat(req.query.lng);

  Station.nearestStation(lat, lng).then((stations) => res.json(stations));
});

module.exports = router;
