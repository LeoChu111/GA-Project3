require("dotenv").config();

const Station = require("../models/station");

// Station.findAll().then((res) => console.log(res));

Station.findAllOwners().then((res) => console.log(res));
