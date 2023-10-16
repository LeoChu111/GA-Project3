require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const stationRouter = require("./routes/station_router");

app.use(express.static("clients"));
app.use(express.json());

app.use("/api/stations", stationRouter);

app.get("/", (req, res) => {
  res.send("Heeelo");
});

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
