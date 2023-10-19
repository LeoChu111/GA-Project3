const db = require("../db");

function findAll() {
  const sql = `SELECT * FROM stations
  ORDER BY id;`;
  return db.query(sql).then((result) => result.rows);
}
function findAllOwners() {
  const sql = `SELECT DISTINCT owner FROM stations;`;
  return db.query(sql).then((result) => result.rows);
}
function randomStation() {
  let randomNum = Math.floor(Math.random() * 5244) + 1;
  const sql = `SELECT * FROM stations WHERE id = ${randomNum};`;

  return db.query(sql).then((result) => result.rows[0]);
}
function findStats() {
  const sql = `
  SELECT owner, COUNT(*) as total
  FROM stations
  GROUP BY owner
  HAVING COUNT(*) > 1
  ORDER BY total DESC;
  `;
  return db.query(sql).then((result) => result.rows);
}
function stationsWithinRadius(lat, lng, rad) {
  const sql = `SELECT * FROM stations WHERE latitude BETWEEN ${lat} - ${rad} AND ${lat} + ${rad} 
  AND longitude BETWEEN ${lng} - ${rad} AND ${lng} + ${rad};`;
  return db.query(sql).then((result) => result.rows);
}
function nearestStation(lat, lng) {
  const sql = `SELECT
    id,
    name,
    address,
    owner,
    latitude,
    longitude,
           6371 *
        acos(
            cos(radians(${lat})) *
            cos(radians(latitude)) *
            cos(radians(longitude) -
            radians(${lng})) +
            sin(radians(${lat})) *
            sin(radians(latitude))
        
    ) AS distance
FROM
    stations
ORDER BY
    distance LIMIT 10;`;
  return db.query(sql).then((result) => result.rows);
}
function findBounds(ne, sw, nw, se) {}

const Station = {
  findAll,
  findAllOwners,
  randomStation,
  findStats,
  stationsWithinRadius,
  nearestStation,
};

module.exports = Station;
