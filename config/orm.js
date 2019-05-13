var connection = require("./connection");

var tableName = "burgers";

var orm = {
  selectAll(callback) {
    connection.query(`SELECT * FROM ${tableName}`, (err, result) => {
      callback(result);
    });
  },
  insertOne(data, callback) {
    connection.query(
      `INSERT INTO ${tableName} (burger_name, devoured) VALUES (?, ?)`,
      [data.burger_name, data.devoured],
      (err, result) => {
        callback(result);
      }
    );
  },
  updateOne(data, callback) {
    connection.query(`UPDATE ${tableName} SET devoured=? WHERE id=?`, [data.devoured, data.id], (err, result) => {
      callback(result);
    });
  }
};

module.exports = orm;
