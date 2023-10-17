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
  let randomNum = Math.floor(Math.random() * 5244) + 1 ;
  const sql = `SELECT * FROM stations WHERE id = ${randomNum};`

  return db.query(sql).then((result) => result.rows[0]);
}

const Station = {
  findAll,
  findAllOwners,
  randomStation
};

module.exports = Station;
