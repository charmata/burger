var connection = require("./connection");

var tableName = "burgers";

var orm = {
  selectAll(cb) {
    connection.query(`SELECT * FROM ${tableName}`, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne(data, cb) {
    connection.query(
      `INSERT INTO ${tableName} (burger_name, devoured) VALUES (?, ?)`,
      [data.burger_name, data.devoured],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
  updateOne(data, cb) {
    connection.query(`UPDATE ${tableName} SET devoured=? WHERE id=?`, [data.devoured, data.id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
