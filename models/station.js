const db = require("../db");

function findAll() {
  const sql = `SELECT * FROM stations WHERE id <= 400
  ORDER BY id;`;
  return db.query(sql).then((result) => result.rows);
}
const Station = {
  findAll,
};

module.exports = Station;
