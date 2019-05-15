var orm = require("../config/orm");

var burger = {
  getAll(cb) {
    orm.selectAll(res => {
      cb(res);
    });
  },
  add(data, cb) {
    orm.insertOne(data, res => {
      cb(res);
    });
  },
  update(data, cb) {
    orm.updateOne(data, res => {
      cb(res);
    });
  }
};

module.exports = burger;
