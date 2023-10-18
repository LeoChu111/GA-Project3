require("dotenv").config();

const Station = require("../models/station");

// Station.findAll().then((res) => console.log(res));

// Station.findAllOwners().then((res) => console.log(res));

// const symbol = "CL";
// const apiKey = "DJetyvmCGk8sgJSdfsDQs4JZtf3I40Ez4Q23jjao";

// fetch(`https://api.futures-api.com/last?symbol=${symbol}`, {
//   method: "GET",
//   headers: {
//     "x-api-key": apiKey,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data.data[0].last));

Station.stationsWithinRadius(-31.918249, 115.848241).then((res) =>
  console.log(res.length)
);
