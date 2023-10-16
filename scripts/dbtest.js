require("dotenv").config();

const Station = require("../models/station");

Station.findAll().then((res) => console.log(res));
