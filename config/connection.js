var mysql = require("mysql");
require("dotenv").config();
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "burgers_db"
  });
}

connection.connect(err => {
  if (err) throw err;
  console.log("Connected to db");
});

module.exports = connection;
