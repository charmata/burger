var orm = require("../config/orm");

var burger = {
  getAll(cb) {
    cb(orm.selectAll());
  },
  add(data, cb) {
    cb(orm.insertOne(data));
  },
  update(data, cb) {
    cb(orm.updateOne(data));
  }
};

module.exports = burger;
