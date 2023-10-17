const db = require("../db");

function findAll() {
  const sql = `SELECT * FROM stations WHERE id <= 400
  ORDER BY id;`;
  return db.query(sql).then((result) => result.rows);
}
function findAllOwners() {
  const sql = `SELECT DISTINCT owner FROM stations;`;
  return db.query(sql).then((result) => result.rows);
}

const Station = {
  findAll,
  findAllOwners,
};

module.exports = Station;
