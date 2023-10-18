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
function findStats() {
  const sql = `
  SELECT owner, COUNT(*) as total
  FROM stations
  GROUP BY owner
  HAVING COUNT(*) > 1;
  `
  return db.query(sql).then((result => result.rows));
}

const Station = {
  findAll,
  findAllOwners,
  randomStation,
  findStats
};

module.exports = Station;
