const express = require("express");
const router = express.Router();
const Station = require("../models/station");

router.get("/owners", (req, res) => {
  Station.findAllOwners().then((owners) => res.json(owners));
});

router.get("/stats", (req, res) => {
  const result = Station.findStats();
  const totalOwners = Station.findAllOwners();
  const totalStations = Station.findAll();
 
  Promise.all([result, totalOwners, totalStations])
  .then(([ownersResult, totalOwnersResult, totalStationsResult]) => {
     const object = {
        owners: ownersResult,
        totalOwners: totalOwnersResult.length,
        totalStations: totalStationsResult.length
     };
     return res.json(object);
  })
 });
 
  
module.exports = router;
